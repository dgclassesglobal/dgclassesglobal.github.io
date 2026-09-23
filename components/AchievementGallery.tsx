"use client";

import { useState } from "react";
import { Lightbox, type LightboxImage } from "./Lightbox";

export function AchievementGallery({
  images,
  columns = "sm:grid-cols-2 lg:grid-cols-3",
}: {
  images: LightboxImage[];
  columns?: string;
}) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div className={`grid gap-3 ${columns}`}>
        {images.map((image, imageIndex) => (
          <button
            key={image.src}
            type="button"
            className="overflow-hidden rounded-2xl border border-line bg-surface text-left"
            onClick={() => setIndex(imageIndex)}
          >
            <img src={image.src} alt={image.alt} className="h-64 w-full object-cover" />
            {image.caption ? <span className="block px-3 py-2 text-sm font-semibold">{image.caption}</span> : null}
          </button>
        ))}
      </div>
      {index !== null ? (
        <Lightbox images={images} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
      ) : null}
    </>
  );
}

export function AchievementCard({
  name,
  rank,
  grade,
  image,
  onOpen,
}: {
  name: string;
  rank: string;
  grade: string;
  image: string;
  onOpen: () => void;
}) {
  return (
    <button type="button" onClick={onOpen} className="overflow-hidden rounded-2xl border border-line bg-surface text-left">
      <img src={image} alt={`${name}, ${rank}, ${grade}`} className="h-72 w-full object-cover object-top" />
      <span className="block p-4">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-dark">{rank}</span>
        <span className="mt-1 block text-lg font-semibold">{name}</span>
        <span className="text-sm text-muted">{grade}</span>
      </span>
    </button>
  );
}
