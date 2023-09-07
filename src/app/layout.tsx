import "./globals.css";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/react";
import NavStateProvider from "@/utils/navContext";
import MobileNav from "@/components/MobileNav";
import { getPostData, getPostFromSlug } from "@/lib/api";
import { courseCodes } from "@/config/courses";

const font = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "IT-Drifttekniker - Anteckningar",
};

export const dynamic = "error";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const postData = await getPostData();
  const formattedData = Object.entries(courseCodes).map(
    ([courseCode, courseName]) => ({
      name: courseName,
      code: courseCode,
      posts: postData
        .filter((post) => post.course === courseCode)
        .map((post) => ({
          fileName: post.fileName,
          title: getPostFromSlug(post).data.title,
        }))
        .sort((a, b) => {
          const numRegex = /^.+_([0-9]+)\.md$/;
          const matchA = a.fileName.match(numRegex);
          const matchB = b.fileName.match(numRegex);

          if (!matchA || !matchB) return 0;

          return parseInt(matchA[1]) - parseInt(matchB[1]);
        }),
    }),
  );

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${font.variable} bg-slate-800 font-sans`}>
        <div className="relative grid h-[100dvh] w-[100dvw] grid-cols-1 grid-rows-[theme(spacing.20),_1fr] overflow-x-hidden lg:grid-cols-[theme(spacing.96),_1fr]">
          <NavStateProvider>
            <Header />
            <MobileNav formattedData={formattedData} />
          </NavStateProvider>
          <Nav formattedData={formattedData} />
          <main>{children}</main>
        </div>
        {/* Privacy focused and anonymous data gathering */}
        <Analytics />
      </body>
    </html>
  );
}
