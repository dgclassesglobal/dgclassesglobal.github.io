import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "DG Classes was established in 2012 by Divesh Gamnani. More than 5,000 commerce students, online and offline, from Mumbai and Rajasthan to the Middle East.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <article className="wrap py-12">
      <p className="eyebrow">About</p>
      <h1 className="display mt-4 max-w-4xl">Bringing more than a decade of commerce teaching to students who want outstanding results.</h1>
      <p className="lede mt-5">
        Established in 2012 by Divesh Gamnani, DG Classes has grown into a premier institution for commerce students in Grade 11 and 12, and now across undergraduate, postgraduate, professional, and British & IB pathways.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <img src={site.founderPhoto} alt="Sir Divesh Gamnani" className="mx-auto max-h-[560px] object-contain" />
        <div className="space-y-5 text-muted">
          <h2 className="section-title text-ink">Foundation and vision</h2>
          <p>
            Starting from Mumbai and Rajasthan, the institution expanded its reach and reputation. DG Classes teaches more than 5,000 students. Divesh Gamnani founded it to close the gap in quality commerce education and to give students the tools for academic success — not only exam preparation, but confidence for Chartered Accountancy, business management, economics, and related work.
          </p>
          <p>
            The learner-centred approach is practical insight, teaching technique, and continuous mentorship. Coaching covers Accountancy, Economics, Business Studies, and Mathematics, with a reputation built on board exams and competitive exams for courses such as CA. The institute describes its method as doubt-clearing, one-on-one mentoring, and problem-solving, and states that this has supported a 100% success rate, with students earning top ranks and merit positions.
          </p>
          <p>
            After its work in India, DG Classes expanded into the Middle East, including Oman, Dubai, and other parts of the region, with online and offline coaching. Online classes are live and interactive. Offline centres are a place for personal teaching, doubt-clearing, and mentorship.
          </p>
        </div>
      </div>

      <section className="mt-16 grid gap-4 md:grid-cols-2">
        <div className="panel p-6">
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p className="mt-3 text-muted">
            The institute’s mission is to work towards the success of every student. The focus is excellent study material and personalised guidance for today’s commerce education. The aim is not only to build professionals, but to strengthen the personality of every student so they can face a competitive environment.
          </p>
        </div>
        <div className="panel p-6">
          <h2 className="text-2xl font-semibold">Vision</h2>
          <p className="mt-3 text-muted">
            D.G. Classes describes a commitment to innovation and continuous improvement: smart work, determination, and an environment where values and aspirations can thrive. The principle they publish is that “a child without a proper education is a bird without wings.”
          </p>
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="section-title">Founder’s message</h2>
          <p className="mt-4 text-muted">
            Education is the foundation of personal growth, empowerment, and societal progress. The mission Sir Divesh publishes is not only academic excellence, but critical thinking, resilience, creativity, and a passion for lifelong learning. Teaching, in his words, should be dynamic and engaging, and should shape people who can face challenges with confidence.
          </p>
          <p className="mt-4 text-muted">
            With that dedication, more than 5,000 students have been taught through offline and online platforms. He also writes that education and entrepreneurship go together, and that the vision is to elevate D.G. Classes and Toppers World through mentorship and high-quality learning.
          </p>
          <p className="mt-5 font-semibold text-ink">Mr Divesh Gamnani</p>
          <p className="text-sm text-muted">M.Com (Accounting), M.Com (Business Administration), M.B.A., B.Ed., CA-A.T.C.</p>
          <img src={site.founderSignature} alt="Signature of Mr Divesh Gamnani" className="mt-4 h-16 w-auto" />
        </div>
        <div>
          <h2 className="section-title">Director’s message</h2>
          <p className="mt-4 text-muted">
            The director’s message published on the DG Classes about page is from Dr. T. Prabhakar, M.Tech, M.Sc, M.Phil, B.Ed, Ph.D. It speaks of guiding every student toward their potential, of confidence as well as knowledge, and of a team of instructors committed to education tailored to each student. The message also refers to Toppers World Exam Preparation Center, which the founder’s note connects with D.G. Classes.
          </p>
          <p className="mt-5 font-semibold text-ink">Dr. T. Prabhakar</p>
          <p className="text-sm text-muted">M.Tech, M.Sc, M.Phil, B.Ed, Ph.D</p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="section-title">A welcome from the classroom</h2>
        <p className="lede mt-3">The welcome film published on the DG Classes about page.</p>
        <video className="mt-6 w-full rounded-[1.4rem] border border-line bg-black" controls preload="metadata" poster="/images/hero/classroom-session.jpg">
          <source src={site.welcomeVideo} type="video/mp4" />
        </video>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {[
          ["Proven results", "Students achieve top positions in board exams. Many also excel in competitive exams for courses such as CA, CS, and BBA."],
          ["A wider map", "The Middle East expansion is the start of an international journey, with personalised guidance still at the centre."],
          ["Every student’s potential", "Whether in India or the Middle East, the institute describes tailored learning for students who want to lead in commerce."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-line p-5">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted">{text}</p>
          </div>
        ))}
      </section>

      <div className="mt-16">
        <EnquiryForm heading="Study with DG Classes" />
      </div>
      <p className="mt-8">
        <Link href="/courses/" className="font-semibold">
          Explore courses
        </Link>
      </p>
    </article>
  );
}
