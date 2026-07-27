"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const slides = [
  { src: "/images/hero/01-smart-data-centers.jpg", alt: "Build Smart Data Centers — Fuel Global AI & HPC Development" },
  { src: "/images/hero/02-modular-data-center-solutions.jpg", alt: "One-Stop Modular Data Center Solutions" },
  { src: "/images/hero/03-solar-storage.jpg", alt: "Powering Data Centers with Solar and Storage" },
  { src: "/images/hero/04-power-distribution-unit.jpg", alt: "Power Distribution Unit — Reliable Power, Intelligent Future" },
  { src: "/images/hero/05-liquid-cooling-solution.jpg", alt: "Liquid Cooling Data Center One-Stop Solution" },
];

export function HeroCarousel({
  ctaPrimary,
  ctaSecondary,
}: {
  ctaPrimary: string;
  ctaSecondary: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-navy-950">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[2.95/1]">
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
              quality={90}
              priority={i === 0}
            />
          </div>
        ))}
        <div className="absolute left-0 bottom-0 w-full max-w-md h-32 sm:h-36 bg-gradient-to-tr from-navy-950/70 via-navy-950/25 to-transparent" />
        <div className="absolute left-0 bottom-4 sm:bottom-6 pl-4 sm:pl-8 md:pl-12 flex flex-col items-start gap-4">
          <div className="flex flex-wrap justify-start gap-3">
            <Button href="/solutions">{ctaPrimary}</Button>
            <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white/10">
              {ctaSecondary}
            </Button>
          </div>
          <div className="flex justify-start gap-2">
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
      </div>
    </div>
  );
}
