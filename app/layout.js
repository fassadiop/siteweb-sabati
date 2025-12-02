"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

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
  const [theme, setTheme] = useState("light");

  // Charger le thème (persisté)
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  // Basculer le thème
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <html lang="fr">
      <body className="bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
