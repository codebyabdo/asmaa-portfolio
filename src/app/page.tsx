"use client";

import { Hero } from "@/components/sections/home/hero";
import { Floating } from "@/components/sections/home/floating";
import { IntroLoader } from "@/components/loading/intro-loader";
import PageTransition from "@/components/effects/PageTransition";
import { useIntroLoader } from "@/hooks/use-intro-loader";

export default function Home() {
  const isLoading = useIntroLoader();

  return (
    <>
      <IntroLoader isLoading={isLoading} />

      <PageTransition>
        <Hero />
        <Floating />
      </PageTransition>
    </>
  );
}