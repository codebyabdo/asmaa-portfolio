import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";

const SITE_URL = "https://asmaaadel.vercel.app";

const routes = [
  {
    href: "/",
    priority: 1,
    changeFrequency: "monthly",
  },
  {
    href: "/about",
    priority: 0.8,
    changeFrequency: "yearly",
  },
  {
    href: "/services",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    href: "/portfolio",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    href: "/case-studies",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    href: "/experience",
    priority: 0.8,
    changeFrequency: "yearly",
  },
  {
    href: "/testimonials",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    href: "/contact",
    priority: 0.7,
    changeFrequency: "yearly",
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return Promise.all(
    routes.map(async (route) => ({
      url: `${SITE_URL}${route.href}`,
      lastModified: new Date(),

      changeFrequency: route.changeFrequency as
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never",

      priority: route.priority,

      alternates: {
        languages: {
          en:
            SITE_URL +
            (await getPathname({
              locale: "en",
              href: route.href,
            })),

          ar:
            SITE_URL +
            (await getPathname({
              locale: "ar",
              href: route.href,
            })),
        },
      },
    }))
  );
}