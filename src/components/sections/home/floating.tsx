"use client";

import { BRANDS } from "@/data/brands";
import { m } from "framer-motion";


export function Floating() {
  return (
    <section className="overflow-hidden border-y border-luxury-charcoal/5 bg-white/30 py-16 backdrop-blur-sm md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-[10px] uppercase tracking-[0.5em] text-luxury-charcoal/30">
          Trusted Language Partnerships
        </p>

        <m.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="flex flex-wrap items-center justify-center gap-12 md:gap-24"
        >
          {BRANDS.map((brand) => (
            <m.span
              key={brand}
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.25,
              }}
              className="select-none font-serif text-xl font-medium uppercase tracking-[0.2em] text-luxury-charcoal/30 transition-colors hover:text-luxury-gold md:text-2xl"
            >
              {brand}
            </m.span>
          ))}
        </m.div>
      </div>
    </section>
  );
}