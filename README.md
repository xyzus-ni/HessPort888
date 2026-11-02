---
title: "How this blog system works"
date: 2026-11-02
description: "A simple overview of the Markdown-driven blog workflow, how static generation works, and how to publish new posts without a CMS."
tags: [blog, markdown, static-site]
lang: en
cover: /assets/blog/blog-system.png
draft: false
---

# How this blog system works

This website uses a static Markdown-based blog workflow. Instead of a database or a CMS, each post lives as its own file in the `content/blog/` folder and is converted into HTML during the build step.

## The workflow

1. Create a new Markdown file with a slug-based filename.
2. Add valid frontmatter with metadata like title, date, description, and tags.
3. Run `npm run build:blog`.
4. The script validates the file, generates the blog index, builds each post page, and writes metadata files for the homepage and feed.

This means publishing a new article is as simple as:

```bash
npm run build:blog
```

Then commit and push your change.

## Why static generation

Static generation keeps the site fast, simple, and deployable anywhere. There is no runtime database or server-side rendering required.

For a portfolio like this, it is a clean fit because it reduces maintenance complexity and keeps content easy to version with Git.

## Files involved

- `content/blog/*.md` — source articles
- `scripts/build-blog.mjs` — build logic
- `blog/posts.json` — feed for the homepage
- `blog/rss.xml` — RSS feed
- `blog/sitemap.xml` — sitemap

## Drafts and visibility

If you want a post to stay hidden, set:

```yaml
draft: true
```

The build process ignores drafts automatically, so they are safe to keep in the repository while they are being edited.

## Writing in multiple languages

Use `lang: id` for Indonesian posts and `lang: en` for English posts. This impacts post metadata and date formatting, while still keeping the site design consistent.

This blog pattern is intentionally lightweight: one Markdown file, one build command, and a strong editorial workflow without additional infrastructure.
