"use client";

import { NavStateContext } from "@/utils/navContext";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import NavAccordion from "./Accordion";
import { Heart } from "lucide-react";

export default function MobileNav({
  formattedData,
}: {
  formattedData: {
    name: string;
    code: string;
    posts: {
      fileName: string;
      title: string;
    }[];
  }[];
}) {
  const { navOpen, toggle } = useContext(NavStateContext);

  return (
    <nav
      className={twMerge(
        "absolute bottom-0 left-0 z-10 flex h-fitToHeader w-full flex-col justify-between overflow-y-auto bg-slate-900 px-3 text-white transition-transform sm:hidden",
        !navOpen && "translate-x-full",
      )}
    >
      <NavAccordion items={formattedData} toggle={() => toggle(!navOpen)} />
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
    </nav>
  );
}
