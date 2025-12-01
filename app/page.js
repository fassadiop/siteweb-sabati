import Hero from "components/Hero";
import GalleryGrid from "components/GalleryGrid";

export default function Home() {
  const images = [
    "recteur.jpeg",
    "professeur titulaire.jpeg",
    "ufr Sciences appliquee.jpeg",
    "Lettres Sciences Humaines.jpeg",
    "ufr2.jpeg",
    "etudiant2.jpeg",
    "titulaire.jpeg",
    "professeur agrege medecine.jpeg",
    "prof.jpeg",
  ];

  return (
  <>
    <Hero />

    {/* Le fond gris commence ici */}
    <div className="bg-gray-100">

      {/* Réalisations */}
      <section id="realisations" className="max-w-7xl mx-auto px-6 md:px-8 pt-16">
        <h2 className="font-serif text-4xl text-center mb-8">Nos Réalisations</h2>

        <GalleryGrid images={images.slice(0, 4)} />

        <div className="text-center mt-6 pb-10">
          <a href="/galerie" className="text-gold underline font-medium">
            Voir toute la galerie
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mt-10 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          <div>
            <h3 className="text-3xl font-serif mb-4">Services disponibles</h3>
            <p className="text-gray-600">
              Confection premium de toges magistrales, universitaires et habits d’apparat.
              Finitions main et matériaux nobles.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded">
                <span className="text-xl">⚖️</span>
              </div>
              <div>
                <h4 className="font-semibold">Toges magistrales</h4>
                <p className="text-gray-600">Confection haut de gamme pour magistrats et avocats.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded">
                <span className="text-xl">🎓</span>
              </div>
              <div>
                <h4 className="font-semibold">Toges universitaires</h4>
                <p className="text-gray-600">Recteurs, doyens, professeurs : toges officielles sur-mesure.</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl shadow text-center">
            <div className="relative w-full h-80 rounded overflow-hidden">
              <img
                src="/images/sabati/ufr Sciences appliquee.jpeg"
                alt="toge"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* A propos */}
      <section id="apropos" className="max-w-5xl mx-auto px-6 md:px-8 mt-20">
        <h2 className="font-serif text-3xl text-center mb-6">À propos</h2>
        <p className="text-gray-700 text-center">
          Sabati Couture est une maison spécialisée dans la confection d'habits d’apparat
          et toges officielles, reconnue pour son savoir-faire et sa finition d’excellence.
          Nous travaillons pour les institutions, universités et juridictions.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto px-6 md:px-8 mt-16 pb-32">
        <h2 className="font-serif text-3xl text-center mb-6">Contact</h2>

        <form
          action="https://formsubmit.co/your-email@example.com"
          method="POST"
          className="space-y-4 bg-white shadow p-6 rounded"
        >
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label className="block font-medium">Nom</label>
            <input name="nom" required className="w-full border rounded p-2" />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input type="email" name="email" required className="w-full border rounded p-2" />
          </div>

          <div>
            <label className="block font-medium">Message</label>
            <textarea name="message" rows="4" required className="w-full border rounded p-2" />
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-black text-white rounded">Envoyer</button>
            <a href="tel:+221000000000" className="px-6 py-3 border rounded inline-flex items-center">
              WhatsApp / Tel
            </a>
          </div>
        </form>
      </section>

    </div>
    {/* FIN DU FOND GRIS */}

    </>
 );
}
