---
title: Shopify Location Architecture
summary: How Shopify manages physical and fulfillment locations across Admin GraphQL APIs and inventory levels.
category: shopify
type: shopify
difficulty: intermediate
aliases:
  - shopify location object
  - shopify fulfillment location
tags:
  - shopify
  - location
  - inventory
relatedSlugs:
  - location
  - shopify-inventory
comparisonSlugs:
  - warehouse-vs-location
hierarchy:
  - label: Shopify Store
    description: Merchant account
  - label: Location
    url: /shopify/shopify-location/
    description: Physical or fulfillment node
    isCurrent: true
  - label: InventoryLevel
    url: /shopify/shopify-inventory/
    description: Local stock count
learningPath:
  id: orders-fulfillment
  title: Orders, Payments & Fulfillment
  order: 7
  prevSlug: warehouse-vs-location
  nextSlug: fulfillment
seo:
  metaTitle: Shopify Location Architecture — GraphQL & Fulfillment Nodes
  metaDescription: Learn how Shopify handles Location entities, POS fulfillment, dropshipping apps, and multi-location inventory.
---

## Overview

In Shopify, a **`Location`** represents a physical store, warehouse, pop-up, or 3PL dropshipper where inventory is stocked or fulfilled.

```graphql
type Location {
  id: ID!
  name: String!
  address: LocationAddress!
  fulfillmentService: FulfillmentService
  isPrimary: Boolean!
  isActive: Boolean!
}
```

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Primary Location Fallback:</strong> Always check if a location <code>isActive</code> and has fulfillment permissions before attempting to assign order fulfillments to that location ID.</p>
</div>
