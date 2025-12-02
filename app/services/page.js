export const metadata = { title: "Services – Dudam Créations" };

export default function Services() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-20">

      <h1 className="font-serif text-4xl mb-12 text-center">Nos Services</h1>

      <div className="space-y-12">

        <div>
          <h2 className="text-2xl font-semibold mb-2">Toges universitaires & professorales</h2>
          <p className="text-gray-700">
            Réalisées selon les codes académiques, avec étoffes nobles, ornements respectés, 
            plis traditionnels et finitions manuelles.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Toges magistrales & robes judiciaires</h2>
          <p className="text-gray-700">
            Conçues pour magistrats, avocats, greffiers et corps judiciaires, dans le respect 
            des exigences protocolaires.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Tenues institutionnelles</h2>
          <p className="text-gray-700">
            Habits officiels pour cérémonies, investitures, représentations nationales.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Uniformes professionnels</h2>
          <p className="text-gray-700">
            Conçus pour entreprises, écoles, universités et organisations : durables, élégants 
            et adaptés.
          </p>
        </div>

      </div>
    </div>
  );
}
