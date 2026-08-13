# Architecture

## 1. Architecture Goal

Build a static-first content platform that can grow from approximately 20 pages to 1,000+ pages without requiring a rewrite.

Content must remain separate from presentation.

## 2. Preferred Stack

- Astro
- TypeScript
- Markdown/MDX
- Astro Content Collections or an equivalent typed content system
- CSS
- Static generation

Use JavaScript only where it provides meaningful interaction.

## 3. Suggested Structure

src/
  components/
  content/
    concepts/
    comparisons/
    shopify/
    metrics/
    cro/
  layouts/
  pages/
  styles/
  utils/

public/

docs/
  PROJECT.md
  CONTENT_GUIDE.md
  ARCHITECTURE.md
  DESIGN.md
  ROADMAP.md

tests/

## 4. Content Types

At minimum, support:

### Concept

Examples:
- Product
- Variant
- SKU
- Inventory
- Customer
- Order

### Comparison

Examples:
- Product vs Variant
- SKU vs Barcode
- Catalog vs Inventory

### Shopify

Shopify-specific explanations that map to general ecommerce concepts.

### Metric

Examples:
- Conversion Rate
- AOV
- CAC
- LTV
- ROAS

### CRO

Examples:
- Hypothesis
- Experiment
- Test Plan
- Personalization
- CRO Audit

## 5. Concept Metadata

The exact schema can evolve, but should support:

- title
- slug
- summary
- category
- type
- difficulty
- tags
- related concepts
- confused-with concepts
- Shopify relevance
- SEO metadata
- publish status

Use typed schemas and validation.

## 6. Relationships

Relationships are important.

A concept should be able to reference:

- Related concepts
- Concepts it is commonly confused with
- Parent category
- Shopify implementation
- Comparisons involving the concept
- Relevant metrics
- Relevant CRO concepts

Do not hardcode relationship lists into UI components.

## 7. Routing

Prefer predictable URLs such as:

/ecommerce/
/ecommerce/concepts/product/
/ecommerce/concepts/variant/
/ecommerce/compare/product-vs-variant/
/shopify/product/
/metrics/conversion-rate/
/cro/hypothesis/

The final URL structure may be adjusted during implementation, but URLs must remain:

- Short
- Predictable
- Human-readable
- Stable

## 8. Components

Create reusable components for:

- Site header
- Navigation
- Footer
- Breadcrumbs
- Article header
- Definition callout
- Comparison table
- Concept links
- Related concepts
- Shopify callout
- Common confusion callout
- Diagram/flow
- Previous/next navigation
- Search
- Category cards

Do not create one-off components when a reusable content pattern exists.

## 9. Search

MVP search should work against the static content index.

Search should consider:

- Title
- Summary
- Category
- Tags
- Search aliases where useful

Results should clearly distinguish:

- Concepts
- Comparisons
- Shopify
- Metrics
- CRO

Do not introduce a hosted search service unless it is actually needed.

## 10. Performance

Priorities:

1. Static HTML
2. Minimal JavaScript
3. Optimized fonts
4. Optimized images
5. No unnecessary UI libraries
6. Fast navigation
7. Good Core Web Vitals

## 11. Accessibility

The site must have:

- Semantic HTML
- Correct heading hierarchy
- Keyboard navigation
- Visible focus states
- Accessible navigation
- Sufficient contrast
- Proper link names
- Accessible tables
- Reduced-motion consideration

## 12. SEO

Implement:

- Page titles
- Meta descriptions
- Canonicals
- Open Graph
- Sitemap
- Robots
- Breadcrumb structured data where appropriate
- Article structured data where appropriate
- Clean internal linking

## 13. Testing

At minimum:

- Build test
- Type checking
- Link validation
- Basic component tests where useful
- Accessibility checks
- Responsive checks
- Search tests

The build must remain clean as content grows.

## 14. Architectural Rule

Do not introduce a database, CMS, authentication system, or backend unless a concrete requirement appears.

The content repository is the source of truth for the MVP.
