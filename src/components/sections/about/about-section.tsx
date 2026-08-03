"use client";

import PageTransition from "@/components/effects/PageTransition";

import { ImageValuesSection } from "./image-values-section";
import { EditorialHeader } from "./editorial-header";
import { TimelineSection } from "./timeline-section";

export default function AboutSection() {
  return (
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
  );
}
