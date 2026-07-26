"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import MagneticButton from "@/components/ui/MagneticButton";

import { HeroBackground } from "./hero/hero-background";
import { AnimatedRole } from "./hero/animated-role";

export function Hero() {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 grid min-h-dvh grid-rows-[1fr_auto]">
        <div className="flex items-center justify-center px-5 py-8 sm:px-6 lg:px-10">
          <div className="w-full max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="inline-flex rounded-full border border-luxury-gold/20 glass px-4 py-2 text-[9px] font-bold uppercase tracking-[0.28em] text-luxury-gold sm:text-[10px]">
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
                className="
                  mb-8
                  font-serif
                  leading-[0.9]
                  tracking-tight
                  text-[clamp(3.2rem,9vw,8rem)]
                "
              >
                Bridging Language,
                <br />
                <span className="font-light italic">Culture</span>{" "}
                &{" "}
                <span className="text-luxury-gold">
                  Logic
                </span>
              </motion.h1>
            </div>

            <AnimatedRole />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1,
              }}
              className="
                mx-auto
                mb-10
                max-w-xl
                text-sm
                font-light
                leading-relaxed
                text-luxury-charcoal/60
                sm:text-base
                lg:text-lg
              "
            >
              A world-class localization experience for international leaders
              who demand precision and cultural depth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1.2,
              }}
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-6
                sm:flex-row
                sm:gap-10
              "
            >
              <MagneticButton className="px-10 py-5 lg:px-12 lg:py-6">
                Start Conversation
              </MagneticButton>

              <button className="group flex items-center gap-3 border-b border-luxury-charcoal/10 pb-2 text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:border-luxury-gold">
                <div className="h-px w-8 bg-luxury-gold transition-all group-hover:w-12" />
                Explore Evidence
              </button>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center">
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mb-4 flex flex-col items-center gap-2 opacity-40 transition-opacity hover:opacity-100 sm:mb-8"
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