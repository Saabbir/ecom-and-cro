---
title: Inventory
summary: Inventory is the physical or digital quantity of sellable product variants available at specified fulfillment locations.
category: ecommerce
type: concept
difficulty: beginner
aliases:
  - stock
  - inventory count
  - stock quantity
  - available quantity
tags:
  - inventory
  - stock
  - warehouse
  - fulfillment
relatedSlugs:
  - variant
  - sku
  - catalog
shopifySlug: shopify-inventory
comparisonSlugs:
  - catalog-vs-inventory
hierarchy:
  - label: Store Catalog
    description: All offer listings
  - label: Product
    url: /ecommerce/product/
    description: Parent item
  - label: Variant
    url: /ecommerce/variant/
    description: Sellable option
  - label: Inventory
    url: /ecommerce/inventory/
    description: Stock quantity & location state
    isCurrent: true
  - label: Fulfillment Location
    description: Warehouse or retail store
learningPath:
  id: ecommerce-fundamentals
  title: Product & Catalog Fundamentals
  order: 8
  prevSlug: sku-vs-barcode
  nextSlug: catalog
seo:
  metaTitle: What is Inventory in Ecommerce? Stock Logic Explained
  metaDescription: Understand ecommerce inventory tracking, inventory states (available, committed, reserved), and multi-location fulfillment architecture.
---

## What is Inventory?

In ecommerce, **Inventory** represents the physical stock count of a specific variant recorded at a fulfillment location (warehouse, retail store, or 3PL provider).

Inventory is dynamic and changes continuously as orders are placed, reserved, packed, shipped, returned, or restocked.

## Inventory States

Modern ecommerce systems distinguish between different inventory states:

1. **On Hand**: Total physical stock present in the building.
2. **Committed / Reserved**: Units allocated to customer orders that have been placed but not yet shipped.
3. **Available**: Stock actually available to sell to new customers online (`Available = On Hand - Committed`).
4. **Incoming**: Stock in transit from suppliers or manufacturers.
5. **Safety Stock / Threshold**: Minimum buffer quantity to prevent stockouts.

## Multi-Location Inventory

Modern merchants store stock across multiple physical locations (e.g. Warehouse East, Warehouse West, Main Storefront). 

An order placed in California will automatically reserve inventory from the closest warehouse (Warehouse West) to minimize shipping distance and delivery times.

## Common Confusion

<aside class="confusion-callout">
  <strong>Catalog vs. Inventory:</strong> 
  A <strong>Catalog</strong> defines <em>what</em> a merchant sells (titles, descriptions, images, prices). <strong>Inventory</strong> defines <em>how many units</em> are physically available at specific fulfillment locations right now.
</aside>

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Race Conditions & Overselling:</strong> Never update inventory counts using naive SQL <code>UPDATE variants SET stock = 10</code> queries during checkout. Use atomic decrements (e.g. <code>UPDATE inventory_levels SET available = available - 1 WHERE available >= 1</code>) or distributed inventory lock queues to prevent overselling popular items during flash sales.</p>
</div>
