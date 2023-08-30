import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Nav from "@/components/nav/Nav";
import { Analytics } from "@vercel/analytics/react";

const font = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "IT-Drifttekniker - Anteckningar",
};

export const dynamic = "error";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${font.variable} grid grid-cols-[theme(spacing.80),_1fr] grid-rows-[theme(spacing.20),_1fr] overflow-hidden bg-slate-800 font-sans`}
      >
        <Header />
        <Nav />
        <main>{children}</main>
        {/* Privacy focused and anonymous data gathering */}
        <Analytics />
      </body>
    </html>
  );
}
