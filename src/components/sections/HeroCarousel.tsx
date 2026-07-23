"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/hero/01-smart-data-centers.jpg", alt: "Build Smart Data Centers — Fuel Global AI & HPC Development" },
  { src: "/images/hero/02-modular-data-center-solutions.jpg", alt: "One-Stop Modular Data Center Solutions" },
  { src: "/images/hero/03-solar-storage.jpg", alt: "Powering Data Centers with Solar and Storage" },
  { src: "/images/hero/04-power-distribution-unit.jpg", alt: "Power Distribution Unit — Reliable Power, Intelligent Future" },
  { src: "/images/hero/05-liquid-cooling-solution.jpg", alt: "Liquid Cooling Data Center One-Stop Solution" },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-navy-950">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/1]">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
