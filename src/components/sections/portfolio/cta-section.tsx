"use client";

import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";

import MagneticButton from "@/components/ui/MagneticButton";
import { useTranslations } from "next-intl";

export function PortfolioCta() {
  const reduceMotion = useReducedMotion();
  const t = useTranslations("portfolio.cta");

  return (
    <section className="py-28 md:py-36 xl:py-52">
      <m.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.96,
                y: 40,
              }
        }
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="mx-auto max-w-6xl text-center"
      >
        <span className="mb-8 block text-[10px] font-bold uppercase tracking-[0.45em] text-luxury-gold">
          {t("subtitle")}
        </span>

        <h2 className="mx-auto max-w-5xl font-serif text-5xl leading-[0.88] tracking-tight md:text-7xl xl:text-[8vw]">
          {t("title.first")}
          <br />
          {t("title.second")} <span className="italic text-luxury-gold">{t("title.third")}</span>
        </h2>

        <p className="mx-auto mt-10 max-w-2xl text-lg font-light leading-relaxed text-luxury-charcoal/60">
          {t("description")}
        </p>

        <div className="mt-16 flex flex-col items-center justify-center gap-8 sm:flex-row">
          <Link href="/contact">
            <MagneticButton size="lg" variant="gradient">
              {t("primary")}
            </MagneticButton>
          </Link>

          <Link
            href="/"
            target="_blank"
            className="border-b border-luxury-charcoal/10 pb-3 text-[11px] font-bold uppercase tracking-[0.35em] transition-all hover:border-luxury-gold hover:text-luxury-gold"
          >
            {t("secondary")}
          </Link>
        </div>
      </m.div>
    </section>
  );
}

export default PortfolioCta;