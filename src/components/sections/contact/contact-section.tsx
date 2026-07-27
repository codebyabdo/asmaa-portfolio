"use client";

import PageTransition from "@/components/effects/PageTransition";
import { ContactForm } from "./contact-form";
import { SocialLink } from "./social-link";
import { domAnimation, LazyMotion } from "framer-motion";

export default function ContactSection() {
  return (
    <LazyMotion features={domAnimation}>

    <PageTransition>
      <main className="px-6 pt-40 pb-32">
        <div className="mx-auto max-w-7xl">
          <section className="grid grid-cols-1 gap-24 lg:grid-cols-2">
            <SocialLink />

            <ContactForm />
          </section>

          <footer className="mt-32 flex flex-col items-center justify-between gap-6 border-t border-luxury-charcoal/10 py-10 md:flex-row">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-charcoal/65">
              © 2026 Asmaa Adel. All Rights Reserved.
            </p>

            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-charcoal/65">
              Designed & Developed with Precision
            </p>
          </footer>
        </div>
      </main>
    </PageTransition>
    </LazyMotion>

  );
}