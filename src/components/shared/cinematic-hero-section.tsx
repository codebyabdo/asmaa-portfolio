"use client";

import { m, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import MagneticButton from "@/components/ui/MagneticButton";
import type { HeroElementProp } from "@/types/hero";
// import Link from "next/link";
import { Link } from "@/i18n/navigation";
export function CinematicHero({
  subtitle,
  title,
  description,
  mainButton,
  secondaryButton,
}: HeroElementProp) {
  const containerRef = useRef<HTMLElement>(null);

  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.96]);

  return (
    <header
      ref={containerRef}
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {!shouldReduceMotion && (
          <m.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.45, 0.25],
              x: [0, 40, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-162.5 w-162.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/5 blur-[140px]"
          />
        )}

        <div className="absolute inset-0 grain-overlay opacity-[0.04]" />
      </div>

      {/* Content */}
      <m.div
        style={{
          opacity: heroOpacity,
          scale: heroScale,
        }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-32 text-center sm:px-8 lg:px-10"
      >
        {/* Badge */}

        <m.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="glass inline-flex rounded-full border border-luxury-gold/20 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
            {subtitle}
          </span>
        </m.div>

        {/* Title */}

        <m.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.15,
          }}
          className="mt-10 text-[clamp(3.5rem,10vw,8rem)] font-serif leading-[0.9] tracking-tight"
        >
          {title}
        </m.h1>

        {/* Description */}

        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="mx-auto mt-10 max-w-3xl text-lg font-light leading-relaxed text-luxury-charcoal/60 md:text-2xl"
        >
          {description}
        </m.p>

        {/* Actions */}

        <m.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <Link href={mainButton.link}>
            <MagneticButton
              size="lg"
              variant="gradient"
              aria-label={mainButton.text}
            >
              {mainButton.text}
            </MagneticButton>
          </Link>

          {secondaryButton && (
            <Link href={secondaryButton.link}>
              <button
                type="button"
                className="group flex items-center gap-3 border-b border-luxury-charcoal/10 pb-2 text-[10px] font-bold uppercase tracking-[0.3em] transition-colors hover:border-luxury-gold"
              >
                <span className="h-px w-8 bg-luxury-gold transition-all duration-300 group-hover:w-12" />

                {secondaryButton.text}
              </button>
            </Link>
          )}
        </m.div>
      </m.div>
    </header>
  );
}

export default CinematicHero;
