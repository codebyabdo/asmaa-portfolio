import TestimonialsSection from "@/components/sections/testimonials/testimonials-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read testimonials and feedback from clients who trusted Asmaa Adel with their translation and localization projects.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return <TestimonialsSection />;
}
