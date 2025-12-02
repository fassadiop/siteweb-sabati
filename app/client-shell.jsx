"use client";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { ThemeProvider } from "components/ThemeContext";

export default function ClientShell({ children }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
