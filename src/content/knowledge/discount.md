---
title: Discount
summary: A discount is a price reduction applied automatically or via coupon codes to incentives purchases, boost conversion rates, or clear inventory.
category: ecommerce
type: concept
difficulty: beginner
aliases:
  - price reduction
  - promotion
  - automatic discount
tags:
  - discount
  - pricing
  - promotion
relatedSlugs:
  - coupon
  - price
comparisonSlugs:
  - discount-vs-coupon
learningPath:
  id: participants-pricing
  title: Commerce Participants, Pricing & Discounts
  order: 7
  prevSlug: price
  nextSlug: coupon
seo:
  metaTitle: What is a Discount in Ecommerce? Automatic vs Code Discounts
  metaDescription: Learn how automatic discounts, percentage off, fixed amount off, and BOGO promotions work in ecommerce checkout engines.
---

## What is a Discount?

A **Discount** is a commercial price reduction applied to a line item, shipping charge, or cart subtotal during checkout.

Discounts are deployed strategically to increase average order value (AOV), acquire new customers, or liquidate slow-moving inventory.

## Discount Types

1. **Percentage Off**: Reduces price by a fixed percentage (e.g. `20% OFF`).
2. **Fixed Amount Off**: Reduces price by a flat monetary value (e.g. `$10 OFF`).
3. **Buy X Get Y (BOGO)**: Free or discounted item awarded when purchasing qualifying prerequisite items.
4. **Free Shipping**: Waives shipping charges when order subtotals meet threshold rules (e.g. `Free Shipping over $50`).

## Automatic vs. Code-Based Discounts

- **Automatic Discount**: Evaluates rules automatically in the cart without requiring user input (e.g. Automatic 15% discount applied at checkout for orders > $100).
- **Code-Based Discount**: Requires the shopper to manually enter a promo code (e.g. `SUMMER2026`).

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Discount Stacking Rules:</strong> Implement strict discount combination logic in your cart engine to control whether multiple discounts can be applied simultaneously (e.g. preventing a customer from combining a 30% VIP promo code with an automatic 20% sale discount).</p>
</div>
