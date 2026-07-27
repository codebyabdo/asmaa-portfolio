"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  m,
  useInView,
  useReducedMotion,
} from "framer-motion";

import { ROLES } from "@/data/hero";

const ROLE_INTERVAL = 3000;

export function AnimatedRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.5,
  });

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, ROLE_INTERVAL);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isInView, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="mb-12 flex h-16 items-center justify-center overflow-hidden"
    >
      {prefersReducedMotion ? (
        <p className="font-serif text-2xl font-light lowercase text-luxury-charcoal/65 md:text-5xl">
          {ROLES[0]}
        </p>
      ) : (
        <AnimatePresence mode="wait">
          <m.p
            key={ROLES[roleIndex]}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="font-serif text-2xl font-light lowercase text-luxury-charcoal/65 md:text-5xl"
          >
            {ROLES[roleIndex]}
          </m.p>
        </AnimatePresence>
      )}
    </div>
  );
}