"use client";

import { m } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <m.div
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
        className="absolute left-[-10%] top-[-20%] aspect-square w-[60%] rounded-full bg-luxury-gold/10 blur-[120px]"
      />

      <m.div
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
        className="absolute bottom-[-20%] right-[-10%] aspect-square w-[50%] rounded-full bg-luxury-gold/5 blur-[100px]"
      />
    </div>
  );
}