"use client";

import PageTransition from "@/components/effects/PageTransition";
import { CinematicHero } from "@/components/shared/cinematic-hero-section";
import { FeaturedProjects } from "@/components/sections/portfolio/featured-projects";
import { BeforeAfterTranslation } from "@/components/sections/portfolio/before-after";
import { SecureWorkflow } from "@/components/sections/portfolio/secure-workflow";
import { QualityAnalytics } from "@/components/sections/portfolio/quality-analyTics";
import { ProjectArchive } from "@/components/sections/portfolio/project-archive";
import { PortfolioCta } from "@/components/sections/portfolio/cta-section";

import type { HeroElementProp } from "@/types/hero";

const hero: HeroElementProp = {
  subtitle: "Linguistic Portfolio of Precision",

  title: ["The Art of", "Accurate", "Flow"],

  description:
    "Explore a curated collection of translation, localization, proofreading, and multilingual communication projects crafted with cultural precision, linguistic excellence, and complete confidentiality.",

  mainButton: "Explore Portfolio",

  secondaryButton: "View Case Studies",
};

export default function PortfolioSection() {
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