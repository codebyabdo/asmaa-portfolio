"use client";

import { PointerEvent, ReactNode, useEffect, useRef, useState } from "react";

import { m, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const MAGNETIC_STRENGTH = 0.35;

interface MagneticButtonProps extends React.ComponentProps<typeof m.button> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "px-6 py-2.5 text-[10px]",
  md: "px-8 py-4 text-xs",
  lg: "px-10 py-5 text-sm",
};

const variantClasses = {
  primary:
    "bg-luxury-charcoal text-white hover:shadow-lg hover:shadow-luxury-gold/20",

  secondary:
    "bg-white text-luxury-gold border-2 border-luxury-gold/30 hover:border-luxury-gold hover:shadow-lg hover:shadow-luxury-gold/10",

  ghost:
    "bg-transparent text-luxury-charcoal border-2 border-luxury-charcoal/20 hover:border-luxury-charcoal hover:bg-luxury-charcoal/5",

  gradient:
    "bg-gradient-to-r from-luxury-gold to-luxury-charcoal text-white shadow-lg shadow-luxury-gold/30 hover:shadow-xl hover:shadow-luxury-gold/40",
};

const overlayClasses = {
  primary: "bg-luxury-gold",
  secondary: "bg-luxury-charcoal",
  ghost: "bg-luxury-charcoal",
  gradient: "bg-white/20",
};

export default function MagneticButton({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const rectRef = useRef<DOMRect | null>(null);

  const frameRef = useRef<number | null>(null);

  const pointerRef = useRef({ x: 0, y: 0 });

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");

    const update = () => setIsDesktop(media.matches);

    update();

    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

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

  const updatePosition = () => {
    frameRef.current = null;

    const rect = rectRef.current;

    if (!rect) return;

    x.set(pointerRef.current.x * MAGNETIC_STRENGTH);

    y.set(pointerRef.current.y * MAGNETIC_STRENGTH);
  };

  const handlePointerEnter = () => {
    if (!buttonRef.current) return;

    rectRef.current = buttonRef.current.getBoundingClientRect();
  };

  const handlePointerMove = (e: PointerEvent<HTMLButtonElement>) => {
    if (!rectRef.current) return;

    pointerRef.current = {
      x: e.clientX - (rectRef.current.left + rectRef.current.width / 2),
      y: e.clientY - (rectRef.current.top + rectRef.current.height / 2),
    };

    if (!frameRef.current) {
      frameRef.current = requestAnimationFrame(updatePosition);
    }
  };

  const handlePointerLeave = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  if (!isDesktop) {
    return (
      <m.button
        className={cn(
          "relative overflow-hidden rounded-full font-bold uppercase tracking-[0.2em] transition-all duration-300 group",
          "active:scale-95",
          sizeClasses[size],
          variantClasses[variant],
          className,
        )}

        {...props}
      >
        <span
          className={cn(
            "absolute inset-0 rounded-full scale-0 origin-center transition-transform duration-500 group-hover:scale-100",
            overlayClasses[variant],
          )}
        />

        <span
          className={cn(
            "relative z-10 transition-colors duration-300",
            variant === "secondary" && "group-hover:text-white",
            variant === "ghost" && "group-hover:text-white",
            variant === "gradient" && "group-hover:text-white",
          )}
        >
          {children}
        </span>

        {variant === "gradient" && (
          <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
        )}
      </m.button>
    );
  }

  return (
    <m.button
      ref={buttonRef}
      style={{
        x: springX,
        y: springY,
      }}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "relative overflow-hidden rounded-full font-bold uppercase tracking-[0.2em] transition-all duration-300 group",
        "hover:scale-105 active:scale-95",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "absolute inset-0 rounded-full scale-0 origin-center transition-transform duration-500 group-hover:scale-100",
          overlayClasses[variant],
        )}
      />

      <span
        className={cn(
          "relative z-10 transition-colors duration-300",
          variant === "secondary" && "group-hover:text-white",
          variant === "ghost" && "group-hover:text-white",
          variant === "gradient" && "group-hover:text-luxury-gold",
        )}
      >
        {children}
      </span>

      {variant === "gradient" && (
        <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      )}
    </m.button>
  );
}
