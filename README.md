# Ecommerce & CRO Developer Knowledge Base

[![Astro](https://img.shields.io/badge/Astro-5.2-purple.svg)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Saabbir/ecom-and-cro)

A static-first, high-performance developer documentation platform and sequential learning resource for **Ecommerce Domain Architecture**, **Shopify Platform Engineering**, and **Conversion Rate Optimization (CRO)**.

---

## 🚀 Key Features

- **4 Master Sequential Learning Tracks**:
  1. **Track 1: Product & Catalog Architecture** (11 Steps)
  2. **Track 2: Commerce Participants, Pricing & Discounts** (11 Steps)
  3. **Track 3: Orders, Payments & Fulfillment** (13 Steps)
  4. **Track 4: Metrics, CRO & Experimentation** (19 Steps)
- **Interactive Tools Suite**:
  - [CRO Audit Checklist](/tools/cro-audit-checklist/): Live 16-point evaluation tool with localStorage score tracking.
  - [Ecommerce Terminology Quiz](/tools/terminology-quiz/): Self-assessment domain knowledge quiz.
- **Short Canonical URL Scheme**:
  - `/ecommerce/:slug` — Core domain concepts (Product, SKU, Inventory, 3PL, Supply Chain)
  - `/compare/:slug` — Comparison matrices (Product vs Variant, 3PL vs In-House)
  - `/shopify/:slug` — Platform implementations (GraphQL Selling Plans, PDP CRO)
  - `/metrics/:slug` — Mathematical standards (Conversion Rate, Margin vs Markup)
  - `/cro/:slug` — Optimization frameworks (Hypothesis, A/B Testing, Audit)
  - `/paths/:id` — Sequential master tracks
  - `/tools/:id` — Interactive client-side calculators & audits
- **Instant Search (`Cmd+K`)**: Fast client-side modal search with filter pills.
- **SEO & Accessibility Built-in**: Full XML sitemap (`/sitemap.xml`), `robots.txt`, ARIA accessibility compliance, and high-readability responsive design.

---

## 🛠️ Tech Stack

- **Framework**: Astro 5 (Static Site Generator)
- **Styling**: Vanilla CSS with Design Tokens (`tokens.css`, `global.css`)
- **Syntax Highlighting**: Shiki (`github-dark` theme)
- **Content System**: Astro Content Collections (`src/content/knowledge/`)
- **Type Checking**: TypeScript (`@astrojs/check`)

---

## 💻 Local Development

```bash
# 1. Clone repository
git clone https://github.com/Saabbir/ecom-and-cro.git
cd ecom-and-cro

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Type check Astro files
npm run check

# 5. Build static production site
npm run build
```

The production bundle will be generated in the `dist/` directory (**81 static HTML pages built in ~800ms**).

---

## 🌐 Deployment Guide (Zero-Config)

This static-first platform deploys seamlessly on any SSG host.

### Netlify (Recommended)

1. Connect your repository to Netlify via [app.netlify.com](https://app.netlify.com/).
2. Select **GitHub** &rarr; **`Saabbir/ecom-and-cro`**.
3. Netlify automatically detects Astro and deploys:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

Detailed deployment steps and custom domain setup are documented in [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

---

## 📚 Documentation Architecture

For architectural specifications and guidelines, see:

- [docs/PROJECT.md](docs/PROJECT.md) — Product vision & MVP scope
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — Content model & collection schemas
- [docs/DESIGN.md](docs/DESIGN.md) — Design system & accessibility rules
- [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md) — Technical authorship guidelines
- [docs/ROADMAP.md](docs/ROADMAP.md) — Master implementation roadmap
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) — Zero-config deployment instructions

---

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.
