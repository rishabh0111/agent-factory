---
description: Design a product's pricing strategy, from revenue model and tiers to willingness to pay, experiments, projections and a migration plan
argument-hint: "<product or pricing question>"
---

# /pricing

Work out how a product should charge: the revenue model, value metric, tiers and prices, how to test them, and how to move existing customers. This is the product and business decision; the pricing page itself is the marketing department's `/af-marketing:pricing`.

```
/pricing $ARGUMENTS
```

Examples: `/pricing SaaS project management tool moving from free to paid`, `/pricing Should we switch from per-seat to usage-based pricing?`, or uploaded competitor pricing pages or current pricing data.

## Workflow

1. **Context.** Take what `company.md` already says about the product, customers and current pricing; ask only for what is missing: the value delivered, the trigger (new product, price change, competitive pressure, growth stall), the target customer's budget context, and constraints (contracts, market expectations, positioning). Done when the trigger and the current model (or "none yet") are stated.
2. **Design.** Run `/af-product-management:pricing-strategy` to its completion criteria: monetization options when the model is open, a competitive benchmark from web research, the structure, willingness to pay (Van Westendorp with survey data, otherwise an estimate plus a survey the user can run), experiments, revenue projections and, for a change, the migration plan.
3. **Deliver** the pricing recommendation saved as markdown.
4. **Next steps.** Offer a market scan to validate the pricing assumptions (`/af-product-management:market-scan`), customer communication for a price change (`/af-product-management:stakeholder-update`, or marketing for public announcements), or the A/B test design for the pricing experiments (`/af-product-management:design-experiments`).
