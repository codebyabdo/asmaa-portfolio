"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Quantitative } from "@/data/projects";

export function QualityAnalytics() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-32 xl:py-40">
      <div className="glass relative overflow-hidden rounded-[2.5rem] border border-luxury-charcoal/5 p-10 text-center md:rounded-[4rem] md:p-20 xl:p-24">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-luxury-gold/5 to-transparent" />

        <div className="relative z-10">
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
            Performance Metrics
          </span>

          <h2 className="mb-16 font-serif text-4xl italic md:text-6xl">
            Quantitative Excellence
          </h2>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {Quantitative.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 30,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="space-y-5"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-luxury-gold shadow-sm">
                  <stat.icon size={28} />
                </div>

                <div>
                  <p className="font-serif text-5xl italic tracking-tight">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-charcoal/35">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default QualityAnalytics;