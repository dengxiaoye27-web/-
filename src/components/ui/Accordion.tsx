import { useId } from "react";
import { FaqItem } from "@/data/types";

export function Accordion({ items }: { items: FaqItem[] }) {
  const group = useId();
  return (
    <div className="divide-y divide-line-200 border-y border-line-200">
      {items.map((item, i) => (
        <details key={item.question} name={group} open={i === 0} className="group">
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
            <span className="text-base md:text-lg font-medium text-ink-900">{item.question}</span>
            <span className="shrink-0 text-xl text-accent-500 transition-transform group-open:rotate-45" aria-hidden>+</span>
          </summary>
          <p className="pb-5 text-ink-600 leading-relaxed">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
