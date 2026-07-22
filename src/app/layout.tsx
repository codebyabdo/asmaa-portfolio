import type { Metadata } from "next";
import "./globals.css";

import { Header } from "@/components/layout/navbar/header";
import CustomCursor from "@/components/ui/CustomCursor";

import {
  Inter_Tight,
  Space_Grotesk,
  Cormorant_Garamond,
} from "next/font/google";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://asmaaadel.com"),

  title: {
    default: "Asmaa Adel | Professional Translator",
    template: "%s | Asmaa Adel",
  },

  description:
    "Premium English-Arabic translation, localization, and linguistic consulting services for global brands.",

  keywords: [
    "Translator",
    "English Arabic Translation",
    "Localization Specialist",
    "Linguistic Consultant",
    "Freelance Translator",
  ],

  authors: [
    {
      name: "Asmaa Adel",
    },
  ],

  creator: "Asmaa Adel",

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
  },

  openGraph: {
    title: "Asmaa Adel | Translator & Localization Specialist",
    description:
      "Professional English-Arabic translation and localization expertise.",
    type: "website",
    locale: "en_US",
    siteName: "Asmaa Adel",
  },

  twitter: {
    card: "summary_large_image",
    title: "Asmaa Adel | Translator",
    description: "Professional translation and localization services.",
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
      suppressHydrationWarning
      className={`
        ${inter.variable}
        ${space.variable}
        ${cormorant.variable}
        scroll-smooth
      `}
    >
      <body
        className="
          min-h-screen
          bg-background
          text-foreground
          font-sans
          antialiased
        "
      >
        <CustomCursor />

        <Header />

        <main className="relative">{children}</main>

        {/* Cinematic Grain */}
        <div
          className="
            fixed
            inset-0
            pointer-events-none
            z-[999]
            opacity-[0.04]
            mix-blend-overlay
            grain-overlay
          "
        />
      </body>
    </html>
  );
}
