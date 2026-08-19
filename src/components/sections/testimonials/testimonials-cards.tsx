"use client";

import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

type Standard = {
  number: string;
  title: string;
  text: string;
  label: string;
};

export function TestimonialsCards() {
  const t = useTranslations("testimonials.testimonials.standards");

  const standards = t.raw("items") as Standard[];

  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-3">
      {standards.map((item, index) => (
        <m.article
          key={item.number}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative flex min-h-[430px] flex-col justify-between bg-white/[0.025] p-8 transition-colors duration-500 hover:bg-white/[0.06] md:p-10 lg:p-12"
        >
          {/* Top */}
          <div className="flex items-start justify-between">
            <span className="font-mono text-xs tracking-[0.2em] text-luxury-gold/60">
              {item.number}
            </span>

            <ArrowUpRight
              size={18}
              strokeWidth={1}
              className="text-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-luxury-gold"
            />
          </div>

          {/* Main Content */}
          <div className="mt-16">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              {item.label}
            </p>

            <h2 className="font-heading-en text-3xl font-light tracking-[-0.03em] text-white md:text-4xl">
              {item.title}
            </h2>

            <div className="mt-6 h-px w-10 bg-luxury-gold/60 transition-all duration-500 group-hover:w-20" />

            <p className="mt-6 max-w-sm text-sm font-light leading-7 text-white/45 md:text-base">
              {item.text}
            </p>
          </div>

          {/* Bottom */}
          <div className="mt-12 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-luxury-gold" />

            <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              {t("footer")}
            </span>
          </div>

          {/* Hover Accent */}
          <div className="absolute bottom-0 left-0 h-px w-0 bg-luxury-gold transition-all duration-700 group-hover:w-full" />
        </m.article>
      ))}
    </div>
  );
}