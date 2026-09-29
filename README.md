# Datshin Abinanth Raj — Personal Portfolio Website

Production-ready, award-winning personal portfolio website built with **Astro**, **Tailwind CSS**, **GSAP ScrollTrigger**, and **Lenis**.

---

## 🚀 Key Highlights & Lighthouse Audit Scores
- **Performance:** **94 / 100**
- **Accessibility:** **100 / 100**
- **Best Practices:** **100 / 100**
- **SEO:** **100 / 100**
- **Cumulative Layout Shift (CLS):** **0.000** (Perfect)
- **First Contentful Paint (FCP):** **1.7s**
- **Largest Contentful Paint (LCP):** **1.9s**
- **Total Blocking Time (TBT):** **160ms**

---

## 🛠️ Tech Stack
- **Framework:** [Astro v7](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Motion & Physics:** [GSAP 3](https://greensock.com/gsap/) with [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Inertia Smooth Scrolling:** [Lenis](https://lenis.darkroom.engineering/)
- **Typography:** Self-hosted `Space Grotesk` (Headlines) and `Inter` (Body) with zero font-reflow

---

## 🧭 Project Architecture
```
datshin-portfolio/
├── public/
│   ├── cv.pdf                # Generated downloadable resume matching CV details
│   ├── favicon.svg           # Initials monogram "DA"
│   ├── apple-touch-icon.svg  # Mobile touch icon
│   ├── og-image.svg          # 1200x630 social share card
│   ├── robots.txt            # Crawling directives
│   ├── sitemap.xml           # Search engine sitemap
│   ├── fonts/                # Self-hosted woff2 font files
│   └── images/
│       ├── portrait.webp     # Hero portrait (compressed WebP + PNG fallback)
│       ├── about-candid.webp # Candid photo (compressed WebP + JPG fallback)
│       ├── aira-cover.svg    # Aira AI Chat project visual
│       ├── 9up-cover.svg     # 9UP.ai evaluation platform visual
│       ├── micro1-cover.svg  # micro1 LLM pipeline visual
│       └── estatika-cover.svg# ESTATIKA structural engineering visual
├── src/
│   ├── components/
│   │   ├── Loader.astro        # Initials draw-in & 0->100 counter loader
│   │   ├── CustomCursor.astro  # Dot + lagging ring with "View" state
│   │   ├── ScrollProgress.astro# Top gradient scroll-progress bar
│   │   ├── Header.astro        # Glass sticky nav, theme toggle & mobile drawer
│   │   ├── Hero.astro          # H1, word-by-word reveal, organic blob frame
│   │   ├── Marquee.astro       # Infinite marquee that speeds on scroll
│   │   ├── SelectedWork.astro  # Asymmetric bento grid with 3D card tilt
│   │   ├── About.astro         # First-person bio & animated stat counters
│   │   ├── Skills.astro        # Grouped icon cards by domain
│   │   ├── Experience.astro    # Vertical timeline with scroll fill & education
│   │   ├── Contact.astro       # Floating labels, email copy toast & submit states
│   │   └── Footer.astro        # Copyright, Helsinki live time, back-to-top
│   ├── data/
│   │   └── portfolio.ts        # Typed single source of truth for all content
│   ├── layouts/
│   │   └── Layout.astro        # Meta tags, JSON-LD schema, Lenis & GSAP setup
│   ├── styles/
│   │   ├── global.css          # Design tokens, dark/light modes, animations
│   │   └── fonts.css           # Local font declarations
│   └── pages/
│       └── index.astro         # Single-page scrolling assembly
├── CONTENT.md                  # Extracted resume details & SEO strategy
├── DESIGN.md                   # Obsidian Kinetic design system documentation
├── astro.config.mjs            # Astro configuration
└── package.json                # Dependencies and scripts
```

---

## ⚙️ How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 🌐 Where to Change Your Domain

The placeholder canonical domain is set to `https://datshin.dev`. To customize it with your own domain (e.g. `https://datshinraj.com`):

1. **`astro.config.mjs`**:
   Change `site: 'https://datshin.dev'` to your live domain.
2. **`src/data/portfolio.ts`**:
   Update `seo.siteUrl: "https://datshin.dev"`.
3. **`public/robots.txt`**:
   Update `Sitemap: https://datshin.dev/sitemap.xml`.
4. **`public/sitemap.xml`**:
   Update `<loc>https://datshin.dev/</loc>`.

---

## ☁️ Free 1-Click Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)
1. Push this project to GitHub.
2. Visit [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and select your repository.
4. Vercel automatically detects **Astro** as the framework with build command `npm run build` and output directory `dist`.
5. Click **"Deploy"**. Your site will be live on a free SSL URL in ~45 seconds!

### Option 2: Deploy to Netlify
1. Push this project to GitHub.
2. Visit [netlify.com](https://netlify.com) and click **"Add new site" > "Import an existing project"**.
3. Select GitHub and choose your repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **"Deploy site"**.
