"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, animate } from "framer-motion";

export default function CustomCursor() {
  const isDesktop =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer:fine)").matches;

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const scale = useMotionValue(1);

  const springConfig = { damping: 30, stiffness: 400 };

  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;

      const pointer = !!target.closest("a,button,[data-cursor='pointer']");

      animate(scale, pointer ? 1.8 : 1, {
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", moveCursor, {
      passive: true,
    });

    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isDesktop, cursorX, cursorY, scale]);

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
          x: cursorX,
          y: cursorY,
          scale,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
