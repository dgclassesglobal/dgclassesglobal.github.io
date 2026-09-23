"use client";

import { useMemo, useState } from "react";
import { courseCategories, courses, type CourseCategory } from "@/lib/courses";
import { CourseCard } from "./CourseCard";

export function CourseGrid({ showFilters = true, limit }: { showFilters?: boolean; limit?: number }) {
  const [active, setActive] = useState<CourseCategory | "All">("All");
  const visible = useMemo(() => {
    const filtered = active === "All" ? courses : courses.filter((course) => course.category === active);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [active, limit]);

  return (
    <div>
      {showFilters ? (
        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Course categories">
          {(["All", ...courseCategories] as const).map((category) => {
            const selected = active === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`chip ${selected ? "chip-active" : ""}`}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}
