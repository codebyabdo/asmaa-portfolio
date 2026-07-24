"use client";

import { EditorialHeader } from "@/components/sections/about/editorial-header";
import { ImageValuesSection } from "@/components/sections/about/image-values-section";
import { TimelineSection } from "@/components/sections/about/timeline-section";
import PageTransition from "@/components/effects/PageTransition";

export default function AboutPage() {
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
