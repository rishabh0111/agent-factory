---
name: pre-mortem
description: Use when a launch, PRD or feature plan is nearly ready and the team needs to know what could make it fail, which risks block launch, and what to fix first.
argument-hint: "<PRD, launch plan, or feature description>"
---

# Pre-Mortem

Imagine the launch has failed, work backward to why, and separate real risks from overblown worries and from the ones nobody is saying out loud. The best moment is when the plan is about 80% done: early enough to change course, late enough to have substance.

Read the PRD, spec, launch plan or brief the user provides (or the verbal description): the product, target market, key assumptions and timeline. The more detail, the sharper the analysis. Use web research for the competitive landscape or market conditions when relevant.

## Risk types

- **Tigers**: real problems you see that could derail the project, based on evidence, experience or clear logic. They need action. When unsure, classify as a Tiger: better to address it early.
- **Paper Tigers**: concerns others may raise that are unlikely or overblown. Document them to align stakeholders, say why the concern is manageable, and note what would turn it into a real Tiger.
- **Elephants**: things the team isn't discussing enough: unspoken assumptions nobody validates, and political, organizational or uncomfortable risks. They may be real; investigate before launch. Often the highest-value output: frame them constructively with a conversation starter.

Tigers by urgency:
- **Launch-blocking**: must be solved before launch (a core feature broken, a regulatory blocker, an unmet key customer dependency).
- **Fast-follow**: solve within 30 days, or the first sprint, after launch (performance issues, incomplete secondary features).
- **Track**: monitor after launch and act if a trigger condition fires (nice-to-haves, edge cases).

## Steps

1. **Imagine the failure.** The product launches in 14 days and fails: customers don't adopt it, revenue misses, reputation takes a hit. What went wrong, what did we miss, what were we overconfident about? Generate risks across technical (performance, scale, integrations, data), user (adoption barriers, usability, unmet expectations), business (revenue, competitive response, timing), operational (support load, documentation, training) and dependencies (third parties, cross-team handoffs, regulation), from engineering, design and go-to-market perspectives. Push past the obvious: the most dangerous risks are the ones nobody mentions. Done when every category has been considered.
2. **Classify** each risk as Tiger, Paper Tiger or Elephant, and each Tiger by urgency, with likelihood and impact. Done when every risk has a type, and every Tiger an urgency.
3. **Plan.** For every launch-blocking Tiger: the risk, a specific, assignable mitigation (never "be careful"), an owner (function or person) and a decision or completion date. Fast-follow Tigers get a planned response and owner; Track Tigers get a trigger condition. Done when every launch-blocking Tiger has all four.
4. **Go / no-go.** If too many Tigers block launch, recommend delaying or phasing it. Done when the report states a recommendation.

Be honest and constructive: the goal is launch readiness, not blame. Revisit 2-3 weeks before launch to check that mitigations are on track.

## Output

```
## Pre-Mortem: [Feature / launch]
Date: [today] | Status: [Draft / Reviewed]

### Risk summary
Tigers: [n] ([launch-blocking], [fast-follow], [track]) | Paper Tigers: [n] | Elephants: [n]

### Launch-blocking Tigers
| # | Risk | Likelihood | Impact | Mitigation | Owner | Due |
### Fast-follow Tigers
| # | Risk | Likelihood | Impact | Planned response | Owner |
### Track Tigers: [risk, trigger condition]
### Paper Tigers: [concern, why manageable, what would make it real]
### Elephants in the room: [risk, how to investigate, conversation starter]

### Go / no-go checklist
- [ ] All launch-blocking Tigers mitigated
- [ ] Fast-follow plan documented and assigned
- [ ] Monitoring in place for Track Tigers
- [ ] Rollback plan defined
- [ ] Support team briefed
Recommendation: [go / phase / delay]
```

Save as `PreMortem-[product]-[date].md`. Next steps worth offering: update the PRD with the mitigations (`write-spec`), `test-scenarios` for the riskiest areas, or a launch checklist. To attack the plan's core assumptions rather than its launch risks, use `strategy-red-team`.
