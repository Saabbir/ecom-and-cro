---
title: Conversion Rate
summary: Conversion rate measures the percentage of website sessions or visitors who complete a desired commercial goal.
category: metrics
type: metric
difficulty: beginner
aliases:
  - CVR
  - ecommerce conversion rate
  - store conversion
tags:
  - metric
  - conversion
  - analytics
  - cro
relatedSlugs:
  - hypothesis
  - experiment
learningPath:
  id: cro-fundamentals
  title: CRO Reasoning & Analytics
  order: 1
  nextSlug: hypothesis
seo:
  metaTitle: What is Conversion Rate (CVR)? Formula & Calculation Guide
  metaDescription: Learn how ecommerce Conversion Rate is calculated, industry benchmarks, conversion funnel tracking, and developer analytics tips.
---

## What is Conversion Rate?

**Conversion Rate** (abbreviated **CVR**) is the primary performance metric measuring the percentage of website visitors or sessions that successfully achieve a target action—most commonly completing a purchase.

$$\text{Conversion Rate (\%)} = \left( \frac{\text{Total Converted Sessions}}{\text{Total Total Sessions}} \right) \times 100$$

## Example Calculation

If an online store receives **50,000 sessions** in a month and records **1,250 completed orders**:

$$\text{Conversion Rate} = \left( \frac{1,250}{50,000} \right) \times 100 = 2.5\%$$

Average ecommerce conversion rates typically range between **1.5% and 3.5%**, depending on industry, region, device type (desktop vs. mobile), and traffic source.

## Micro-Conversions vs. Macro-Conversions

- **Macro-Conversion**: The primary business revenue goal (e.g. Completed Order).
- **Micro-Conversions**: Milestone behaviors indicating user intent along the purchase funnel:
  - Product Page View (PDP View)
  - Add to Cart (ATC)
  - Initiate Checkout
  - Account Creation

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Session Deduplication in Analytics:</strong> When tracking conversions in client-side analytics tools (Google Analytics, Mixpanel, Segment), deduplicate conversion events by passing the unique <code>order_id</code> as a transaction deduplication token to prevent page reloads from inflating your conversion metrics.</p>
</div>
