"use client";

import { AnimatePresence, motion } from 'framer-motion';

interface IntroLoaderProps {
  isLoading: boolean;
}

export function IntroLoader({ isLoading }: IntroLoaderProps) {
    return (
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
    )
}