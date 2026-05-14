"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { AnimatedAIChat } from "@/components/vyanjanai/animated-ai-chat";

import { supabase } from "@/lib/supabase/client";

export default function VyanjanAIChatPage() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push(
          "/products/vyanjanai/login"
        );

        return;
      }

      setLoading(false);
    };

    checkUser();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Loading VyanjanAI...
      </div>
    );
  }

  return <AnimatedAIChat />;
}