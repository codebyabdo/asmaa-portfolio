import CaseStudiesSection from "@/components/sections/case-studies/case-studies-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore detailed case studies showcasing translation strategy, localization workflows, and cultural adaptation projects.",
  alternates: {
    canonical: "/case-studies",
  },
};
export default function CaseStudiesPage() {
  return <CaseStudiesSection />;
}
