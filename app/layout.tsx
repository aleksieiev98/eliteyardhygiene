import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Cormorant_Garamond, Urbanist } from "next/font/google";
import type { ReactNode } from "react";

import { QueryProvider } from "@/components/query-provider";
import { ScrollEffects } from "@/components/scroll-effects";
import { SiteChrome } from "@/components/site-chrome";

import "./reset.css";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sans = Urbanist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eliteyardhygiene.com"),
  title: {
    default: "Elite Yard Hygiene | Pet Waste Removal in Chicago Northwest Suburbs",
    template: "%s | Elite Yard Hygiene",
  },
  description:
    "Elite Yard Hygiene provides weekly and one-time dog poop cleanup for homes in Buffalo Grove, Wheeling, Palatine, Arlington Heights, Mount Prospect, Des Plaines, Schaumburg, Elk Grove Village, and Hoffman Estates.",
  applicationName: "Elite Yard Hygiene",
  keywords: [
    "pet waste removal",
    "dog poop cleanup",
    "pooper scooper service",
    "yard cleanup service",
    "Buffalo Grove pet waste removal",
    "Arlington Heights dog poop cleanup",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Elite Yard Hygiene",
    description:
      "Locally trusted pet waste removal for clean yards, happy dogs, and stress-free schedules.",
    url: "https://eliteyardhygiene.com",
    siteName: "Elite Yard Hygiene",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/icon.svg",
        alt: "Elite Yard Hygiene paw logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Yard Hygiene",
    description:
      "Weekly and one-time pet waste removal for homes across Chicago's northwest suburbs.",
    images: ["/icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${display.variable} ${sans.variable}`}>
        <QueryProvider>
          <ScrollEffects />
          <SiteChrome />
          {children}
        </QueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
