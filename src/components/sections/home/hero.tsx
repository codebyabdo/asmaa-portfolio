"use client";

import MagneticButton from "@/components/ui/MagneticButton";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const ROLES = [
  "Translator",
  "Localization Specialist",
  "Linguistic Consultant",
  "Freelance Expert",
  "Communication Artist",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-svh w-full ">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[-20%] left-[-10%] w-[60%] aspect-square rounded-full bg-luxury-gold/10 blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[50%] aspect-square rounded-full bg-luxury-gold/5 blur-[100px]"
        />
      </div>

  <div className="relative z-10 grid h-full grid-rows-[1fr_auto]">
    <div className="flex items-center justify-center px-6 py-6">
        {/* Hero Content */}
          <div className="max-w-6xl w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="inline-block glass rounded-full border border-luxury-gold/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                International Freelance Professional
              </span>
            </motion.div>

            <div className="mt-8 text-reveal">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mb-8 text-6xl font-serif leading-[0.9] tracking-tighter md:text-[10vw]"
              >
                Bridging Language,
                <br />
                <span className="italic font-light">Culture</span> &{" "}
                <span className="text-luxury-gold">Logic</span>
              </motion.h1>
            </div>

            <div className="mb-12 flex h-16 items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={ROLES[roleIndex]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "circIn",
                  }}
                  className="font-serif text-2xl font-light lowercase text-luxury-charcoal/40 md:text-5xl"
                >
                  {ROLES[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mx-auto mb-12 max-w-xl text-base font-light leading-relaxed text-luxury-charcoal/60 md:text-lg"
            >
              A world-class localization experience for international leaders
              who demand precision and cultural depth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col items-center justify-center gap-12 sm:flex-row"
            >
              <MagneticButton className="px-12 py-6">
                Start Conversation
              </MagneticButton>

              <button className="group flex items-center gap-3 border-b border-luxury-charcoal/10 pb-2 text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:border-luxury-gold">
                <div className="h-px w-8 bg-luxury-gold transition-all group-hover:w-12" />
                Explore Evidence
              </button>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center mb-0">
          {/* Scroll Indicator */}
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mb-8 flex flex-col items-center justify-center gap-2 opacity-40 transition-opacity hover:opacity-100"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              Scroll
            </span>

            <ChevronDown size={14} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
