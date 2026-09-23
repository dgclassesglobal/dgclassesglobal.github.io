import type { Metadata } from "next";
import { TestimonialCard } from "@/components/TestimonialCarousel";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Student testimonies published by DG Classes Global, in the students’ own words.",
  alternates: { canonical: "/testimonials/" },
};

export default function TestimonialsPage() {
  return (
    <div className="wrap py-12">
      <p className="eyebrow">Testimonials</p>
      <h1 className="display mt-4 max-w-3xl">Student testimonies.</h1>
      <p className="lede mt-5">
        These are the testimonies DG Classes has published. They are kept close to the original wording, with only obvious spelling and spacing cleaned.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
