import "./globals.css";

// ⛔️ NE PAS IMPORTER Navbar ou Footer ici !
// Sinon Next.js pense que layout.js est un composant client.

export const metadata = {
  title: "Sabati Couture — Mode et tradition d’exception",
  description:
    "Toges magistrales, universitaires et habits d’apparat — confection premium internationale.",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/sabati/logo-sabati.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* On importe les composants client APRÈS metadata */}
        {/* On les inclut via une dynamique "client boundary" */}
        <ClientShell>
          {children}
        </ClientShell>
      </body>
    </html>
  );
}

/* -------------------------------------------
   🔥 Wrapper qui charge Navbar + Footer (client)
-------------------------------------------- */
import ClientShell from "./client-shell";
