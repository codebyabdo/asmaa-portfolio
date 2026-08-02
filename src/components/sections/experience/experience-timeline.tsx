"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

import { useTranslations } from "next-intl";

export function ExperienceTimeline() {
  const t = useTranslations("experience.timeline");

  const HISTORY = t.raw("history") as {
    role: string;
    company: string;
    period: string;
    desc: string;
  }[];

  return (
    <section className="relative space-y-24 border-l border-luxury-charcoal/10 pl-10">
      {HISTORY.map((exp, index) => (
        <motion.article
          key={`${exp.company}-${index}`}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.12,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative"
        >
          <span className="absolute -left-11.5 top-1 h-3 w-3 rounded-full bg-luxury-gold ring-8 ring-luxury-ivory " />

          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
                {exp.period}
              </span>

              <h2 className="font-serif text-3xl">{exp.role}</h2>
            </div>

            <div className="glass flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em]">
              <Briefcase size={12} className="text-luxury-gold" />

              {exp.company}
            </div>
          </div>

          <p className="max-w-3xl text-lg font-light leading-relaxed text-luxury-charcoal/60">
            {exp.desc}
          </p>

          <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-luxury-charcoal/65">
            <MapPin size={12} />
            {t("location")}
          </div>
        </motion.article>
      ))}
    </section>
  );
}
