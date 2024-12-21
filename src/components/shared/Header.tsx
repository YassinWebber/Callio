import Link from "next/link";
import ModeToggle from "@/components/shared/ModeToggle";
import { LangSwitcher } from "@/components/shared/LangSwitcher";

export default function Header() {
  return (
    <header className="flex min-h-[100px] w-full max-w-[1224px] items-center justify-between px-4 py-6 lg:px-16">
      <Link href={`/`} className="font-sans text-4xl font-extrabold">
        Callio
      </Link>
      <div className="flex items-center gap-2 sm:gap-4">
        <ModeToggle />
        <LangSwitcher />
      </div>
    </header>
  );
}
