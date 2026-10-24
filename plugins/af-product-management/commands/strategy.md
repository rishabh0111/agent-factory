---
description: Build a product strategy on the 9-section Product Strategy Canvas, from vision to defensibility
argument-hint: "<product or company>"
---

# /strategy

Write a complete product strategy: a vision worth rallying behind, then the nine canvas choices that make it real.

```
/strategy $ARGUMENTS
```

Examples: `/strategy AI-powered design tool for non-designers`, an uploaded strategy doc, pitch deck or business plan, or no argument to start from questions.

## Workflow

1. **Understand the product.** Take what `company.md` and any uploaded strategy decks, pitch decks, PRDs or business plans already say; ask only for what is missing: what the product does and for whom, its stage (idea, MVP, growth, mature), the business model, and what triggered the strategy work (new product, pivot, annual planning, fundraise). Done when stage and trigger are known.
2. **Vision.** When there is no vision, or it reads as a corporate statement rather than something emotional and memorable, run `/af-product-management:product-vision`. Done when one vision sentence is chosen.
3. **Strategy.** Run `/af-product-management:product-strategy` on all nine sections, pushing hardest on trade-offs and labelling early-stage sections as hypotheses. Done when its coherence check and hypotheses are complete.
4. **Deliver** the strategy document saved as markdown, and offer a one-page executive version.
5. **Next steps.** Offer a business model around it (`/af-product-management:business-model`), a roadmap aligned to it (`/af-product-management:roadmap-update`), a macro scan to stress-test its assumptions (`/af-product-management:market-scan`), or OKRs from its key metrics (`/af-product-management:plan-okrs`).
