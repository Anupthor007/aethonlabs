"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { LoaderIcon } from "lucide-react";

import { supabase } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);

    setError("");

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      setError(error.message);

      setLoading(false);

      return;
    }

    router.push("/products/vyanjanai/chat");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">

        <div className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8">

          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold">
              Welcome Back
            </h1>

            <p className="text-zinc-400 mt-3">
              Login to VyanjanAI
            </p>
          </div>

          <div className="space-y-5">

            <div>
              <label className="text-sm text-zinc-400 block mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="
                  w-full
                  bg-zinc-900
                  border
                  border-zinc-800
                  rounded-2xl
                  px-4
                  py-3
                  outline-none
                  focus:border-orange-500
                "
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400 block mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                className="
                  w-full
                  bg-zinc-900
                  border
                  border-zinc-800
                  rounded-2xl
                  px-4
                  py-3
                  outline-none
                  focus:border-orange-500
                "
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm">
                {error}
              </p>
            )}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="
                w-full
                bg-orange-500
                hover:bg-orange-400
                transition-colors
                text-black
                py-3
                rounded-2xl
                font-medium
                flex
                items-center
                justify-center
                gap-2
              "
            >
              {loading && (
                <LoaderIcon className="w-4 h-4 animate-spin" />
              )}

              <span>Login</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}