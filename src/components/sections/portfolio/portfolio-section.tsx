"use client";

import PageTransition from "@/components/effects/PageTransition";
import { CinematicHero } from "@/components/shared/cinematic-hero-section";
import { FeaturedProjects } from "@/components/sections/portfolio/featured-projects";
import { BeforeAfterTranslation } from "@/components/sections/portfolio/before-after";
import { SecureWorkflow } from "@/components/sections/portfolio/secure-workflow";
import { QualityAnalytics } from "@/components/sections/portfolio/quality-analyTics";
import { ProjectArchive } from "@/components/sections/portfolio/project-archive";
import { PortfolioCta } from "@/components/sections/portfolio/cta-section";
import { useTranslations } from "next-intl";

export default function PortfolioSection() {
  const t = useTranslations("portfolio.hero");
  const hero = {
    subtitle: t("subtitle"),

    title: (
      <>
        {t("title.first")}
        <br />
        <span className="font-light italic">{t("title.second")}</span>
        <span className="italic bg-linear-to-r from-luxury-gold to-amber-500 bg-clip-text text-transparent">
          {t("title.third")}
        </span>
      </>
    ),

    description: t("description"),

    mainButton: {
      text: t("buttons.primary"),
      link: "/portfolio",
    },

    secondaryButton: {
      text: t("buttons.secondary"),
      link: "/case-studies",
    },
  };
  return (
    <PageTransition>
      <main
        id="portfolio"
        className="relative overflow-x-hidden bg-luxury-ivory text-luxury-charcoal selection:bg-luxury-gold/30 selection:text-luxury-charcoal"
      >
        {/* Hero */}
        <CinematicHero {...hero} />

        {/* Main Content */}
        <section
          aria-label="Portfolio Content"
          className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8"
        >
          <FeaturedProjects />

          <BeforeAfterTranslation />

          <SecureWorkflow />

          <QualityAnalytics />

          <ProjectArchive />

          <PortfolioCta />
        </section>
      </main>
    </PageTransition>
  );
}
