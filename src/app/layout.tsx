import CustomCursor from "@/components/effects/CustomCursor";
import { IBM_Plex_Sans_Arabic, Ruwudu } from "next/font/google";
import "./globals.css";

import {
  Inter_Tight,
  Space_Grotesk,
  Cormorant_Garamond,
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className={`
    ${inter.variable}
    ${ibmArabic.variable}
    ${cormorant.variable}
    ${ruwudu.variable}
    ${space.variable}
  `}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">

        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
