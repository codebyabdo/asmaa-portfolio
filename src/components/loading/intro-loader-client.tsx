"use client";

import dynamic from "next/dynamic";

const IntroLoader = dynamic(
  () =>
    import("@/components/loading/intro-loader").then((m) => ({
      default: m.IntroLoader,
    })),
  {
    ssr: false,
  }
);

export default function IntroLoaderClient() {
  return <IntroLoader />;
}