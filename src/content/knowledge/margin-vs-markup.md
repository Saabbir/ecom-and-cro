---
title: Margin vs Markup
summary: Understand the mathematical and financial distinction between Margin percentage and Markup percentage.
category: metrics
type: comparison
difficulty: beginner
aliases:
  - margin versus markup
  - difference between margin and markup
tags:
  - comparison
  - margin
  - markup
relatedSlugs:
  - margin
  - price
learningPath:
  id: cro-fundamentals
  title: Metrics, CRO & Experimentation
  order: 4
  prevSlug: revenue-vs-profit
  nextSlug: conversion-rate
seo:
  metaTitle: Margin vs Markup — Technical Comparison for Developers
  metaDescription: Compare Margin vs Markup percentage formulas with real-world examples and mathematical conversions.
---

## Summary Matrix

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Metric</th>
        <th>Formula</th>
        <th>Denominator Base</th>
        <th>Example ($40 Cost, $100 Price)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Gross Margin</strong></td>
        <td>$$\left(\frac{\text{Price} - \text{Cost}}{\text{Price}}\right) \times 100$$</td>
        <td>Based on <strong>Selling Price</strong></td>
        <td>$$\left(\frac{100 - 40}{100}\right) \times 100 = \mathbf{60\%}$$</td>
      </tr>
      <tr>
        <td><strong>Markup</strong></td>
        <td>$$\left(\frac{\text{Price} - \text{Cost}}{\text{Cost}}\right) \times 100$$</td>
        <td>Based on <strong>Cost Price</strong></td>
        <td>$$\left(\frac{100 - 40}{40}\right) \times 100 = \mathbf{150\%}$$</td>
      </tr>
    </tbody>
  </table>
</div>

## Key Difference

- **Margin** looks backwards from the final selling price to measure how much profit is contained inside the sale dollar.
- **Markup** looks forwards from wholesale cost to determine how much price to add on top of cost.

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Pricing Rules Engine:</strong> When building automated cost-based pricing rules (e.g. "Apply 50% increase"), clarify whether the user interface setting expects a <code>markup</code> percentage or a target <code>margin</code> percentage to avoid underpricing catalog items.</p>
</div>
