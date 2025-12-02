// 🚫 PAS DE "use client" ICI

import "./globals.css";

// ✔️ Navbar et Footer sont importés normalement : 
// ils peuvent être client components, c’est autorisé.
// Next.js encapsule automatiquement.
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import ThemeProvider from "components/ThemeProvider"; // pour dark mode (client)

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
        {/* 🚨 TOUT LE CODE CLIENT DOIT ÊTRE DANS CE COMPOSANT */}
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
