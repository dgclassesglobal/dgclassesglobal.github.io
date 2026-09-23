import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Student Corner",
  description: "Student portal, WhatsApp updates, course information, and the DG Classes journal.",
  alternates: { canonical: "/student-corner/" },
};

const resources = [
  {
    title: "Student portal",
    text: "The official portal asks students to log in for their dashboard. Sign-in stays on the DG Classes system — this site does not recreate passwords or dashboards.",
    href: site.studentPortal,
    external: true,
    action: "Open the portal",
  },
  {
    title: "WhatsApp channel",
    text: "Join the official channel DG Classes publishes for updates.",
    href: site.whatsappChannel,
    external: true,
    action: "Join channel",
  },
  {
    title: "Course information",
    text: "Grade 11 and 12, degrees, CA, CS, ACCA, and British & IB pathways.",
    href: "/courses/",
    external: false,
    action: "View courses",
  },
  {
    title: "Star performers",
    text: "Published ranks and the commerce top achievers gallery.",
    href: "/achievements/",
    external: false,
    action: "View achievements",
  },
  {
    title: "Journal",
    text: "The articles currently on the DG Classes blog and news pages.",
    href: "/blog/",
    external: false,
    action: "Read articles",
  },
  {
    title: "Student support",
    text: "Call, email, or send an enquiry. Demo classes are booked through the same contact path.",
    href: "/contact/",
    external: false,
    action: "Contact",
  },
];

export default function StudentCornerPage() {
  return (
    <div className="wrap py-12">
      <p className="eyebrow">Student Corner</p>
      <h1 className="display mt-4 max-w-3xl">A place for students who are already in, and those about to start.</h1>
      <p className="lede mt-5">
        The live Student Corner is a login. Study files are not published as open downloads on the website, so this page only links to resources that actually exist.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((item) => (
          <article key={item.title} className="panel flex flex-col p-5">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 flex-1 text-sm text-muted">{item.text}</p>
            {item.external ? (
              <a href={item.href} className="mt-4 text-sm font-semibold" target="_blank" rel="noreferrer">
                {item.action}
              </a>
            ) : (
              <Link href={item.href} className="mt-4 text-sm font-semibold">
                {item.action}
              </Link>
            )}
          </article>
        ))}
      </div>
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Latest articles</h2>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {posts.map((post) => (
            <li key={post.slug} className="flex flex-wrap items-baseline justify-between gap-3 py-3">
              <Link href={`/blog/${post.slug}/`} className="font-semibold">
                {post.title}
              </Link>
              <span className="text-sm text-muted">{post.date}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
