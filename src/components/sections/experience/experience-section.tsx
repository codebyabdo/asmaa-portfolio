"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

import PageTransition from "@/components/effects/PageTransition";
import { ExperienceTimeline } from "./experience-timeline";
import { EducationHighlight } from "./education-highlight";
import { useTranslations } from "next-intl";

export default function ExperienceSection() {
  
  const t = useTranslations("experience.hero");

  return (
    <LazyMotion features={domAnimation}>
      <PageTransition>
        <main className="px-6 pt-40 pb-32">
          <div className="mx-auto max-w-5xl">
            <section className="mb-28">
              <m.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-luxury-gold"
              >
                {t("badge")}
              </m.span>

              <m.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mb-8 font-serif text-6xl leading-[0.85] tracking-tighter md:text-8xl"
              >
                {t("title.first")}
                <br />
                <span className="font-light italic">{t("title.highlight")}</span>
              </m.h1>

              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-xl text-lg font-light leading-relaxed text-luxury-charcoal/60 md:text-xl"
              >
                {t("description")}
              </m.p>
            </section>

            <ExperienceTimeline />

            <EducationHighlight />
          </div>
        </main>
      </PageTransition>
    </LazyMotion>
  );
}
