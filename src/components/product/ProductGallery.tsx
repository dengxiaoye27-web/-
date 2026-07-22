"use client";

import { useState } from "react";
import Image from "next/image";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex] ?? images[0];

  return (
    <div className="space-y-4">
      <div className="relative aspect-square w-full max-w-2xl overflow-hidden rounded-2xl border border-line-200 bg-paper-50">
        <Image
          key={active}
          src={active}
          alt={alt}
          fill
          className="object-contain p-6"
          sizes="(min-width: 1024px) 42vw, 100vw"
          priority
        />
      </div>
      {images.length > 1 ? (
        <div className="grid grid-cols-3 gap-3 max-w-2xl sm:grid-cols-5">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`${alt} — ${i + 1}`}
              aria-current={i === activeIndex}
              className={`relative aspect-square overflow-hidden rounded-xl border bg-paper-50 transition-colors ${
                i === activeIndex ? "border-accent-500" : "border-line-200 hover:border-accent-500/60"
              }`}
            >
              <Image src={src} alt={`${alt} — ${i + 1}`} fill className="object-contain p-2" sizes="120px" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
