"use client";

import PageTransition from "@/components/effects/PageTransition";

import { ImageValuesSection } from "./image-values-section";
import { EditorialHeader } from "./editorial-header";
import { TimelineSection } from "./timeline-section";
import { domAnimation, LazyMotion } from "framer-motion";

export default function AboutSection() {
  return (
    <LazyMotion features={domAnimation}>
      <PageTransition>
        <main
          className="
                min-h-screen
                px-6
                pt-36
                pb-24
              "
        >
          <div
            className="
                  mx-auto
                  max-w-7xl
                "
          >
            <EditorialHeader />

            <ImageValuesSection />

            <TimelineSection />
          </div>
        </main>
      </PageTransition>
    </LazyMotion>
  );
}
