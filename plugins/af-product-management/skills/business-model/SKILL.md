---
name: business-model
description: Use when modelling how a product or business creates, delivers and captures value on a canvas, such as a Business Model Canvas, Lean Canvas or Startup Canvas, or when testing a new venture's business hypothesis.
argument-hint: "[bmc|lean|startup|all] <product or business>"
---

# Business Model

Lay out a business model on the canvas that fits the stage, check that its blocks reinforce each other and that the economics work, and surface the riskiest assumptions.

Read `company.md` first for the product, customers, positioning and pricing; ask only for what is missing: the stage (idea, validated, scaling), any existing model to refine, the competitive context, and team constraints.

## Pick the canvas

| Canvas | Use for | Blind spots |
|---|---|---|
| **Startup Canvas** (the default for a new product) | New products that need strategic clarity and a business model together. Nine strategy sections from the Product Strategy Canvas plus Cost Structure and Revenue Streams, kept distinct but connected. | Heavier than Lean Canvas when speed is all you need. |
| **Lean Canvas** (Ash Maurya) | Fast hypothesis testing and brainstorming on an early idea. Replaces the BMC's Partners, Activities and Resources with Problem, Solution and Unfair Advantage. | Problem overlaps Market Segments (markets are defined by problems) and Solution overlaps Value Proposition; no vision, trade-offs, relative costs or coherence check; Unfair Advantage is one element, when the whole strategy should be hard to copy. A brainstorming tool, not a strategy document. |
| **Business Model Canvas** (Alexander Osterwalder, Strategyzer) | Established businesses, corporate strategy, investor materials: showing how all operational pieces connect. | No vision, no trade-offs, no key metrics, no Can't/Won't test of defensibility; Key Partners and Key Resources add little for early-stage products. |

When the user names no canvas, use Startup Canvas for a new product and the Business Model Canvas for an established one, and state the choice. **All** runs the three and compares them. A value proposition on its own is the `value-proposition` skill.

Read the template for the canvas you picked:

- Startup Canvas: [references/startup-canvas.md](references/startup-canvas.md)
- Lean Canvas: [references/lean-canvas.md](references/lean-canvas.md)
- Business Model Canvas: [references/business-model-canvas.md](references/business-model-canvas.md)

## Steps

1. **Fill the canvas** from its template, specific and measurable where possible. Done when every block has content or is marked as an assumption.
2. **Check fit.** Confirm the blocks support each other (segment ↔ value proposition ↔ channels ↔ revenue) and the economics hold: revenue exceeds costs at scale and LTV is above 3× CAC. Done when every mismatch is fixed or listed as a risk.
3. **Riskiest assumptions.** List what must be true for the model to work, ranked by risk, each with a cheap validation experiment (interviews, landing page, concierge MVP, pilot). Done when the top three assumptions each have an experiment.
4. **All mode only: compare.** Show where the canvases agree (strong signal) and where they diverge (needs investigation). Done when the comparison names at least one divergence or states there is none.

Mix and adapt rather than following any canvas rigidly. Update the canvas as you learn.

## Output

The canvas laid out as its template shows, then:

```
### Fit and economics
### Riskiest assumptions
| # | Assumption | Risk | Experiment | Success signal |
### Cross-canvas comparison (all mode)
```

Save as markdown. Next steps worth offering: stress-test with `swot-analysis` or `pestle-analysis`, design the revenue side with `pricing-strategy`, build the full strategy with `product-strategy`, or sharpen one segment with `value-proposition`.
