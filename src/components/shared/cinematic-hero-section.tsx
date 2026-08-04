"use client";

import { m, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";

import MagneticButton from "@/components/ui/MagneticButton";

import type { HeroElementProp } from "@/types/hero";

export function CinematicHero({
  subtitle,
  title,
  description,
  mainButton,
  secondaryButton,
}: HeroElementProp) {
  const reduceMotion = useReducedMotion();

  return (
    <header className="relative isolate flex min-h-dvh items-center justify-center overflow-hidden">
      {/* Background */}

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {!reduceMotion && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.18, 0.3, 0.18],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-162.5 w-162.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/5 blur-3xl"
          />
        )}

        <div className="absolute inset-0 grain-overlay opacity-[0.04]" />
      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-28 text-center sm:px-8 lg:px-12">
        {/* Badge */}

        <m.span
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass inline-flex rounded-full border border-luxury-gold/20 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold"
        >
          {subtitle}
        </m.span>

        {/* Title */}

        <m.h1
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mt-10 max-w-[13ch] text-balance font-serif leading-[0.88] tracking-tight text-[clamp(3rem,8vw,7rem)] xl:text-[7rem] 2xl:text-[7.5rem]"
        >
          {title}
        </m.h1>

        {/* Description */}

        <m.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
          className="mt-10 max-w-3xl text-pretty text-lg font-light leading-relaxed text-luxury-charcoal/60 md:text-xl xl:text-2xl"
        >
          {description}
        </m.p>

        {/* Buttons */}

        <m.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.55,
          }}
          className="mt-16 flex w-full flex-wrap items-center justify-center gap-6"
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
                className="group inline-flex items-center gap-3 border-b border-luxury-charcoal/15 pb-2 text-[10px] font-bold uppercase tracking-[0.3em] transition-colors hover:border-luxury-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold focus-visible:ring-offset-4"
              >
                <span className="h-px w-8 bg-luxury-gold transition-all duration-300 group-hover:w-12" />

                {secondaryButton.text}
              </button>
            </Link>
          )}
        </m.div>
      </div>
    </header>
  );
}

export default CinematicHero;