import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FAQ } from "@/components/FAQ";
import { courses, getCourse } from "@/lib/courses";
import { courseFaqs } from "@/lib/faq";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course = getCourse(params.slug);
  if (!course) return {};
  return {
    title: course.name,
    description: course.overview,
    alternates: { canonical: `/courses/${course.slug}/` },
  };
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourse(params.slug);
  if (!course) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.overview,
    provider: {
      "@type": "EducationalOrganization",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <article className="wrap py-12">
      <p className="eyebrow">{course.category}</p>
      <div className="mt-4 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="display">{course.name}</h1>
          <p className="lede mt-5">{course.overview}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#enquire" className="btn btn-primary">
              Book a Demo Class
            </a>
            <Link href="/contact/" className="btn btn-secondary">
              Enquire Now
            </Link>
          </div>
        </div>
        <img src={course.image} alt={course.imageAlt} className="h-72 w-full rounded-[1.4rem] object-cover" />
      </div>

      <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {course.meta.map((item) => (
          <div key={item.label} className="rounded-2xl border border-line bg-surface p-4">
            <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted">{item.label}</dt>
            <dd className="mt-1 font-semibold">{item.value}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-14 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Who this is for</h2>
          <ul className="mt-4 space-y-2 text-muted">
            {course.audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">What students work on</h2>
          <ul className="mt-4 space-y-2 text-muted">
            {course.learns.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Subjects and focus</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {course.subjects.map((subject) => (
            <div key={subject.title} className="rounded-2xl border border-line p-5">
              <h3 className="font-semibold">{subject.title}</h3>
              <p className="mt-2 text-sm text-muted">{subject.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-3">
        {[
          ["Learning method", "Hybrid. Offline classes are interactive and personal. Online classes are live, with recorded lectures and digital resources."],
          ["Why DG Classes", "More than a decade with Sir Divesh Gamnani, syllabus-wide teaching, and mentorship. Alumni have gone on to CA, ACCA, and CS."],
          ["Faculty", "Led by Divesh Gamnani, with experienced teachers. Professional courses also draw on practitioners where the course page says so."],
        ].map(([title, text]) => (
          <div key={title} className="panel p-5">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-muted">{text}</p>
          </div>
        ))}
      </section>

      <section className="mt-14">
        <FAQ items={courseFaqs(course.name)} />
      </section>

      <section className="mt-14">
        <EnquiryForm heading={`Enquire about ${course.name}`} defaultCourse={course.name} />
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </article>
  );
}
