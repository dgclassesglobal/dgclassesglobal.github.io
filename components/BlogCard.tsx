import Link from "next/link";
import type { Post } from "@/lib/blog";

export function BlogCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <article className={`overflow-hidden rounded-[1.3rem] border border-line bg-surface ${featured ? "lg:grid lg:grid-cols-2" : ""}`}>
      <img src={post.image} alt={post.imageAlt} className={`w-full object-cover ${featured ? "h-64 lg:h-full" : "h-44"}`} />
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-dark">{post.topic} · {post.date}</p>
        <h3 className={`mt-2 font-semibold tracking-tight ${featured ? "text-2xl" : "text-lg"}`}>
          <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
        </h3>
        <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}/`} className="mt-4 inline-flex text-sm font-semibold">
          Read more
        </Link>
      </div>
    </article>
  );
}

export function BlogGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
