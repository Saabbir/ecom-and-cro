---
title: Order vs Transaction
summary: Understand the architectural boundary between merchant purchase contracts and payment gateway transactions.
category: ecommerce
type: comparison
difficulty: beginner
aliases:
  - order versus transaction
  - difference between order and transaction
tags:
  - comparison
  - order
  - transaction
relatedSlugs:
  - order
  - customer
learningPath:
  id: orders-fulfillment
  title: Orders, Payments & Fulfillment
  order: 2
  prevSlug: order
  nextSlug: payment-gateway
seo:
  metaTitle: Order vs Transaction — Technical Comparison for Developers
  metaDescription: Compare Order vs Transaction in ecommerce database architecture. Understand 1-to-N relationships and gateway attempts.
---

## Summary Matrix

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Attribute</th>
        <th>Order</th>
        <th>Transaction</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Entity Scope</strong></td>
        <td>Merchant purchase agreement contract</td>
        <td>1-to-N Payment Gateway authorization/capture event</td>
      </tr>
      <tr>
        <td><strong>Created By</strong></td>
        <td>Ecommerce Storefront / Cart Checkout Engine</td>
        <td>Payment Processor Gateway (Stripe, PayPal)</td>
      </tr>
      <tr>
        <td><strong>Data Points</strong></td>
        <td>Line items, shipping address, discounts, taxes</td>
        <td>Gateway transaction ID, authorization code, card brand, risk score</td>
      </tr>
      <tr>
        <td><strong>Multiplicity</strong></td>
        <td>Single Order record (1)</td>
        <td>Multiple Transaction records (N - Auth, Capture, Refund attempts)</td>
      </tr>
    </tbody>
  </table>
</div>

## Key Difference

An **Order** is the merchant's contract with the buyer detailing what was purchased. A **Transaction** is a specific financial payment attempt processed through a payment gateway. 

A single Order can have multiple Transactions (e.g. an initial authorization, a partial capture, and a subsequent partial refund).

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>1-to-Many Schema Modeling:</strong> Model <code>transactions</code> as a child array or separate table related to `order_id` via a foreign key, rather than storing gateway authorization IDs directly on the order row.</p>
</div>
