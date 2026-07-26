import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Asmaa Adel | Professional Translator",
    short_name: "Asmaa",
    description:
      "Professional English-Arabic translation, localization, proofreading, and linguistic consulting services.",

    start_url: "/",

    scope: "/",

    display: "standalone",

    orientation: "portrait",

    background_color: "#ffffff",

    theme_color: "#ffffff",

    lang: "en",

    categories: ["business", "productivity"],

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}