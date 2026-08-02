"use client";

import { motion } from "framer-motion";
import { useMouse } from "@/hooks/use-mouse";

export default function CustomCursor() {
  const { springX, springY, scale } = useMouse();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-luxury-gold pointer-events-none z-9999 hidden md:block mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          scale,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-9999 hidden md:block mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          scale,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
