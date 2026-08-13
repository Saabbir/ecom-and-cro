---
title: Order
summary: An order is an immutable financial and fulfillment contract representing a customer's purchase agreement.
category: ecommerce
type: concept
difficulty: beginner
aliases:
  - customer order
  - purchase order
  - sales order
tags:
  - order
  - checkout
  - fulfillment
relatedSlugs:
  - customer
  - transaction
comparisonSlugs:
  - order-vs-transaction
hierarchy:
  - label: Customer Cart
    description: Pending checkout items
  - label: Order
    url: /ecommerce/order/
    description: Financial purchase agreement
    isCurrent: true
  - label: Line Items & Fulfillment
    description: Shipping & item dispatch
learningPath:
  id: orders-fulfillment
  title: Orders, Payments & Fulfillment
  order: 1
  nextSlug: order-vs-transaction
seo:
  metaTitle: What is an Order in Ecommerce? Order Lifecycle Explained
  metaDescription: Learn how ecommerce orders work, order statuses (financial & fulfillment), line items, and developer architectural takeaways.
---

## What is an Order?

An **Order** is the central transactional entity generated when a customer completes checkout. 

It represents a legally binding purchase contract between buyer and merchant, capturing line item quantities, captured payments, applied discount codes, shipping/billing addresses, and tax assessments.

## The Order Lifecycle & Statuses

An order tracks two independent status dimensions:

### 1. Financial Status
- `pending`: Payment authorization created, awaiting capture.
- `paid`: Funds successfully captured from gateway.
- `refunded`: Captured funds returned to customer.
- `voided`: Authorization cancelled before capture.

### 2. Fulfillment Status
- `unfulfilled`: Stock assigned, awaiting picking/packing in warehouse.
- `partially_fulfilled`: Portion of line items shipped in split packages.
- `fulfilled`: Carrier tracking label generated and dispatched.

## Line Item Immutability

<aside class="confusion-callout">
  <strong>Snapshot Data Pattern:</strong> 
  When an order is created, product titles, variant options, prices, and tax rates are copied directly onto the order line items as static values. Never link order line items dynamically to live product catalog tables, as price changes would break historic receipt accuracy.
</aside>

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Idempotent Order Creation:</strong> Always pass an <code>idempotency_key</code> (such as cart ID or payment intent ID) when creating orders via API to prevent duplicate order generation if a network timeout occurs during checkout submit.</p>
</div>
