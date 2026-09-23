import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the DG Classes Global website.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <article className="wrap max-w-3xl py-12">
      <h1 className="section-title">Terms</h1>
      <div className="prose-dg mt-6">
        <p>
          Course descriptions on this site follow what DG Classes has published. Fees, batch timings beyond the published 6–8 hours a week, and admission are confirmed by the institute. They are not completed by filling in the website form alone.
        </p>
        <p>
          Photographs, testimonials, and ranks are reproduced from DG Classes material. They should not be copied for another organisation’s marketing.
        </p>
        <p>
          The published terms page on the previous website did not contain additional legal text. For enrolment terms, contact {site.email}.
        </p>
      </div>
    </article>
  );
}
