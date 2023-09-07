import NavAccordion from "./Accordion";
import { Heart } from "lucide-react";

export default async function Nav({
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
  return (
    <nav
      className={
        "hidden h-fitToHeader flex-col justify-between overflow-y-auto bg-slate-900 px-3 text-white lg:flex"
      }
    >
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
    </nav>
  );
}
