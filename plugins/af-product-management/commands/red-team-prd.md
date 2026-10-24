---
description: Red-team a PRD, roadmap or strategy by attacking its load-bearing assumptions and returning the cheapest test for each before you commit
argument-hint: "<PRD, roadmap, strategy, or 'the current doc'>"
---

# /red-team-prd

Find the assumptions that would make the plan fail, attack them honestly, and get the cheapest test for each, so a bad bet dies this week instead of at launch.

```
/red-team-prd $ARGUMENTS
```

Examples: a pasted or uploaded PRD, roadmap or strategy; `/red-team-prd Prioritize AI onboarding, activation is our bottleneck`; `/red-team-prd the current doc`.

## Workflow

1. **Accept the plan** in any form; "the current doc" means the document in context. Done when the plan is stated in one line.
2. **Red-team it.** Run `/af-product-management:strategy-red-team` to its completion criteria, leading with the ranking. When the user asks for a second opinion, confirm before adding a cross-model pass.
3. **Next steps.** Offer to turn the top kill-assumption into an experiment this week (`/af-product-management:design-experiments`), a complementary `/af-product-management:pre-mortem`, or a rewrite of the riskiest section of the plan.
