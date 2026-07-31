import ExperienceSection from "@/components/sections/experience/experience-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Discover Asmaa Adel's professional experience, industries served, and expertise across translation and localization projects.",
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
  return <ExperienceSection />;
}
