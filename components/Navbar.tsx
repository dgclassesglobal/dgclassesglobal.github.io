"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { courseCategories, courses } from "@/lib/courses";
import { phones, site } from "@/lib/site";
import { SiteLogo } from "./SiteLogo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/courses/", label: "Courses", courses: true },
  { href: "/achievements/", label: "Achievements" },
  { href: "/testimonials/", label: "Testimonials" },
  { href: "/blog/", label: "Blog" },
  { href: "/student-corner/", label: "Student Corner" },
  { href: "/contact/", label: "Contact" },
];

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setCoursesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="nav-shell">
      <div className="utility">
        <div className="wrap flex items-center justify-between gap-4 py-2">
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            {phones.map((phone) => (
              <a key={phone.tel} href={`tel:${phone.tel}`} className="hover:text-white">
                <span className="opacity-70">{phone.region}</span> {phone.number}
              </a>
            ))}
          </p>
          <a href={`mailto:${site.email}`} className="hover:text-white">
            {site.email}
          </a>
        </div>
      </div>
      <div className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="wrap flex h-[4.5rem] items-center gap-4">
          <Link href="/" aria-label="DG Classes Global home" className="shrink-0">
            <SiteLogo className="h-11 w-auto md:h-12" />
          </Link>

          <nav className="ml-auto hidden items-center gap-4 xl:flex" aria-label="Primary">
            {links.map((link) =>
              link.courses ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setCoursesOpen(true)}
                  onMouseLeave={() => setCoursesOpen(false)}
                >
                  <button
                    type="button"
                    className="nav-link inline-flex items-center gap-1"
                    aria-expanded={coursesOpen}
                    aria-haspopup="true"
                    onClick={() => setCoursesOpen((value) => !value)}
                  >
                    Courses <ChevronDown size={14} aria-hidden />
                  </button>
                  {coursesOpen ? (
                    <div className="dropdown" role="menu">
                      <div className="grid grid-cols-2 gap-4">
                        {courseCategories.map((category) => (
                          <div key={category}>
                            <p className="px-2 text-xs font-bold uppercase tracking-[0.14em] text-muted">{category}</p>
                            <div className="mt-1">
                              {courses
                                .filter((course) => course.category === category)
                                .map((course) => (
                                  <Link
                                    key={course.slug}
                                    href={`/courses/${course.slug}/`}
                                    className="block rounded-lg px-2 py-1.5 text-sm font-semibold hover:bg-brand-light"
                                    role="menuitem"
                                  >
                                    {course.name}
                                  </Link>
                                ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <Link href="/courses/" className="mt-3 inline-flex text-sm font-semibold text-brand-dark">
                        View all courses
                      </Link>
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="ml-auto flex items-center gap-2 xl:ml-4">
            <ThemeToggle />
            <Link href="/contact/" className="btn btn-ghost hidden md:inline-flex">
              Enquire Now
            </Link>
            <Link href="/contact/?intent=demo#enquire" className="btn btn-primary hidden sm:inline-flex">
              Book a Demo Class
            </Link>
            <button
              type="button"
              className="icon-btn xl:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div id={menuId} className="mobile-panel xl:hidden" role="dialog" aria-modal="true" aria-label="Mobile menu">
          <div className="flex h-[4.5rem] items-center justify-between px-4">
            <SiteLogo className="h-11 w-auto" />
            <button type="button" className="icon-btn" onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={18} />
            </button>
          </div>
          <nav className="wrap flex max-h-[calc(100vh-8rem)] flex-col gap-1 overflow-auto pb-28" aria-label="Mobile">
            {links.map((link) => (
              <div key={link.href}>
                <Link href={link.href} className="block py-3 text-2xl font-semibold tracking-tight" aria-current={isCurrent(pathname, link.href) ? "page" : undefined}>
                  {link.label}
                </Link>
                {link.courses ? (
                  <div className="grid grid-cols-2 gap-2 pb-3">
                    {courses.map((course) => (
                      <Link key={course.slug} href={`/courses/${course.slug}/`} className="rounded-xl border border-line px-3 py-2 text-sm font-semibold">
                        {course.shortName}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Link href="/contact/?intent=demo#enquire" className="btn btn-primary">
                Book a Demo Class
              </Link>
              <Link href="/contact/" className="btn btn-secondary">
                Enquire Now
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
