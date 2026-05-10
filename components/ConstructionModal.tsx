"use client";

import * as Dialog from "@radix-ui/react-dialog";

export default function ConstructionModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,42rem)] max-h-[calc(100dvh-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overflow-x-hidden rounded-[28px] border border-white/10 bg-[#0b0b0c]/95 p-6 shadow-2xl backdrop-blur-3xl sm:rounded-[40px] sm:p-10">
          
          {/* required for radix */}
          <Dialog.Title className="sr-only">
            Aethon Labs Under Construction
          </Dialog.Title>

          <Dialog.Description className="sr-only">
            A modal explaining that the public site is still under construction.
          </Dialog.Description>

          {/* glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

          <div className="relative z-10">
            <div className="mb-6 inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-5 py-2 text-sm font-medium tracking-wide text-sky-200">
              AETHON LABS
            </div>

            <h2 className="max-w-xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Systems Currently Under Construction
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg">
              We’re currently engineering the next generation of autonomous
              intelligence systems. Public modules are still being deployed for
              the initial launch experience.
            </p>

            <button
              onClick={() => setOpen(false)}
              className="mt-8 w-full rounded-2xl border border-white/10 bg-white px-6 py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] sm:mt-10 sm:text-lg"
            >
              Continue Exploring
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}