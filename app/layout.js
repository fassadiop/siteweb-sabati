import './globals.css';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

export const metadata = {
  title: 'Sabati Couture — Mode et tradition d’exception',
  description: 'Toges magistrales, universitaires et habits d’apparat — confection premium internationale.',
  icons: {
    icon: '/favicon.ico',
    apple: '/images/sabati/logo-sabati.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
