import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { marked } from 'marked';
import hljs from 'highlight.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const contentDir = path.join(rootDir, 'content', 'blog');
const outputDir = path.join(rootDir, 'blog');
const site = {
  title: 'Mahesa Tirtha Agung Permana',
  url: 'https://www.xyzus.my.id',
  description: 'Mechatronics & IoT Engineer building practical systems from sensor to cloud to dashboard.'
};

function formatDate(dateString, locale) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid date: ${dateString}`);
  }

  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
}

function estimateReadTime(content) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

marked.setOptions({
  gfm: true,
  breaks: false,
  headerIds: false,
  mangle: false
});

const renderer = new marked.Renderer();
renderer.code = ({ text, lang, escaped }) => {
  const highlighted = hljs.highlightAuto(text, lang ? [lang] : undefined).value;
  const languageClass = lang ? ` class="language-${lang}"` : '';
  return `<pre class="code-block"><code${languageClass}>${highlighted}</code></pre>`;
};
renderer.blockquote = (quote) => `<blockquote>${quote}</blockquote>`;
renderer.image = (href, title, text) => {
  const alt = text || 'Blog image';
  const titleAttr = title ? ` title="${title}"` : '';
  return `<img src="${href}" alt="${alt}"${titleAttr} loading="lazy" style="max-width:100%; height:auto; border-radius:12px;" />`;
};
renderer.link = (href, title, text) => {
  const safeHref = href || '#';
  const rel = safeHref.startsWith('http') ? ' rel="noopener noreferrer"' : '';
  const titleAttr = title ? ` title="${title}"` : '';
  return `<a href="${safeHref}"${titleAttr}${rel}>${text}</a>`;
};
marked.use({ renderer });

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildPostHtml(post, posts) {
  const currentIndex = posts.findIndex((item) => item.slug === post.slug);
  const prev = posts[currentIndex + 1] || null;
  const next = posts[currentIndex - 1] || null;
  const prevHtml = prev
    ? `<a class="post-nav-link" href="../${prev.slug}/">← ${escapeHtml(prev.title)}</a>`
    : '<span class="post-nav-link is-disabled">← Previous</span>';
  const nextHtml = next
    ? `<a class="post-nav-link" href="../${next.slug}/">${escapeHtml(next.title)} →</a>`
    : '<span class="post-nav-link is-disabled">Next →</span>';

  return `<!DOCTYPE html>
<html lang="${post.lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(post.description)}" />
    <meta name="theme-color" content="#0a0a0f" />
    <meta property="og:title" content="${escapeHtml(post.title)}" />
    <meta property="og:description" content="${escapeHtml(post.description)}" />
    <meta property="og:type" content="article" />
    <meta property="article:published_time" content="${post.date}" />
    <meta property="og:image" content="${post.cover ? `${site.url}${post.cover}` : `${site.url}/assets/hero_bg.png`}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(post.title)}" />
    <meta name="twitter:description" content="${escapeHtml(post.description)}" />
    <meta name="twitter:image" content="${post.cover ? `${site.url}${post.cover}` : `${site.url}/assets/hero_bg.png`}" />
    <link rel="canonical" href="${site.url}/blog/${post.slug}/" />
    <title>${escapeHtml(post.title)} | ${escapeHtml(site.title)}</title>
    <link rel="stylesheet" href="../../css/main.css" />
    <link rel="stylesheet" href="../../css/animations.css" />
    <style>
      body { background: var(--black); color: var(--gray-100); }
      .blog-shell { max-width: 1100px; margin: 0 auto; padding: 80px 20px 120px; }
      .blog-back { display:inline-flex; align-items:center; gap:8px; margin-bottom:26px; color: var(--gold-soft); font-weight:600; }
      .blog-post { max-width: 68ch; margin: 0 auto; }
      .blog-post h1, .blog-post h2, .blog-post h3 { color: var(--gold-soft); margin: 1.5em 0 0.7em; line-height:1.2; }
      .blog-post p, .blog-post li, .blog-post td, .blog-post th { color: var(--gray-200); font-size: 1.02rem; }
      .blog-post .post-meta { display:flex; flex-wrap:wrap; gap:10px 14px; font-size: .82rem; color: var(--gray-400); margin-bottom: 20px; }
      .blog-post .tag-list { display:flex; flex-wrap:wrap; gap:8px; margin: 20px 0 28px; }
      .blog-post .tag { padding: 6px 12px; border: 1px solid var(--purple-border); border-radius: 999px; background: var(--purple-soft); color: var(--purple-glow); font-size: .78rem; }
      .blog-post blockquote { border-left: 3px solid var(--gold); padding-left: 18px; margin: 1.5em 0; color: var(--gray-100); background: rgba(255,255,255,0.02); }
      .blog-post table { width: 100%; overflow-x: auto; display:block; border-collapse: collapse; margin: 1.5em 0; }
      .blog-post th, .blog-post td { border: 1px solid rgba(255,255,255,0.12); padding: 0.8em; }
      .blog-post pre { background: #0b1020; border: 1px solid rgba(168, 85, 247, 0.18); border-radius: 14px; padding: 1rem; overflow-x:auto; margin: 1.4em 0; }
      .blog-post code { font-family: var(--font-mono); }
      .blog-post .hljs { background: transparent; }
      .blog-post img { max-width: 100%; height: auto; border-radius: 14px; }
      .blog-post a { color: var(--gold-soft); }
      .blog-post .post-nav { display:flex; justify-content:space-between; gap:16px; margin-top: 52px; padding-top:18px; border-top:1px solid rgba(255,255,255,0.08); }
      .post-nav-link { display:inline-flex; align-items:center; gap:8px; color: var(--gray-100); border:1px solid rgba(255,255,255,0.12); border-radius:999px; padding:10px 14px; }
      .post-nav-link.is-disabled { opacity: 0.5; }
      .sr-only { position:absolute; width:1px; height:1px; overflow:hidden; clip: rect(0,0,0,0); white-space: nowrap; }
    </style>
  </head>
  <body>
    <div class="blog-shell">
      <a class="blog-back" href="../">← Back to blog</a>
      <article class="blog-post" aria-labelledby="post-title">
        <header>
          <div class="post-meta">
            <time datetime="${post.date}">${formatDate(post.date, post.lang === 'id' ? 'id-ID' : 'en-US')}</time>
            <span>•</span>
            <span>${escapeHtml(post.readTime)}</span>
          </div>
          <h1 id="post-title">${escapeHtml(post.title)}</h1>
          <p>${escapeHtml(post.description)}</p>
          <div class="tag-list">
            ${post.tags.map((tag) => `<span class="tag">#${escapeHtml(tag)}</span>`).join('')}
          </div>
        </header>
        <main>${marked.parse(post.content)}</main>
        <nav class="post-nav" aria-label="Post navigation">
          ${prevHtml}
          ${nextHtml}
        </nav>
      </article>
    </div>
  </body>
</html>`;
}

function buildIndexHtml(posts) {
  const tags = [...new Set(posts.flatMap((post) => post.tags))];
  const tagLinks = tags.map(tag => `<a href="?tag=${encodeURIComponent(tag)}">#${escapeHtml(tag)}</a>`).join(' ');

  const cards = posts.map((post) => {
    const cover = post.cover ? `<img src="${post.cover}" alt="${escapeHtml(post.title)}" loading="lazy" style="width:100%; height:180px; object-fit:cover; border-radius:14px; margin-bottom:14px;" />` : '';
    return `
      <article class="blog-card">
        ${cover}
        <div class="blog-card-meta">
          <time datetime="${post.date}">${formatDate(post.date, post.lang === 'id' ? 'id-ID' : 'en-US')}</time>
          <span>• ${escapeHtml(post.readTime)}</span>
        </div>
        <h2><a href="./${post.slug}/">${escapeHtml(post.title)}</a></h2>
        <p>${escapeHtml(post.description)}</p>
        <div class="blog-card-tags">
          ${post.tags.map((tag) => `<span>#${escapeHtml(tag)}</span>`).join('')}
        </div>
      </article>
    `;
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Notes, guides, and practical write-ups from Mahesa Tirtha Agung Permana." />
    <meta property="og:title" content="Blog | Mahesa Tirtha Agung Permana" />
    <meta property="og:description" content="Notes, guides, and practical write-ups from Mahesa Tirtha Agung Permana." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${site.url}/assets/hero_bg.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <title>Blog | ${escapeHtml(site.title)}</title>
    <link rel="canonical" href="${site.url}/blog/" />
    <link rel="stylesheet" href="../css/main.css" />
    <link rel="stylesheet" href="../css/animations.css" />
    <style>
      body { background: var(--black); color: var(--gray-100); }
      .blog-shell { max-width: 1100px; margin: 0 auto; padding: 80px 20px 120px; }
      .blog-header { margin-bottom: 30px; }
      .blog-header h1 { font-size: clamp(2.2rem, 5vw, 4rem); color: var(--gold-soft); margin-bottom: 10px; }
      .blog-filters { display:flex; flex-wrap:wrap; gap:10px; margin: 18px 0 30px; }
      .blog-filters a { border:1px solid var(--purple-border); border-radius:999px; padding:8px 12px; background: rgba(124,58,237,0.06); color: var(--gray-100); }
      .blog-search { display:flex; gap:10px; margin-bottom: 26px; }
      .blog-search input { width:min(100%, 420px); border:1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.02); color: var(--gray-100); padding: 12px 14px; border-radius: 10px; }
      .blog-search button { border-radius:10px; background: linear-gradient(135deg, var(--purple), var(--gold)); color: var(--black); font-weight:700; padding: 12px 16px; }
      .blog-grid { display:grid; grid-template-columns: repeat(auto-fit,minmax(260px,1fr)); gap:22px; }
      .blog-card { border:1px solid rgba(255,255,255,0.08); border-radius: 18px; background: rgba(255,255,255,0.02); padding: 18px; }
      .blog-card-meta { display:flex; flex-wrap:wrap; gap:8px; font-size:.8rem; color: var(--gray-400); margin-bottom: 12px; }
      .blog-card h2 { font-size:1.6rem; margin-bottom: 10px; }
      .blog-card h2 a { color: var(--gold-soft); }
      .blog-card p { color: var(--gray-300); }
      .blog-card-tags { display:flex; gap:8px; flex-wrap:wrap; margin-top:16px; }
      .blog-card-tags span { color: var(--purple-glow); font-size: .74rem; border:1px solid var(--purple-border); border-radius:999px; padding:4px 8px; }
      .blog-empty { border:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.02); border-radius:18px; padding:30px; }
    </style>
  </head>
  <body>
    <div class="blog-shell">
      <header class="blog-header">
        <a href="../" style="color: var(--gold-soft); font-weight:700;">← Home</a>
        <h1>Blog</h1>
        <p>Practical notes on mechatronics, IoT, automation, and connected systems.</p>
      </header>

      <div class="blog-filters" aria-label="Tag filters">
        <a href="./">All</a>
        ${tagLinks}
      </div>

      <form class="blog-search" action="./" method="get">
        <label class="sr-only" for="search">Search posts</label>
        <input id="search" name="q" type="search" placeholder="Search by title" />
        <button type="submit">Search</button>
      </form>

      <main class="blog-grid">
        ${cards || '<div class="blog-empty">No posts yet. Check back soon.</div>'}
      </main>
    </div>
  </body>
</html>`;
}

function buildFeedXml(posts) {
  const items = posts.map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${site.url}/blog/${post.slug}/</link>
      <guid>${site.url}/blog/${post.slug}/</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>
  `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.title)} Blog</title>
    <link>${site.url}/blog/</link>
    <description>${escapeXml(site.description)}</description>
    <language>en-us</language>
    ${items}
  </channel>
</rss>`;
}

function buildSitemapXml(posts) {
  const pages = [
    `${site.url}/`,
    `${site.url}/blog/`,
    ...posts.map((post) => `${site.url}/blog/${post.slug}/`)
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map((url) => `
    <url>
      <loc>${escapeXml(url)}</loc>
    </url>
  `).join('')}
</urlset>`;
}

function escapeXml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function main() {
  await ensureDir(contentDir);
  await ensureDir(outputDir);

  const filenames = await fs.readdir(contentDir);
  const markdownFiles = filenames.filter((name) => name.endsWith('.md') && name !== '_template.md');
  const posts = [];

  for (const name of markdownFiles) {
    const sourcePath = path.join(contentDir, name);
    const raw = await fs.readFile(sourcePath, 'utf8');
    const parsed = matter(raw);
    const data = parsed.data || {};

    const required = ['title', 'date', 'description', 'tags', 'lang'];
    for (const field of required) {
      if (data[field] === undefined || data[field] === null || data[field] === '') {
        throw new Error(`${name}: missing required frontmatter field "${field}".`);
      }
    }

    const slug = path.basename(name, '.md');
    if (posts.some((post) => post.slug === slug)) {
      throw new Error(`${name}: duplicate slug "${slug}".`);
    }

    const date = new Date(data.date);
    if (Number.isNaN(date.getTime())) {
      throw new Error(`${name}: invalid date "${data.date}".`);
    }

    if (!['id', 'en'].includes(data.lang)) {
      throw new Error(`${name}: lang must be either "id" or "en".`);
    }

    if (!Array.isArray(data.tags)) {
      throw new Error(`${name}: tags must be an array.`);
    }

    const article = {
      slug,
      title: String(data.title),
      date: date.toISOString().slice(0, 10),
      description: String(data.description),
      tags: data.tags.map((tag) => String(tag).trim()).filter(Boolean),
      lang: data.lang,
      cover: data.cover || '',
      draft: Boolean(data.draft),
      content: parsed.content.trim(),
      readTime: estimateReadTime(parsed.content)
    };

    if (article.draft) {
      continue;
    }

    posts.push(article);
  }

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  for (const post of posts) {
    const postDir = path.join(outputDir, post.slug);
    await ensureDir(postDir);
    const html = buildPostHtml(post, posts);
    await fs.writeFile(path.join(postDir, 'index.html'), html, 'utf8');
  }

  await fs.writeFile(path.join(outputDir, 'posts.json'), JSON.stringify(posts.map(post => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    description: post.description,
    tags: post.tags,
    lang: post.lang,
    cover: post.cover,
    readTime: post.readTime
  })), null, 2), 'utf8');

  await fs.writeFile(path.join(outputDir, 'index.html'), buildIndexHtml(posts), 'utf8');
  await fs.writeFile(path.join(outputDir, 'rss.xml'), buildFeedXml(posts), 'utf8');
  await fs.writeFile(path.join(outputDir, 'sitemap.xml'), buildSitemapXml(posts), 'utf8');

  console.log(`Built ${posts.length} blog posts.`);
}

try {
  await main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
