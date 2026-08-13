---
title: Control vs Variation
summary: Compare the baseline control experience against test variations in A/B testing frameworks.
category: cro
type: comparison
difficulty: beginner
aliases:
  - control versus variation
  - A versus B
tags:
  - comparison
  - ab-testing
  - cro
relatedSlugs:
  - experiment
  - hypothesis
learningPath:
  id: cro-fundamentals
  title: Metrics, CRO & Experimentation
  order: 14
  prevSlug: hypothesis
  nextSlug: test-plan
seo:
  metaTitle: Control vs Variation — Technical Comparison for Developers
  metaDescription: Compare Control vs Variation experiences in A/B testing frameworks. Understand baseline controls, variants, and traffic splitting.
---

## Summary Matrix

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Attribute</th>
        <th>Control (Version A)</th>
        <th>Variation (Version B)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Role</strong></td>
        <td>The existing baseline experience</td>
        <td>The experimental new experience</td>
      </tr>
      <tr>
        <td><strong>Traffic Allocation</strong></td>
        <td>Typically 50% of traffic</td>
        <td>Typically 50% of traffic</td>
      </tr>
      <tr>
        <td><strong>Hypothesis Target</strong></td>
        <td>Represents current performance benchmark</td>
        <td>Tests specific changes proposed in hypothesis</td>
      </tr>
    </tbody>
  </table>
</div>

## Key Difference

The **Control** acts as the baseline benchmark to prove whether the **Variation** causes a statistically significant improvement or degradation.

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Clean Code Cleanup:</strong> Once an experiment concludes and a winner is declared, archive the experiment code and merge the winning variation cleanly into your main codebase. Never leave inactive A/B test toggles accumulating in production code.</p>
</div>
