import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 bg-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left content */}
        <div className="py-12">
          <h1 className="font-serif hero-title text-5xl md:text-6xl leading-tight text-black">
            Sabati Couture
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mt-6 max-w-xl">
            Confection d’exception de toges magistrales et universitaires.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-black text-white rounded-full font-semibold shadow-md hover:opacity-90 transition"
            >
              Commander une toge
            </a>

            <a
              href="#realisations"
              className="inline-block px-6 py-3 border border-black rounded-full font-medium hover:bg-black hover:text-white transition"
            >
              Voir les réalisations
            </a>
          </div>

          <div className="mt-8 flex gap-8 text-sm text-gray-600">
            <div>
              <div className="font-semibold">Livraison</div>
              <div>Local & internationale</div>
            </div>
            <div>
              <div className="font-semibold">Sur-mesure</div>
              <div>Prise de mesures & retouches</div>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative w-full h-96 md:h-[520px] rounded-xl overflow-hidden shadow-xl card-rounded">
            <Image
                src="/images/sabati/hero.jpeg"
                alt="Toge Sabati"
                width={550}         // tu peux ajuster cette largeur
                height={800}        // garder les proportions correctes de l’image
                className="rounded-xl shadow-xl object-contain"
                priority
            />
        </div>
      </div>    
    </section>
  );
}
