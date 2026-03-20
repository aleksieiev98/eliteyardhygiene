# Contentful setup

This project reads blog posts from Contentful.

## Environment variables

Add these values to `.env.local`:

```bash
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ENVIRONMENT=master
CONTENTFUL_ACCESS_TOKEN=your_content_delivery_api_token
```

`CONTENTFUL_ENVIRONMENT` is optional and defaults to `master`.

## Recommended content model

Create a content type named `Blog Post` with the API identifier `blogPost`.

Use these fields:

1. `title`
Type: Short text
Required: yes

2. `slug`
Type: Short text
Required: yes
Validation: unique
Recommended format: lowercase with hyphens

3. `featuredImage`
Type: Media
Required: no

4. `body`
Type: Rich text
Required: yes

5. `publishDate`
Type: Date & time
Required: yes

## What the app generates automatically

The app derives these values from the content:

- excerpt / summary: from the first paragraph in `body`
- read time: from the total word count in `body`
- SEO title: from `title`
- SEO description: from the generated excerpt
- category: defaults to `Blog`

## Editor workflow

1. Ask ChatGPT for a blog draft with a title, slug suggestion, publish date, and body copy.
2. Open Contentful and create a new `Blog Post` entry.
3. Fill in `title`, `slug`, `publishDate`, and `body`.
4. Optionally upload a `featuredImage`.
5. Publish the entry.

## Notes

- The homepage blog preview, blog index, blog post pages, and sitemap all read from Contentful.
- New blog post slugs can render on demand because the blog route stays dynamic for uncached slugs.
- If you want instant refresh after publishing, we can add a Contentful webhook and Next.js revalidation route next.
