"use client";

import { useMemo, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { m, useAnimation } from "framer-motion";

import { CinematicHero } from "@/components/shared/cinematic-hero-section";

export function Hero() {
  const t = useTranslations("home.hero");
  const scrollButtonRef = useRef<HTMLButtonElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    // Animate scroll indicator on mount
    controls.start({
      opacity: 1,
      y: 0,
      transition: { delay: 1.5, duration: 0.6 },
    });
  }, [controls]);

  const hero = useMemo(
    () => ({
      subtitle: t("subtitle"),
      title: (
        <>
          {t("title.main")}
          <br />
          <span className="font-light italic">{t("title.italic")}</span>
          <span className="italic bg-linear-to-r from-luxury-gold to-amber-500 bg-clip-text text-transparent">
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
    [t],
  );

  const handleScrollDown = () => {
    const nextSection =
      document.querySelector("#about") ||
      document.querySelector("section:nth-of-type(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative isolate min-h-dvh overflow-hidden">
      <CinematicHero {...hero} />

      {/* Scroll Indicator */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <button
          ref={scrollButtonRef}
          type="button"
          onClick={handleScrollDown}
          aria-label={t("scroll")}
          className="group flex flex-col items-center gap-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          {/* Scroll Text */}
          <span className="text-[9px] font-light uppercase tracking-[0.35em] text-luxury-charcoal/40 transition-colors group-hover:text-luxury-charcoal/70">
            {t("scroll")}
          </span>

          {/* Mouse Icon */}
          <div className="relative flex h-8 w-5 items-center justify-center rounded-full border border-luxury-charcoal/20 transition-colors group-hover:border-luxury-gold/50">
            <m.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-0.5 rounded-full bg-luxury-gold/60"
            />
          </div>

          {/* Chevron */}
          <ChevronDown
            size={14}
            className="text-luxury-charcoal/30 transition-colors group-hover:text-luxury-gold/60"
          />
        </button>
      </m.div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-luxury-charcoal/5 to-transparent pointer-events-none" />
    </section>
  );
}

export default Hero;
