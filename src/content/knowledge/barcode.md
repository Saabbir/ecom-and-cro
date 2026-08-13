---
title: Barcode (UPC / EAN / GTIN)
summary: A barcode is a standardized, machine-readable numerical code assigned globally to identify commercial items across supply chains and retailers.
category: ecommerce
type: concept
difficulty: beginner
aliases:
  - UPC
  - EAN
  - GTIN
  - barcode number
tags:
  - inventory
  - barcode
  - gtin
  - retail
relatedSlugs:
  - sku
  - variant
comparisonSlugs:
  - sku-vs-barcode
hierarchy:
  - label: GS1 Global Standards
    description: Global product registry
  - label: Barcode / GTIN
    url: /ecommerce/barcode/
    description: Universal barcode (UPC / EAN)
    isCurrent: true
  - label: Variant & SKU
    url: /ecommerce/sku/
    description: Merchant variant allocation
  - label: POS / Scanner
    description: Retail checkout scanning
learningPath:
  id: ecommerce-fundamentals
  title: Product & Catalog Fundamentals
  order: 6
  prevSlug: sku
  nextSlug: sku-vs-barcode
seo:
  metaTitle: What is a Barcode (UPC / EAN / GTIN) in Ecommerce?
  metaDescription: Learn how barcodes, UPCs, EANs, and GTINs work in ecommerce, how they differ from internal SKUs, and developer API recommendations.
---

## What is a Barcode?

A **Barcode** (often referred to as a **UPC**, **EAN**, or **GTIN**) is a standardized, machine-readable string of numbers represented visually by parallel black bars. 

Unlike internal SKUs, barcodes are **globally unique** and regulated by official standardization bodies (such as **GS1**). The exact same barcode numbers identify a specific manufacturer product worldwide across Amazon, Walmart, Target, and independent Shopify stores.

## Barcode Formats

1. **GTIN-12 (UPC-A)**: 12-digit format primarily used in North America.
2. **GTIN-13 (EAN-13)**: 13-digit format used globally outside North America.
3. **GTIN-14 (ITF-14)**: 14-digit format used for shipping cartons and wholesale master cases.
4. **ISBN**: International Standard Book Number used exclusively for books.

## Why Are Barcodes Important in Ecommerce?

- **Marketplace Requirements**: Platforms like Amazon, Google Shopping, eBay, and Meta require valid GTIN barcodes to list products.
- **Automated Warehouse Scanning**: Handheld laser scanners read barcodes instantly during picking and packing.
- **Counterfeit Prevention**: Verified GTIN registration proves product authenticity.

## Common Confusion

<aside class="confusion-callout">
  <strong>Barcode vs. SKU:</strong> 
  A <strong>Barcode</strong> is universal and assigned by the manufacturer via GS1. A <strong>SKU</strong> is internal and defined by the individual merchant. Two different online stores selling the same Sony headphones will share the same Barcode, but will have completely different SKUs.
</aside>

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>GTIN Validation Rule:</strong> When accepting barcode inputs in forms or API endpoints, enforce strict length checks (12, 13, or 14 digits) and validate the final <strong>check digit</strong> using the GS1 Modulo-10 checksum algorithm to catch typo errors.</p>
</div>
