import { ChatMessage } from "@/types/chat";

import { motion } from "framer-motion";

import { Sparkles } from "lucide-react";

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
          max-w-[80%]
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
          <div className="flex items-center gap-2 mb-2 text-orange-400 text-sm">
            <Sparkles className="w-4 h-4" />
            <span>VyanjanAI</span>
          </div>
        )}

        <p className="whitespace-pre-wrap leading-relaxed">
          {message.content}
        </p>
      </div>
    </motion.div>
  );
}