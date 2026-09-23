import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { courses } from "@/lib/courses";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/about/", "/courses/", "/achievements/", "/testimonials/", "/blog/", "/student-corner/", "/contact/", "/privacy/", "/terms/"];
  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path || "/"}`,
      lastModified: now,
    })),
    ...courses.map((course) => ({
      url: `${site.url}/courses/${course.slug}/`,
      lastModified: now,
    })),
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}/`,
      lastModified: post.dateISO,
    })),
  ];
}
