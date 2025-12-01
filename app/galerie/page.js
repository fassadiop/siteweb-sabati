import GalleryGrid from "components/GalleryGrid";

export default function Galerie() {
  const images = [
    "recteur.jpeg",
    "hero.jpeg",
    "prof.jpeg",
    "professeur titulaire.jpeg",
    "titulaire.jpeg",
    "professeur agrege medecine.jpeg",
    "ufr.jpeg",
    "ufr2.jpeg",
    "ufr Sciences appliquee.jpeg",
    "etudiant.jpeg",
    "etudiant2.jpeg",
    "Lettres Sciences Humaines.jpeg"
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 mt-32">
      <h1 className="font-serif text-4xl text-center">Galerie</h1>
      <GalleryGrid images={images} />
    </section>
  );
}
