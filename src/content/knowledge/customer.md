---
title: Customer
summary: A customer represents an individual or organization purchasing goods or services from an ecommerce store.
category: ecommerce
type: concept
difficulty: beginner
aliases:
  - buyer
  - shopper
  - user
  - account
tags:
  - customer
  - checkout
  - orders
relatedSlugs:
  - order
  - merchant
comparisonSlugs:
  - user-vs-customer
hierarchy:
  - label: Store Visitor
    description: Unauthenticated guest
  - label: Customer
    url: /ecommerce/customer/
    description: Registered/Guest purchaser
    isCurrent: true
  - label: Order
    url: /ecommerce/order/
    description: Transaction record
learningPath:
  id: participants-pricing
  title: Commerce Participants, Pricing & Discounts
  order: 4
  prevSlug: merchant-vs-vendor
  nextSlug: user-vs-customer
seo:
  metaTitle: What is a Customer in Ecommerce? Domain Model Explained
  metaDescription: Learn how customer profiles, guest checkouts, and customer accounts are structured in ecommerce platform architectures.
---

## What is a Customer?

In ecommerce architecture, a **Customer** represents the entity placing orders and completing financial transactions. 

A customer profile aggregates purchasing history, saved shipping addresses, default payment methods, marketing consent (email/SMS), and lifetime value (LTV) metrics.

## Guest vs. Registered Customer

Ecommerce platforms handle two primary customer states during checkout:

1. **Guest Customer**: Places an order using an email or phone number without creating a password-protected account.
2. **Registered Customer**: Creates a persistent account allowing one-click checkout, order tracking, order history viewing, and saved addresses.

## Customer Attributes

A typical customer record contains:

- `id`: Permanent unique database primary key.
- `email` & `phone`: Contact identifiers.
- `first_name` & `last_name`: Personal name attributes.
- `addresses`: Array of shipping and billing addresses.
- `orders_count`: Number of completed orders.
- `total_spent`: Total historical revenue generated.

## Common Confusion

<aside class="confusion-callout">
  <strong>User vs. Customer:</strong> 
  In web applications, a <strong>User</strong> refers to anyone with login credentials to an admin dashboard or system. A <strong>Customer</strong> is specifically a buyer entity purchasing products from the storefront.
</aside>

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>GDPR & Privacy Compliance:</strong> Customer records store Personally Identifiable Information (PII). Ensure your database and log pipelines comply with data protection regulations (GDPR/CCPA) by providing automated endpoints to redact or delete customer data upon request.</p>
</div>
