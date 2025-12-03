export default function Footer() {
  return (
    <footer className="mt-32 bg-black dark:bg-gray-950 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Ligne principale */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* © droits */}
          <p className="text-sm tracking-wide text-center md:text-left">
            © {new Date().getFullYear()} Dudam Créations — Tous droits réservés.
          </p>

          {/* Separator mobile */}
          <div className="w-full h-px bg-gray-800 md:hidden"></div>

          {/* Signature premium */}
          <a
            href="https://tech4fisheries.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm tracking-wide hover:text-white transition"
          >
            <span className="opacity-80">Conçu par</span>
            <span className="text-lg">✨</span>
            <span className="font-semibold">Tech4Fisheries</span>
          </a>

        </div>

        {/* Ligne fine */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          Excellence • Tradition • Savoir-faire
        </div>

      </div>
    </footer>
  );
}
