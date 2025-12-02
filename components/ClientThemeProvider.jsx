"use client";

import { useEffect, useState } from "react";

export default function ClientThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
      {children &&
        React.cloneElement(children, {
          toggleTheme,
          theme,
        })}
    </>
  );
}
