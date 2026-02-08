import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ENKRYX — Your idea deserves a proper system.",
  description: "We design and build simple, reliable software that keeps your business moving.",
  openGraph: {
    title: "ENKRYX — Software & Web Solutions",
    description: "Your idea deserves a proper system. Reliable software for your business.",
    type: "website",
    locale: "en_US",
    url: "https://enkryx.com",
    siteName: "ENKRYX",
  },
};

import TawkChat from "@/components/TawkChat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased font-inter">
        {children}
        <TawkChat />
      </body>
    </html>
  );
}
