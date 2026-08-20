"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Association", href: "/association" },
  { label: "Formations", href: "/formations" },
  { label: "Baptêmes", href: "/baptemes" },
  { label: "Blog", href: "/blog" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-[#0B1F2E] text-[#EDE6D6] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
     <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <Image
            src="/images/icon.png"
            alt="Explomed36"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="font-display text-xl font-bold tracking-wide">
            Explomed<span className="text-[#E85D3D]">36</span>
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex gap-6 text-sm uppercase tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                pathname === item.href
                  ? "text-[#2DD4BF]"
                  : "hover:text-[#2DD4BF]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bouton hamburger, mobile uniquement */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden flex flex-col gap-1.5 w-7"
  aria-label="Ouvrir le menu"
>
  <span
    className={`block w-full h-0.5 bg-[#EDE6D6] transition-transform ${
      menuOpen ? "rotate-45 translate-y-2" : ""
    }`}
  />
  <span
    className={`block w-full h-0.5 bg-[#EDE6D6] transition-opacity ${
      menuOpen ? "opacity-0" : ""
    }`}
  />
  <span
    className={`block w-full h-0.5 bg-[#EDE6D6] transition-transform ${
      menuOpen ? "-rotate-45 -translate-y-2" : ""
    }`}
  />
</button>
      </div>

      {/* Nav mobile, dépliée */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col px-6 pb-6 gap-4 text-sm uppercase tracking-wide border-t border-[#1B7A72]/30 pt-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={
                pathname === item.href ? "text-[#2DD4BF]" : "text-[#EDE6D6]"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}