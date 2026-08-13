---
title: Price & Compare-At Price
summary: Price represents the monetary value required to purchase a variant, while Compare-At Price displays the original reference list price for strike-through sales.
category: ecommerce
type: concept
difficulty: beginner
aliases:
  - pricing
  - compare at price
  - strike through price
  - retail price
tags:
  - pricing
  - variant
  - catalog
relatedSlugs:
  - variant
  - discount
learningPath:
  id: participants-pricing
  title: Commerce Participants, Pricing & Discounts
  order: 6
  prevSlug: user-vs-customer
  nextSlug: discount
seo:
  metaTitle: What is Price and Compare-At Price in Ecommerce?
  metaDescription: Learn how ecommerce pricing, compare-at strike-through prices, currency formatting, and integer storage work in database engineering.
---

## What is Price?

In ecommerce, **Price** is the exact monetary amount required from a customer to purchase a specific product variant in a given currency.

## Price vs. Compare-At Price

To convey value during sales or promotional periods, stores display two distinct price attributes:

- **Price**: The actual active selling price charged at checkout (e.g. `$39.00`).
- **Compare-At Price**: The original manufacturer suggested retail price (MSRP) or non-discounted reference price (e.g. ~~$50.00~~).

When `Compare-At Price > Price`, storefronts automatically calculate and render strike-through pricing and percentage-off badges:

$$\text{Discount (\%)} = \left( \frac{\text{Compare-At Price} - \text{Price}}{\text{Compare-At Price}} \right) \times 100$$

## Common Pitfall: Floating Point Currency

<aside class="confusion-callout">
  <strong>Floating Point Rounding Errors:</strong> 
  Never store prices as standard floating point numbers (e.g. <code>float</code> / <code>double</code>) in database tables due to binary IEEE-754 precision issues (e.g. <code>0.1 + 0.2 = 0.30000000000000004</code>).
</aside>

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Integer Cents Rule:</strong> Always store monetary amounts in the smallest currency unit as integers (e.g. <code>3900</code> for $39.00 USD) or fixed-precision <code>DECIMAL(10, 2)</code> strings to prevent rounding discrepancies during checkout tax calculations.</p>
</div>
