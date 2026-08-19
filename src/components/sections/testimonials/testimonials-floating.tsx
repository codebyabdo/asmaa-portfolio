"use client";

import { useTranslations } from "next-intl";

export function TestimonialsFloating() {
  const t = useTranslations("testimonials.testimonials.expertise");

  const items = t.raw("items") as string[];

  return (
    <div className="mt-24 border-t border-white/10 pt-8 md:mt-32 md:pt-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Label */}
        <div className="shrink-0">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            {t("label")}
          </p>
        </div>

        {/* Expertise */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:justify-end md:gap-x-12">
          {items.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm font-light text-white/35 transition-colors duration-300 hover:text-white/70"
            >
              <span className="font-mono text-[9px] text-luxury-gold/50">
                0{index + 1}
              </span>

              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}