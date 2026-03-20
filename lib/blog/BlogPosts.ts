import "server-only";

import {
  BLOCKS,
  type Document,
  type Block,
  type Inline,
  type Text,
} from "@contentful/rich-text-types";
import {
  type Asset,
  type Entry,
  type EntryFieldTypes,
  type EntrySkeletonType,
} from "contentful";

import { contentfulClient } from "@/lib/contentful/ContentfulClient";

export type BlogImage = {
  url: string;
  alt: string;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  question?: string;
  sections?: BlogSection[];
  body?: Document;
  featuredImage?: BlogImage;
  seoTitle?: string;
  seoDescription?: string;
};

type ContentfulBlogPostSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    publishDate: EntryFieldTypes.Date;
    body: EntryFieldTypes.RichText;
    featuredImage: EntryFieldTypes.AssetLink;
  },
  "blogPost"
>;

type RichTextNode = Block | Inline | Text;

const mapFeaturedImage = (
  asset: Asset<undefined, string> | undefined,
  fallbackAlt: string
): BlogImage | undefined => {
  const url = asset?.fields.file?.url;

  if (!url) {
    return undefined;
  }

  return {
    url: url.startsWith("//") ? `https:${url}` : url,
    alt: asset?.fields.description || asset?.fields.title || fallbackAlt,
  };
};

const getNodeText = (node: RichTextNode): string => {
  if ("value" in node && typeof node.value === "string") {
    return node.value;
  }

  if (!("content" in node) || !Array.isArray(node.content)) {
    return "";
  }

  return node.content.map((child) => getNodeText(child as RichTextNode)).join(" ");
};

const getPlainText = (document: Document) => {
  return document.content
    .map((node) => getNodeText(node as RichTextNode).replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join(" ")
    .trim();
};

const getExcerpt = (document: Document) => {
  const paragraph = document.content.find((node) => node.nodeType === BLOCKS.PARAGRAPH);

  if (!paragraph) {
    return "Helpful local guidance from Elite Yard Hygiene.";
  }

  const text = getNodeText(paragraph as RichTextNode).replace(/\s+/g, " ").trim();

  if (text.length <= 180) {
    return text;
  }

  return `${text.slice(0, 177).trimEnd()}...`;
};

const getReadTime = (document: Document) => {
  const plainText = getPlainText(document);
  const wordCount = plainText ? plainText.split(/\s+/).length : 0;
  const minutes = Math.max(1, Math.ceil(wordCount / 220));

  return `${minutes} min read`;
};

const mapContentfulPost = (
  entry: Entry<ContentfulBlogPostSkeleton, undefined, string>
): BlogPost => {
  const body = entry.fields.body as Document;
  const description = getExcerpt(body);

  return {
    slug: entry.fields.slug,
    title: entry.fields.title,
    description,
    date: entry.fields.publishDate,
    readTime: getReadTime(body),
    category: "Blog",
    keywords: [],
    body,
    featuredImage: mapFeaturedImage(
      entry.fields.featuredImage as Asset<undefined, string> | undefined,
      entry.fields.title
    ),
    seoTitle: entry.fields.title,
    seoDescription: description,
  };
};

const getContentfulPosts = async () => {
  if (!contentfulClient) {
    return [];
  }

  const response = await contentfulClient.getEntries<ContentfulBlogPostSkeleton>({
    content_type: "blogPost",
    order: ["-fields.publishDate"],
    include: 2,
  });

  return response.items.map(mapContentfulPost);
};

export const getAllPosts = async () => {
  const posts = await getContentfulPosts();

  return posts;
};

export const getPostBySlug = async (slug: string) => {
  if (!contentfulClient) {
    return undefined;
  }

  const response = await contentfulClient.getEntries<ContentfulBlogPostSkeleton>({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
    include: 2,
  });

  const post = response.items[0];

  return post ? mapContentfulPost(post) : undefined;
};

export const getRecentPosts = async (limit = 3) => {
  const posts = await getAllPosts();

  return posts.slice(0, limit);
};
