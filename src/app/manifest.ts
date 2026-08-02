import type { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  // Pick a locale that is representative of the app
  const locale = "en";

  const t = await getTranslations({
    namespace: "Manifest",
    locale,
  });
  return {
    id: "/",

    name: "Asmaa Adel | Professional Translator",

    short_name: "Asmaa",

    description:
      "Professional English-Arabic translation, localization, proofreading, and linguistic consulting services.",

    start_url: "/",

    scope: "/",

    display: "standalone",

    orientation: "portrait",

    background_color: "#FDFBF7",

    theme_color: "#FDFBF7",

    lang: "en-US",

    categories: ["business", "productivity", "portfolio", "education"],

    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
