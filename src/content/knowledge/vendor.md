---
title: Vendor
summary: A vendor is a brand, manufacturer, or supplier that provides products to a merchant for retail sale.
category: ecommerce
type: concept
difficulty: beginner
aliases:
  - supplier
  - brand
  - manufacturer
tags:
  - vendor
  - brand
  - catalog
relatedSlugs:
  - merchant
  - product
comparisonSlugs:
  - merchant-vs-vendor
hierarchy:
  - label: Manufacturer / Supplier
    description: Supply chain source
  - label: Vendor
    url: /ecommerce/vendor/
    description: Product brand entity
    isCurrent: true
  - label: Merchant Store
    url: /ecommerce/merchant/
    description: Retail storefront
learningPath:
  id: participants-pricing
  title: Commerce Participants, Pricing & Discounts
  order: 2
  prevSlug: merchant
  nextSlug: merchant-vs-vendor
seo:
  metaTitle: What is a Vendor in Ecommerce? Brand & Supplier Concepts
  metaDescription: Learn how vendors and brands are modeled in ecommerce catalogs, filtering UI, and vendor management systems.
---

## What is a Vendor?

In ecommerce, a **Vendor** (or Brand/Supplier) represents the manufacturing entity that produces or supplies goods. 

A single merchant store may feature items from hundreds of different vendors (e.g. Nordstrom selling shoes from Nike, Adidas, and Puma).

## Vendor Attributes in Catalogs

In store platforms, vendor data is used for:
- **Facet Filtering**: Allowing shoppers to filter products by Brand / Manufacturer.
- **Automated Reordering**: Creating purchase orders when stock levels for a specific vendor drop.
- **Consignment Revenue Share**: Calculating payouts for multi-vendor marketplaces.

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Vendor String Normalization:</strong> Always sanitize and normalize vendor strings on product ingestion (e.g. converting <code>Nike Inc.</code> and <code>nike</code> to a canonical vendor ID) to prevent fragmented brand filters in storefront search UI.</p>
</div>
