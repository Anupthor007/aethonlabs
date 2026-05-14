"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Orbit, Sparkles } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

import ConstructionModal from "@/components/ConstructionModal";
import { DotGlobeHero } from "@/components/ui/globe-hero";

export default function DotGlobeHeroDemo() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <DotGlobeHero
      rotationSpeed={0.0038}
      globeRadius={1.08}
      className="relative min-h-[100dvh] bg-[radial-gradient(circle_at_20%_10%,#12355f_0%,#0b1221_42%,#070b13_72%,#05070d_100%)] text-white"
    >
      <ConstructionModal open={open} setOpen={setOpen} />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,10,18,0.15),rgba(6,10,18,0.78))]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_24%_16%,rgba(125,211,252,0.22),transparent_40%),radial-gradient(circle_at_76%_84%,rgba(251,191,36,0.17),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(148,163,184,0.32)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.32)_1px,transparent_1px)] [background-size:56px_56px]" />

      <header className="fixed top-0 z-30 w-full px-3 pt-3 sm:px-6 sm:pt-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-slate-100/20 bg-[linear-gradient(130deg,rgba(255,255,255,0.2),rgba(255,255,255,0.05)_35%,rgba(15,23,42,0.25)_100%)] px-3 py-2.5 shadow-[0_20px_45px_rgba(2,8,23,0.4)] backdrop-blur-3xl sm:px-6 sm:py-4">
          <div className="pointer-events-none absolute inset-0 rounded-full border border-white/20" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent" />
          <div className="shrink text-[10px] font-semibold tracking-[0.18em] text-slate-100 sm:text-[15px] sm:tracking-[0.34em]">
            AETHON LABS
          </div>
          <button
            onClick={handleClick}
            className="relative shrink-0 rounded-full border border-cyan-100/30 bg-cyan-300/15 px-3 py-1.5 text-[11px] font-medium text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition hover:bg-cyan-300/25 sm:px-5 sm:py-2 sm:text-sm"
          >
            Connect Us
          </button>
        </div>
      </header>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-100/25 bg-[linear-gradient(130deg,rgba(34,211,238,0.28),rgba(34,211,238,0.08)_45%,rgba(15,23,42,0.32)_100%)] px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(8,47,73,0.35)] backdrop-blur-xl sm:mb-8 sm:px-4 sm:py-2 sm:text-sm sm:tracking-[0.2em]"
        >
          <Orbit className="h-4 w-4" />
          GLOBAL SYSTEMS LIVE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.1 }}
          className="max-w-5xl text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-slate-50 sm:text-6xl sm:leading-[1.04] sm:tracking-[-0.04em] lg:text-8xl"
        >
          <span className="block text-slate-200/85">Autonomous Intelligence</span>
          <span className="block bg-[linear-gradient(110deg,#ecfeff_0%,#67e8f9_42%,#fbbf24_100%)] bg-clip-text text-transparent">
            Engineered With Global Context
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.35 }}
          className="mt-6 max-w-3xl text-sm leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8"
        >
          Aethon Labs builds intelligent systems, experimental interfaces, and resilient digital products. The live globe represents distributed capabilities designed for modern, global-scale operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.52 }}
          className="mt-7 flex w-full max-w-md items-center rounded-2xl border border-slate-100/20 bg-[linear-gradient(120deg,rgba(255,255,255,0.2),rgba(148,163,184,0.08)_42%,rgba(15,23,42,0.32)_100%)] px-4 py-2 text-xs text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_12px_28px_rgba(2,6,23,0.35)] backdrop-blur-2xl sm:mt-8 sm:inline-flex sm:w-auto sm:max-w-full sm:rounded-full sm:px-6 sm:py-3 sm:text-sm"
        >
          <TypeAnimation
            sequence={[
              "Initializing distributed intelligence...",
              1800,
              "Orchestrating autonomous agents...",
              1800,
              "Monitoring production systems...",
              1800,
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:gap-4"
        >
          <button
            onClick={handleClick}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#22d3ee,#0ea5e9)] px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_14px_30px_rgba(34,211,238,0.35)] transition hover:brightness-110 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
          >
            Enter Laboratory
            <ArrowRight className="h-5 w-5" />
          </button>
          <button
            onClick={handleClick}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-amber-100/30 bg-[linear-gradient(125deg,rgba(251,191,36,0.32),rgba(251,191,36,0.1)_48%,rgba(15,23,42,0.28)_100%)] px-5 py-3.5 text-sm font-semibold text-amber-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_10px_28px_rgba(120,53,15,0.35)] backdrop-blur-2xl transition hover:bg-amber-300/25 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
          >
            <Sparkles className="h-5 w-5" />
            Explore Systems
          </button>
        </motion.div>
      </div>

      <footer className="relative z-10 w-full px-4 pb-10 sm:px-6 sm:pb-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 rounded-2xl border border-slate-100/20 bg-[linear-gradient(130deg,rgba(255,255,255,0.16),rgba(148,163,184,0.08)_45%,rgba(15,23,42,0.3)_100%)] px-4 py-3.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_14px_30px_rgba(2,6,23,0.35)] backdrop-blur-2xl sm:items-start sm:px-5 sm:py-4 sm:text-left">
          <h3 className="text-base font-semibold text-white sm:text-lg">Aethon Labs</h3>
          <p className="text-xs text-slate-400 sm:text-sm">Designed & Developed by Anup Thorat</p>
        </div>
      </footer>
    </DotGlobeHero>
  );
}
