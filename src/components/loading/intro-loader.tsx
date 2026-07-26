"use client";

import { useIntroLoader } from "@/hooks/use-intro-loader";
import { AnimatePresence, motion } from "framer-motion";

export function IntroLoader() {
  const isLoading = useIntroLoader(2000);
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          aria-hidden="true"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1.2,
            ease: [0.77, 0, 0.175, 1],
          }}
          className="
            fixed
            inset-0
            h-dvh
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
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 sm:gap-4 md:gap-5"
          >
            <span className="h-px w-8 bg-luxury-gold sm:w-10 md:w-12" />

            <span
              className="
                font-serif
                italic
                tracking-tighter
                text-[clamp(1.75rem,5vw,2.5rem)]
              "
            >
              Asmaa Adel
            </span>

            <span className="h-px w-8 bg-luxury-gold sm:w-10 md:w-12" />
          </motion.div>

          <div
            className="
              mt-6
              h-4
              w-40
              overflow-hidden
              sm:mt-8
              sm:w-48
              md:w-56
            "
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-0.5 w-full bg-luxury-gold/30"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
