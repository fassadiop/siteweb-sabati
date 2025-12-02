export const metadata = { title: "Nos Valeurs – Dudam Créations" };

export default function Valeurs() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 leading-relaxed">

      <h1 className="font-serif text-4xl mb-12 text-center">Nos Valeurs</h1>

      <div className="space-y-10">

        <div>
          <h2 className="text-xl font-semibold">Savoir-faire hérité</h2>
          <p className="text-gray-700">
            Dudam Créations perpétue un art transmis par une couturière traditionnelle des toges 
            professorales, garantissant authenticité et maîtrise.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Exigence & précision</h2>
          <p className="text-gray-700">
            Chaque détail compte : plis, bordures, ornements, galons, proportions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Qualité des matériaux</h2>
          <p className="text-gray-700">
            Étoffes robustes, couleurs durables, finitions impeccables.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Confiance & professionnalisme</h2>
          <p className="text-gray-700">
            Dudam Créations accompagne universités, institutions et entreprises avec sérieux, 
            discrétion et respect des délais.
          </p>
        </div>

      </div>

    </div>
  );
}
