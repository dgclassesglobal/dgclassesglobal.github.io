import type { Metadata } from "next";
import { CourseCard } from "@/components/CourseCard";
import { courseCategories, courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Grade 11 and 12 Commerce, B.Com, BBA, BCA, MBA, M.Com, ACCA, CA, CS, IGCSE, AS Level, A Level, and IB courses at DG Classes Global.",
  alternates: { canonical: "/courses/" },
};

export default function CoursesPage() {
  return (
    <div className="wrap py-12">
      <p className="eyebrow">Courses</p>
      <h1 className="display mt-4 max-w-3xl">Join the rank of toppers with comprehensive commerce tuitions.</h1>
      <p className="lede mt-5">
        Every programme below is one DG Classes already publishes. Weekly time on the course pages is 6–8 hours, with a mock exam once a week, online or offline.
      </p>
      <div className="mt-12 space-y-12">
        {courseCategories.map((category) => (
          <section key={category} id={category.toLowerCase().replace(/[^a-z]+/g, "-")}>
            <h2 className="text-2xl font-semibold tracking-tight">{category}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {courses
                .filter((course) => course.category === category)
                .map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
