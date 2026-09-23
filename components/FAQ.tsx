"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/lib/faq";

export type { FaqItem };

export function FAQ({ items, title = "Questions students ask" }: { items: FaqItem[]; title?: string }) {
  const [open, setOpen] = useState(0);

  return (
    <div>
      <h2 className="section-title">{title}</h2>
      <div className="mt-6 divide-y divide-line border-y border-line">
        {items.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.question}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-4 text-left font-semibold"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                {item.question}
                <Plus size={18} className={`shrink-0 transition ${isOpen ? "rotate-45" : ""}`} aria-hidden />
              </button>
              {isOpen ? <p className="pb-4 pr-8 text-muted">{item.answer}</p> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
