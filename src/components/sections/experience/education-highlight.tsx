"use client";

import { m } from "framer-motion";
import { Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

export function EducationHighlight() {
  const t = useTranslations("experience.education");
  return (
    <m.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mt-32 rounded-[2.5rem] bg-luxury-charcoal px-8 py-12 text-white md:px-12 "
    >
      <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-white/15 ">
          <Calendar size={30} className="text-luxury-gold" />
        </div>

        <div>
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
            {t("badge")}
          </span>

          <h2 className="mb-4 font-serif text-3xl">
            {t("title")}
          </h2>

          <p className="max-w-2xl font-light leading-relaxed text-white/65">
            {t("description")}
          </p>
        </div>
      </div>
    </m.section>
  );
}
