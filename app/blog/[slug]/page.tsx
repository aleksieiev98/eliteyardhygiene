import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/data/blog-posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Elite Yard Hygiene`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://eliteyardhygiene.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="blog-page">
      <article className="blog-article section">
        <div className="container article-shell">
          <Link href="/blog" className="article-back">
            <ArrowLeft size={16} />
            Back to blog
          </Link>

          <header className="article-header" data-reveal>
            <div className="blog-meta">
              <span>{post.category}</span>
              <span>
                <Clock3 size={15} />
                {post.readTime}
              </span>
              <span>
                <CalendarDays size={15} />
                {post.date}
              </span>
            </div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <div className="article-question">
              <strong>Popular question:</strong> {post.question}
            </div>
          </header>

          <div className="article-content">
            {post.sections.map((section) => (
              <section key={section.heading} className="article-section" data-reveal>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          <aside className="article-cta" data-reveal>
            <h3>Want help instead of doing this yourself?</h3>
            <p>
              Elite Yard Hygiene offers weekly, twice-weekly, and one-time pet
              waste removal for residential yards.
            </p>
            <Link href="/#quote" className="button button-primary">
              Get a Free Quote
            </Link>
          </aside>
        </div>
      </article>
    </main>
  );
}
