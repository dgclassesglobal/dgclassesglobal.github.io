"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/lib/testimonials";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const current = testimonials[index];

  function go(next: number) {
    setIndex((next + testimonials.length) % testimonials.length);
  }

  return (
    <div
      className="panel p-5 sm:p-8"
      onTouchStart={(event) => setStartX(event.changedTouches[0]?.clientX ?? null)}
      onTouchEnd={(event) => {
        if (startX == null) return;
        const delta = (event.changedTouches[0]?.clientX ?? startX) - startX;
        if (delta > 40) go(index - 1);
        if (delta < -40) go(index + 1);
        setStartX(null);
      }}
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_220px]">
        <figure>
          <blockquote className="quote">“{current.quote}”</blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            {current.photo ? (
              <img src={current.photo} alt="" className="avatar" width={96} height={96} />
            ) : (
              <span className="avatar grid place-items-center font-semibold" aria-hidden>
                {current.name.slice(0, 1)}
              </span>
            )}
            <div>
              <p className="font-semibold">{current.name}</p>
              <p className="text-sm text-muted">{current.course}</p>
            </div>
          </figcaption>
        </figure>
        <div className="flex items-end justify-between gap-3 lg:flex-col lg:items-stretch">
          <div className="flex gap-2">
            <button type="button" className="icon-btn" aria-label="Previous testimonial" onClick={() => go(index - 1)}>
              <ChevronLeft size={18} />
            </button>
            <button type="button" className="icon-btn" aria-label="Next testimonial" onClick={() => go(index + 1)}>
              <ChevronRight size={18} />
            </button>
          </div>
          <p className="text-sm text-muted">
            {index + 1} / {testimonials.length}
          </p>
        </div>
      </div>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-1" aria-label="Choose a testimonial">
        {testimonials.map((item, itemIndex) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setIndex(itemIndex)}
            aria-label={`Show testimonial from ${item.name}`}
            aria-current={itemIndex === index}
            className={`chip shrink-0 ${itemIndex === index ? "chip-active" : ""}`}
          >
            {item.name.split(" ")[0]}
          </button>
        ))}
      </div>
    </div>
  );
}

export function TestimonialCard({
  name,
  course,
  quote,
  photo,
}: {
  name: string;
  course: string;
  quote: string;
  photo?: string;
}) {
  return (
    <article className="panel p-5">
      <div className="flex items-center gap-3">
        {photo ? <img src={photo} alt="" className="avatar h-14 w-14" /> : <span className="avatar grid h-14 w-14 place-items-center font-semibold">{name.slice(0, 1)}</span>}
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted">{course}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">“{quote}”</p>
    </article>
  );
}
