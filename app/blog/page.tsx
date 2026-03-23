import type { Metadata } from "next";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Search } from "lucide-react";

import { getAllPosts } from "@/lib/blog/BlogPosts";
import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Pet Waste Removal Blog | Elite Yard Hygiene",
  description:
    "SEO-focused answers to common pet waste removal questions, lawn hygiene tips, and local yard cleanup advice from Elite Yard Hygiene.",
};

const defaultFeaturedImage = {
  url: "/assets/vacuum_brush_rinse_maintainance.webp",
  alt: "Pet waste removal process including vacuuming, brushing, rinsing, and maintenance",
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  const [featuredPost, ...otherPosts] = posts;

  if (!featuredPost) {
    return (
      <main className={styles.blogPage}>
        <section className={styles.blogHeroSection}>
          <div className="container">
            <div className={styles.sectionHeading} data-reveal>
              <span className={shared.eyebrow}>Elite Yard Hygiene Blog</span>
              <h1 className={styles.blogTitle}>
                Fresh content is coming soon.
              </h1>
              <p>
                We are setting up the blog right now. Check back soon for local
                yard cleanup tips.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const featuredImage = featuredPost.featuredImage?.url
    ? featuredPost.featuredImage
    : defaultFeaturedImage;

  return (
    <main className={styles.blogPage}>
      <section className={styles.blogHeroSection}>
        <div className="container">
          <div className={styles.sectionHeading} data-reveal>
            <span className={shared.eyebrow}>Elite Yard Hygiene Blog</span>
            <h1 className={styles.blogTitle}>
              Helpful answers that make us easier to find and easier to trust.
            </h1>
            <p>
              This blog is built around real homeowner questions about dog poop
              cleanup, recurring service, lawn care, sanitation, and local pet
              waste removal. It is designed to support organic search visibility
              while giving visitors useful, clear answers.
            </p>
          </div>

          <article className={styles.featuredPostCard} data-reveal>
            <div className={styles.featuredPostCopy}>
              <div className={styles.blogMeta}>
                <span>{featuredPost.category}</span>
                <span>{featuredPost.readTime}</span>
                <span>{featuredPost.date}</span>
              </div>
              <h2>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className={styles.blogTitleLink}
                >
                  {featuredPost.title}
                </Link>
              </h2>
              <p>{featuredPost.description}</p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className={clsx(shared.button, shared.buttonPrimary)}
              >
                Read the article
              </Link>
            </div>
            <div className={styles.featuredPostVisual}>
              <Image
                src={featuredImage.url}
                alt={featuredImage.alt}
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                className={styles.imageCover}
              />
            </div>
          </article>
        </div>
      </section>

      <section className={styles.blogListSection}>
        <div className="container">
          <div className={styles.blogListHeader} data-reveal>
            <div>
              <span className={shared.eyebrow}>Recent Posts</span>
              <h2>Fresh local-service content for search and trust.</h2>
            </div>
            <div className={styles.blogSearchNote}>
              <Search size={18} />
              <span>
                Targeting high-intent questions homeowners actually search
              </span>
            </div>
          </div>

          <div className={styles.blogGrid}>
            {otherPosts.map((post) => (
              <article key={post.slug} className={styles.blogCard} data-reveal>
                <div className={styles.blogMeta}>
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={styles.blogTitleLink}
                  >
                    {post.title}
                  </Link>
                </h3>
                <p>{post.description}</p>
                <div className={styles.blogCardFooter}>
                  <span className={styles.blogDate}>
                    <CalendarDays size={16} />
                    {post.date}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={shared.inlineLink}
                  >
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
