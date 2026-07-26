import { Hero } from "@/components/sections/home/hero";
import { Floating } from "@/components/sections/home/floating";

import IntroLoaderClient from "@/components/loading/intro-loader-client";
import { domAnimation, LazyMotion } from "framer-motion";

export default function Home() {
  return (
    <>
      <IntroLoaderClient />

      <LazyMotion features={domAnimation}>
        <Hero />

        <Floating />
      </LazyMotion>
    </>
  );
}
