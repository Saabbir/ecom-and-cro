---
title: Subscription Commerce
summary: Subscription commerce is a business model where customers pay a recurring fee at specified intervals to receive recurring product deliveries or digital access.
category: ecommerce
type: concept
difficulty: beginner
aliases:
  - recurring billing
  - subscribe and save
  - subscription order
tags:
  - subscriptions
  - recurring
  - pricing
relatedSlugs:
  - variant
  - order
shopifySlug: shopify-selling-plan
learningPath:
  id: orders-fulfillment
  title: Orders, Payments & Fulfillment
  order: 9
  prevSlug: fulfillment
  nextSlug: bundle
seo:
  metaTitle: What is Subscription Commerce? Recurring Order Models
  metaDescription: Learn how subscription ecommerce billing works, recurring token vaults, churn management, and Shopify Selling Plans.
---

## What is Subscription Commerce?

**Subscription Commerce** is a recurring business model where customers agree to automated, recurring charges (e.g. monthly, bi-weekly) in exchange for continuous product shipments or digital service access.

## Subscription Types

1. **Replenishment (Subscribe & Save)**: Consumable goods delivered on a schedule (e.g. coffee beans, vitamins, pet food) at a discounted price.
2. **Curated Box**: Monthly curated discovery boxes (e.g. fashion, beauty samples).
3. **Membership**: VIP access to exclusive pricing, free shipping, or premium content.

## Key Metrics

- **MRR / ARR**: Monthly / Annual Recurring Revenue.
- **Churn Rate**: Percentage of subscribers cancelling each month.
- **LTV**: Customer Lifetime Value (dramatically higher for subscriptions).

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Vaulted Payment Tokens:</strong> Subscriptions rely on payment gateway card vaulting (customer payment profiles). Ensure your recurring billing worker handles expired card retry logic (dunning management) gracefully to minimize involuntary churn.</p>
</div>
