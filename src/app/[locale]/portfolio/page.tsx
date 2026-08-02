import type { Metadata } from "next";
import PortfolioSection from "@/components/sections/portfolio/portfolio-section";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore translation, localization and proofreading projects delivered by Asmaa Adel.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioSection />;
}