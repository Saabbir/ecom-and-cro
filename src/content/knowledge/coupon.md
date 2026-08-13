---
title: Coupon & Promo Code
summary: A coupon code is an alphanumeric string entered by a customer at checkout to redeem a specific promotional discount rule.
category: ecommerce
type: concept
difficulty: beginner
aliases:
  - promo code
  - discount code
  - voucher
tags:
  - discount
  - coupon
  - promo-code
relatedSlugs:
  - discount
  - price
comparisonSlugs:
  - discount-vs-coupon
learningPath:
  id: participants-pricing
  title: Commerce Participants, Pricing & Discounts
  order: 8
  prevSlug: discount
  nextSlug: discount-vs-coupon
seo:
  metaTitle: What is a Coupon / Promo Code in Ecommerce?
  metaDescription: Understand how promo codes, coupon redemption rules, usage limits, and expiration dates operate in checkout platforms.
---

## What is a Coupon Code?

A **Coupon Code** (or Promo Code / Voucher) is a customer-facing string (e.g. `WELCOME10`, `BLACKFRIDAY50`) entered into an input field on the cart or checkout page to apply a corresponding discount rule.

Coupons allow merchants to track attribution across specific marketing channels (e.g. influencer campaigns, affiliate links, email newsletters).

## Coupon Constraints

To protect profit margins, coupons specify validation conditions:

- **Usage Limits**: Maximum number of total redemptions (e.g. First 500 customers).
- **Per-Customer Limit**: Maximum redemptions per customer email (e.g. 1 use per customer).
- **Minimum Purchase Requirement**: Minimum cart subtotal required (e.g. `$50 minimum spend`).
- **Expiration Date**: Time-bound validity window.

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Case-Insensitive Normalization:</strong> Always convert coupon codes to uppercase strings (e.g. <code>welcome10</code> &rarr; <code>WELCOME10</code>) before performing database rule lookups to prevent false validation errors for mobile users with auto-capitalization.</p>
</div>
