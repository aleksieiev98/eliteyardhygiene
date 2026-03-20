import type { Metadata } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";

import { getAllPosts, getPostBySlug } from "@/lib/blog/BlogPosts";
import shared from "@/styles/shared.module.css";

import styles from "../styles.module.css";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;

export const generateStaticParams = async () => {
  const posts = await getAllPosts();

  return posts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async ({
  params,
}: BlogPostPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.seoTitle || post.title} | Elite Yard Hygiene`,
    description: post.seoDescription || post.description,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.description,
      type: "article",
      url: `https://eliteyardhygiene.com/blog/${post.slug}`,
      images: post.featuredImage?.url
        ? [{ url: post.featuredImage.url, alt: post.featuredImage.alt }]
        : [],
    },
  };
};

const richTextOptions = {
  renderNode: {
    [BLOCKS.HEADING_2]: (_node: unknown, children: React.ReactNode) => (
      <h2>{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_node: unknown, children: React.ReactNode) => (
      <h3>{children}</h3>
    ),
    [BLOCKS.PARAGRAPH]: (_node: unknown, children: React.ReactNode) => (
      <p>{children}</p>
    ),
    [BLOCKS.UL_LIST]: (_node: unknown, children: React.ReactNode) => (
      <ul>{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_node: unknown, children: React.ReactNode) => (
      <ol>{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_node: unknown, children: React.ReactNode) => (
      <li>{children}</li>
    ),
    [BLOCKS.QUOTE]: (_node: unknown, children: React.ReactNode) => (
      <blockquote>{children}</blockquote>
    ),
    [INLINES.HYPERLINK]: (
      node: { data?: { uri?: string } },
      children: React.ReactNode
    ) => (
      <a href={node.data?.uri} target="_blank" rel="noreferrer">
        {children}
      </a>
    ),
  },
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.blogPage}>
      <article className={styles.blogArticleSection}>
        <div className={`container ${styles.articleShell}`}>
          <Link href="/blog" className={styles.articleBack}>
            <ArrowLeft size={16} />
            Back to blog
          </Link>

          <header className={styles.articleHeader} data-reveal>
            <div className={styles.blogMeta}>
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
          </header>

          <div className={styles.articleContent}>
            {post.body
              ? documentToReactComponents(post.body, richTextOptions)
              : post.sections?.map((section) => (
                  <section
                    key={section.heading}
                    className={styles.articleSection}
                    data-reveal
                  >
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                ))}
          </div>

          <aside className={styles.articleCta} data-reveal>
            <h3>Want help instead of doing this yourself?</h3>
            <p>
              Elite Yard Hygiene offers weekly, twice-weekly, and one-time pet
              waste removal for residential yards.
            </p>
            <Link
              href="/#quote"
              className={`${shared.button} ${shared.buttonPrimary}`}
            >
              Get a Free Quote
            </Link>
          </aside>
        </div>
      </article>
    </main>
  );
}
