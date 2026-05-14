"use client";

import { useEffect, useRef, useCallback } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  SendIcon,
  LoaderIcon,
  Sparkles,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

interface UseAutoResizeTextareaProps {
  minHeight: number;
  maxHeight?: number;
}

function useAutoResizeTextarea({
  minHeight,
  maxHeight,
}: UseAutoResizeTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(
    (reset?: boolean) => {
      const textarea = textareaRef.current;

      if (!textarea) return;

      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }

      textarea.style.height = `${minHeight}px`;

      const newHeight = Math.max(
        minHeight,
        Math.min(
          textarea.scrollHeight,
          maxHeight ?? Number.POSITIVE_INFINITY
        )
      );

      textarea.style.height = `${newHeight}px`;
    },
    [minHeight, maxHeight]
  );

  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = `${minHeight}px`;
    }
  }, [minHeight]);

  return { textareaRef, adjustHeight };
}

export function AnimatedAIChat() {
  const [value, setValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const { textareaRef, adjustHeight } =
    useAutoResizeTextarea({
      minHeight: 60,
      maxHeight: 200,
    });

  const handleSendMessage = () => {
    if (!value.trim()) return;

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setValue("");
      adjustHeight(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 relative overflow-hidden">

      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-3xl"
      >
        <div className="text-center mb-10">

          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-orange-400" />

            <span className="text-orange-400 text-sm tracking-widest uppercase">
              Indian AI Recipe Laboratory
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold">
            VyanjanAI
          </h1>

          <p className="mt-4 text-zinc-400 text-lg">
            Discover unique Indian recipes from your ingredients
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-3xl p-4 shadow-2xl">

          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              adjustHeight();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder="Try: Paneer, rice and curd..."
            className={cn(
              "w-full resize-none bg-transparent outline-none border-none",
              "text-white placeholder:text-zinc-500",
              "text-lg p-4 min-h-[80px]"
            )}
          />

          <div className="flex items-center justify-between mt-4">

            <div className="text-sm text-zinc-500">
              Indian recipes only
            </div>

            <button
              onClick={handleSendMessage}
              disabled={!value.trim() || isTyping}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-2xl transition-all",
                value.trim()
                  ? "bg-orange-500 hover:bg-orange-400 text-black"
                  : "bg-zinc-800 text-zinc-500"
              )}
            >
              {isTyping ? (
                <LoaderIcon className="w-4 h-4 animate-spin" />
              ) : (
                <SendIcon className="w-4 h-4" />
              )}

              <span>Send</span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 text-center text-zinc-400"
            >
              VyanjanAI is preparing recipes...
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}