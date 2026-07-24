"use client";

import { ROLES } from "@/data/hero";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedRole() {
  const [roleIndex, setRoleIndex] = useState(0);

  const ROLE_INTERVAL = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, ROLE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-12 flex h-16 items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={ROLES[roleIndex]}
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="font-serif text-2xl font-light lowercase text-luxury-charcoal/40 md:text-5xl"
        >
          {ROLES[roleIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
