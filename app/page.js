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

      {/* RÉALISATIONS */}
      <section id="realisations" className="bg-gray-100 pt-20 pb-14 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="font-serif text-4xl text-center mb-10 dark:text-white">
            Nos Réalisations
          </h2>

          <GalleryGrid images={images.slice(0, 4)} />

          <div className="text-center mt-8">
            <a href="/galerie" className="text-gold underline font-medium dark:text-yellow-400">
              Voir toute la galerie
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-24 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-4xl font-serif text-center mb-14 dark:text-white">
            Nos Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

            {/* SERVICE BLOCKS */}
            {[
              { icon: "🎓", title: "Toges universitaires & professorales", text: "Pour recteurs, doyens, professeurs, maîtres-assistants et diplômés. Coupes rigoureuses et ornements académiques." },
              { icon: "⚖️", title: "Tenues magistrales & judiciaires", text: "Pour magistrats, avocats, greffiers : respect strict des codes et traditions." },
              { icon: "🏛️", title: "Tenues institutionnelles & protocolaires", text: "Habits officiels pour événements nationaux et cérémonies protocolaires." },
              { icon: "👔", title: "Uniformes professionnels", text: "Uniformes élégants et durables pour entreprises, écoles, universités, organisations." },
              { icon: "🏫", title: "Équipements textiles universitaires", text: "Écharpes, épitoges, accessoires académiques et séries textiles." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-xl">
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section id="valeurs" className="bg-gray-50 py-24 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-4xl font-serif text-center mb-14 dark:text-white">
            Nos Valeurs
          </h2>

          <div className="space-y-8 text-gray-700 dark:text-gray-300">
            <Value title="Savoir-faire hérité" text="Une transmission rare, fidèle à la tradition des toges historiques." />
            <Value title="Exigence & précision" text="Chaque détail compte : plis, bordures, galons, ornements." />
            <Value title="Matériaux de qualité" text="Étoffes robustes, couleurs durables, finitions professionnelles." />
            <Value title="Confiance & confidentialité" text="Un accompagnement sérieux et discret pour les institutions." />
            <Value title="Modernité & innovation" text="Technique moderne + tradition héritée = résultat d’exception." />
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section id="choisir" className="bg-white py-24 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-4xl font-serif text-center mb-14 dark:text-white">
            Pourquoi nous choisir ?
          </h2>

          <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {[
              "15+ années d’expérience",
              "Savoir-faire transmis par une ancienne couturière officielle de l’Université",
              "Pièces conçues à la main, sur-mesure",
              "Finitions exceptionnelles",
              "Fiabilité reconnue par les principales universités du Sénégal",
              "Délais respectés",
              "Forte capacité de production pour les séries institutionnelles",
            ].map((line, i) => (
              <li key={i}>✔ {line}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="bg-gray-100 py-24 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="font-serif text-4xl mb-8 dark:text-white">Notre Histoire</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Sabati Couture est née d’un héritage rare : celui des toges professorales traditionnelles de Dakar.
            Transmis par sa belle-mère, Mme Wone Khar Ndiaye perpétue depuis 2008 un artisanat d’excellence.
          </p>

          <a
            href="/notre-histoire"
            className="inline-block mt-8 px-6 py-3 border text-black dark:text-white border-black dark:border-gray-300 rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Découvrir notre histoire
          </a>
        </div>
      </section>

      {/* À PROPOS */}
      <section id="apropos" className="bg-white py-24 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <h2 className="font-serif text-4xl mb-8 dark:text-white">À propos</h2>

          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sabati Couture est une maison spécialisée dans la confection de toges professorales,
            tenues institutionnelles et uniformes professionnels. Fondée par Mme Wone Khar Ndiaye,
            héritière d’un savoir-faire rare, l’entreprise allie tradition, précision et modernité.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gray-100 py-24 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="font-serif text-4xl text-center mb-8 dark:text-white">Contact</h2>

          <form
            action="https://formsubmit.co/your-email@example.com"
            method="POST"
            className="space-y-4 bg-white dark:bg-gray-800 shadow p-6 rounded-lg"
          >
            <input type="hidden" name="_captcha" value="false" />

            <Input label="Nom" name="nom" />
            <Input label="Email" type="email" name="email" />
            <Textarea label="Message" name="message" />

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-black text-white rounded dark:bg-white dark:text-black">
                Envoyer
              </button>
              <a
                  href="https://wa.me/22177632691"
                  target="_blank"
                  className="px-6 py-3 border rounded inline-flex items-center dark:border-gray-400"
                >
                  WhatsApp
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

/* SMALL COMPONENTS */
function Value({ title, text }) {
  return (
    <div>
      <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block font-medium dark:text-gray-200">{label}</label>
      <input
        {...props}
        className="w-full border rounded p-2 bg-white dark:bg-gray-700 dark:text-white dark:border-gray-500"
        required
      />
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div>
      <label className="block font-medium dark:text-gray-200">{label}</label>
      <textarea
        {...props}
        rows="4"
        className="w-full border rounded p-2 bg-white dark:bg-gray-700 dark:text-white dark:border-gray-500"
        required
      ></textarea>
    </div>
  );
}
