"use client";

import { m } from "framer-motion";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

export function TestimonialsCards() {
  const t = useTranslations("testimonials.cards");
  const TESTIMONIALS = t.raw("items") as {
    text: string;
    author: string;
    role: string;
  }[];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {TESTIMONIALS.map((t, i) => (
        <m.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass-dark border-white/5 p-12 rounded-[3rem] flex flex-col justify-between group h-full"
        >
          <Quote
            className="text-luxury-gold mb-10 opacity-30 group-hover:opacity-100 transition-opacity"
            size={40}
          />
          <p className="text-2xl font-serif italic mb-12 leading-relaxed text-white/80">
            &quot;{t.text}&quot;
          </p>
          <div>
            <p className="font-bold uppercase tracking-widest text-sm mb-1">
              {t.author}
            </p>
            <p className="text-white/40 text-xs font-mono">{t.role}</p>
          </div>
        </m.div>
      ))}
    </div>
  );
}
