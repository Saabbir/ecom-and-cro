---
title: SKU vs Barcode
summary: Understand the fundamental differences between internal merchant SKUs and globally standardized barcodes (UPC / EAN / GTIN).
category: ecommerce
type: comparison
difficulty: beginner
aliases:
  - SKU versus barcode
  - difference between SKU and UPC
tags:
  - comparison
  - sku
  - barcode
  - inventory
relatedSlugs:
  - sku
  - barcode
  - variant
learningPath:
  id: ecommerce-fundamentals
  title: Product & Catalog Fundamentals
  order: 7
  prevSlug: barcode
  nextSlug: inventory
seo:
  metaTitle: SKU vs Barcode — Technical Comparison for Developers
  metaDescription: Compare SKU vs Barcode (UPC/EAN) in ecommerce architecture. Understand internal vs global scope, formatting, and database design.
---

## Summary Matrix

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Attribute</th>
        <th>SKU (Stock Keeping Unit)</th>
        <th>Barcode (UPC / EAN / GTIN)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Scope</strong></td>
        <td>Internal to a specific business</td>
        <td>Global across all supply chains & retailers</td>
      </tr>
      <tr>
        <td><strong>Assigned By</strong></td>
        <td>The merchant or seller</td>
        <td>The manufacturer via GS1 standardization</td>
      </tr>
      <tr>
        <td><strong>Format</strong></td>
        <td>Alphanumeric string (e.g. <code>TSH-BLK-MD</code>)</td>
        <td>Strict numerical string (e.g. <code>012345678905</code>)</td>
      </tr>
      <tr>
        <td><strong>Human Readable</strong></td>
        <td>Yes, designed for humans to parse attributes</td>
        <td>No, designed primarily for laser scanners</td>
      </tr>
      <tr>
        <td><strong>Cross-Store Consistency</strong></td>
        <td>Varies per merchant</td>
        <td>Identical across all stores worldwide</td>
      </tr>
      <tr>
        <td><strong>Primary Purpose</strong></td>
        <td>Warehouse sorting, ERP sync, inventory tracking</td>
        <td>Marketplace verification, POS checkout scanning</td>
      </tr>
    </tbody>
  </table>
</div>

## Key Differences

### 1. Internal Scope vs. Global Standard
A **SKU** is tailored to a merchant's internal warehouse workflows. Merchant A might code a blue Medium jacket as `JKT-BLU-MED`, while Merchant B codes the exact same jacket as `10492-BLUE-M`. 

In contrast, a **Barcode** (UPC/EAN) is registered with GS1. Both Merchant A and Merchant B will record the identical 12-digit barcode `041333021948` for that jacket.

### 2. Formats and Readability
SKUs contain letters, numbers, and dashes (`SHIRT-RED-XL`). Warehouse workers can read a SKU and immediately know which shelf bin to inspect. Barcodes are purely numeric strings read by optical barcode scanners.

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Database Schema Recommendation:</strong> Always store <code>sku</code> and <code>barcode</code> as separate fields on your variant model. Do not combine them into a single column. Provide indexing on both columns for fast lookup queries in API integrations.</p>
</div>
