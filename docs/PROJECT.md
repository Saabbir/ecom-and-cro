# Ecommerce & CRO Knowledge Base

## 1. Project Overview

This project is a fast, static, developer-friendly educational website that explains ecommerce and CRO concepts in simple English.

The core problem:

Many developers work with ecommerce platforms, APIs, analytics, Shopify, CRO tools, and experiments without having a strong business or ecommerce background. Common terms such as product, variant, SKU, inventory, catalog, customer, merchant, discount, order, transaction, experiment, and hypothesis are easy to confuse.

This site exists to explain the concepts behind those terms.

The site should first explain the general ecommerce concept and then, where useful, explain how Shopify represents or implements that concept.

## 2. Core Philosophy

Content is the product. Code is the delivery mechanism.

The first version should be a simple, fast, static website with excellent content, navigation, search, relationships between concepts, and a strong reading experience.

Do not build unnecessary application infrastructure.

## 3. Primary Audience

Primary:
- Ecommerce developers
- Shopify theme developers
- Shopify app developers
- Frontend developers moving into ecommerce
- CRO developers
- Analytics developers

Secondary:
- Junior ecommerce developers
- UX/UI designers
- Product managers
- Ecommerce marketers
- CRO specialists
- People entering ecommerce

The reader should be treated as technically capable but potentially inexperienced with ecommerce business concepts.

## 4. Main Content Pillars

### Ecommerce

- Ecommerce fundamentals
- Products and catalog
- Inventory
- Pricing and discounts
- Customers and commerce participants
- Orders
- Payments
- Fulfillment
- Subscriptions
- Bundles
- Ecommerce metrics

### CRO

- CRO fundamentals
- Research
- Analytics
- CRO audits
- Hypotheses
- Test plans
- A/B testing
- Experimentation
- Personalization
- Measurement
- Shopify CRO

## 5. General Ecommerce First, Shopify Second

This is a fundamental architectural and editorial principle.

Do not make the site simply a Shopify glossary.

For each concept, explain:

1. General ecommerce meaning
2. Real-world example
3. Common confusion
4. Relationship with related concepts
5. Shopify implementation, when relevant
6. Developer takeaway

Terminology can differ between ecommerce platforms. Clearly state when a definition is platform-specific.

Never assume that Shopify terminology is universal ecommerce terminology.

## 6. MVP Scope

The MVP should include:

- Home page
- Ecommerce category
- CRO category
- Concept pages
- Comparison pages
- Shopify concept pages
- Metrics pages
- Basic search
- Categories and tags
- Related concepts
- Breadcrumbs
- Previous/next navigation
- SEO metadata
- Sitemap
- Responsive design
- Accessible UI

The MVP should NOT include:

- Authentication
- User accounts
- Database
- Admin dashboard
- CMS
- Comments
- Community
- Complex personalization
- AI chatbot
- User-generated content
- Complex backend APIs

## 7. Recommended Technology

Preferred:

- Astro
- TypeScript
- Markdown/MDX or Astro Content Collections
- CSS
- Static generation

Keep client-side JavaScript minimal.

The architecture must make it easy to grow from approximately 20 articles to 1,000+ pages without changing the core application architecture.

## 8. Long-Term Vision

The long-term product should become an interactive map of ecommerce knowledge for developers.

Users should eventually be able to move between related concepts:

Product -> Variant -> SKU -> Inventory -> Location -> Fulfillment -> Order -> Customer -> CRO

Shopify should act as an implementation layer across the general ecommerce knowledge model.

Possible future tools:

- Concept explorer
- Visual relationship graph
- CRO audit checklist
- Hypothesis generator
- Test plan generator
- Ecommerce terminology quiz
- CRO templates
- Shopify CRO playbooks

These are future features, not MVP requirements.

## 9. Important Product Principle

Avoid building a complicated application around a small amount of content.

The system should make adding a new concept as simple as creating a content file.

Example:

concepts/new-concept.md

The content model should drive pages, navigation, relationships, search metadata, and related content.
