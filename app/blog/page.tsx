import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Search } from "lucide-react";
import { getAllPosts } from "@/data/blog-posts";

const posts = getAllPosts();

export const metadata: Metadata = {
  title: "Pet Waste Removal Blog | Elite Yard Hygiene",
  description:
    "SEO-focused answers to common pet waste removal questions, lawn hygiene tips, and local yard cleanup advice from Elite Yard Hygiene.",
};

export default function BlogIndexPage() {
  const [featuredPost, ...otherPosts] = posts;

  return (
    <main className="blog-page">
      <section className="blog-hero section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Elite Yard Hygiene Blog</span>
            <h1 className="blog-title">Helpful answers that make us easier to find and easier to trust.</h1>
            <p>
              This blog is built around real homeowner questions about dog poop
              cleanup, recurring service, lawn care, sanitation, and local pet
              waste removal. It is designed to support organic search visibility
              while giving visitors useful, clear answers.
            </p>
          </div>

          <article className="featured-post-card" data-reveal>
            <div className="featured-post-copy">
              <div className="blog-meta">
                <span>{featuredPost.category}</span>
                <span>{featuredPost.readTime}</span>
                <span>{featuredPost.date}</span>
              </div>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.description}</p>
              <div className="keyword-row">
                {featuredPost.keywords.slice(0, 3).map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
              <Link href={`/blog/${featuredPost.slug}`} className="button button-primary">
                Read the article
              </Link>
            </div>
            <div className="featured-post-visual">
              <Image
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80"
                alt="Happy dog in a clean yard"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                className="comparison-image"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="section blog-list-section">
        <div className="container">
          <div className="blog-list-header" data-reveal>
            <div>
              <span className="eyebrow">Recent Posts</span>
              <h2>Fresh local-service content for search and trust.</h2>
            </div>
            <div className="blog-search-note">
              <Search size={18} />
              <span>Targeting high-intent questions homeowners actually search</span>
            </div>
          </div>

          <div className="blog-grid">
            {otherPosts.map((post) => (
              <article key={post.slug} className="blog-card" data-reveal>
                <div className="blog-meta">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="blog-card-footer">
                  <span className="blog-date">
                    <CalendarDays size={16} />
                    {post.date}
                  </span>
                  <Link href={`/blog/${post.slug}`} className="inline-link">
                    Read more
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
