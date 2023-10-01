"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const currentPage = usePathname();
  console.log(currentPage);

  return (
    <header className="h-16 bg-white shadow-sm flex items-center justify-between px-5">
      <div>
        <Link href="/">logo</Link>
      </div>
      <nav>
        <ul className="flex flex-row gap-3">
          <li>
            <Link href="/sign-in">ingresar</Link>
          </li>
          <li>
            <Link href="/sign-up">registrarse</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
