"use client";

import PageTransition from "@/components/effects/PageTransition";
import { BeforeAfterStudies } from "./before-after";
import { SecureInterface } from "./Secure-interface";
import { LazyMotion, domAnimation, m } from "framer-motion";

const avatars = Array.from({ length: 3 }, (_, i) => i);

export default function CaseStudiesSection() {
  return (
    <LazyMotion features={domAnimation}>
      <PageTransition>
        <main
          className="px-6 pt-36 pb-32"
          aria-labelledby="case-studies-heading"
        >
          <div className="mx-auto max-w-7xl">
            {/* Hero */}
            <header className="mb-32">
              <m.h1
                id="case-studies-heading"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-serif text-6xl leading-none tracking-tight sm:text-7xl lg:text-[10vw]"
              >
                The <span className="italic">Evidence.</span>
              </m.h1>

              <div className="mt-12 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
                <p className="max-w-2xl text-lg leading-relaxed font-light text-luxury-charcoal/60 md:text-xl">
                  Strategic case studies demonstrating how precision
                  translation, localization, and cultural adaptation transform
                  international communication into measurable business impact.
                </p>

                <aside
                  aria-label="Portfolio statistics"
                  className="flex items-center gap-6"
                >
                  <div className="flex -space-x-4" aria-hidden="true">
                    {avatars.map((avatar) => (
                      <div
                        key={avatar}
                        className="h-12 w-12 rounded-full border-4 border-luxury-ivory bg-luxury-gold/20 backdrop-blur-md"
                      />
                    ))}
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-luxury-gold">
                      50+ Global Successes
                    </p>

                    <p className="mt-2 text-sm text-luxury-charcoal/45">
                      Confidential localization projects across multiple
                      industries.
                    </p>
                  </div>
                </aside>
              </div>
            </header>

            {/* Before / After */}
            <BeforeAfterStudies />

            {/* Secure Viewer */}
            <SecureInterface />
          </div>
        </main>
      </PageTransition>
    </LazyMotion>
  );
}
