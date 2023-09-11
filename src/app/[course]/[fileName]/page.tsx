import { getPostFromSlug, getPostData } from "@/lib/api";
import ReactMarkdown from "react-markdown";
import remarkGFM from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";

type PageProps = {
  params: {
    course: string;
    fileName: string;
  };
};

export { getPostData as generateStaticParams };

export const dynamicParams = false;

export default async function Page({ params }: PageProps) {
  const { content } = getPostFromSlug(params);

  return (
    <>
      <ReactMarkdown
        className="prose-defaults scrollbar-styles mx-auto h-fitToHeader !max-w-none overflow-y-auto bg-slate-800 px-5 py-3 prose-headings:my-2 prose-h1:text-center prose-table:w-fit prose-thead:text-center"
        remarkPlugins={[remarkGFM, remarkMath]}
        rehypePlugins={[
          [
            rehypeKatex,
            {
              macros: { ",": "{\\char`,}" },
              trust: true,
              fleqn: true,
              strict: false,
            },
          ],
        ]}
      >
        {content}
      </ReactMarkdown>
    </>
  );
}
