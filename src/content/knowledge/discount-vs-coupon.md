---
title: Discount vs Coupon
summary: Understand the distinction between underlying price reduction rules and customer-facing promo code triggers.
category: ecommerce
type: comparison
difficulty: beginner
aliases:
  - discount versus coupon
  - difference between discount and promo code
tags:
  - comparison
  - discount
  - coupon
relatedSlugs:
  - discount
  - coupon
learningPath:
  id: participants-pricing
  title: Commerce Participants, Pricing & Discounts
  order: 9
  prevSlug: coupon
seo:
  metaTitle: Discount vs Coupon — Technical Comparison for Developers
  metaDescription: Compare Discount vs Coupon in checkout platforms. Learn underlying calculation engines vs coupon code triggers.
---

## Summary Matrix

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Attribute</th>
        <th>Discount</th>
        <th>Coupon Code</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Nature</strong></td>
        <td>The underlying price reduction logic rule</td>
        <td>The alphanumeric key triggering the rule</td>
      </tr>
      <tr>
        <td><strong>Customer Action Required</strong></td>
        <td>None (if automatic) or code entry</td>
        <td>Must manually type or paste the code</td>
      </tr>
      <tr>
        <td><strong>Marketing Attribution</strong></td>
        <td>General storewide promotions</td>
        <td>Tracks specific influencers, emails, or ads</td>
      </tr>
      <tr>
        <td><strong>Database Relationship</strong></td>
        <td>Discount Rule (1)</td>
        <td>Can have multiple coupon codes (N) mapping to 1 discount rule</td>
      </tr>
    </tbody>
  </table>
</div>

## Key Difference

A **Discount** is the business rule (e.g. "Take $10 off orders over $50"). 

A **Coupon Code** is a trigger string (e.g. `SAVE10`) that unlocks that discount rule during checkout.

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Many-to-One Code Mapping:</strong> Design your discount schema so multiple distinct coupon codes (e.g. <code>INFLUENCER_ALICE</code>, <code>INFLUENCER_BOB</code>) point to the same underlying <code>discount_id</code> calculation logic while tracking attribution separately.</p>
</div>
