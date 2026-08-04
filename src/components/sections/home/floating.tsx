"use client";

import { BRANDS } from "@/data/brands";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export function Floating() {
  const t = useTranslations("home.floating");
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Duplicate brands for infinite effect
  const duplicatedBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section 
      ref={containerRef}
      className="overflow-hidden border-y border-luxury-charcoal/5 bg-linear-to-b from-white/50 to-white/30 py-16 backdrop-blur-sm md:py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-[9px] font-light uppercase tracking-[0.5em] text-luxury-charcoal/30"
        >
          {t("title")}
        </m.p>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-white/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-white/80 to-transparent pointer-events-none" />

          <m.div
            style={{ y }}
            animate={!shouldReduceMotion ? {
              x: ["0%", "-50%"],
            } : {}}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-16 whitespace-nowrap"
          >
            {duplicatedBrands.map((brand, index) => (
              <m.span
                key={`${brand}-${index}`}
                whileHover={{ scale: 1.05, color: "#D66540" }}
                transition={{ duration: 0.2 }}
                className="select-none font-serif text-xl font-medium uppercase tracking-[0.2em] text-luxury-charcoal/30 transition-colors md:text-2xl lg:text-3xl"
              >
                {brand}
              </m.span>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  );
}

export default Floating;