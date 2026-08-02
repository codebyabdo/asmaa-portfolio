"use client";

import { m } from "framer-motion";

import MagneticButton from "@/components/ui/MagneticButton";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function CTASection() {
  const t = useTranslations("services.cta");
  return (
    <m.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className=" relative overflow-hidden rounded-[3rem] bg-luxury-charcoal px-8 py-20 text-center text-white md:px-16 "
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212,175,55,.14) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        <h2 className="mb-8 font-serif text-4xl italic md:text-5xl">
          {t("title")}
        </h2>

        <p className="mb-12 text-lg font-light leading-relaxed text-white/60">
          {t("description")}
        </p>
        <Link href={"/contact"}>
          <MagneticButton variant="gradient" size="md">
            {t("button")}
          </MagneticButton>
        </Link>
      </div>
    </m.section>
  );
}
