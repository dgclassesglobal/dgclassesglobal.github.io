import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { media, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="wrap grid items-center gap-10 py-10 md:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
      <div>
        <p className="eyebrow">DG Classes Global · Est. {site.founded}</p>
        <h1 className="display mt-4">
          Premium commerce education for students who want to go further.
        </h1>
        <p className="lede mt-5">
          Founded in 2012 by Sir Divesh Gamnani, DG Classes is a premier educational institution dedicated to shaping the academic journey of commerce students. Online and offline, from Mumbai and Rajasthan to the Middle East.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/courses/" className="btn btn-primary">
            Explore Courses <ArrowRight size={16} aria-hidden />
          </Link>
          <Link href="/contact/?intent=demo#enquire" className="btn btn-secondary">
            Book a Demo Class
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted">
          {site.studentsMentored} students mentored by Sir Divesh Gamnani · India and the Middle East · Hybrid learning
        </p>
      </div>
      <div className="relative mb-8 lg:mb-0">
        <div className="overflow-hidden rounded-[1.6rem] border border-line bg-surface shadow-soft">
          <img
            src={media.classroom}
            alt="DG Classes students gathered around a classroom table during a session"
            className="hero-photo"
            width={1600}
            height={1200}
          />
        </div>
        <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-line bg-surface/95 p-4 shadow-soft backdrop-blur sm:left-auto sm:right-5 sm:w-72">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-dark">Led by</p>
          <p className="mt-1 font-semibold">Sir Divesh Gamnani</p>
          <p className="text-sm text-muted">M.Com, M.B.A., B.Ed., CA-A.T.C.</p>
        </div>
      </div>
    </section>
  );
}
