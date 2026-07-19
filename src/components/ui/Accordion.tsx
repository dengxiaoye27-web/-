"use client";

import { useState } from "react";
import { FaqItem } from "@/data/types";

export function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line-200 border-y border-line-200">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-base md:text-lg font-medium text-ink-900">
                {item.question}
              </span>
              <span
                className={`shrink-0 text-xl text-accent-500 transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen ? (
              <p className="pb-5 text-ink-600 leading-relaxed">{item.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
