---
title: Shopify Product Architecture
summary: How Shopify models products, variants, options, and selling plans in GraphQL APIs, Liquid themes, and Admin.
category: shopify
type: shopify
difficulty: intermediate
aliases:
  - shopify product object
  - liquid product
  - shopify storefront API product
tags:
  - shopify
  - liquid
  - graphql
  - product
relatedSlugs:
  - product
  - variant
comparisonSlugs:
  - product-vs-variant
hierarchy:
  - label: Shopify Store
    description: Storefront context
  - label: Shopify Product
    url: /shopify/shopify-product/
    description: Product Node (GraphQL / Liquid)
    isCurrent: true
  - label: Options & ProductVariant
    description: ProductOption & ProductVariant GID
  - label: InventoryItem
    description: Location stock level
learningPath:
  id: ecommerce-fundamentals
  title: Product & Catalog Fundamentals
  order: 4
  prevSlug: product-vs-variant
seo:
  metaTitle: Shopify Product Architecture — Liquid & GraphQL Data Models
  metaDescription: Technical guide explaining Shopify's Product and ProductVariant objects in Liquid, Storefront API, and Admin GraphQL.
---

## Overview

In Shopify, the **Product** object is the core catalog entity. Shopify enforces an explicit hierarchical relationship between products, options, and product variants across all APIs and themes.

```
Shopify Product
  ├── Options (e.g. Size, Color)
  └── Variants (ProductVariant)
        ├── Price & CompareAtPrice
        ├── InventoryItem & InventoryLevels
        └── SelectedOptions
```

## Liquid Theme Context

In Shopify Liquid theme templates (`product.liquid` or `sections/main-product.liquid`), the global `product` object exposes:

- `product.title`: Product title string.
- `product.variants`: Array of `variant` objects.
- `product.selected_or_first_available_variant`: Helper returning the active variant based on URL parameters (`?variant=123456`) or the first variant in stock.
- `product.options_with_values`: Array of option names and available values (e.g. `Size: [S, M, L]`).

```liquid
{% comment %} Rendering Variant Selector in Liquid {% endcomment %}
<select name="id">
  {% for variant in product.variants %}
    <option value="{{ variant.id }}" {% if variant == product.selected_or_first_available_variant %}selected{% endif %}>
      {{ variant.title }} - {{ variant.price | money }}
    </option>
  {% endfor %}
</select>
```

## GraphQL API Data Structure

In Shopify's Admin and Storefront GraphQL APIs, products are fetched using node queries:

```graphql
query getProductByHandle($handle: String!) {
  product(handle: $handle) {
    id
    title
    descriptionHtml
    variants(first: 10) {
      edges {
        node {
          id
          title
          sku
          price {
            amount
            currencyCode
          }
          availableForSale
        }
      }
    }
  }
}
```

## Shopify Platform Constraints

<aside class="shopify-callout">
  <strong>Shopify Platform Limits:</strong>
  <ul>
    <li>Standard Shopify stores support up to <strong>3 options</strong> per product (e.g. Color, Size, Material).</li>
    <li>Standard Shopify stores support up to <strong>100 variants</strong> per product (or up to 2,000 variants on stores with modern Shopify GraphQL API updates enabled).</li>
  </ul>
</aside>

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Shopify GID Format:</strong> In GraphQL API integrations, Shopify IDs are global identifiers formatted as URIs (e.g. <code>gid://shopify/Product/123456789</code> and <code>gid://shopify/ProductVariant/987654321</code>). Always handle GIDs cleanly when parsing API responses.</p>
</div>
