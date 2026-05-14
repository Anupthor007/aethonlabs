"use client";

import { useEffect, useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  LoaderIcon,
  SendIcon,
  LogOutIcon,
  MenuIcon,
  ChevronLeftIcon,
} from "lucide-react";

import { useRouter } from "next/navigation";

import ChatMessageBubble from "@/components/vyanjanai/chat-message";

import SuggestedIngredients from "@/components/vyanjanai/suggested-ingredients";

import ChatSidebar from "@/components/vyanjanai/chat-sidebar";

import { ChatMessage } from "@/types/chat";

import { Conversation } from "@/types/conversation";

import { supabase } from "@/lib/supabase/client";

export function AnimatedAIChat() {
  const router = useRouter();

  const [showSidebar, setShowSidebar] = useState(false);

  const [input, setInput] = useState("");

  const [isTyping, setIsTyping] =
    useState(false);

  const [messages, setMessages] = useState<
    ChatMessage[]
  >([]);

  const [userId, setUserId] =
    useState<string>("");

  const [conversations, setConversations] =
    useState<Conversation[]>([]);

  const [
    activeConversationId,
    setActiveConversationId,
  ] = useState("");

  const bottomRef =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  useEffect(() => {
    const loadInitialData = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) return;

      setUserId(session.user.id);

      const { data: conversationData } =
        await supabase
          .from("conversations")
          .select("*")
          .eq("user_id", session.user.id)
          .order("created_at", {
            ascending: false,
          });

      if (
        conversationData &&
        conversationData.length > 0
      ) {
        setConversations(conversationData);

        setActiveConversationId(
          conversationData[0].id
        );
      } else {
        const { data: newConversation } =
          await supabase
            .from("conversations")
            .insert({
              user_id: session.user.id,
              title: "New Chat",
            })
            .select()
            .single();

        if (newConversation) {
          setConversations([
            newConversation,
          ]);

          setActiveConversationId(
            newConversation.id
          );
        }
      }
    };

    loadInitialData();
  }, []);

  useEffect(() => {
    const loadConversationMessages =
      async () => {
        if (
          !activeConversationId ||
          !userId
        )
          return;

        const { data } = await supabase
          .from("messages")
          .select("*")
          .eq("user_id", userId)
          .eq(
            "conversation_id",
            activeConversationId
          )
          .order("created_at", {
            ascending: true,
          });

        if (data && data.length > 0) {
          setMessages(
            data.map((msg) => ({
              id: msg.id,
              role: msg.role,
              content: msg.content,
            }))
          );
        } else {
          setMessages([
            {
              id: "welcome",
              role: "assistant",
              content:
                "Namaste 🙏\n\nI am VyanjanAI.\n\nTell me ingredients you have, and I’ll create unique Indian recipes for you.",
            },
          ]);
        }
      };

    loadConversationMessages();
  }, [activeConversationId, userId]);

  const saveMessage = async (
    role: string,
    content: string
  ) => {
    if (!userId || !activeConversationId)
      return;

    await supabase.from("messages").insert({
      user_id: userId,
      role,
      content,
      conversation_id:
        activeConversationId,
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();

    router.push(
      "/products/vyanjanai/login"
    );
  };

  const handleNewChat = async () => {
    if (!userId) return;

    const { data } = await supabase
      .from("conversations")
      .insert({
        user_id: userId,
        title: "New Chat",
      })
      .select()
      .single();

    if (!data) return;

    setConversations((prev) => [
      data,
      ...prev,
    ]);

    setActiveConversationId(data.id);

    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Namaste 🙏\n\nTell me ingredients you have.",
      },
    ]);
  };

  const handleDeleteConversation =
    async (conversationId: string) => {
      await supabase
        .from("conversations")
        .delete()
        .eq("id", conversationId);

      const updatedConversations =
        conversations.filter(
          (conv) =>
            conv.id !== conversationId
        );

      setConversations(
        updatedConversations
      );

      if (
        activeConversationId ===
        conversationId
      ) {
        if (
          updatedConversations.length > 0
        ) {
          setActiveConversationId(
            updatedConversations[0].id
          );
        } else {
          handleNewChat();
        }
      }
    };

  const handleSend = async () => {
    if (!input.trim()) return;

    const currentInput = input;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: currentInput,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    await saveMessage(
      "user",
      currentInput
    );

    if (
      messages.length <= 1 &&
      conversations.length > 0
    ) {
      const generatedTitle =
        currentInput.length > 30
          ? currentInput.slice(0, 30) +
            "..."
          : currentInput;

      await supabase
        .from("conversations")
        .update({
          title: generatedTitle,
        })
        .eq(
          "id",
          activeConversationId
        );

      setConversations((prev) =>
        prev.map((conv) =>
          conv.id ===
          activeConversationId
            ? {
                ...conv,
                title: generatedTitle,
              }
            : conv
        )
      );
    }

    setInput("");

    setIsTyping(true);

    try {
      const response = await fetch(
        "/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            message: currentInput,
          }),
        }
      );

      const data = await response.json();

      const aiContent =
        data.reply ||
        "Something went wrong.";

      const aiMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: aiContent,
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

      await saveMessage(
        "assistant",
        aiContent
      );
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Failed to connect with VyanjanAI.",
      };

      setMessages((prev) => [
        ...prev,
        errorMessage,
      ]);
    }

    setIsTyping(false);
  };

  return (
    <div className="h-screen bg-black text-white flex">

      {/* Sidebar for md+ screens */}
      <div className="hidden md:flex">
        <ChatSidebar
          conversations={conversations}
          activeConversationId={
            activeConversationId
          }
          onSelectConversation={(id) =>
            setActiveConversationId(id)
          }
          onNewChat={handleNewChat}
          onDeleteConversation={
            handleDeleteConversation
          }
        />
      </div>

      {/* Mobile sidebar overlay */}
      {showSidebar && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowSidebar(false)} />

          <div className="relative w-full h-full p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Chats</h2>
              <button
                onClick={() => setShowSidebar(false)}
                className="p-2 rounded-md bg-zinc-900 border border-zinc-800"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="h-[calc(100vh-88px)] overflow-y-auto">
              <ChatSidebar
                conversations={conversations}
                activeConversationId={
                  activeConversationId
                }
                onSelectConversation={(id) => {
                  setActiveConversationId(id);
                  setShowSidebar(false);
                }}
                onNewChat={handleNewChat}
                onDeleteConversation={
                  handleDeleteConversation
                }
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col">

        <div className="border-b border-zinc-900 px-6 py-5">

            <div className="max-w-5xl mx-auto flex items-center justify-between">

              {/* Mobile menu button */}
              <div className="md:hidden mr-2">
                <button
                  onClick={() => setShowSidebar(true)}
                  className="p-2 rounded-md bg-zinc-900 border border-zinc-800"
                >
                  <MenuIcon className="w-5 h-5" />
                </button>
              </div>
            <div>
              <h1 className="text-2xl font-bold">
                VyanjanAI
              </h1>

              <p className="text-sm text-zinc-500 mt-1">
                Indian AI Recipe Laboratory
              </p>
            </div>

            </div>

            <div className="max-w-5xl mx-auto flex items-center justify-between mt-3 md:mt-0">
              <div />

              <button
              onClick={handleLogout}
              className="
                flex
                items-center
                gap-2
                bg-zinc-900
                border
                border-zinc-800
                hover:border-orange-500
                transition-all
                px-4
                py-2
                rounded-2xl
                text-sm
              "
            >
              <LogOutIcon className="w-4 h-4" />

              <span>Logout</span>
            </button>

            </div>

        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8">

          <div className="max-w-5xl mx-auto space-y-6">

            {messages.map((message) => (
              <ChatMessageBubble
                key={message.id}
                message={message}
              />
            ))}

            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 text-zinc-400"
                >
                  <LoaderIcon className="w-4 h-4 animate-spin" />

                  <span>
                    VyanjanAI is preparing recipes...
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <div ref={bottomRef} />

          </div>

        </div>

        <div className="border-t border-zinc-900 p-6">

          <div className="max-w-5xl mx-auto">

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-4">

              <textarea
                value={input}
                onChange={(e) =>
                  setInput(e.target.value)
                }
                placeholder="Try: Paneer, curd and rice..."
                className="
                  w-full
                  bg-transparent
                  outline-none
                  resize-none
                  min-h-[80px]
                  text-white
                  placeholder:text-zinc-500
                "
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    !e.shiftKey
                  ) {
                    e.preventDefault();

                    handleSend();
                  }
                }}
              />

              <div className="flex justify-between items-center mt-4">

                <div className="text-sm text-zinc-500">
                  Unique Indian recipes only
                </div>

                <button
                  onClick={handleSend}
                  disabled={
                    !input.trim() ||
                    isTyping
                  }
                  className="
                    bg-orange-500
                    hover:bg-orange-400
                    transition-colors
                    text-black
                    px-5
                    py-3
                    rounded-2xl
                    flex
                    items-center
                    gap-2
                    disabled:opacity-50
                  "
                >
                  <SendIcon className="w-4 h-4" />

                  <span>Send</span>
                </button>

              </div>

              <SuggestedIngredients
                onSelect={(value) =>
                  setInput(value)
                }
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}