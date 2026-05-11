"use client";

import { useState } from "react";
import Hero from "@/components/ui/animated-shader-hero";
import ConstructionModal from "@/components/ConstructionModal";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative min-h-screen bg-black">
      <Hero
        headline={{
          line1: "Autonomous",
          line2: "Intelligence"
        }}
        subtitle="Engineered With Global Context"
        buttons={{
          primary: {
            text: "Enter Laboratory",
            onClick: () => setShowModal(true)
          },
          secondary: {
            text: "Explore Systems",
            onClick: () => setShowModal(true)
          }
        }}
        className="bg-gradient-to-b from-black to-slate-900"
      />

      {/* Navbar Overlay */}
      <header className="fixed top-0 z-50 w-full px-2 pt-2 sm:px-6 sm:pt-4 pointer-events-none">
        <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full border border-slate-100/20 bg-[linear-gradient(130deg,rgba(255,255,255,0.2),rgba(255,255,255,0.05)_35%,rgba(15,23,42,0.25)_100%)] px-2 py-2 shadow-[0_20px_45px_rgba(2,8,23,0.4)] backdrop-blur-3xl sm:gap-3 sm:px-3 sm:py-2.5 md:px-6 md:py-4">
          <div className="pointer-events-none absolute inset-0 rounded-full border border-white/20" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent" />
          
          {/* Logo */}
          <div className="shrink text-[8px] font-semibold tracking-[0.12em] text-slate-100 sm:text-[10px] md:text-[15px] md:tracking-[0.34em]">
            AETHON LABS
          </div>

          {/* Center Buttons */}
          <div className="hidden sm:flex items-center gap-2">
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-1 ml-auto sm:gap-2">
            <a
              href="https://www.linkedin.com/in/anup-thorat-44a079286/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative shrink-0 rounded-full border border-cyan-100/30 bg-cyan-300/15 px-2 py-1 text-[10px] font-medium text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition hover:bg-cyan-300/25 sm:px-3 sm:py-1.5 sm:text-[11px] md:px-5 md:py-2 md:text-sm flex items-center gap-0.5 sm:gap-1"
            >
              <span className="text-sm sm:text-base">🔗</span>
              <span className="hidden sm:inline">Contact Us</span>
            </a>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="fixed bottom-0 z-40 w-full px-2 py-2 text-center text-[10px] text-slate-400 sm:px-4 sm:py-3 sm:text-xs md:text-sm">
        <p>Design and developed by <span className="text-slate-200 font-semibold">Anup Thorat</span></p>
      </footer>

      <ConstructionModal open={showModal} setOpen={setShowModal} />
    </div>
  );
}
