import { getPostFromSlug, getPostData } from "@/lib/api";
import ReactMarkdown from "react-markdown";
import remarkGFM from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeExternalLinks from "rehype-external-links";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as style } from "react-syntax-highlighter/dist/esm/styles/prism";

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
    <ReactMarkdown
      className="prose-defaults scrollbar-styles mx-auto h-fitToHeader !max-w-none overflow-y-auto bg-slate-800 px-5 py-3 prose-headings:my-2 prose-h1:text-center prose-code:rounded prose-code:border prose-code:border-slate-600 prose-code:bg-black/50 prose-code:px-1 prose-code:py-0.5 prose-pre:w-fit prose-pre:border prose-pre:border-slate-600 prose-pre:p-2 prose-pre:text-[1em] prose-pre:font-semibold prose-pre:text-white *:prose-pre:border-none *:prose-pre:bg-transparent *:prose-pre:px-0 *:prose-pre:py-0 prose-table:w-fit prose-thead:text-center"
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
        [
          rehypeExternalLinks,
          {
            target: "_blank",
          },
        ],
      ]}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            // @ts-expect-error
            <SyntaxHighlighter
              {...rest}
              language={match[1]}
              style={style}
              customStyle={{ background: "transparent", padding: 0, margin: 0 }}
              codeTagProps={{
                style: {
                  background: "transparent",
                },
              }}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
