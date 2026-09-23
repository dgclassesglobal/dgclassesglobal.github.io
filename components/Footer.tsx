import Link from "next/link";
import { courseCategories, courses } from "@/lib/courses";
import { offices, otherLocations, phones, site } from "@/lib/site";
import { SiteLogo } from "./SiteLogo";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-ink text-[#f6f1eb]">
      <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="rounded-2xl bg-white p-3 inline-flex">
            <SiteLogo className="h-14 w-auto" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
            Founded in 2012 by Sir Divesh Gamnani, DG Classes is a commerce institute teaching online and offline, from Mumbai and Rajasthan to the Middle East.
          </p>
          <div className="mt-5 flex gap-4 text-sm font-semibold">
            <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={site.whatsappChannel} target="_blank" rel="noreferrer">WhatsApp channel</a>
          </div>
        </div>
        <div className="lg:col-span-2">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/about/", "About"],
              ["/courses/", "Courses"],
              ["/achievements/", "Achievements"],
              ["/testimonials/", "Testimonials"],
              ["/blog/", "Blog"],
              ["/student-corner/", "Student Corner"],
              ["/contact/", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-white/80 hover:text-white">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">Courses</p>
          <ul className="mt-4 space-y-2 text-sm">
            {courseCategories.map((category) => (
              <li key={category}>
                <Link href={`/courses/#${category.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="text-white/80 hover:text-white">
                  {category}
                </Link>
                <span className="mt-1 block text-xs text-white/45">
                  {courses.filter((course) => course.category === category).map((course) => course.shortName).join(" · ")}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {phones.map((phone) => (
              <li key={phone.tel}>
                <a href={`tel:${phone.tel}`}>{phone.number}</a>
                <span className="block text-xs text-white/45">{phone.region}</span>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            {offices.map((office) => (
              <li key={office.city} className="pt-2 text-white/70">
                <span className="block font-semibold text-white">{office.label}</span>
                {office.address}
              </li>
            ))}
            <li className="text-xs text-white/50">Also: {otherLocations.join(", ")}. Origins in Mumbai and Rajasthan.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-3 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DG Classes Global. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy/">Privacy</Link>
            <Link href="/terms/">Terms</Link>
            <a href={site.officialSite}>dgclassesglobal.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
