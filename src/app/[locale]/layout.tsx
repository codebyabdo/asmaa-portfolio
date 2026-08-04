import type { Metadata, Viewport } from "next";

import { Header } from "@/components/layout/header/header";
import LenisProvider from "@/providers/lenis-provider";
import DirectionProvider from "@/providers/DirectionProvider";

import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import { hasLocale, NextIntlClientProvider } from "next-intl";

import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://asmaaadel.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#0a0a0a",
    },
  ],
  colorScheme: "light",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "metadata",
  });

  return {
    metadataBase: new URL(SITE_URL),

    title: {
      default: t("title.default"),
      template: t("title.template"),
    },

    description: t("description"),

    applicationName: t("applicationName"),

    authors: [
      {
        name: "Asmaa Adel",
        url: SITE_URL,
      },
    ],

    creator: "Asmaa Adel",

    publisher: "Asmaa Adel",

    category: t("category"),

    manifest: "/manifest.webmanifest",

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        en: `${SITE_URL}/en`,
        ar: `${SITE_URL}/ar`,
      },
    },

    openGraph: {
      type: "website",
      url: `${SITE_URL}/${locale}`,
      title: t("title.default"),
      description: t("description"),
      siteName: t("siteName"),
      locale: locale === "ar" ? "ar_EG" : "en_US",

      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Asmaa Adel",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: t("title.default"),
      description: t("description"),
      images: ["/og-image.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const t = await getTranslations({
    locale,
    namespace: "metadata",
  });

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Asmaa Adel",

    url: SITE_URL,

    image: `${SITE_URL}/og-image.jpg`,

    jobTitle: t("jobTitle"),

    description: t("personDescription"),

    knowsLanguage: ["English", "Arabic"],

    sameAs: [
      // Add Social URLs Here
      // "https://www.linkedin.com/in/...",
      // "https://www.instagram.com/...",
    ],
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      <DirectionProvider />

      <div className="relative">
        <Header />

        <LenisProvider>{children}</LenisProvider>
      </div>

      <div className="pointer-events-none fixed inset-0 z-[999] opacity-[0.04] mix-blend-overlay grain-overlay" />

      <Analytics />

      <SpeedInsights />
    </NextIntlClientProvider>
  );
}
