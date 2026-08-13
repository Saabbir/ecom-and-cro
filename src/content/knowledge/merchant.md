---
title: Merchant
summary: A merchant is the business entity or seller operating an ecommerce store and selling products directly to buyers.
category: ecommerce
type: concept
difficulty: beginner
aliases:
  - seller
  - store owner
  - retailer
tags:
  - merchant
  - commerce
relatedSlugs:
  - customer
  - vendor
comparisonSlugs:
  - merchant-vs-vendor
hierarchy:
  - label: Global Commerce
    description: Ecosystem
  - label: Merchant
    url: /ecommerce/merchant/
    description: Store operator & seller
    isCurrent: true
  - label: Customer / Buyer
    url: /ecommerce/customer/
    description: Purchasing end-user
learningPath:
  id: participants-pricing
  title: Commerce Participants, Pricing & Discounts
  order: 1
  nextSlug: vendor
seo:
  metaTitle: What is a Merchant in Ecommerce? Commerce Participants Explained
  metaDescription: Understand the role of a Merchant in ecommerce platforms, payment processing agreements, and marketplace models.
---

## What is a Merchant?

A **Merchant** is the primary business or individual operating an online store. The merchant owns the store domain, defines product catalog pricing, manages customer support, and holds legal accountability for transactions.

## Merchant Account & Payment Processing

In payment gateways (Stripe, PayPal, Adyen), a **Merchant Account** is the financial account where captured customer funds are deposited before payout to the store's bank account.

## Common Confusion

<aside class="confusion-callout">
  <strong>Merchant vs. Vendor:</strong> 
  A <strong>Merchant</strong> is the seller who deals directly with the end customer. A <strong>Vendor</strong> is the brand or manufacturer who supplies products to the merchant.
</aside>

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Multi-Merchant Platforms:</strong> In marketplace platforms (like Etsy or Shopify Collective), API endpoints must scope all resource queries by <code>merchant_id</code> to ensure tenant isolation.</p>
</div>
