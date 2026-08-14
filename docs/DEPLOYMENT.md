# Deployment Guide

This document outlines the deployment strategy, production build pipeline, and environment configuration for the **Ecommerce & CRO Developer Knowledge Base**.

---

## 1. Zero-Config Static Architecture

The project is built static-first using **Astro 5 (SSG)**.

- **Build Output**: Static HTML, CSS, client-side JS bundles, XML sitemaps, and JSON search indices in `dist/`.
- **Zero Server Infrastructure**: Requires no Node.js runtime servers, external databases, or backend APIs in production.
- **Performance**: 81 static HTML pages compile in **< 1.0 second**.

---

## 2. Netlify Deployment (Recommended)

Netlify features native zero-config auto-detection for Astro projects.

### Step-by-Step Setup

1. **Connect GitHub Repository**:
   - Log into [Netlify Dashboard](https://app.netlify.com/).
   - Click **Add new site** &rarr; **Import an existing project**.
   - Select **GitHub** and authorize access to `Saabbir/ecom-and-cro`.

2. **Auto-Detected Settings**:
   Netlify automatically detects Astro and applies:
   - **Framework Preset**: `Astro`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Node Version**: `20.x` (or latest LTS)

3. **Click "Deploy Site"**:
   - Netlify will build the production bundle and assign a HTTPS production URL (e.g. `ecom-and-cro.netlify.app`).

### Continuous Deployment (CI/CD)

Every `git push` to the `main` branch automatically triggers a background build and instant static deployment with atomic rollbacks.

---

## 3. Alternative Hosting Platforms

### Vercel
```bash
npx vercel --prod
```
- **Framework Preset**: Astro
- **Output Directory**: `dist`

### Cloudflare Pages
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

---

## 4. Pre-Deployment Check List

Before deploying to production, run the automated verification suite:

```bash
# 1. Type Check
npm run check

# 2. Production Build Verification
npm run build
```

Verify that:
- `Result (37 files): 0 errors, 0 warnings, 0 hints`.
- `dist/sitemap.xml` contains all published page URLs.
- `dist/api/search-index.json` contains valid index entries.
