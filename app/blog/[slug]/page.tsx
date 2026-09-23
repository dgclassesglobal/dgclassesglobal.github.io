import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.dateISO,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    image: post.image,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    description: post.excerpt,
    mainEntityOfPage: `${site.url}/blog/${post.slug}/`,
  };

  return (
    <article className="wrap max-w-3xl py-12">
      <p className="eyebrow">{post.topic}</p>
      <h1 className="section-title mt-4">{post.title}</h1>
      <p className="mt-3 text-sm text-muted">{post.date} · DG Classes Global</p>
      <img src={post.image} alt={post.imageAlt} className="mt-6 w-full rounded-[1.3rem] border border-line object-cover" />
      <div className="prose-dg mt-8">
        {post.blocks.map((block, index) => {
          if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
          if (block.type === "h3") return <h3 key={index}>{block.text}</h3>;
          if (block.type === "ul") {
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }
          return <p key={index}>{block.text}</p>;
        })}
      </div>
      <p className="mt-10">
        <Link href="/blog/" className="font-semibold">
          Back to the journal
        </Link>
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </article>
  );
}
