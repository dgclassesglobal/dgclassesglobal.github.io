import Link from "next/link";
import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <section className="wrap grid items-center gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="relative">
        <img
          src={site.founderPhoto}
          alt="Sir Divesh Gamnani, founder of DG Classes"
          className="mx-auto max-h-[520px] w-auto object-contain"
          width={408}
          height={493}
        />
      </div>
      <div>
        <p className="eyebrow">About DG Classes</p>
        <h2 className="section-title mt-3">A commerce institute built around fundamentals, not shortcuts.</h2>
        <p className="mt-5 text-muted">
          Established in 2012 by Divesh Gamnani, DG Classes grew from Mumbai and Rajasthan into a trusted name in commerce education. Today the institute teaches more than 5,000 students and has taken the same online and offline model into Oman, Dubai, and the wider Middle East.
        </p>
        <p className="mt-4 text-muted">
          The curriculum covers the syllabus in a structured way, with the emphasis on strong fundamentals, theoretical knowledge, and practical problem-solving. Students have earned merits and top ranks in board exams and in entrance exams for professional courses such as CA.
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="text-muted">Founder</dt>
            <dd className="font-semibold">Sir Divesh Gamnani</dd>
          </div>
          <div>
            <dt className="text-muted">Qualifications</dt>
            <dd className="font-semibold">M.Com, M.B.A., B.Ed., CA-A.T.C.</dd>
          </div>
        </dl>
        <Link href="/about/" className="btn btn-secondary mt-6">
          Learn more
        </Link>
      </div>
    </section>
  );
}
