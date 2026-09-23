"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";

export type LightboxImage = { src: string; alt: string; caption?: string };

export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onIndex: (index: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const startX = useRef<number | null>(null);
  const current = images[index];

  useEffect(() => {
    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onIndex((index + 1) % images.length);
      if (event.key === "ArrowLeft") onIndex((index - 1 + images.length) % images.length);
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [images.length, index, onClose, onIndex]);

  if (!current) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      onClick={onClose}
    >
      <button ref={closeRef} type="button" className="icon-btn absolute right-4 top-4 text-white" onClick={onClose} aria-label="Close gallery">
        <X size={18} />
      </button>
      <button
        type="button"
        className="icon-btn absolute left-3 top-1/2 -translate-y-1/2 text-white md:left-6"
        aria-label="Previous image"
        onClick={(event) => {
          event.stopPropagation();
          onIndex((index - 1 + images.length) % images.length);
        }}
      >
        <ChevronLeft size={18} />
      </button>
      <figure
        className="max-h-[86vh] max-w-5xl"
        onClick={(event) => event.stopPropagation()}
        onTouchStart={(event) => {
          startX.current = event.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          if (startX.current == null) return;
          const delta = (event.changedTouches[0]?.clientX ?? startX.current) - startX.current;
          if (delta > 40) onIndex((index - 1 + images.length) % images.length);
          if (delta < -40) onIndex((index + 1) % images.length);
          startX.current = null;
        }}
      >
        <img src={current.src} alt={current.alt} className="max-h-[74vh] w-auto rounded-xl object-contain" />
        <figcaption className="mt-3 text-center text-sm text-white/80">
          {current.caption || current.alt} · {index + 1} of {images.length}
        </figcaption>
      </figure>
      <button
        type="button"
        className="icon-btn absolute right-3 top-1/2 -translate-y-1/2 text-white md:right-6"
        aria-label="Next image"
        onClick={(event) => {
          event.stopPropagation();
          onIndex((index + 1) % images.length);
        }}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
