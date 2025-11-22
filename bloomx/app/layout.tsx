import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoveKundliPage from "./love-kundli/page";
// removed unused import of About page

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Love Kundli",
  description: "Generate Love Kundli based on Vedic Astrology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*<Link href="/">home</Link> |   
        <Link href="/about"> about</Link>*/}

        {<LoveKundliPage />}
      </body>
    </html>
  );
}
