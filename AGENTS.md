# AI Coding Agent Instructions

## 1. Read Before Coding

Before making code changes, read:

- docs/PROJECT.md
- docs/CONTENT_GUIDE.md
- docs/ARCHITECTURE.md
- docs/DESIGN.md
- docs/ROADMAP.md

Treat these documents as the project contract.

## 2. Do Not Rush

Do not immediately implement a large request.

For significant work:

1. Understand the requirement.
2. Inspect the existing project.
3. Identify affected files.
4. Consider architectural impact.
5. Propose a concise implementation plan.
6. Implement in small, reviewable steps.
7. Test the result.
8. Report what changed.

## 3. Preserve Simplicity

Prefer the simplest solution that satisfies the requirement.

Do not introduce:

- A database
- Authentication
- Backend services
- CMS
- Hosted search
- Large UI libraries
- State-management frameworks

unless a concrete requirement justifies them.

## 4. Content Architecture

Never hardcode article content into UI components.

Content belongs in the content system.

Components should render content.

## 5. Content Quality

When generating content:

- Follow CONTENT_GUIDE.md.
- Use simple English.
- Explain concepts clearly.
- Use real-world examples.
- Distinguish general ecommerce terminology from Shopify terminology.
- Never invent Shopify technical behavior.
- Flag uncertainty when terminology varies.
- Verify Shopify-specific technical claims against current official documentation.

## 6. Design

Follow DESIGN.md.

Prioritize:

- readability
- accessibility
- mobile usability
- performance
- consistency

Do not add visual effects simply because they are technically possible.

## 7. Accessibility

Every UI change should consider:

- keyboard navigation
- semantic HTML
- focus states
- contrast
- accessible names
- heading hierarchy
- table accessibility
- reduced motion

## 8. Performance

Keep the site static-first.

Avoid unnecessary client JavaScript.

Before adding a dependency, ask whether the same result can be achieved with the platform, CSS, or a small local utility.

## 9. SEO

New content templates must support:

- title
- description
- canonical
- Open Graph
- sitemap inclusion
- structured data where appropriate

## 10. Testing

After meaningful implementation:

- Run the project build.
- Run type checking.
- Check for broken links.
- Check responsive behavior.
- Check console errors.
- Check accessibility where practical.

Do not claim something works without testing it.

## 11. Documentation

If architecture changes, update the relevant documentation.

If a new content type is introduced, document it.

If a roadmap item changes materially, update ROADMAP.md.

## 12. Git

Keep changes small and logical.

Prefer focused commits.

Do not rewrite unrelated code.

Do not remove working functionality to simplify a new feature without discussing the tradeoff.

## 13. Important Rule

Do not build the entire roadmap at once.

Implement one milestone at a time and keep the project working after every milestone.
