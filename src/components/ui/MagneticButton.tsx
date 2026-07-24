"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const MAGNETIC_STRENGTH = 0.35;

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function MagneticButton({
  children,
  className,
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    setPosition({
      x: x * MAGNETIC_STRENGTH,
      y: y * MAGNETIC_STRENGTH,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={position}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.1 }}
      className={cn(
        "relative rounded-full px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors overflow-hidden group",
        variant === "primary"
          ? "bg-luxury-charcoal text-white"
          : "bg-white text-luxury-gold border border-border",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 mix-blend-difference">{children}</span>
      <span className="absolute inset-0 bg-luxury-gold rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center" />
    </motion.button>
  );
}
