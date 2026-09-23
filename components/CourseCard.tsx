import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Course } from "@/lib/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <img src={course.image} alt={course.imageAlt} />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-dark">{course.category}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">{course.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{course.summary}</p>
        <Link href={`/courses/${course.slug}/`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
          View course <ArrowUpRight size={16} aria-hidden />
        </Link>
      </div>
    </article>
  );
}
