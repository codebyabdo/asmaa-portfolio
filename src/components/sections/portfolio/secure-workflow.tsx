"use client";

import { m, useReducedMotion } from "framer-motion";
import { Shield, Lock } from "lucide-react";
import { useTranslations } from "next-intl";



export function SecureWorkflow() {
  const reduceMotion = useReducedMotion();

  const t = useTranslations("portfolio.security");

  const securityFeatures = t.raw("features") as string[];

  return (
    <section
      className="py-24 md:py-32 xl:py-40"
      aria-labelledby="security-heading"
    >
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
        {/* Content */}
        <div className="lg:col-span-5">
          <div className="mb-8 flex items-center gap-3 text-luxury-gold">
            <Shield size={20} />

            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
              {t("badge")}
            </span>
          </div>

          <h2
            id="security-heading"
            className="font-serif text-5xl leading-[0.9] md:text-6xl"
          >
            {t("title.first")}
            <br />
            <span className="font-light italic">{t("title.second")}</span>
            <br />
            <span className="text-luxury-gold">{t("title.third")}</span>
          </h2>

          <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-luxury-charcoal/60 md:text-xl">
           {t("description")}
          </p>

          <ul className="mt-12 space-y-5">
            {securityFeatures.map((item) => (
              <li
                key={item}
                className="group flex items-center gap-4"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-luxury-gold transition-transform group-hover:scale-150" />

                <span className="text-xs uppercase tracking-[0.25em] text-luxury-charcoal/70 md:text-sm">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card */}
        <div className="relative lg:col-span-7">
          <m.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    rotate: -2,
                    y: 30,
                  }
            }
            whileInView={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    rotate: 0,
                    y: 0,
                  }
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative overflow-hidden rounded-[2.5rem] bg-black p-3 shadow-2xl md:rounded-[4rem] md:p-4"
          >
            <div className="glass-dark overflow-hidden rounded-[2rem] border border-white/10 md:rounded-[3.5rem]">
              {/* Header */}

              <div className="flex items-center justify-between border-b border-white/5 p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <Lock
                    size={14}
                    className="text-luxury-gold"
                  />

                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">
                    {t("vault")}
                  </span>
                </div>

                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-white/10" />
                  <div className="h-2 w-2 rounded-full bg-luxury-gold" />
                </div>
              </div>

              {/* Preview */}

              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden p-8 md:p-12">
                <div className="pointer-events-none absolute inset-0 space-y-5 p-12 opacity-10 blur-sm grayscale select-none">
                  <div className="h-5 rounded bg-white" />
                  <div className="h-5 w-4/5 rounded bg-white" />
                  <div className="h-5 rounded bg-white" />
                  <div className="h-5 w-3/5 rounded bg-white" />
                  <div className="h-5 w-5/6 rounded bg-white" />
                </div>

                <div className="relative z-10 flex max-w-md flex-col items-center text-center">
                  <div className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-luxury-gold/40">
                    {!reduceMotion && (
                      <m.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 18,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full border-t border-luxury-gold"
                      />
                    )}

                    <Shield
                      size={32}
                      className="text-luxury-gold"
                    />
                  </div>

                  <h3 className="font-serif text-2xl text-white">
                    {t("encryption")}
                  </h3>

                  <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-white/40">
                    {t("protected")}
                  </p>

                  <button
                    type="button"
                    className="glass mt-8 rounded-full border border-white/20 px-8 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-colors hover:bg-luxury-gold hover:text-black"
                  >
                    {t("button")}
                  </button>
                </div>

                {!reduceMotion && (
                  <m.div
                    initial={{ top: "-10%" }}
                    animate={{ top: "110%" }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-0 h-px w-full bg-luxury-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.45)]"
                  />
                )}
              </div>
            </div>
          </m.div>

          <div className="pointer-events-none absolute -bottom-8 -right-8 hidden h-32 w-32 rounded-full border border-luxury-gold/10 lg:block" />
        </div>
      </div>
    </section>
  );
}

export default SecureWorkflow;