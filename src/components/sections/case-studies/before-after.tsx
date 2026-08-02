"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function BeforeAfterStudies() {
  const t = useTranslations("caseStudies.beforeAfter");

  const COMPARISON_EXAMPLES = t.raw("examples") as {
    category: string;
    original: string;
    arabic: string;
    context: string;
  }[];

  return (
    <LazyMotion features={domAnimation}>
      <section className="mb-40" aria-labelledby="transformation-heading">
        <header className="mb-14">
          <div className="mb-5 flex items-center gap-4">
            <ArrowLeftRight className="text-luxury-gold" aria-hidden="true" />

            <h2
              id="transformation-heading"
              className="font-serif text-2xl italic text-luxury-charcoal/80 md:text-3xl"
            >
              {t("title")}
            </h2>
          </div>

          <p className="max-w-3xl text-base leading-relaxed text-luxury-charcoal/55 md:text-lg">
            {t("description")}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {COMPARISON_EXAMPLES.map((example, index) => (
            <m.article
              key={`${example.category}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass rounded-[2rem] border border-luxury-charcoal/5 p-8 md:p-10"
            >
              <span className="mb-6 inline-flex rounded-full border border-luxury-gold/20 bg-luxury-gold/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                {example.category}
              </span>

              <div className="space-y-8">
                {/* Source */}
                <section>
                  <p className="mb-3 text-[11px] font-mono uppercase tracking-wider text-luxury-charcoal/40">
                    {t("labels.source")}
                  </p>

                  <blockquote className="text-lg font-light italic leading-relaxed text-luxury-charcoal/80 md:text-xl">
                    &quot;{example.original}&quot;
                  </blockquote>
                </section>

                {/* Arabic */}
                <m.section
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border-r-4 border-luxury-gold bg-white p-6 shadow-sm"
                >
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-luxury-gold">
                    {t("labels.localized")}
                  </p>

                  <blockquote
                    dir="rtl"
                    lang="ar"
                    className="font-serif text-2xl leading-loose text-luxury-charcoal md:text-3xl"
                  >
                    {example.arabic}
                  </blockquote>
                </m.section>

                {/* Strategy */}
                <footer className="border-t border-luxury-charcoal/5 pt-6">
                  <p className="text-sm leading-7 text-luxury-charcoal/55">
                    <span className="font-semibold text-luxury-gold">
                      {t("labels.strategy")}
                    </span>{" "}
                    {example.context}
                  </p>
                </footer>
              </div>
            </m.article>
          ))}
        </div>
      </section>
    </LazyMotion>
  );
}
