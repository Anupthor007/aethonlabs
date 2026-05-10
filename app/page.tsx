"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import ConstructionModal from "@/components/ConstructionModal";

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-[#050505] text-white">
      <ConstructionModal open={open} setOpen={setOpen} />

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 z-40 w-full px-4 pt-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-2xl sm:px-6 sm:py-4">
          <div className="text-[12px] font-semibold tracking-[0.28em] text-white sm:text-[15px] sm:tracking-[0.35em]">
            AETHON LABS
          </div>

          <nav className="hidden items-center gap-6 md:flex lg:gap-10">
            <button
              onClick={handleClick}
              className="text-sm font-medium text-sky-300 transition hover:text-white"
            >
              Systems
            </button>

            <button
              onClick={handleClick}
              className="text-sm font-medium text-violet-300 transition hover:text-white"
            >
              Experiments
            </button>

            <button
              onClick={handleClick}
              className="text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              Research
            </button>

            <a
              href="https://www.linkedin.com/in/anup-thorat-44a079286/"
              target="_blank"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10 sm:px-5 sm:text-sm"
            >
              Connect Us
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[100dvh] items-center justify-center px-4 pb-10 pt-28 sm:px-6 sm:pt-32">
        
        {/* orb */}
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute hidden h-[320px] w-[320px] rounded-full bg-white/[0.07] blur-3xl sm:block md:h-[500px] md:w-[500px]"
        />

        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)", y: 40 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] px-5 py-12 backdrop-blur-3xl sm:rounded-[42px] sm:px-10 md:max-w-6xl md:px-16 md:py-24"
        >
          {/* subtle gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]" />

          <div className="relative z-10 text-center">
            
            {/* Typewriter */}
            <div className="mb-8 inline-flex max-w-full rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-center text-xs font-medium text-zinc-300 sm:mb-10 sm:px-6 sm:py-3 sm:text-sm">
              <TypeAnimation
                sequence={[
                  "Initializing Neural Systems...",
                  2000,
                  "Connecting Autonomous Agents...",
                  2000,
                  "Building Future Interfaces...",
                  2000,
                ]}
                wrapper="span"
                speed={65}
                repeat={Infinity}
              />
            </div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mx-auto max-w-4xl text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[92px]"
            >
              <span className="block whitespace-nowrap">Autonomous Intelligence</span>
              <span className="mt-1 block sm:mt-2 md:mt-3">Designed For The Next Era.</span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:mt-10 sm:text-lg sm:leading-[1.8] md:text-xl"
            >
              Aethon Labs builds intelligent systems, experimental interfaces,
              and next-generation digital experiences engineered for the future.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:mt-14 sm:flex-row sm:items-center sm:gap-5"
            >
              <button
                onClick={handleClick}
                className="w-full rounded-2xl bg-white px-7 py-4 text-base font-semibold text-black shadow-2xl shadow-white/10 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] sm:w-auto sm:px-9 sm:text-lg"
              >
                Enter Laboratory
              </button>

              <button
                onClick={handleClick}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:bg-white/[0.08] active:scale-[0.98] sm:w-auto sm:px-9 sm:text-lg"
              >
                Explore Systems
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 md:flex-row">
          
          <div>
            <h3 className="text-lg font-semibold text-white">
              Aethon Labs
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              Designed & Developed by Anup Thorat
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/anup-thorat-44a079286/"
            target="_blank"
            className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/[0.08]"
          >
            Connect on LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}