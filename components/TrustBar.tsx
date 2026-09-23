"use client";

import { useEffect, useRef, useState } from "react";

const facts = [
  { label: "Founded", value: 2012, suffix: "", text: "Mumbai & Rajasthan" },
  { label: "Students mentored", value: 5000, suffix: "+", text: "By Sir Divesh Gamnani" },
  { label: "Experience", value: 10, suffix: "+", text: "More than a decade" },
  { label: "Learning modes", value: 2, suffix: "", text: "Online and offline" },
];

function useCount(target: number, start: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }
    const duration = 900;
    const began = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - began) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);
  return value;
}

function Fact({ fact, start }: { fact: (typeof facts)[number]; start: boolean }) {
  const value = useCount(fact.value, start);
  return (
    <div className="trust-item">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">{fact.label}</p>
      <p className="mt-1 text-3xl font-semibold tracking-tight">
        {value.toLocaleString("en-IN")}
        {fact.suffix}
      </p>
      <p className="text-sm text-muted">{fact.text}</p>
    </div>
  );
}

export function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStart(true);
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wrap pb-6" aria-label="DG Classes at a glance" ref={ref}>
      <div className="trust-grid">
        {facts.map((fact) => (
          <Fact key={fact.label} fact={fact} start={start} />
        ))}
      </div>
    </section>
  );
}
