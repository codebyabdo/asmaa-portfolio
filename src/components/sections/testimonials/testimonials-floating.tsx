"use client";

import { useTranslations } from "next-intl";

export function TestimonialsFloating() {

  const t = useTranslations("testimonials");

  const LOGO_CLOUD = t.raw("companies") as string[];
 
  
  return (
    <div className="mt-40 pt-20 border-t border-white/5 flex flex-wrap justify-center gap-20 opacity-20 grayscale">
      {LOGO_CLOUD.map((logo, i) => (
        <span key={i} className="text-2xl font-serif font-bold uppercase tracking-widest">
          {logo}
        </span>
      ))}
    </div>
  );
}