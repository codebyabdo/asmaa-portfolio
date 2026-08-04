import type { Metadata } from "next";
import "./globals.css";

import CustomCursor from "@/components/effects/CustomCursor";
import IntroLoader from "@/components/loading/intro-loader";
import MotionProvider from "@/providers/motion-provider";

import {
  Inter_Tight,
  Space_Grotesk,
  Cormorant_Garamond,
  IBM_Plex_Sans_Arabic,
  Ruwudu,
} from "next/font/google";

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body-en",
  display: "swap",
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-body-ar",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading-en",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ruwudu = Ruwudu({
  subsets: ["arabic"],
  variable: "--font-heading-ar",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asmaaadel.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${inter.variable}
        ${ibmArabic.variable}
        ${cormorant.variable}
        ${ruwudu.variable}
        ${space.variable}
      `}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>

      <body className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-9999 rounded-md bg-black px-4 py-2 text-white "
        >
          Skip to content
        </a>

        <MotionProvider>
          <IntroLoader />

          <CustomCursor />

          <main id="main-content">{children}</main>
        </MotionProvider>
      </body>
    </html>
  );
}
