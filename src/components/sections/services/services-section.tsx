"use client";

import PageTransition from "@/components/effects/PageTransition";
import { CTASection } from "./CTA-section";
import { ServiceCard } from "./service-card";
import { m } from "framer-motion";
import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("services");

  return (
    <PageTransition>
      <main className="overflow-hidden bg-luxury-ivory px-6 pt-40 pb-32">
        <div className="mx-auto max-w-7xl">
          <section className="mb-32">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-8 flex items-center gap-4"
            >
              <div className="h-px w-8 bg-luxury-gold" />

              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-luxury-gold">
                {t("hero.eyebrow")}
              </span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-10 font-serif text-6xl leading-[0.82] tracking-tighter md:text-[10vw]"
            >
              {t("hero.title.first")}
              <br />
              <span className="font-light italic">
                {t("hero.title.second")}
              </span>{" "}
              <span className="italic text-luxury-gold">
                {t("hero.title.third")}
              </span>
            </m.h1>

            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-lg font-light leading-relaxed text-luxury-charcoal/60 md:text-xl"
            >
              {t("hero.description")}
            </m.p>
          </section>

          <ServiceCard />

          <div className="my-32 border-y border-luxury-charcoal/10 py-16 text-center">
            <p className="mx-auto max-w-2xl font-serif text-2xl font-light italic text-luxury-charcoal/70 md:text-3xl">
              {t("quote")}
            </p>
          </div>

          <CTASection />
        </div>
      </main>
    </PageTransition>
  );
}
