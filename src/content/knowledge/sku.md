---
title: SKU (Stock Keeping Unit)
summary: A SKU is a unique alphanumeric identifier assigned internally by a merchant to track a specific product variant and its inventory.
category: ecommerce
type: concept
difficulty: beginner
aliases:
  - stock keeping unit
  - SKU code
  - item code
tags:
  - inventory
  - catalog
  - sku
  - variant
relatedSlugs:
  - variant
  - inventory
  - barcode
shopifySlug: shopify-inventory
comparisonSlugs:
  - sku-vs-barcode
hierarchy:
  - label: Store Catalog
    description: Store-wide collection
  - label: Product
    url: /ecommerce/product/
    description: Parent item
  - label: Variant
    url: /ecommerce/variant/
    description: Option configuration
  - label: SKU
    url: /ecommerce/sku/
    description: Internal tracking code
    isCurrent: true
  - label: Inventory Level
    description: Location stock count
learningPath:
  id: ecommerce-fundamentals
  title: Product & Catalog Fundamentals
  order: 5
  prevSlug: shopify-product
  nextSlug: barcode
seo:
  metaTitle: What is a SKU in Ecommerce? Stock Keeping Unit Explained
  metaDescription: Learn what a SKU (Stock Keeping Unit) is, how SKU naming conventions work, how SKUs differ from barcodes, and developer best practices.
---

## What is a SKU?

A **SKU** (pronounced *"skew"*, short for **Stock Keeping Unit**) is a unique, human-readable alphanumeric code assigned internally by a merchant to identify a specific variant of a product for inventory management and order fulfillment.

Unlike universal barcodes (UPC/EAN), a SKU is **internal to a specific merchant or business**. Merchant A and Merchant B can sell the exact same Nike shoe, but each will create their own custom SKU format.

## SKU Naming Conventions

Effective SKUs encode key product attributes directly into the code so warehouse staff and managers can recognize the item at a glance.

Example format: `[CATEGORY]-[PRODUCT]-[COLOR]-[SIZE]`

- `TSH-BLK-SM` &rarr; T-Shirt, Black, Small
- `TSH-BLK-MD` &rarr; T-Shirt, Black, Medium
- `TSH-WHT-LG` &rarr; T-Shirt, White, Large
- `SHO-RUN-BLU-10` &rarr; Shoes, Running, Blue, Size 10

## Why Do SKUs Exist?

1. **Unambiguous Fulfillment**: Prevents warehouse pickers from shipping a Medium shirt when the customer ordered a Large.
2. **Multi-Location Inventory Tracking**: Tracks stock counts for that exact item across warehouses, retail stores, and fulfillment centers.
3. **ERP & Accounting Integration**: Syncs sales data between storefronts, ERPs, and accounting software.

## Common Confusion

<aside class="confusion-callout">
  <strong>SKU vs. Barcode (UPC/EAN):</strong> 
  A SKU is created by the merchant for internal inventory tracking. A <strong>Barcode</strong> (like a UPC or EAN) is assigned by global standards bodies (GS1) and is universal across all retailers worldwide.
</aside>

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>SKU Uniqueness & Nullability:</strong> While merchants should ideally ensure SKUs are unique per variant, many ecommerce platforms (including Shopify) allow duplicate or empty SKUs. When building API integrations or inventory syncs, <strong>never use the SKU string as your primary database foreign key</strong>—always rely on the platform's immutable <code>variant_id</code>.</p>
</div>
