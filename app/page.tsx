import Link from "next/link";
import { AboutSection } from "@/components/AboutSection";
import { AchievementGallery } from "@/components/AchievementGallery";
import { BlogCard } from "@/components/BlogCard";
import { ContactSection } from "@/components/ContactSection";
import { CourseGrid } from "@/components/CourseGrid";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { TrustBar } from "@/components/TrustBar";
import { starBatches, topAchievers } from "@/lib/achievements";
import { posts } from "@/lib/blog";
import { media } from "@/lib/site";

const why = [
  {
    title: "Experienced faculty",
    text: "Led by Divesh Gamnani himself, DG Classes works with experienced teachers who are specialists in their subjects. The faculty is committed to academic results and to the practical use of what students study.",
    image: media.seminar,
    alt: "DG Classes seminar",
  },
  {
    title: "A curriculum that covers the syllabus",
    text: "The curriculum covers the syllabus in a structured way. The emphasis is on strong fundamentals, theoretical knowledge, and practical problem-solving.",
    image: media.slideClass,
    alt: "DG Classes classroom",
  },
  {
    title: "Teaching that stays personal",
    text: "Regular one-on-one mentorship means progress is tracked and guidance is adjusted when a student is stuck. Doubt-clearing is part of the method, not an extra.",
    image: media.classroom,
    alt: "Students in a DG Classes session",
  },
];

export default function HomePage() {
  const featured = starBatches[0];

  return (
    <>
      <Hero />
      <TrustBar />
      <AboutSection />

      <section className="wrap py-8" id="courses">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Courses"
            title="Find the right commerce path."
            text="School, undergraduate, postgraduate, professional, and British & IB programmes — the same structure published on DG Classes."
          />
          <Link href="/courses/" className="btn btn-secondary">
            All courses
          </Link>
        </div>
        <CourseGrid />
      </section>

      <section className="wrap py-16">
        <SectionHeading eyebrow="Why DG Classes" title="What the institute actually puts in front of students." />
        <div className="mt-10 space-y-14">
          {why.map((item, index) => (
            <article key={item.title} className={`why-row ${index % 2 ? "reverse" : ""}`}>
              <div className="why-copy">
                <p className="text-sm font-bold text-brand-dark">0{index + 1}</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-muted">{item.text}</p>
              </div>
              <img src={item.image} alt={item.alt} className="h-72 w-full rounded-[1.4rem] object-cover" />
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Proven record", "Multiple merits and top ranks in board exams and in entrance exams for professional courses such as CA."],
            ["Global reach", "After India, programmes now run online and offline for students in Oman, Dubai, and other parts of the Middle East."],
            ["Hybrid learning", "Live online classes, e-learning, and the assessment tools the institute describes as part of its teaching."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-line bg-surface p-5">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap py-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Star performers"
            title={featured.title}
            text="Ranks published by DG Classes. Marks are not shown where the institute did not publish them. The current site also lists later months, including August 2026, as coming soon."
          />
          <Link href="/achievements/" className="btn btn-secondary">
            View all achievements
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featured.performers.map((person) => (
            <article key={person.name} className="overflow-hidden rounded-[1.3rem] border border-line bg-surface">
              <img src={person.image} alt={`${person.name}, ${person.rank}`} className="h-80 w-full object-cover object-top" />
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-dark">{person.rank}</p>
                <h3 className="mt-1 text-xl font-semibold">{person.name}</h3>
                <p className="text-sm text-muted">{person.grade}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap py-16">
        <SectionHeading
          eyebrow="Commerce top achievers"
          title="Photographs from the achievers gallery."
          text="These are the Commerce Top Achievers images published on the DG Classes homepage. Names and marks are not printed on the originals, so none are added here."
        />
        <div className="mt-8">
          <AchievementGallery
            images={topAchievers.map((image) => ({ ...image, caption: "Commerce top achiever" }))}
          />
        </div>
      </section>

      <section className="wrap grid gap-8 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">How teaching works</p>
          <h2 className="section-title mt-3">Classroom energy, with a way to study from home.</h2>
          <p className="mt-4 text-muted">
            The hybrid model is the one DG Classes describes in its course pages. Offline classes are interactive, with real-time discussion and personal attention. Online classes are live, with recorded lectures and digital resources students can revisit.
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              "Doubt-clearing and one-on-one mentoring.",
              "Curated study material and weekly mock exams.",
              "The same teaching commitment in India and the Middle East.",
            ].map((item) => (
              <li key={item} className="rounded-xl border border-line bg-surface px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <img src={media.sessionF} alt="DG Classes students in a recent session" className="h-80 w-full rounded-[1.4rem] object-cover lg:h-[420px]" />
      </section>

      <section className="wrap py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Testimonials" title="In the students’ own words." text="These are the testimonies published on DG Classes, kept close to the original voice." />
          <Link href="/testimonials/" className="btn btn-secondary">
            All testimonials
          </Link>
        </div>
        <TestimonialCarousel />
      </section>

      <section className="wrap py-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Journal" title="Latest from DG Classes." />
          <Link href="/blog/" className="btn btn-secondary">
            All articles
          </Link>
        </div>
        <div className="grid gap-4">
          <BlogCard post={posts[0]} featured />
          <div className="grid gap-4 md:grid-cols-3">
            {posts.slice(1).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-16">
        <EnquiryForm />
      </section>
      <ContactSection />
    </>
  );
}
