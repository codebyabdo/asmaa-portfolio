"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";

const STORAGE_KEY = "asmaa-intro-loader";
const MIN_DURATION = 1200;

export default function IntroLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (sessionStorage.getItem(STORAGE_KEY)) {
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, "true");

    let cancelled = false;

    async function initialize() {
      setLoading(true);

      try {
        if ("fonts" in document) {
          await document.fonts.ready;
        }

        await new Promise((resolve) => setTimeout(resolve, MIN_DURATION));
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    initialize();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <m.div
          role="status"
          aria-live="polite"
          aria-busy="true"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: {
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-luxury-charcoal text-white"
        >
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <m.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/10 blur-3xl"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo */}
            <m.div
              initial={{
                opacity: 0,
                y: 24,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-5"
            >
              <span className="h-px w-12 bg-luxury-gold" />

              <span className="font-serif text-[clamp(2rem,5vw,3rem)] italic tracking-tight">
                Asmaa Adel
              </span>

              <span className="h-px w-12 bg-luxury-gold" />
            </m.div>

            {/* Loading Bar */}
            <div className="mt-10 h-[2px] w-56 overflow-hidden rounded-full bg-white/10">
              <m.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.25,
                  repeat: 2,
                  ease: "easeInOut",
                }}
                className="h-full w-full bg-luxury-gold"
                style={{
                  willChange: "transform",
                  transform: "translate3d(0,0,0)",
                }}
              />
            </div>

            {/* Loading Text */}
            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              transition={{ delay: 0.35 }}
              className="mt-6 text-[10px] font-medium uppercase tracking-[0.45em] text-white/40"
            >
              Preparing Experience
            </m.p>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
