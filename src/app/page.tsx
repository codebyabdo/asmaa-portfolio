import { Hero } from "@/components/sections/home/hero";
import { Floating } from "@/components/sections/home/floating";

import { domAnimation, LazyMotion } from "framer-motion";
import { IntroLoader } from "@/components/loading/intro-loader";

export default function Home() {
  return (
    <>
      <IntroLoader />

      <LazyMotion features={domAnimation}>
        <Hero />

        <Floating />
      </LazyMotion>
    </>
  );
}
