---
name: strategy-red-team
description: Use when red-teaming a written PRD, roadmap, strategy or bet before committing to it, such as finding which load-bearing assumptions would sink it and the cheapest test for each, or preparing a document for executive review. For a CEO-level scope review (expand, hold or reduce the plan), see af-leadership:ceo-review.
argument-hint: "<PRD, roadmap, strategy, or 'the current doc'>"
---

# Strategy Red-Team

Act as a sharp, fair adversary. Most plans have only survived polite feedback. Find the load-bearing assumptions that would make the plan fail, attack them honestly, and return for each the evidence to get this week, the kill criterion and the cheapest test.

A red-team is not a pre-mortem: a pre-mortem imagines the plan already failed and narrates why (`pre-mortem`); a red-team attacks the live assumptions and logic **now**, while the cheapest test can still change the decision. The goal is a sharper decision, not a longer risk list: five real kill-assumptions with tests beat twenty generic risks.

Nor is it a CEO review, which sets the plan's scope and ambition (`af-leadership:ceo-review`).

Take the plan in any form: PRD, roadmap, strategy memo, a one-line bet, an uploaded document, or "the current doc" (the document in context).

## Steps

1. **Extract every claim** the plan asserts as true: about the user, the market, the constraint, the mechanism, the timeline. Keep the **load-bearing** ones (if false, the plan dies) and drop the cosmetic. Done when each kept claim is marked load-bearing with a reason.
2. **Steelman, then attack.** For each load-bearing claim, state the strongest case for why it might be true, then attack that version. An attack on a weak version is worthless. Done when every attack targets a stated steelman.
3. **Write each failure mode as "Fails if ___."** Concrete and falsifiable: "fails if activation isn't actually the constraint" beats "execution risk". Done when every failure mode could be checked with data.
4. **Rank** by (impact if wrong) × (likelihood wrong) × (cheapness to test). The top is what to test this week: high impact, plausibly wrong, cheap to check. Lead with the ranking. Done when the list is ordered and cut to 3-5.
5. **Self-refute, honestly.** Treat a risk as real unless the plan already cites evidence against it. When a claim is genuinely well-reasoned, say so plainly: a red-team that manufactures doubt is as useless as one that rubber-stamps. Report only weaknesses the plan actually has. Done when the well-reasoned section is filled or explicitly empty.
6. **Give the operator something to do** for each surviving kill-assumption: the precise failure condition, the evidence to get this week (data, query or conversation), the kill criterion (the threshold to stop or change course), and the cheapest test (the smallest experiment that moves the belief). Done when every kill-assumption has all four.
7. **Second opinion, only when the user asks.** If another model is reachable, run the same plan through it and flag where the two disagree: different model families miss different things. Most plans don't need it.

Every item is specific to this plan. If the plan is strong, saying so is the most valuable output, with the one thing still worth checking. End with what to do, not just what to fear.

## Output

```
## Red-Team: [plan in one line]

### Top kill-assumptions (ranked)
- **Claim:** [load-bearing assertion]
  - **Fails if:** [concrete, falsifiable]
  - **Evidence to get this week:** [specific]
  - **Kill criterion:** [threshold]
  - **Cheapest test:** [smallest experiment]

### What's well-reasoned
[What holds up, and why]

### What I couldn't assess
[Where the plan didn't give enough to judge]
```

Next steps worth offering: turn the top kill-assumption into an experiment this week (`design-experiments`), run a `pre-mortem` to complement it, or rewrite the riskiest section of the plan.
