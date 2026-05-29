# 🌹 Mahesa Permana — Cyber-Botanical Portfolio

A stunning, dark-mode portfolio website with a **Cyber-Botanical** aesthetic — deep OLED black, elegant purple glow, and golden typography, all woven together with a mechanical rose motif.

## ✨ Features

- 🌙 **OLED-Optimized Dark Mode** — true black background, retina-friendly
- 🌹 **Mechanical Rose** — animated SVG blooming on load, floating in hero
- 💜 **Purple & Gold Color System** — glow effects, gradient typography
- 🔴 **Custom Cursor** — gold dot + purple ring with lag physics
- ⚡ **Live GitHub API** — auto-fetches repos from `Hessong888`
- 📜 **Scroll Reveal** — elements animate in as you scroll
- 🎠 **Interactive Carousel** — showcase Vercel projects with swipe support
- 📱 **Fully Responsive** — mobile hamburger nav, fluid typography
- 🚀 **Zero Dependencies** — pure HTML + CSS + ES6 Modules

## 📁 Project Structure

```
Porto/
├── index.html            # Main entry point
├── css/
│   ├── main.css          # Design system, all components
│   └── animations.css    # Particles, glitch, stagger, shimmer
├── js/
│   ├── main.js           # Bootstrap (ES module)
│   ├── github.js         # GitHub API fetcher & renderer
│   ├── animations.js     # Scroll reveal, parallax, carousel, typing
│   └── cursor.js         # Custom cursor with hover effects
├── assets/
│   ├── rose.svg          # Mechanical rose SVG
│   └── hero_bg.png       # Hero background image
└── README.md
```

## 🛠️ Customization

### 1. Update Your Vercel Projects
In `index.html`, find the `#playground` section and replace the 4 placeholder cards:
```html
<div class="playground-card">
  <div class="playground-title">Your Project Name</div>
  <div class="playground-desc">Your project description...</div>
  <a href="https://your-app.vercel.app" ...>Launch App</a>
</div>
```

### 2. Update Education
In `index.html`, find the education cards and fill in your actual university/institution.

### 3. Update Experience
The timeline entries in `#experience` are pre-filled from your GitHub bio. Adjust dates and descriptions as needed.

### 4. Change GitHub Username
In `js/github.js`, update:
```js
const GITHUB_USERNAME = 'Hessong888';
```

## 🚀 Deployment Guide

### Option A — GitHub Pages (Free)

1. Push this folder to a GitHub repository (e.g. `portfolio`)
2. Go to **Settings → Pages**
3. Source: `main` branch, `/ (root)` folder
4. Your site will be live at `https://Hessong888.github.io/portfolio/`

### Option B — Vercel (Recommended, Free)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework: **Other** (static site)
4. Deploy → instant HTTPS URL

### Option C — Free Custom Domain via FreeDomain

1. Register at [domain.digitalplat.org](https://domain.digitalplat.org/)
2. Choose a free domain (e.g., `mahesapermana.us.kg`)
3. Set up Cloudflare DNS (free account)
4. Point CNAME to `Hessong888.github.io` or your Vercel URL
5. Add custom domain in GitHub Pages or Vercel settings
6. Enable HTTPS (auto via Cloudflare or Vercel)

#### FreeDomain DNS Records for GitHub Pages:
| Type | Name  | Value              |
|------|-------|--------------------|
| A    | @     | 185.199.108.153    |
| A    | @     | 185.199.109.153    |
| A    | @     | 185.199.110.153    |
| A    | @     | 185.199.111.153    |
| CNAME| www   | Hessong888.github.io |

## 🎨 Design Tokens

```css
--black:         #0a0a0f    /* OLED base */
--purple:        #7c3aed    /* Primary accent */
--purple-glow:   #a855f7    /* Hover/glow */
--gold:          #f59e0b    /* Headlines/CTA */
--gold-soft:     #fbbf24    /* Body highlight */
```

## 📝 License

MIT — free to use, modify, and deploy.

---

*Built with 💜 and 🌹 — Cyber-Botanical, 2024*
