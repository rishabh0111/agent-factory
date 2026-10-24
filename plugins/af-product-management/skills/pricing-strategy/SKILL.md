---
name: pricing-strategy
description: Use when deciding a product's revenue model or price structure as a product and business decision, such as comparing monetization models, choosing a value metric and tiers, estimating willingness to pay, projecting revenue, or planning a price change for existing customers. For the pricing page and how plans are presented to buyers, see af-marketing:pricing.
argument-hint: "<product or pricing question>"
---

# Pricing Strategy

Decide how a product makes money: which revenue model, what unit to charge on, which tiers at which prices, and how to test and roll it out. Price from the value delivered, not from cost: value-based pricing beats cost-plus. Pricing is a strong lever: a 1% price improvement typically outweighs a 1% gain in acquisition several times over.

Read `company.md` first for the product, customers, positioning and current pricing; ask only for what is missing: the trigger (new product, price change, competitive pressure, growth stall), the customer's budget context, company priorities (revenue growth, user growth, profitability), and constraints (contracts, market expectations). Read any competitor pricing, survey data, financial models or usage data the user provides. Use web research for competitor pricing.

## Pick the branch

- **Model open** (new product, or "how should we monetize this?"): start at step 2 and compare models.
- **Model chosen** (setting or changing prices): confirm the model in one line and start at step 3.

## Steps

1. **Value.** State the core value, the customer's alternative and its cost, and the quantifiable outcomes (time saved, revenue gained, cost cut). Done when willingness to pay has a value-based anchor.
2. **Monetization options.** Brainstorm 3-5 distinct models (avoid near-duplicates) from [references/monetization-models.md](references/monetization-models.md). For each: how it works for this product (who pays for what, how often, how much), audience fit, unit economics (CAC, LTV, break-even, gross margin), risks (adoption, price sensitivity, competitive vulnerability, churn, implementation), competitive position (how rivals monetize, switching barriers), and a low-cost validation experiment with a success metric and decision rule. Rank by strategic fit, ease, validation potential and advantage; recommend 1-2 to test first. Done when every option has all six parts. Most products end up hybrid (freemium plus upgrade, subscription plus usage).
3. **Competitive benchmark.** Map 3-5 competitors' models, tiers and inclusions; place the product (premium, mid-market, budget); note category conventions and trends (for example per-seat moving to usage-based in B2B SaaS) and gaps. Done when the benchmark table is filled.
4. **Structure.** Define 2-4 clearly differentiated tiers; choose the value metric (users, events, storage, API calls); gate features by value, not arbitrary limits; anchor so the most popular tier feels like the obvious choice; set the annual discount (typically 15-20%); define what is free or on trial and the conversion triggers. Done when every tier has a price, segment, key features and key limit.
5. **Willingness to pay.** With survey data, run Van Westendorp (too cheap → quality doubts; cheap → good value; expensive → hesitation; too expensive → won't buy) and segment by user type. Without data, estimate from value delivered, competitive anchors and market norms, and draft a willingness-to-pay survey the user can run. Done when each tier's price has a stated basis.
6. **Experiments and projection.** Plan pricing experiments (A/B tests of price points, tier names and bundles; founder-led sales conversations; landing pages with different anchors; conversion cohorts by price point). Project revenue in conservative, expected and optimistic scenarios with their assumptions. Done when each key assumption has a test.
7. **Migration** (price changes only). Plan the transition for existing customers: grandfathering, communication and timeline. Pricing changes that alienate the base destroy trust. Done when existing customers have a path.

Keep pricing simple to understand and predictable for the customer. Freemium works only when free users create value (network effects, word of mouth, marketplace liquidity). Pricing can change later; relationships are harder to rebuild. Watch competitors without racing them to the bottom.

## Output

```
## Pricing Strategy: [Product]
Date: [today] | Current pricing: [if any]

Recommended model: [...] | Value metric: [...]
Why this model: [tied to value delivered]

### Monetization options considered (model-open branch)
### Pricing structure
| Tier | Price | Target segment | Key features | Key limit | Positioning |
### Free / trial strategy
### Competitive benchmark
| Competitor | Model | Price range | Positioning |
### Revenue projections
| Scenario | Assumptions | Year 1 ARR | Year 2 ARR |
### Migration plan (price changes)
### Pricing experiments
| Experiment | What we're testing | Method | Duration | Success metric |
### Risks and mitigations
| Risk | Likelihood | Impact | Mitigation |
### Key assumptions → how to test
### Metrics to track: conversion by tier, ARPU, upgrade and downgrade rates, churn by price sensitivity, price elasticity signals
```

Save as markdown and flag every assumption that needs validation before launch. For the pricing page itself, its copy and layout, hand over to the marketing department's `pricing` skill; for customer communication of a change, the `stakeholder-update` skill or marketing.
