"use client";

import { m } from "framer-motion";
import { Globe, Layers } from "lucide-react";

import {  } from "@/data/projects";
import { useTranslations } from "next-intl";

export function BeforeAfterTranslation() {
  const t = useTranslations("portfolio.beforeAfter");


  const COMPARISON_DATA = t.raw("items") as {
    title: string;
    tag: string;
    original: string;
    localized: string;
    reasoning: string;
  }[];

  return (
    <section
      id="before-after"
      aria-labelledby="before-after-heading"
      className="relative py-28 md:py-40"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-luxury-charcoal/5" />

      {/* Heading */}

      <header className="mx-auto mb-20 max-w-3xl text-center md:mb-24">
        <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-luxury-gold">
          {t("subtitle")}
        </span>

        <h2
          id="before-after-heading"
          className="mb-8 font-serif text-5xl italic leading-none tracking-tight md:text-8xl"
        >
          {t("title")}
        </h2>

        <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-luxury-charcoal/55 md:text-xl">
          {t("description")}
        </p>
      </header>

      {/* Cards */}

      <div className="overflow-hidden rounded-[2.5rem] border border-luxury-charcoal/5 bg-luxury-charcoal/5 lg:rounded-[4rem]">
        <div className="grid gap-px lg:grid-cols-2">
          {COMPARISON_DATA.map((item) => (
            <article
              key={item.tag}
              className="group bg-luxury-ivory p-8 transition-colors duration-300 hover:bg-white md:p-12 xl:p-20"
            >
              {/* Header */}

              <div className="mb-10 flex items-start justify-between">
                <span className="rounded-full border border-luxury-charcoal/5 px-4 py-1 text-[9px] font-bold uppercase tracking-[0.25em]">
                  {item.tag}
                </span>

                <Layers
                  size={20}
                  className="text-luxury-gold/30 transition-colors duration-300 group-hover:text-luxury-gold"
                />
              </div>

              <div className="space-y-10">
                {/* Source */}

                <section>
                  <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-charcoal/40">
                    {t("source")}
                  </h3>

                  <p className="font-serif text-2xl font-light italic leading-relaxed text-luxury-charcoal/80">
                    &quot;{item.original}&quot;
                  </p>
                </section>

                {/* Translation */}

                <m.div
                  whileHover={{
                    scale: 1.015,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="relative overflow-hidden rounded-3xl bg-luxury-charcoal p-8 text-white will-change-transform md:p-10"
                >
                  <div className="absolute right-5 top-5">
                    <Globe
                      size={16}
                      className="text-luxury-gold opacity-50"
                    />
                  </div>

                  <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
                    {t("localized")}
                  </h3>

                  <p
                    dir="rtl"
                    lang="ar"
                    className="font-serif text-3xl leading-[1.6] text-right md:text-5xl"
                  >
                    {item.localized}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-full bg-luxury-gold" />
                </m.div>

                {/* Explanation */}

                <section className="border-t border-luxury-charcoal/5 pt-8 text-sm font-light leading-8 text-luxury-charcoal/60">
                  <span className="font-bold text-luxury-gold">
                    {t("logic")}
                  </span>
                  {item.reasoning}
                </section>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeforeAfterTranslation;