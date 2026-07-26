"use client";

import { MouseEvent, ReactNode, useRef } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

const MAGNETIC_STRENGTH = 0.35;

interface MagneticButtonProps extends React.ComponentProps<
  typeof motion.button
> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
}

export default function MagneticButton({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const rectRef = useRef<DOMRect | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 250,
    damping: 20,
  });
  const springY = useSpring(y, {
    stiffness: 250,
    damping: 20,
  });

  const handleMouseEnter = () => {
    if (!ref.current) return;

    rectRef.current = ref.current.getBoundingClientRect();
  };

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = rectRef.current;

    if (!rect) return;

    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * MAGNETIC_STRENGTH);
    y.set(offsetY * MAGNETIC_STRENGTH);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Size classes
  const sizeClasses = {
    sm: "px-6 py-2.5 text-[10px]",
    md: "px-8 py-4 text-xs",
    lg: "px-10 py-5 text-sm",
  };

  // Variant classes
  const variantClasses = {
    primary: "bg-luxury-charcoal text-white hover:shadow-lg hover:shadow-luxury-gold/20",
    secondary: "bg-white text-luxury-gold border-2 border-luxury-gold/30 hover:border-luxury-gold hover:shadow-lg hover:shadow-luxury-gold/10",
    ghost: "bg-transparent text-luxury-charcoal border-2 border-luxury-charcoal/20 hover:border-luxury-charcoal hover:bg-luxury-charcoal/5",
    gradient: "bg-gradient-to-r from-luxury-gold to-luxury-charcoal text-white shadow-lg shadow-luxury-gold/30 hover:shadow-xl hover:shadow-luxury-gold/40",
  };

  // Hover overlay variants
  const getHoverOverlay = () => {
    switch (variant) {
      case "primary":
        return "bg-luxury-gold";
      case "secondary":
        return "bg-luxury-charcoal";
      case "ghost":
        return "bg-luxury-charcoal";
      case "gradient":
        return "bg-white/20";
      default:
        return "bg-luxury-gold";
    }
  };

  return (
    <motion.button
      ref={ref}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.1 }}
      className={cn(
        "relative rounded-full font-bold uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden group",
        "hover:scale-105 active:scale-95",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {/* Background overlay animation */}
      <span className={cn(
        "absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center",
        getHoverOverlay()
      )} />
      
      {/* Content with mix-blend effect */}
      <span className={cn(
        "relative z-10 transition-colors duration-300",
        variant === "secondary" && "group-hover:text-white",
        variant === "ghost" && "group-hover:text-white",
        variant === "gradient" && "group-hover:text-luxury-gold"
      )}>
        {children}
      </span>
      
      {/* Optional glow effect for gradient variant */}
      {variant === "gradient" && (
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/10 blur-xl" />
      )}
    </motion.button>
  );
}