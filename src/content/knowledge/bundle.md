---
title: Product Bundles
summary: A product bundle is a collection of multiple distinct items packaged and sold together as a single commercial offering, often at a discounted price.
category: ecommerce
type: concept
difficulty: beginner
aliases:
  - bundle
  - multipack
  - kit
  - product kit
tags:
  - catalog
  - bundle
  - merchandising
relatedSlugs:
  - product
  - variant
  - inventory
learningPath:
  id: orders-fulfillment
  title: Orders, Payments & Fulfillment
  order: 10
  prevSlug: subscription
  nextSlug: shopify-selling-plan
seo:
  metaTitle: What is a Product Bundle in Ecommerce? Architecture Guide
  metaDescription: Learn how fixed, multipack, and dynamic mix-and-match product bundles work in ecommerce catalog and inventory architecture.
---

## What is a Product Bundle?

A **Product Bundle** is a merchandising strategy where two or more individual products are combined and offered as a single purchasing unit (e.g. *"Shaving Starter Kit"* containing a Razor, Replacement Blades, and Shaving Cream).

## Bundle Types

1. **Fixed Bundle**: Pre-defined set of items sold together under one title.
2. **Multipack**: Multiple units of the identical variant sold at a volume discount (e.g. 3-Pack of White T-Shirts).
3. **Mix & Match (Custom Bundle)**: Shopper selects items from multiple option categories to build a custom kit.

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Inventory Breakdown Logic:</strong> When a bundle is purchased, inventory must be decremented from each individual component variant record in the warehouse. Never maintain a separate disconnected inventory count for a virtual bundle entity.</p>
</div>
