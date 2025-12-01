"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white fixed top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/sabati/logo-sabati.png" alt="Sabati Couture" width={48} height={48} />
          <span className="font-serif text-xl text-black">Sabati Couture</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="#realisations" className="hover:text-gold">Réalisations</Link>
          <Link href="#services" className="hover:text-gold">Services</Link>
          <Link href="#apropos" className="hover:text-gold">À propos</Link>
          <Link href="#contact" className="hover:text-gold">Contact</Link>
          <Link href="/galerie" className="px-4 py-2 bg-black text-white rounded">Galerie</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow px-6 pb-4 space-y-2">
          <Link href="#realisations" className="block">Réalisations</Link>
          <Link href="#services" className="block">Services</Link>
          <Link href="#apropos" className="block">À propos</Link>
          <Link href="#contact" className="block">Contact</Link>
          <Link href="/galerie" className="block">Galerie</Link>
        </div>
      )}
    </nav>
  );
}
