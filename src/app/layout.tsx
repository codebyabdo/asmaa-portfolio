import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Header } from "@/components/layout/header/header";
import CustomCursor from "@/components/effects/CustomCursor";
import LenisProvider from "@/providers/lenis-provider";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import {
  Inter_Tight,
  Space_Grotesk,
  Cormorant_Garamond,
} from "next/font/google";
import { domAnimation, LazyMotion } from "framer-motion";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asmaaadel.vercel.app";

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
});

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Asmaa Adel | Professional Translator",
    template: "%s | Asmaa Adel",
  },

  description:
    "Professional English–Arabic translator specializing in translation, localization, proofreading, and linguistic consulting.",

  applicationName: "Asmaa Adel",

  authors: [
    {
      name: "Asmaa Adel",
      url: SITE_URL,
    },
  ],

  creator: "Asmaa Adel",

  publisher: "Asmaa Adel",

  generator: "Next.js 15",

  category: "Translation",

  classification: "Professional Translation Portfolio",

  keywords: [
    "Translator",
    "English Arabic Translation",
    "Arabic Translator",
    "Localization",
    "Localization Specialist",
    "Proofreading",
    "Translation Services",
    "Linguistic Consultant",
    "Freelance Translator",
    "English Translator",
    "Arabic Localization",
  ],

  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
    },
  },

  referrer: "origin-when-cross-origin",

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],

    shortcut: "/favicon.ico",

    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/manifest.webmanifest",

  openGraph: {
    type: "website",

    url: SITE_URL,

    title: "Asmaa Adel | Professional Translator",

    description:
      "Professional English–Arabic translation, localization, proofreading, and linguistic consulting services.",

    siteName: "Asmaa Adel",

    locale: "en_US",

    countryName: "Egypt",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Asmaa Adel Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Asmaa Adel | Professional Translator",

    description:
      "Professional English–Arabic translation, localization, proofreading, and linguistic consulting services.",

    images: ["/og-image.jpg"],
  },

  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  // },

  other: {
    "color-scheme": "light",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Asmaa Adel",

  url: SITE_URL,

  image: `${SITE_URL}/og-image.jpg`,

  jobTitle: "Professional English–Arabic Translator",

  description:
    "Professional English–Arabic translator specializing in translation, localization, proofreading, and linguistic consulting.",

  knowsAbout: [
    "Translation",
    "Localization",
    "Proofreading",
    "Transcreation",
    "Arabic",
    "English",
  ],

  nationality: "Egypt",

  sameAs: [],

  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`
        ${inter.variable}
        ${space.variable}
        ${cormorant.variable}
      `}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <LazyMotion features={domAnimation}>
          <CustomCursor />

          <Header />

          <main className="relative">
            <LenisProvider>{children}</LenisProvider>
          </main>

          <div className="fixed inset-0 pointer-events-none z-999 opacity-[0.04] mix-blend-overlay grain-overlay" />

          <Analytics />

          <SpeedInsights />
        </LazyMotion>
      </body>
    </html>
  );
}
