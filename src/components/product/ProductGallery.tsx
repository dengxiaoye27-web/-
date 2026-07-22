import Image from "next/image";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [main, ...rest] = images;

  return (
    <div className="space-y-4">
      <div className="relative aspect-square w-full max-w-2xl overflow-hidden rounded-2xl border border-line-200 bg-paper-50">
        <Image
          src={main}
          alt={alt}
          fill
          className="object-contain p-6"
          sizes="(min-width: 1024px) 42vw, 100vw"
          priority
        />
      </div>
      {rest.length > 0 ? (
        <div className="grid grid-cols-3 gap-3 max-w-2xl sm:grid-cols-5">
          {rest.map((src, i) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden rounded-xl border border-line-200 bg-paper-50"
            >
              <Image
                src={src}
                alt={`${alt} — ${i + 2}`}
                fill
                className="object-contain p-2"
                sizes="120px"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
