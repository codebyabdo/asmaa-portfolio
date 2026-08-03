"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { CheckCircle2, FileText, Lock, Shield } from "lucide-react";
import { useTranslations } from "next-intl";

export function SecureInterface() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const t = useTranslations("caseStudies.security");

  return (
    <section
      className="relative overflow-hidden rounded-[4rem] bg-luxury-charcoal px-8 py-16 text-white md:px-14 md:py-24 lg:px-20"
      aria-labelledby="security-heading"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.12),transparent_55%)]"
      />

      <div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">
        {/* Left Side */}
        <article>
          <div className="mb-8 flex items-center gap-3 text-luxury-gold">
            <Shield size={20} aria-hidden="true" />

            <span className="text-[11px] font-bold uppercase tracking-[0.35em]">
              {t("badge")}
            </span>
          </div>

          <h2
            id="security-heading"
            className="mb-8 font-serif text-5xl leading-tight md:text-6xl"
          >
            {t("title.first")}
            <br />
            <span className="italic font-light">{t("title.second")}</span>
          </h2>

          <p className="mb-14 max-w-xl text-lg leading-relaxed font-light text-white/55">
            {t("description")}
          </p>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <Lock size={18} className="mb-3 text-luxury-gold" />

              <h3 className="text-sm font-bold uppercase tracking-widest">
                {t("features.0.title")}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/45">
                {t("features.0.description")}
              </p>
            </div>

            <div>
              <CheckCircle2 size={18} className="mb-3 text-luxury-gold" />

              <h3 className="text-sm font-bold uppercase tracking-widest">
                {t("features.1.title")}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/45">
                {t("features.1.description")}
              </p>
            </div>
          </div>
        </article>

        {/* Right Side */}
        <aside className="relative">
          <m.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.25 }}
            className="glass-dark group relative overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-2xl"
          >
            {/* Header */}
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-luxury-gold" />

                <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">
                  {t("viewer.file")}
                </span>
              </div>

              <div className="flex gap-2" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-luxury-gold" />
              </div>
            </div>

            {/* Fake Document */}
            <div
              aria-hidden="true"
              className="space-y-4 opacity-25 select-none"
            >
              <div className="h-4 w-full rounded bg-white/10" />
              <div className="h-4 w-11/12 rounded bg-white/10" />
              <div className="h-4 w-full rounded bg-white/10" />
              <div className="h-4 w-8/12 rounded bg-white/10" />
              <div className="h-4 w-10/12 rounded bg-white/10" />
              <div className="h-4 w-full rounded bg-white/10" />
            </div>

            {/* Overlay */}
            <AnimatePresence mode="wait">
              {!isUnlocked && (
                <m.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center"
                >
                  <div className="absolute inset-0 bg-luxury-charcoal/80 backdrop-blur-md" />

                  <div className="relative z-30 max-w-xs text-center">
                    <Lock size={42} className="mx-auto mb-6 text-luxury-gold" />

                    <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.25em]">
                      {t("viewer.title")}
                    </h3>

                    <p className="mb-8 text-sm leading-relaxed text-white/50">
                      {t("viewer.description")}
                    </p>

                    <button
                      type="button"
                      onClick={() => setIsUnlocked(true)}
                      className="rounded-full border border-white/20 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:border-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal"
                    >
                      {t("viewer.button")}
                    </button>
                  </div>
                </m.div>
              )}
            </AnimatePresence>

            {/* Watermark */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden font-mono text-[72px] leading-none opacity-[0.04] select-none"
            >
              {t("viewer.watermark")}
            </div>
          </m.div>

          {/* Decorative Stamp */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-6 flex h-24 w-24 rotate-12 items-center justify-center rounded-full border border-luxury-gold/30 text-center text-[8px] font-bold uppercase tracking-widest text-luxury-gold/60"
          >
            {t("viewer.stamp")}
          </div>
        </aside>
      </div>
    </section>
  );
}
