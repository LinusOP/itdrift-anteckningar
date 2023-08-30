import { courseCodes } from "@/config/courses";
import { getPostData, getPostFromSlug } from "@/lib/api";
import NavAccordion from "../Accordion";
import { Heart } from "lucide-react";

export default async function Nav() {
  const data = await getPostData();
  const formattedData = Object.entries(courseCodes).map(
    ([courseCode, courseName]) => ({
      name: courseName,
      code: courseCode,
      posts: data
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
    <div className="flex h-fitToHeader flex-col justify-between overflow-y-auto bg-slate-900 px-3 text-white">
      <NavAccordion items={formattedData} />
      <div className="flex justify-center gap-1 pb-4">
        Skapad med <Heart className="text-red-600" /> av Linus OP -{" "}
        <a
          href="https://github.com/LinusOP/itdrift-anteckningar"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Se koden
        </a>
      </div>
    </div>
  );
}
