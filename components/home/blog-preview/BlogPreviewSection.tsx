import { clsx } from "clsx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getRecentPosts } from "@/lib/blog/BlogPosts";
import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

export const BlogPreviewSection = async () => {
  const recentPosts = await getRecentPosts();

  return (
    <section className={`section ${styles.blogPreviewSection}`}>
      <div className="container">
        <div className={styles.blogListHeader} data-reveal>
          <div>
            <span className={shared.eyebrow}>From The Blog</span>
            <h2>Search-friendly answers to the questions local dog owners already ask.</h2>
          </div>
          <Link href="/blog" className={clsx(shared.button, shared.buttonSecondary)}>
            Visit the Blog
          </Link>
        </div>
        <div className={styles.blogGrid}>
          {recentPosts.map((post) => (
            <article key={post.slug} className={styles.blogCard} data-reveal>
              <div className={styles.blogMeta}>
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3>
                <Link href={`/blog/${post.slug}`} className={styles.blogTitleLink}>
                  {post.title}
                </Link>
              </h3>
              <p>{post.description}</p>
              <div className={styles.blogCardFooter}>
                <Link href={`/blog/${post.slug}`} className={shared.inlineLink}>
                  Read more
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
