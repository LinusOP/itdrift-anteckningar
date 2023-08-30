import Link from "next/link";

export default function Header() {
  return (
    <header className="col-span-2 flex h-20 items-center bg-slate-950 px-5">
      <Link href="/">
        <span className="text-5xl font-extrabold text-white">
          IT-Drifttekniker - Anteckningar
        </span>
      </Link>
    </header>
  );
}
