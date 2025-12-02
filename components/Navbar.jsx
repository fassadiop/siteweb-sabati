"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar({ toggleTheme, theme }) {
  const [open, setOpen] = useState(false);


  return (
    <nav className="w-full bg-white fixed top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/sabati/logo-sabati.png"
            alt="Sabati Couture"
            width={48}
            height={48}
          />
          <span className="font-serif text-xl text-black">Sabati Couture</span>
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="#realisations" className="hover:text-gold">Réalisations</Link>
          <Link href="#services" className="hover:text-gold">Services</Link>
          <Link href="#valeurs" className="hover:text-gold">Valeurs</Link>
          <Link href="#choisir" className="hover:text-gold">Pourquoi nous choisir</Link>
          <Link href="#apropos" className="hover:text-gold">À propos</Link>
          <Link href="#contact" className="hover:text-gold">Contact</Link>

          <Link href="/galerie" className="px-4 py-2 bg-black text-white rounded">
            Galerie
          </Link>
          <button
              onClick={toggleTheme}
              className="px-3 py-2 border rounded md:ml-6 dark:border-gray-400"
            >
              {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-white shadow px-6 pb-4 space-y-3 text-base font-medium">

          <Link href="#realisations" className="block" onClick={() => setOpen(false)}>
            Réalisations
          </Link>

          <Link href="#services" className="block" onClick={() => setOpen(false)}>
            Services
          </Link>

          <Link href="#valeurs" className="block" onClick={() => setOpen(false)}>
            Valeurs
          </Link>

          <Link href="#choisir" className="block" onClick={() => setOpen(false)}>
            Pourquoi nous choisir
          </Link>

          <Link href="#apropos" className="block" onClick={() => setOpen(false)}>
            À propos
          </Link>

          <Link href="#contact" className="block" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <Link href="/galerie" className="block" onClick={() => setOpen(false)}>
            Galerie
          </Link>

          <button
            onClick={toggleTheme}
            className="w-full text-left py-2 border rounded dark:border-gray-400"
          >
            {theme === "light" ? "Activer mode sombre 🌙" : "Désactiver mode sombre ☀️"}
          </button>
        </div>
      )}
    </nav>
  );
}
