import { getPostFromSlug, getPostData } from "@/lib/api";
import ReactMarkdown from "react-markdown";

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
      <ReactMarkdown className="prose prose-invert mx-auto h-fitToHeader max-w-full overflow-y-auto bg-slate-800 px-5 py-3 lg:prose-lg xl:prose-xl prose-headings:my-2 prose-h1:text-center">
        {content}
      </ReactMarkdown>
    </>
  );
}
