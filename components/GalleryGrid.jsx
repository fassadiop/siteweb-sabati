import Image from "next/image";

export default function GalleryGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
      {images.map((img, i) => (
        <div key={i} className="rounded-xl overflow-hidden bg-white shadow-lg card-rounded">
          <div className="relative w-full h-56 md:h-64">
            <Image
              src={`/images/sabati/${img}`}
              alt={`Toge ${i}`}
              fill
              style={{ objectFit: "cover" }}
            //   sizes="(max-width: 768px) 100vw, 33vw"
              className="w-full h-full object-contain bg-white"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
