---
title: Product
summary: A product represents a distinct item or service that a merchant offers for sale in an ecommerce store.
category: ecommerce
type: concept
difficulty: beginner
aliases:
  - item
  - merchandise
  - catalog product
tags:
  - catalog
  - product
  - merchandising
relatedSlugs:
  - variant
shopifySlug: shopify-product
comparisonSlugs:
  - product-vs-variant
hierarchy:
  - label: Store Catalog
    description: Store-wide collection
  - label: Product
    url: /ecommerce/product/
    description: Marketing container entity
    isCurrent: true
  - label: Variant
    url: /ecommerce/variant/
    description: Specific option configuration
  - label: SKU & Inventory
    description: Warehouse stock tracking
learningPath:
  id: ecommerce-fundamentals
  title: Product & Catalog Fundamentals
  order: 1
  nextSlug: variant
seo:
  metaTitle: What is a Product in Ecommerce? Domain Concept Explained
  metaDescription: Learn what a Product means in ecommerce architecture, how it relates to variants and SKUs, and developer implementation takeaways.
---

## What is a Product?

In ecommerce, a **Product** is the top-level entity representing a physical or digital item listed in a store catalog. It encapsulates high-level marketing details such as title, description, brand, media gallery, categories, and general taxonomy.

A product answers the customer question: *"What item am I looking at?"*

## Why Does It Exist?

Without a product concept, a catalog would consist of millions of flat, repetitive listings (e.g. "T-Shirt Black Small", "T-Shirt Black Medium", "T-Shirt White Large"). 

Grouping related purchasing options under a single product entity allows:
1. **Simplified Merchandising**: Merchants manage one title, description, and image gallery for all sizes and colors.
2. **Unified Search & Navigation**: Search results show one entry for a T-Shirt instead of 20 separate variant listings.
3. **Structured Taxonomy**: Categories, tags, and collections attach at the product level.

## Real-World Example

Consider a store selling footwear:

- **Product**: *Air Runner Sneakers*
  - Description: Breathable mesh running shoes.
  - Category: Footwear / Running
  - Brand: SportCo
  - Media: Front photo, side photo, sole photo

The product *Air Runner Sneakers* itself cannot be added to a shipping box until the customer chooses a specific **size** and **color** (which are the **Variants**).

## Common Confusion

<aside class="confusion-callout">
  <strong>Product vs. Variant:</strong> 
  A Product is a conceptual container. A Customer cannot physically ship "a T-Shirt"—they ship a specific black T-Shirt in size Medium. The specific sellable option is the <strong>Variant</strong>.
</aside>

## Relationship to Other Concepts

- **Product &rarr; Variant**: A product contains one or more variants (e.g. Size/Color choices).
- **Product &rarr; Catalog**: A catalog is a collection of products.
- **Product &rarr; Category/Collection**: Products are grouped into categories for navigation.

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Database & API Design Rule:</strong> Never store stock quantities (inventory) directly on the top-level Product record if the product has options. Inventory, prices, and SKUs almost always belong to the <code>Variant</code> entity.</p>
</div>
