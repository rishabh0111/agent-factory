---
description: Draft team-level OKRs that ladder up to company objectives, with three alternative sets to choose from
argument-hint: "<team, product area, or company objective>"
---

# /plan-okrs

Draft OKRs that connect a team's work to company strategy: three alternative sets, quality-checked, with an alignment map and a check-in cadence.

```
/plan-okrs $ARGUMENTS
```

Examples: `/plan-okrs Growth team Q2, company goal is 50% ARR increase`, `/plan-okrs Onboarding squad aligned to "improve activation rate"`, or uploaded company OKRs or a strategy doc.

## Workflow

1. **Context.** Take what `company.md` and any uploaded company OKRs or strategy documents already say; ask only for what is missing: the team or product area, the period, the company objectives to ladder to, last period's hits, misses and learnings, and constraints or known priorities. Done when the team, period and company objective are stated.
2. **Draft.** Run `/af-product-management:team-okrs` to its completion criteria: three sets, the quality check, and gaming risks flagged with counter-metrics.
3. **Deliver** the OKRs saved as markdown.
4. **Iterate.** Offer to adjust the ambition up or down, a metrics dashboard to track the key results (`/af-product-management:metrics-review`), or a stakeholder update introducing the OKRs (`/af-product-management:stakeholder-update`).
