"use client";

import { m, useReducedMotion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  number: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  number,
  centered = false,
}: SectionHeaderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <m.header
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 40,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`mb-16 md:mb-20 ${
        centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"
      }`}
    >
      <div
        className={`mb-6 flex items-center gap-4 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-luxury-gold">
          {number}
        </span>

        <div className="h-px w-12 bg-luxury-gold/30" />
      </div>

      <h2 className="font-serif text-4xl leading-[0.9] tracking-tight md:text-6xl xl:text-8xl">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-8 text-lg font-light leading-relaxed text-luxury-charcoal/60 md:text-xl ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </m.header>
  );
}

export default SectionHeader;