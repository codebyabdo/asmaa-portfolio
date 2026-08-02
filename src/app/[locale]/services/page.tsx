import { ServicesSection } from "@/components/sections/services/services-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discover professional translation, localization, proofreading, editing, and linguistic consulting services by Asmaa Adel.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesSection />;
}
