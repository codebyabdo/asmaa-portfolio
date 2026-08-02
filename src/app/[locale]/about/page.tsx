import AboutSection from "@/components/sections/about/about-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Asmaa Adel, her professional journey, expertise, and approach to translation and localization.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutSection />;
}
