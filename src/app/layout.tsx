import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Header } from "@/components/layout/header/header";
import CustomCursor from "@/components/effects/CustomCursor";
import LenisProvider from "@/providers/lenis-provider";

import {
  Inter_Tight,
  Space_Grotesk,
  Cormorant_Garamond,
} from "next/font/google";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://asmaaadel.vercel.app";

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
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

  category: "Translation",

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
  ],

  alternates: {
    canonical: "/",
  },

  referrer: "origin-when-cross-origin",

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

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],

    apple: "/apple-icon.png",

    shortcut: "/favicon.ico",
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
      "Professional English–Arabic translation and localization services.",

    images: ["/og-image.jpg"],

    site: "@asmaaadel",
    creator: "@asmaaadel",
  },

  // أضفها بعد تفعيل Google Search Console
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  // },
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
        scroll-smooth
      `}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <CustomCursor />

        <Header />

        <main className="relative">
          <LenisProvider>{children}</LenisProvider>
        </main>

        {/* Cinematic Grain */}
        <div className="fixed inset-0 pointer-events-none z-999 opacity-[0.04] mix-blend-overlay grain-overlay" />
      </body>
    </html>
  );
}
