"use client";

import { m } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { CinematicHero } from "@/components/shared/cinematic-hero-section";

import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("home.hero");

  const hero = {
    subtitle: t("subtitle"),

    title: (
      <>
        {t("title.main")}
        <br />
        <span className="font-light italic">{t("title.italic")}</span>{" "}
        <span className="italic text-luxury-gold">{t("title.gold")}</span>
      </>
    ),

    description: t("description"),

    mainButton: {
      text: t("buttons.primary"),
      link: "/contact",
    },

    secondaryButton: {
      text: t("buttons.secondary"),
      link: "/portfolio",
    },
  };

  return (
    <section className="relative min-h-dvh w-full overflow-hidden">
      <div className="relative z-10 grid min-h-dvh grid-rows-[1fr_auto]">
        <CinematicHero {...hero} />

        <div className="flex justify-center">
          <m.button
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mb-4 flex flex-col items-center gap-2 opacity-40 transition-opacity hover:opacity-100 sm:mb-8"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              {t("scroll")}
            </span>

            <ChevronDown size={14} />
          </m.button>
        </div>
      </div>
    </section>
  );
}
