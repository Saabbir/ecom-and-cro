---
title: Payment Gateway
summary: A payment gateway is the software service that securely encrypts, authorizes, and processes credit card or digital wallet transactions between shoppers and merchants.
category: ecommerce
type: concept
difficulty: beginner
aliases:
  - merchant gateway
  - credit card processor
  - payment processor
tags:
  - payments
  - gateway
  - checkout
relatedSlugs:
  - order
  - merchant
comparisonSlugs:
  - order-vs-transaction
learningPath:
  id: orders-fulfillment
  title: Orders, Payments & Fulfillment
  order: 3
  prevSlug: order-vs-transaction
  nextSlug: location
seo:
  metaTitle: What is a Payment Gateway in Ecommerce? Architecture Guide
  metaDescription: Learn how payment gateways (Stripe, PayPal, Adyen) handle authorizations, tokenization, PCI compliance, and webhooks.
---

## What is a Payment Gateway?

A **Payment Gateway** is an ecommerce service provider that securely captures and transmits sensitive credit card, debit card, or digital wallet (Apple Pay, Google Pay) payment data from the shopper's browser to the acquiring bank and payment networks.

## Core Functions

1. **Tokenization & Encryption**: Converts sensitive card numbers into secure single-use tokens, preventing raw credit card numbers from touching merchant servers.
2. **Authorization**: Requests instant bank approval for the purchase amount.
3. **Capture**: Transfers authorized funds from customer bank to merchant account.
4. **Settlement**: Deposits funds into the merchant's bank account after processing fees.

## Common Payment Gateway Providers

- **Stripe**: Developer-centric API gateway.
- **Shopify Payments**: Built-in payment gateway powered by Stripe.
- **PayPal**: Digital wallet and merchant gateway.
- **Adyen**: Global omnichannel enterprise payment processor.

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>PCI Compliance & Elements:</strong> Never send raw credit card numbers (PAN) directly to your server API endpoints. Use secure iframe primitives (like Stripe Elements or Braintree Hosted Fields) so payment data is tokenized directly on gateway servers, ensuring SAQ A PCI compliance.</p>
</div>
