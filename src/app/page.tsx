"use client";

import { Hero } from "@/components/sections/home/hero";
import { Floating } from "@/components/sections/home/floating";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import PageTransition from "@/components/ui/PageTransition";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.2,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      frameRef.current = requestAnimationFrame(raf);
    };

    frameRef.current = requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (isLoading) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      lenis.destroy();

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      clearTimeout(timer);

      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <div className="relative min-h-screen selection:bg-luxury-gold/30">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 1.2,
              ease: [0.77, 0, 0.175, 1],
            }}
            className="
              fixed
              inset-0
              z-[10000]
              flex
              flex-col
              items-center
              justify-center
              bg-luxury-charcoal
              text-white
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="flex items-center gap-4"
            >
              <span className="h-px w-12 bg-luxury-gold" />

              <span
                className="
                font-serif
                text-3xl
                italic
                tracking-tighter
              "
              >
                Asmaa Adel
              </span>

              <span className="h-px w-12 bg-luxury-gold" />
            </motion.div>

            <div
              className="
              mt-8
              h-4
              w-48
              overflow-hidden
            "
            >
              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "100%",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  h-px
                  w-full
                  bg-luxury-gold/30
                "
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative w-full overflow-hidden">
        <PageTransition>
          <Hero />

          <Floating />
        </PageTransition>
      </main>

      <div
        className="
          fixed
          inset-0
          pointer-events-none
          z-[99]
          opacity-[0.04]
          mix-blend-overlay
          grain-overlay
        "
      />
    </div>
  );
}
