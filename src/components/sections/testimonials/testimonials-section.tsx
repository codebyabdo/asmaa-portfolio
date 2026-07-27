"use client";

import PageTransition from "@/components/effects/PageTransition";
import { TestimonialsCards } from "./testimonials-cards";
import { TestimonialsFloating } from "./testimonials-floating";
import { domAnimation, LazyMotion } from "framer-motion";

export default function TestimonialsSection() {
  return (
    <LazyMotion features={domAnimation}>
      <PageTransition>
        <div className="pt-40 pb-32 px-6 bg-luxury-charcoal text-white min-h-screen relative overflow-hidden">
          {/* Background Ambience */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#D4AF37,transparent_60%)]" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-32">
              <h1 className="text-7xl md:text-9xl font-serif mb-8">
                Voices of{" "}
                <span className="italic text-luxury-gold">Trust.</span>
              </h1>
              <p className="max-w-xl mx-auto text-white/50 font-light text-xl">
                Real feedback from international partners and industry leaders.
              </p>
            </div>

            <TestimonialsCards />

            {/* Luxury Logo Cloud */}
            <TestimonialsFloating />
          </div>
        </div>
      </PageTransition>
    </LazyMotion>
  );
}
