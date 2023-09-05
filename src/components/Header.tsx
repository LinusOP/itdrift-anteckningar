"use client";

import Link from "next/link";
import { PenSquare, Menu, X } from "lucide-react";
import { useContext } from "react";
import { NavStateContext } from "@/utils/navContext";

export default function Header() {
  const { navOpen, toggle } = useContext(NavStateContext);

  return (
    <header className="col-span-2 flex h-20 items-center justify-between bg-slate-950 px-5 text-white">
      <Link href="/" className="flex items-center gap-2">
        <PenSquare size={48} />
        <span className="hidden text-5xl font-extrabold md:inline">
          IT-Drifttekniker - Anteckningar
        </span>
      </Link>
      <div className="block sm:hidden">
        {navOpen ? (
          <X size={48} onClick={() => toggle(!navOpen)} />
        ) : (
          <Menu size={48} onClick={() => toggle(!navOpen)} />
        )}
      </div>
    </header>
  );
}
