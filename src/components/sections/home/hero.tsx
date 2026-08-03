"use client";

import { useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

import { CinematicHero } from "@/components/shared/cinematic-hero-section";

export function Hero() {
  const t = useTranslations("home.hero");

  const hero = useMemo(
    () => ({
      subtitle: t("subtitle"),

      title: (
        <>
          {t("title.main")}
          <br />
          <span className="font-light italic">
            {t("title.italic")}
          </span>{" "}
          <span className="italic text-luxury-gold">
            {t("title.gold")}
          </span>
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
    }),
    [t]
  );

  return (
    <section className="relative min-h-dvh w-full overflow-hidden">
      <div className="relative z-10 grid min-h-dvh grid-rows-[1fr_auto]">
        <CinematicHero {...hero} />

        <div className="flex justify-center">
          <button
            type="button"
            aria-label={t("scroll")}
            className="
              mb-4 flex flex-col items-center gap-2
              opacity-40 transition-opacity duration-300
              hover:opacity-100
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-luxury-gold
              focus-visible:ring-offset-4
              focus-visible:ring-offset-background
              sm:mb-8
            "
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              {t("scroll")}
            </span>

            <ChevronDown
              size={14}
              className="animate-bounce"
            />
          </button>
        </div>
      </div>
    </section>
  );
}