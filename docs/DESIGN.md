# Design System and UX Direction

## 1. Design Goal

The site should feel like a modern, high-quality developer knowledge base.

Reference the general qualities of:

- Stripe documentation
- Linear
- Modern technical documentation sites

Do not copy their visual identity.

## 2. Personality

The site should feel:

- Clear
- Calm
- Friendly
- Technical but approachable
- Modern
- Trustworthy
- Lightweight

Avoid:

- Heavy gradients
- Excessive animations
- Dashboard-like layouts
- Overly colorful cards
- Corporate stock imagery
- Clutter

## 3. Typography

Prioritize readability.

Use:

- Strong heading hierarchy
- Comfortable line length
- Generous spacing
- Clear body text
- Good code/technical typography where needed

Article content should be comfortable to read for several minutes at a time.

## 4. Layout

Desktop:

- Clear header
- Main content column
- Optional article sidebar/table of contents
- Related content
- Generous whitespace

Mobile:

- Single-column content
- Easy navigation
- Sticky or accessible article navigation when useful
- Tables must remain readable
- No horizontal overflow except where genuinely necessary

## 5. Homepage

The homepage should quickly communicate:

What is this?

Why should I use it?

Where should I start?

Suggested sections:

1. Hero
2. Explanation of the problem
3. Browse ecommerce concepts
4. Explore confusing terms
5. Shopify concepts
6. Ecommerce metrics
7. Learn CRO
8. Featured learning paths
9. Footer

## 6. Concept Pages

The article should visually prioritize:

1. Title
2. Short definition
3. Simple explanation
4. Example
5. Relationships
6. Common confusion
7. Shopify implementation
8. Developer takeaway

Avoid making the reader fight through UI to find the definition.

## 7. Comparison Pages

Use a clear comparison table near the top when appropriate.

Then explain the differences in normal language.

Example:

| | Product | Variant |
|---|---|---|
| Represents | Product concept | Specific configuration |
| Example | T-shirt | Black / Medium |
| SKU | Usually variant-level | Often has its own SKU |
| Inventory | Often represented at variant level | Specific inventory |

Tables should be accessible and mobile-friendly.

## 8. Visual Language

Use diagrams for relationships and processes.

Examples:

Product
-> Variant
-> SKU
-> Inventory
-> Location

and:

Customer
-> Cart
-> Checkout
-> Order
-> Fulfillment
-> Delivery

Diagrams should clarify concepts, not decorate pages.

## 9. Color

Do not rely on color alone to communicate meaning.

Use a restrained palette.

Design tokens should be centralized so the theme can evolve without rewriting components.

## 10. Dark Mode

Dark mode is desirable if it can be implemented cleanly without complicating the MVP.

It must preserve:

- Contrast
- Readability
- Code readability
- Table readability
- Focus states

## 11. Components

Visual patterns should be consistent across content types.

Useful patterns:

- Definition box
- Key takeaway
- Common confusion
- Shopify-specific note
- Real-world example
- Comparison table
- Related concepts
- Process diagram
- Warning/exception
- Developer note

## 12. Content Comes First

Do not let UI patterns make explanations harder to read.

When in doubt, choose clarity and simplicity over visual novelty.
