---
title: Shopify Variant Architecture
summary: How Shopify handles ProductVariant GraphQL nodes, pricing, options, inventory items, and media associations.
category: shopify
type: shopify
difficulty: intermediate
aliases:
  - shopify product variant
  - shopify variant object
tags:
  - shopify
  - variant
  - graphql
relatedSlugs:
  - variant
  - shopify-product
comparisonSlugs:
  - product-vs-variant
hierarchy:
  - label: Shopify Product
    url: /shopify/shopify-product/
    description: Parent product node
  - label: ProductVariant
    url: /shopify/shopify-variant/
    description: Option combination GID
    isCurrent: true
  - label: InventoryItem
    url: /shopify/shopify-inventory/
    description: Physical stock item
learningPath:
  id: ecommerce-fundamentals
  title: Product & Catalog Fundamentals
  order: 14
  prevSlug: shopify-product
seo:
  metaTitle: Shopify Variant Architecture — ProductVariant Data Model
  metaDescription: Learn how Shopify represents ProductVariant objects in GraphQL APIs, Liquid templates, and Storefront API integrations.
---

## Overview

In Shopify, a **`ProductVariant`** node is the specific purchasable option combination. Every Shopify product has at least one variant.

```graphql
type ProductVariant {
  id: ID!
  title: String!
  sku: String
  barcode: String
  price: MoneyV2!
  compareAtPrice: MoneyV2
  availableForSale: Boolean!
  selectedOptions: [SelectedOption!]!
  inventoryItem: InventoryItem
  image: Image
}
```

## Liquid Theme Access

In Liquid, a variant object is accessed via `product.variants` or `product.selected_or_first_available_variant`:

```liquid
{% assign current_variant = product.selected_or_first_available_variant %}

<span class="price">{{ current_variant.price | money }}</span>
{% if current_variant.compare_at_price > current_variant.price %}
  <s class="compare-price">{{ current_variant.compare_at_price | money }}</s>
{% endif %}
```

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Variant Option Matching:</strong> When writing custom JavaScript variant pickers in Liquid or headless react storefronts, match user selection against the <code>selectedOptions</code> array (e.g. <code>{ name: "Color", value: "Black" }</code>) rather than string parsing variant titles.</p>
</div>
