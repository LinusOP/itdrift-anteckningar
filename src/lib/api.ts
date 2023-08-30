import fs from "fs";
import path from "path";
import { glob } from "glob";
import matter from "gray-matter";

export async function getPostData() {
  const postPaths = await glob("src/posts/*/*.md");

  const treatedData = postPaths
    .map((postPath) => postPath.split(path.sep))
    .map((pathArray) => pathArray.slice(2))
    .map((pathArray) => ({
      course: pathArray[0],
      fileName: pathArray[1],
    }));

  return treatedData;
}

export function getPostFromSlug({
  course,
  fileName,
}: {
  course: string;
  fileName: string;
}) {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "src", "posts", course, fileName),
    {
      encoding: "utf-8",
    },
  );
  return matter(raw);
}
