"use client";

import { useEffect, useState } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export default function ClientWrapper({ children }) {
  const [theme, setTheme] = useState("light");

  // Charger le thème
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Basculer le thème
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
