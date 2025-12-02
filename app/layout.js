import "./globals.css";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { ThemeProvider } from "components/ThemeContext";

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

        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
