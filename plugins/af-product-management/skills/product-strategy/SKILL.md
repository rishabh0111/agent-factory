---
name: product-strategy
description: Use when building or rewriting a product strategy, deciding how a product will compete, win and grow, or checking whether a strategy's choices hold together, such as for annual planning, a pivot, or a fundraise.
argument-hint: "<product or company>"
---

# Product Strategy Canvas

Write a product strategy on the 9-section Product Strategy Canvas: the set of choices that says where the product plays, how it wins, and what it refuses to do. A strategy is judged as a whole: the choices should reinforce each other so that competitors can't or won't copy the set.

Read `company.md` first for the product, customers, positioning and metrics; ask only for what is missing: the stage (idea, MVP, growth, mature), the business model, and what triggered the strategy work. Read any strategy decks, pitch decks, PRDs or business plans the user provides; when refining an existing strategy, challenge it section by section.

## The canvas

1. **Vision**: How do we inspire people? What are we aspiring to achieve? What values do we uphold? Inspiring, achievable, emotional, 2-3 sentences at most. For a new or weak vision, run the `product-vision` skill first.
2. **Market segments**: define the market by people's problems, not demographics: jobs to be done, desired outcomes, constraints. Name the first segment and why it comes first, and who we explicitly do not serve.
3. **Relative costs**: do we optimize for low cost (like Southwest Airlines) or unique value (like Starbucks)? Where do our costs sit against competitors? Low costs need not mean low prices.
4. **Value proposition**, per segment: what before (the current problematic state), how (the capabilities that change it), what after (the outcome), and alternatives (what they use today, and why we beat it; a Value Curve helps). The `value-proposition` skill holds the full method.
5. **Trade-offs**: what we will NOT do: features, segments, markets out of scope. Saying no creates focus and amplifies value.
6. **Key metrics**: the North Star Metric, the One Metric That Matters this quarter (OMTM), 3-5 input metrics that move the North Star, and health metrics as guardrails.
7. **Growth**: product-led or sales-led, the primary acquisition channels, how we scale, and the unit economics.
8. **Capabilities**: the competencies and resources we need, and for each whether we build, buy or partner.
9. **Can't / Won't**: why competitors can't or won't copy us: network effects, data, brand, switching costs, economies of scale, IP, entry barriers. Most early products have no real moat yet; say so when that is the case.

## Steps

1. **Draft the nine sections** with content specific to this product. Done when every section has a concrete answer or is labelled a hypothesis (expected for early-stage products).
2. **Check coherence.** Test that the choices reinforce each other: the segment matches the value proposition, the cost position fits the growth model, the metrics measure the value proposition's "what after", the trade-offs protect the advantage. Done when every conflict found is fixed or listed as a risk.
3. **Surface hypotheses.** List what must be true for the strategy to work, ranked by risk, each with a low-effort experiment. Done when the top three hypotheses each have an experiment.
4. **Condense.** Offer a one-page executive version.

Push hardest on trade-offs: a strategy is more about what you say no to. Revisit quarterly as conditions change.

## Output

```
## Product Strategy: [Product]
Date: [today] | Stage: [idea / MVP / growth / mature]

### 1. Vision
### 2. Market segments
| Segment | Job to be done | Size | Pain level | Current alternative | Priority |
Primary segment: [who, why] | Explicitly not serving: [who, why]
### 3. Relative costs
### 4. Value propositions
For [segment]: what before → how → what after → alternatives
### 5. Trade-offs
| We choose | Over | Because |
### 6. Key metrics
North Star: [...] | OMTM this quarter: [...] | Input metrics: [...] | Health metrics: [...]
### 7. Growth
### 8. Capabilities
| Capability | Build / buy / partner | Investment | Timeline |
### 9. Can't / Won't
### Coherence check
### Hypotheses and experiments
### Strategic risks: [top 3 things that could invalidate this strategy]
### Next steps: [socialize, test, build]
```

Save as markdown.
