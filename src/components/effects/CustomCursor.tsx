"use client";

import { m } from "framer-motion";
import { useMouse } from "@/hooks/use-mouse";

export default function CustomCursor() {
  const { springX, springY, scale } = useMouse();

  return (
    <>
      <m.div
        className="fixed top-0 left-0 pointer-events-none z-9999 hidden md:block"
        style={{
          x: springX,
          y: springY,
          scale,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="relative w-12 h-12 rounded-full">
          <div className="absolute inset-0 rounded-full border border-luxury-gold/30 bg-luxury-gold/2" />
          <div className="absolute inset-0.75 rounded-full border border-luxury-gold/10" />
        </div>
      </m.div>
      <m.div
        className="fixed top-0 left-0 pointer-events-none z-9999 hidden md:block"
        style={{
          x: springX,
          y: springY,
          scale,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold shadow-lg shadow-luxury-gold/40" />
      </m.div>
    </>
  );
}
