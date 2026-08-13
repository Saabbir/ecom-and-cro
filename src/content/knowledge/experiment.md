---
title: A/B Testing & Experimentation
summary: An experiment (A/B test) is a controlled methodology comparing an existing baseline against variation experiences to prove statistical impact.
category: cro
type: cro
difficulty: intermediate
aliases:
  - AB test
  - split test
  - experimentation
  - variation test
tags:
  - cro
  - ab-testing
  - experiment
relatedSlugs:
  - hypothesis
  - conversion-rate
learningPath:
  id: cro-fundamentals
  title: CRO Reasoning & Analytics
  order: 3
  prevSlug: hypothesis
seo:
  metaTitle: What is A/B Testing? CRO Experimentation Guide for Developers
  metaDescription: Learn how A/B tests work in frontend development, client-side vs server-side experimentation, sample size, and statistical significance.
---

## What is an A/B Test?

An **A/B Test** (or Controlled Experiment) is a scientific method where visitors are randomly split into two or more groups:

- **Control (Version A)**: The existing default website experience.
- **Variation (Version B)**: The modified experience testing a specific hypothesis.

Both versions run concurrently under identical market conditions. Statistical analysis then determines whether the variation produced a true, repeatable improvement.

## Client-Side vs. Server-Side Experimentation

### 1. Client-Side Testing
JavaScript snippets (e.g. VWO, Optimizely, Kameleoon) modify DOM elements dynamically in the user's browser after page load.
- *Pros*: Quick to deploy without code deployment pipelines.
- *Cons*: Potential layout flickering (FOUT), performance overhead, script blocking.

### 2. Server-Side / Edge Testing
Variation logic runs on the web server or edge worker (e.g. Cloudflare Workers, Vercel Edge Middleware) before sending HTML to the browser.
- *Pros*: Zero layout flicker, pristine Core Web Vitals, highly secure.
- *Cons*: Requires developer involvement and code deployments.

## Key Statistical Terms

- **Sample Size**: Minimum number of visitors required to achieve statistical confidence.
- **Statistical Significance ($p$-value)**: Probability that the observed difference is real rather than random chance (typically set at $95\%$ confidence).
- **Minimum Detectable Effect (MDE)**: Smallest lift the experiment is powered to reliably detect.

## Developer Takeaway

<div class="developer-takeaway">
  <p><strong>Flicker Prevention:</strong> When implementing client-side experimentation, use CSS <code>opacity: 0</code> anti-flicker snippets judiciously with tight timeout fallbacks (e.g. 500ms max) to ensure pages never stay blank if an experiment script fails to load.</p>
</div>
