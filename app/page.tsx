"use client";

import { useState } from "react";

import Link from "next/link";

import Hero from "@/components/landing/animated-shader-hero";

import ConstructionModal from "@/components/ConstructionModal";

export default function HomePage() {
  const [showModal, setShowModal] =
    useState(false);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      <Hero
        headline={{
          line1: "Autonomous",
          line2: "Intelligence",
        }}
        subtitle="Engineered With Global Context"
        buttons={{
          primary: {
            text: "Enter Laboratory",
            onClick: () =>
              setShowModal(true),
          },
          secondary: {
            text: "Explore Systems",
            onClick: () =>
              setShowModal(true),
          },
        }}
        className="bg-gradient-to-b from-black to-slate-900"
      />

      {/* Featured Product Section */}

      <section className="relative z-20 -mt-24 px-6 pb-32">

        <div className="max-w-6xl mx-auto">

          <div className="mb-10">

            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-300 backdrop-blur-xl">
              ✨ Live AI Product
            </div>

          </div>

          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-white/10
              bg-gradient-to-br
              from-zinc-950
              via-zinc-900
              to-black
              p-10
              md:p-14
              shadow-[0_30px_80px_rgba(0,0,0,0.6)]
            "
          >

            <div className="absolute inset-0">

              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px]" />

              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[120px]" />

            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

              <div>

                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs text-orange-300 mb-6">
                  AI Cooking Assistant
                </div>

                <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white">

                  VyanjanAI

                </h2>

                <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-xl">

                  An AI-powered Indian recipe assistant that creates
                  unique dishes instantly using your ingredients.
                  Designed for modern Indian kitchens with intelligent
                  recipe generation and conversational cooking support.

                </p>

                <div className="flex flex-wrap gap-4 mt-10">

                  <Link
                    href="/products/vyanjanai"
                    className="
                      bg-orange-500
                      hover:bg-orange-400
                      transition-colors
                      text-black
                      px-7
                      py-4
                      rounded-2xl
                      font-medium
                      text-lg
                    "
                  >
                    Launch Product
                  </Link>

                  <div
                    className="
                      border
                      border-zinc-800
                      bg-zinc-900/60
                      backdrop-blur-xl
                      px-6
                      py-4
                      rounded-2xl
                      text-zinc-300
                      text-sm
                      flex
                      items-center
                    "
                  >
                    Indian AI Recipe System
                  </div>

                </div>

              </div>

              <div className="relative">

                <div
                  className="
                    rounded-[32px]
                    border
                    border-white/10
                    bg-black/60
                    backdrop-blur-2xl
                    p-6
                    shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                  "
                >

                  <div className="flex items-center gap-2 mb-6">

                    <div className="w-3 h-3 rounded-full bg-red-500" />

                    <div className="w-3 h-3 rounded-full bg-yellow-500" />

                    <div className="w-3 h-3 rounded-full bg-green-500" />

                  </div>

                  <div className="space-y-4">

                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-zinc-300 text-sm">
                      Paneer, corn and curd
                    </div>

                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5">

                      <div className="text-orange-300 text-sm mb-3">
                        VyanjanAI
                      </div>

                      <h3 className="text-white font-semibold text-lg">
                        Smoky Corn Paneer Tikka Bowl
                      </h3>

                      <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                        A creamy North-Indian inspired grilled paneer bowl
                        with roasted corn, hung curd dressing, and spiced
                        mint masala rice.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Navbar Overlay */}

      <header className="fixed top-0 z-50 w-full px-2 pt-2 sm:px-6 sm:pt-4 pointer-events-none">

        <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full border border-slate-100/20 bg-[linear-gradient(130deg,rgba(255,255,255,0.2),rgba(255,255,255,0.05)_35%,rgba(15,23,42,0.25)_100%)] px-2 py-2 shadow-[0_20px_45px_rgba(2,8,23,0.4)] backdrop-blur-3xl sm:gap-3 sm:px-3 sm:py-2.5 md:px-6 md:py-4">

          <div className="pointer-events-none absolute inset-0 rounded-full border border-white/20" />

          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent" />

          {/* Logo */}

          <div className="shrink text-[8px] font-semibold tracking-[0.12em] text-slate-100 sm:text-[10px] md:text-[15px] md:tracking-[0.34em]">

            AETHON LABS

          </div>

          {/* Right Side Buttons */}

          <div className="flex items-center gap-1 ml-auto sm:gap-2">

            <a
              href="https://www.linkedin.com/in/anup-thorat-44a079286/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative shrink-0 rounded-full border border-cyan-100/30 bg-cyan-300/15 px-2 py-1 text-[10px] font-medium text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition hover:bg-cyan-300/25 sm:px-3 sm:py-1.5 sm:text-[11px] md:px-5 md:py-2 md:text-sm flex items-center gap-0.5 sm:gap-1"
            >
              <span className="text-sm sm:text-base">
                🔗
              </span>

              <span className="hidden sm:inline">
                Contact Us
              </span>

            </a>

          </div>

        </div>

      </header>

      {/* Footer */}

      <footer className="fixed bottom-0 z-40 w-full px-2 py-2 text-center text-[10px] text-slate-400 sm:px-4 sm:py-3 sm:text-xs md:text-sm">

        <p>
          Design and developed by{" "}

          <span className="text-slate-200 font-semibold">
            Anup Thorat
          </span>

        </p>

      </footer>

      <ConstructionModal
        open={showModal}
        setOpen={setShowModal}
      />

    </div>
  );
}