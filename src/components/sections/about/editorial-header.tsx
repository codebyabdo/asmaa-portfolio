"use client";

import { motion } from "framer-motion";

export function EditorialHeader() {
  return (
    <section
      className="
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-16
      items-end
      mb-24
    "
    >
      <div>
        <motion.span
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            block
            mb-6
            text-[10px]
            uppercase
            tracking-[0.4em]
            font-bold
            text-luxury-gold
          "
        >
          The Story Behind The Logic
        </motion.span>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="font-serif text-6xl leading-[0.85] tracking-tighter md:text-8xl"
        >
          Beyond
          <br />
          <span className="italic font-light">Translation</span>
        </motion.h1>
      </div>

      <motion.p
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.3,
        }}
        className="lg:ml-auto max-w-md text-lg md:text-xl font-light leading-relaxed text-luxury-charcoal/60         "
      >
        Asmaa Adel is not just a translator; she is a cultural bridge. Through
        linguistic precision and emotional intelligence, she transforms words
        into experiences that feel native to every audience.
      </motion.p>
    </section>
  );
}
