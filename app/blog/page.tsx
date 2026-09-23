import type { Metadata } from "next";
import { BlogCard, BlogGrid } from "@/components/BlogCard";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles from DG Classes Global on commerce, ACCA, and courses after 12th.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <div className="wrap py-12">
      <p className="eyebrow">Journal</p>
      <h1 className="display mt-4">Find out the latest update.</h1>
      <p className="lede mt-5">The four articles currently published on the DG Classes journal, dated 3 February 2025.</p>
      <div className="mt-10">
        <BlogCard post={posts[0]} featured />
      </div>
      <div className="mt-4">
        <BlogGrid posts={posts.slice(1)} />
      </div>
    </div>
  );
}
