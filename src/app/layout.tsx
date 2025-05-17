import React from "react";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "SkyDeck - In-Flight Entertainment",
  description: "Next-gen in-flight entertainment system inspired by Apple TV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black text-white">
      <head>
        <style>{`
          body {
            font-family: var(--font-inter), sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(180deg, #0a1a2a 0%, #1a2a4a 100%);
            color: white;
          }
        `}</style>
      </head>
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
