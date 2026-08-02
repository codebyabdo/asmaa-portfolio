import ContactSection from "@/components/sections/contact/contact-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Asmaa Adel for translation, localization, proofreading, and language consulting services.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactSection />;
}
