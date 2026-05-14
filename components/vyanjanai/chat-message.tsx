import { ChatMessage } from "@/types/chat";

import { motion } from "framer-motion";

import { Sparkles } from "lucide-react";

import ReactMarkdown from "react-markdown";

interface Props {
  message: ChatMessage;
}

export default function ChatMessageBubble({
  message,
}: Props) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[85%]
          rounded-3xl
          px-5
          py-4
          ${
            isUser
              ? "bg-orange-500 text-black"
              : "bg-zinc-900 border border-zinc-800 text-white"
          }
        `}
      >
        {!isUser && (
          <div className="flex items-center gap-2 mb-4 text-orange-400 text-sm">
            <Sparkles className="w-4 h-4" />
            <span>VyanjanAI</span>
          </div>
        )}

        {isUser ? (
          <p className="whitespace-pre-wrap leading-relaxed">
            {message.content}
          </p>
        ) : (
          <div
  className="
    prose
    prose-invert
    prose-zinc
    max-w-none

    prose-headings:text-orange-400
    prose-h1:text-3xl
    prose-h2:text-xl
    prose-p:text-zinc-200
    prose-strong:text-white
    prose-li:text-zinc-300
    prose-li:marker:text-orange-400
  "
>

            <ReactMarkdown>
              {message.content}
            </ReactMarkdown>

          </div>
        )}
      </div>
    </motion.div>
  );
}