"use client";

import PageTransition from "@/components/effects/PageTransition";
import { useTranslations } from "next-intl";
import { TestimonialsCards } from "./testimonials-cards";
import { TestimonialsFloating } from "./testimonials-floating";

export default function TestimonialsSection() {
  const t = useTranslations("testimonials.testimonials.hero");

  return (
    <PageTransition>
      <section className="relative min-h-screen overflow-hidden bg-luxury-charcoal px-6 pb-32 pt-40 text-white md:pb-40">
        {/* Ambient Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/10 blur-[140px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,91,55,0.08),transparent_45%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header */}
          <header className="mx-auto mb-24 max-w-5xl text-center md:mb-32">
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-luxury-gold/60" />

              <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-luxury-gold/80">
                {t("eyebrow")}
              </span>

              <span className="h-px w-10 bg-luxury-gold/60" />
            </div>

            <h1 className="font-heading-en text-6xl font-light leading-[0.9] tracking-[-0.045em] md:text-8xl lg:text-[9rem]">
              {t("title.first")}{" "}
              <span className="italic text-luxury-gold">
                {t("title.highlight")}
              </span>
            </h1>

            <p className="mx-auto mt-10 max-w-2xl text-base font-light leading-relaxed text-white/50 md:text-lg">
              {t("description")}
            </p>
          </header>

          {/* Standards */}
          <TestimonialsCards />

          {/* Trust / Expertise Strip */}
          <TestimonialsFloating />
        </div>
      </section>
    </PageTransition>
  );
}