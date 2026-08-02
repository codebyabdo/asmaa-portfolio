'use client'

import { useEffect } from "react";
import { useSpring, useMotionValue, animate } from "framer-motion";

export function useMouse() {
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


  return { springX, springY, scale };
}