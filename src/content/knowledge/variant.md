---
title: Variant
summary: A variant is a specific sellable configuration of a product defined by a combination of options such as size, color, or material.
category: ecommerce
type: concept
difficulty: beginner
aliases:
  - product variant
  - SKU variant
  - item option
tags:
  - catalog
  - variant
  - inventory
relatedSlugs:
  - product
shopifySlug: shopify-product
comparisonSlugs:
  - product-vs-variant
hierarchy:
  - label: Store Catalog
    description: Store-wide collection
  - label: Product
    url: /ecommerce/product/
    description: Parent container
  - label: Variant
    url: /ecommerce/variant/
    description: Specific option configuration
    isCurrent: true
  - label: SKU & Inventory
    description: Warehouse stock tracking
learningPath:
  id: ecommerce-fundamentals
  title: Product & Catalog Fundamentals
  order: 2
  prevSlug: product
  nextSlug: product-vs-variant
seo:
  metaTitle: What is a Product Variant in Ecommerce? Domain Concept Explained
  metaDescription: Understand how product variants work in ecommerce, how option combinations define SKUs and pricing, and developer best practices.
---

## What is a Variant?

A **Variant** (or Product Variant) is a distinct purchasing choice under a parent product. While the parent product holds shared marketing copy and images, the variant holds actionable purchasing attributes: **Price**, **SKU**, **Weight**, and **Inventory Level**.

A variant answers the customer question: *"Which specific option am I buying?"*

## Option Combinations

Variants are created by combining one or more **Options**:

- **Option 1 (Color)**: Black, White
- **Option 2 (Size)**: Small, Medium, Large

This produces 6 unique variants:
1. Black / Small
2. Black / Medium
3. Black / Large
4. White / Small
5. White / Medium
6. White / Large

## Real-World Example

If a customer orders a T-Shirt:
- **Product**: Classic Cotton Crewneck
- **Selected Variant**: Color: Navy Blue, Size: XL
- **Variant Attributes**: Price: $29.00, SKU: `TSH-NVY-XL`, Stock: 14 units remaining.

When the warehouse clerk fulfills the order, they read the variant SKU `TSH-NVY-XL` to pick the physical item off the bin shelf.

## Common Confusion

<aside class="confusion-callout">
  <strong>Variant vs. SKU:</strong> 
  A Variant is the commercial representation of an option choice in the store. A <strong>SKU</strong> (Stock Keeping Unit) is the internal alphanumeric identifier assigned to track that variant in inventory systems. A single variant typically has exactly one SKU.
</aside>

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Cart & Order Line Items:</strong> When a customer adds an item to their shopping cart, the cart line item references the <code>variant_id</code>, not just the parent <code>product_id</code>. Checkout systems validate inventory and calculate prices using variant data.</p>
</div>
