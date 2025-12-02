"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "components/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full bg-white dark:bg-gray-900 fixed top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/sabati/logo-sabati.png"
            alt="Sabati Couture"
            width={48}
            height={48}
          />
          <span className="font-serif text-xl dark:text-white">Sabati Couture</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 font-medium dark:text-white">
          <Link href="#realisations" className="hover:text-gold">Réalisations</Link>
          <Link href="#services" className="hover:text-gold">Services</Link>
          <Link href="#valeurs" className="hover:text-gold">Valeurs</Link>
          <Link href="#choisir" className="hover:text-gold">Pourquoi nous choisir</Link>
          <Link href="#apropos" className="hover:text-gold">À propos</Link>
          <Link href="#contact" className="hover:text-gold">Contact</Link>

          <button
            onClick={toggleTheme}
            className="px-3 py-2 border rounded dark:border-gray-400"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl dark:text-white"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
