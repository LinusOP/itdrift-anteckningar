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
import { categoryConfig } from "@/config/categories";

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
      // The below is very confusing, I know...
      posts: Object.entries(
        postData
          // We only want the posts for this course
          .filter((postEntry) => postEntry.course === courseCode)
          // Get all the post data for each post in this course
          .map((postEntry) => {
            const post = getPostFromSlug(postEntry);

            return {
              fileName: postEntry.fileName,
              title: post.data.title,
              order: post.data.order,
            };
          })
          // Group the posts by the first part of the filename, e.g intro_forelasning_1.md -> intro
          // Creates an object with each first part (or category) and its corresponding array of posts
          .reduce<
            Record<
              string,
              {
                fileName: string;
                title: string;
                order: number | undefined;
              }[]
            >
          >((grouped, post) => {
            const postCat = post.fileName.split("_")[0];

            return {
              ...grouped,
              [postCat]: [...(grouped[postCat] || []), post],
            };
          }, {}),
      )
        // Sort the posts by their category in alphabetical order or their defined order number if there is one
        .sort((a, b) => {
          const catA = a[0];
          const catB = b[0];
          const aOrder =
            categoryConfig[catA]?.order ?? catA.localeCompare(catB);
          const bOrder =
            categoryConfig[catB]?.order ?? catB.localeCompare(catA);

          return aOrder - bOrder;
        })
        // Turn the posts in to one big array where each category is internally sorted by the posts order
        .flatMap(([_, posts]) =>
          posts.sort((a, b) => {
            // Sort the posts of each category and then flatten them to one big array of posts
            const aOrder = a.order ?? 0;
            const bOrder = b.order ?? 0;

            return aOrder - bOrder;
          }),
        ),
    }),
  );

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${font.variable} bg-slate-800 font-sans`}>
        <div className="relative grid h-[100dvh] w-[100dvw] grid-cols-1 grid-rows-[theme(spacing.20),_1fr] overflow-hidden lg:grid-cols-[theme(spacing.96),_1fr]">
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
