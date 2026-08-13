---
title: Profit Margin
summary: Profit margin is the percentage of revenue remaining after subtracting cost of goods sold (COGS) or total expenses.
category: metrics
type: metric
difficulty: beginner
aliases:
  - gross margin
  - margin percentage
  - profit percentage
tags:
  - metrics
  - margin
  - profit
relatedSlugs:
  - revenue
  - price
comparisonSlugs:
  - margin-vs-markup
learningPath:
  id: cro-fundamentals
  title: Metrics, CRO & Experimentation
  order: 2
  prevSlug: revenue
  nextSlug: revenue-vs-profit
seo:
  metaTitle: What is Profit Margin in Ecommerce? Formulas & Calculation
  metaDescription: Learn how to calculate Gross Profit Margin, Net Margin, and how margin differs from markup percentage.
---

## What is Profit Margin?

**Profit Margin** (specifically **Gross Profit Margin**) measures the percentage of every sales dollar retained as profit after paying for the product's cost of goods sold (COGS).

$$\text{Gross Margin (\%)} = \left( \frac{\text{Selling Price} - \text{Cost of Goods Sold (COGS)}}{\text{Selling Price}} \right) \times 100$$

## Calculation Example

If a merchant sells a jacket for **$100** and its COGS (unit manufacture/wholesale cost) is **$40**:

$$\text{Gross Margin} = \left( \frac{100 - 40}{100} \right) \times 100 = 60\%$$

For every $100 sale, the merchant retains **$60** (60%) to cover operating expenses, ad spend, and net profit.

## Common Confusion

<aside class="confusion-callout">
  <strong>Margin vs. Markup:</strong> 
  <strong>Margin</strong> measures profit as a percentage of the <em>selling price</em>. <strong>Markup</strong> measures profit as a percentage of the <em>cost price</em>. A 60% margin equals a 150% markup!
</aside>

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Cost Price Tracking:</strong> Ensure product variant database models store a <code>cost_price</code> attribute alongside <code>price</code> so business dashboards can calculate real-time profit margins automatically.</p>
</div>
