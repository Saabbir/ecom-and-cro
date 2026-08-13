---
title: Shopify Selling Plan Architecture
summary: How Shopify models recurring subscriptions, preorders, and try-before-you-buy via SellingPlan and SellingPlanGroup APIs.
category: shopify
type: shopify
difficulty: advanced
aliases:
  - shopify subscription API
  - shopify selling plan group
  - selling plan
tags:
  - shopify
  - selling-plan
  - subscriptions
  - preorder
relatedSlugs:
  - variant
  - shopify-product
learningPath:
  id: orders-fulfillment
  title: Orders, Payments & Fulfillment
  order: 11
  prevSlug: bundle
seo:
  metaTitle: Shopify Selling Plan Architecture — Subscriptions & Preorders API
  metaDescription: Learn how Shopify SellingPlan, SellingPlanGroup, and Subscription Contract APIs work for recurring orders and preorders.
---

## Overview

In Shopify, subscriptions and alternative purchase options (preorders, try-before-you-buy) are modeled using **Selling Plans**.

Instead of creating duplicate product records for subscriptions, a single `ProductVariant` is linked to a **`SellingPlanGroup`**.

```
Product / Variant 
   └── SellingPlanGroup (e.g. "Subscribe & Save")
          ├── SellingPlan (Deliver Monthly - 10% off)
          └── SellingPlan (Deliver Every 2 Months - 10% off)
```

## Liquid Integration

```liquid
{% if product.selected_or_first_available_selling_plan_allocation %}
  <p class="selling-plan-note">
    Subscribing saves {{ product.selected_selling_plan_allocation.price_adjustments[0].value }}
  </p>
{% endif %}
```

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Checkout Line Item Selling Plan:</strong> When adding a subscription variant to cart, pass the <code>selling_plan</code> ID alongside the <code>id</code> parameter to convert the line item into a recurring subscription contract.</p>
</div>
