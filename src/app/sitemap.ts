import { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";

const SITE_URL = "https://asmaaadel.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: SITE_URL + (await getPathname({ locale: "en", href: "/" })),
          ar: SITE_URL + (await getPathname({ locale: "ar", href: "/" })),
        },
      },
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
      alternates: {
        languages: {
          en: SITE_URL + (await getPathname({ locale: "en", href: "/about" })),
          ar: SITE_URL + (await getPathname({ locale: "ar", href: "/about" })),
        },
      },
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en:
            SITE_URL + (await getPathname({ locale: "en", href: "/services" })),
          ar:
            SITE_URL + (await getPathname({ locale: "ar", href: "/services" })),
        },
      },
    },
    {
      url: `${SITE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en:
            SITE_URL +
            (await getPathname({ locale: "en", href: "/portfolio" })),
          ar:
            SITE_URL +
            (await getPathname({ locale: "ar", href: "/portfolio" })),
        },
      },
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
      alternates: {
        languages: {
          en:
            SITE_URL + (await getPathname({ locale: "en", href: "/contact" })),
          ar:
            SITE_URL + (await getPathname({ locale: "ar", href: "/contact" })),
        },
      },
    },
  ];
}
