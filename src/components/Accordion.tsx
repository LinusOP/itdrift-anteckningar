"use client";
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NavAccordion({
  items,
}: {
  items: {
    name: string;
    code: string;
    posts: {
      title: string;
      fileName: string;
    }[];
  }[];
}) {
  const pathname = usePathname();

  return (
    <Accordion.Root
      type="multiple"
      defaultValue={[pathname.split("/")[1] ?? null]}
    >
      {items.map(({ code, name, posts }) => (
        <Accordion.Item
          value={code}
          key={code}
          className="group overflow-hidden border-b last-of-type:border-b-0 focus-within:relative focus-within:z-10"
        >
          <Accordion.Trigger className="flex w-full items-center justify-between gap-1 py-3 text-left">
            {name}{" "}
            <ChevronDown className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
          <Accordion.Content asChild>
            <ul className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp mb-3 ml-5 overflow-hidden border-l pl-5">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <li
                    key={post.fileName}
                    className="border-b last-of-type:border-b-0"
                  >
                    <Link
                      href={`/${code}/${post.fileName}`}
                      className="block py-2"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li>Här finns inga anteckningar än</li>
              )}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
