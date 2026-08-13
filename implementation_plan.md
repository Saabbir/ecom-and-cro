# Final Architecture & Implementation Plan

## 1. Executive Summary & Revised Scope
Based on your feedback, we have streamlined the architecture to prioritize **simplicity, readability, and content velocity** while preserving static-first scalability.

Key refinements applied:
- **Simplified Content Schema**: Lightweight, clean Zod schema with search aliases and direct slug references. No complex relationship engines.
- **Short, Clean URLs**: Clean 2-level routes (`/ecommerce/:slug`, `/compare/:slug`, `/shopify/:slug`, `/metrics/:slug`, `/cro/:slug`).
- **Learning Paths Integration**: Support both reference lookup ("Look up a concept") and sequential learning ("Learn topic step-by-step") with simple frontmatter metadata and lightweight UI banners.
- **Incremental Content Delivery**: Author **4 representative initial pages** first (`product`, `variant`, `product-vs-variant`, `shopify-product`) for review and approval before scaling to the wider content set.
- **Zero Heavy Infrastructure**: Fully static HTML/CSS/JS, zero database, zero CMS, zero auth, zero external search services.

---

## 2. Final Proposed Content Schema

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const knowledge = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(), // 1-2 sentence definition
    category: z.enum(['ecommerce', 'cro', 'shopify', 'metrics']),
    type: z.enum(['concept', 'comparison', 'shopify', 'metric', 'cro']),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
    
    // Search Aliases & Tags
    aliases: z.array(z.string()).default([]), // e.g. ['stock keeping unit', 'item variant']
    tags: z.array(z.string()).default([]),

    // Simple Direct Slugs (no complex graph resolution)
    relatedSlugs: z.array(z.string()).default([]),
    confusedWithSlugs: z.array(z.string()).default([]),
    shopifySlug: z.string().optional(),
    comparisonSlugs: z.array(z.string()).default([]),

    // Learning Path Metadata (Simple step-by-step ordering)
    learningPath: z.object({
      id: z.string(),         // e.g. 'ecommerce-fundamentals' | 'shopify-basics' | 'cro-reasoning'
      title: z.string(),      // e.g. 'Product & Catalog Fundamentals'
      order: z.number(),      // Step sequence position (1, 2, 3...)
      nextSlug: z.string().optional(),
      prevSlug: z.string().optional()
    }).optional(),

    // SEO Meta
    seo: z.object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional()
    }).optional(),

    draft: z.boolean().default(false)
  })
});

export const collections = { knowledge };
```

---

## 3. Final URL Structure

| Page Type | Canonical URL Pattern | Example URL |
| :--- | :--- | :--- |
| **Homepage** | `/` | `/` |
| **Ecommerce Hub** | `/ecommerce/` | `/ecommerce/` |
| **Ecommerce Concept** | `/ecommerce/:slug` | `/ecommerce/product/` |
| **Comparisons Hub** | `/compare/` | `/compare/` |
| **Comparison Detail** | `/compare/:slug` | `/compare/product-vs-variant/` |
| **Shopify Hub** | `/shopify/` | `/shopify/` |
| **Shopify Concept** | `/shopify/:slug` | `/shopify/product/` |
| **Metrics Hub** | `/metrics/` | `/metrics/` |
| **Metric Detail** | `/metrics/:slug` | `/metrics/conversion-rate/` |
| **CRO Hub** | `/cro/` | `/cro/` |
| **CRO Concept** | `/cro/:slug` | `/cro/hypothesis/` |
| **Learning Paths Hub** | `/paths/` | `/paths/` |
| **Learning Path View** | `/paths/:id` | `/paths/ecommerce-fundamentals/` |

---

## 4. Learning Paths Architecture (Simple & Static)

To support "learn a topic step by step":
1. **Frontmatter Definition**: Content files specify `learningPath: { id: 'ecommerce-fundamentals', title: 'Product & Catalog Fundamentals', order: 1, nextSlug: 'variant' }`.
2. **`LearningPathBanner.astro`**: A clean top/bottom banner rendered on articles belonging to a path, displaying:
   `[Step 1 of 5: Product & Catalog Fundamentals] -> Next: Variant →`
3. **`/paths/` Overview**: Lists curated pathways (e.g. *Ecommerce Fundamentals*, *Shopify Data Models*, *CRO Framework from First Principles*).

---

## 5. Final Directory Structure

```
/
├── AGENTS.md
├── docs/
│   ├── ARCHITECTURE.md
│   ├── CONTENT_GUIDE.md
│   ├── DESIGN.md
│   ├── PROJECT.md
│   └── ROADMAP.md
├── package.json
├── tsconfig.json
├── astro.config.mjs
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Breadcrumbs.astro
│   │   ├── DefinitionBox.astro
│   │   ├── ShopifyCallout.astro
│   │   ├── ConfusionCallout.astro
│   │   ├── DeveloperTakeaway.astro
│   │   ├── RelatedConcepts.astro
│   │   ├── LearningPathBanner.astro
│   │   └── SearchModal.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── knowledge/          # Unified Content Markdown Files
│   │       ├── product.md
│   │       ├── variant.md
│   │       ├── product-vs-variant.md
│   │       └── shopify-product.md
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── ecommerce/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── compare/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── shopify/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── metrics/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── cro/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── paths/
│   │   │   ├── index.astro
│   │   │   └── [id].astro
│   │   └── api/
│   │       └── search-index.json.ts
│   └── styles/
│       ├── tokens.css
│       └── global.css
```

---

## 6. Implementation Sequence & Initial 4 Content Pages

We will execute in small, reviewable steps:

### Step 1: Base Architecture & Schema Setup
- Finalize `src/content/config.ts` with aliases and learningPath schema.
- Finalize cleaner `ArticleLayout.astro` and learning path banner.

### Step 2: Build & Author Initial 4 Representative Pages
1. **Concept Page**: `src/content/knowledge/product.md`
2. **Concept Page**: `src/content/knowledge/variant.md`
3. **Comparison Page**: `src/content/knowledge/product-vs-variant.md`
4. **Shopify Concept Page**: `src/content/knowledge/shopify-product.md`

### Step 3: Initial Review & Verification
- Run `npm run check` and `npm run build`.
- Present the 4 generated pages and site navigation for your review and feedback before creating further content pages.

---

## 7. User Approval Request
Please confirm if this final architecture, URL structure, schema, and initial 4-page review plan meets your approval. I will wait for your explicit approval before proceeding with implementation.
