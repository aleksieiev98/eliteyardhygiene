import type { Metadata } from "next";
import { Cormorant_Garamond, Urbanist } from "next/font/google";
import type { ReactNode } from "react";
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
  title: "Elite Yard Hygiene | Premium Pet Waste Removal",
  description:
    "Elite Yard Hygiene keeps residential yards fresh, clean, and ready to enjoy with recurring and one-time pet waste removal.",
  metadataBase: new URL("https://eliteyardhygiene.com"),
  openGraph: {
    title: "Elite Yard Hygiene",
    description:
      "Locally trusted pet waste removal for clean yards, happy dogs, and stress-free schedules.",
    url: "https://eliteyardhygiene.com",
    siteName: "Elite Yard Hygiene",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
