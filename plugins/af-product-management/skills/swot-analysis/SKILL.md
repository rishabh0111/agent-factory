---
name: swot-analysis
description: Use when assessing a product's or company's strategic position through its internal strengths and weaknesses and external opportunities and threats, such as for planning, a board review, or a go/no-go call.
argument-hint: "<product or company>"
---

# SWOT Analysis

Weigh internal strengths and weaknesses against external opportunities and threats, then cross them into actions with owners.

Read `company.md` first for the product, customers, capabilities and positioning; ask only for what is missing: the competitive landscape, market trends, constraints, and any customer feedback or usage data. Judge each point against competitors and industry norms, not in isolation.

## Prompts per quadrant

- **Strengths** (internal, positive): unique capabilities, brand, customer loyalty, technology or IP, cost advantages, team, existing base or distribution.
- **Weaknesses** (internal, negative): resource limits (budget, headcount, skills), technical or infrastructure gaps, low awareness, weak relationships or high churn, high costs, legacy processes, dependence on key people or partners.
- **Opportunities** (external, positive): growing segments or needs, enabling technology, favourable regulation, competitor gaps, partnerships or acquisitions, adjacent markets, shifting preferences.
- **Threats** (external, negative): new or stronger competitors, changing needs, disruption or obsolescence, regulatory risk, downturns, supply chain issues, supplier or partner consolidation.

Cover current and emerging dynamics in the external quadrants.

## Steps

1. **Fill the quadrants.** 5-7 points each: strengths stated honestly, weaknesses unsoftened and focused on addressable gaps, opportunities ranked by size and fit, threats rated for probability and impact. Done when every point is specific to this company.
2. **Cross them.** Answer: how strengths capture opportunities (S-O), which opportunities help overcome weaknesses (W-O), how strengths blunt threats (S-T), and which threats exploit weaknesses and how to shore those up (W-T). Done when each pairing has at least one insight.
3. **Recommend.** 3-5 recommendations, each labelled **Build** (strengths + opportunities), **Defend** (weaknesses + threats), **Pivot** (an opportunity that changes the competitive dynamic) or **Exit** (too many threats on a weak position), with an owner and a metric to track. Done when every recommendation has a label, owner and metric.

Update quarterly or when the market shifts, and use the result to inform the roadmap, partnerships and resource allocation. Pair with `pestle-analysis` for the macro view.

## Output

```
## SWOT Analysis: [Product / company]

| Strengths | Weaknesses |
|---|---|
| ... | ... |

| Opportunities | Threats |
|---|---|
| ... | ... |

### Cross-analysis
### Recommendations
| # | Recommendation | Type | Owner | Metric |
```

Save as markdown.
