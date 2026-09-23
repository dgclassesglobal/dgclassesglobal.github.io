"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function SiteLogo({ className = "h-12 w-auto" }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="inline-flex items-center gap-2 font-semibold tracking-tight">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-dark text-sm text-white">DG</span>
        <span>DG Classes</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center">
      <img
        src={site.logo}
        alt="DG Classes Global"
        className={`${className} object-contain`}
        width={120}
        height={99}
        onError={() => setFailed(true)}
      />
    </span>
  );
}
