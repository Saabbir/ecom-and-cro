---
title: Shopify Inventory Architecture
summary: How Shopify models multi-location inventory across InventoryItem, InventoryLevel, and Location entities in GraphQL APIs.
category: shopify
type: shopify
difficulty: intermediate
aliases:
  - shopify inventory level
  - shopify inventory item
  - shopify location
tags:
  - shopify
  - inventory
  - graphql
  - locations
relatedSlugs:
  - inventory
  - variant
  - sku
comparisonSlugs:
  - catalog-vs-inventory
hierarchy:
  - label: Shopify Store
    description: Storefront context
  - label: Location
    description: Physical warehouse or store
  - label: InventoryItem
    description: SKU & physical item record
  - label: InventoryLevel
    url: /shopify/shopify-inventory/
    description: Stock quantity per Location
    isCurrent: true
learningPath:
  id: ecommerce-fundamentals
  title: Product & Catalog Fundamentals
  order: 11
  prevSlug: catalog-vs-inventory
seo:
  metaTitle: Shopify Inventory Architecture — InventoryItem & Location GraphQL Models
  metaDescription: Technical guide explaining Shopify's InventoryItem, InventoryLevel, and Location models in Admin GraphQL and Storefront API.
---

## Overview

In Shopify, inventory is not stored directly as a simple integer property on `ProductVariant`. Instead, Shopify uses a normalized 3-part relational structure:

```
ProductVariant 
   └── InventoryItem 
          └── InventoryLevel (Quantity per Location)
```

## Core Entities

1. **`ProductVariant`**: Commercial purchasing option shown to customers.
2. **`InventoryItem`**: Internal physical item record representing cost, tracked flag, country of origin, and harmonized system (HS) codes.
3. **`InventoryLevel`**: The join record storing the actual quantity at a specific physical **`Location`**.

## GraphQL API Query

To query inventory across locations in Shopify Admin GraphQL API:

```graphql
query getVariantInventory($id: ID!) {
  productVariant(id: $id) {
    id
    title
    sku
    inventoryItem {
      id
      tracked
      unitCost {
        amount
      }
      inventoryLevels(first: 5) {
        edges {
          node {
            location {
              name
            }
            quantities(names: ["available", "committed", "on_hand"]) {
              name
              quantity
            }
          }
        }
      }
    }
  }
}
```

## Inventory Quantities API

In modern Shopify GraphQL APIs, quantities are categorized explicitly by name:
- `available`: Stock ready for immediate purchase.
- `committed`: Stock allocated to unfulfilled orders.
- `on_hand`: Total physical units present at the location (`on_hand = available + committed`).
- `reserved`: Units set aside for drafts or active holds.

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Inventory Adjustments:</strong> To update stock quantities programmatically, use Shopify's <code>inventoryAdjustQuantities</code> or <code>inventorySetQuantities</code> GraphQL mutations, supplying the <code>inventoryItemId</code> and <code>locationId</code>.</p>
</div>
