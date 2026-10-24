---
name: prioritization-frameworks
description: Use when choosing, comparing or explaining a prioritization method, such as RICE vs ICE, Opportunity Score, Kano, MoSCoW, value vs effort or a weighted decision matrix, or when another skill needs a framework's formula.
---

# Prioritization Frameworks

Reference for picking and applying a prioritization framework. To rank an actual backlog or batch of requests, use the `prioritize-features` skill, which draws on these formulas.

**Core principle**: customers describe problems; the team designs solutions. Prioritize **problems (opportunities)**, not features.

## Which framework

| Framework | Best for | Key insight |
|---|---|---|
| Eisenhower Matrix | A PM's own tasks | Urgent vs important |
| Value vs Effort (Impact vs Effort) | Quick triage of tasks or initiatives | Simple 2×2; not rigorous enough for strategic decisions |
| Risk vs Reward | Initiatives | Like value vs effort, but accounts for uncertainty |
| **Opportunity Score** | Customer problems | **Recommended for problems.** Importance × (1 − Satisfaction) |
| Kano Model | Understanding expectations | Must-be, Performance, Attractive, Indifferent, Reverse. For understanding, not ranking |
| Weighted Decision Matrix | Multi-factor decisions | Weight the criteria, score each option; good for stakeholder buy-in |
| **ICE** | Ideas and initiatives | **Recommended for quick ranking.** Impact × Confidence × Ease |
| **RICE** | Ideas at scale, larger teams | (Reach × Impact × Confidence) / Effort: splits Reach out of ICE's Impact |
| MoSCoW | Scoping requirements, a release or a quarter | Must / Should / Could / Won't; project-management origin, good for forcing scope conversations |

## Opportunity Score

Dan Olsen, *The Lean Product Playbook*. Survey customers on **Importance** and **Satisfaction** for each need, normalized to 0-1.

- **Current value** = Importance × Satisfaction
- **Opportunity Score** = Importance × (1 − Satisfaction)
- **Customer value created** = Importance × (S2 − S1), where S1 is satisfaction before and S2 after

High importance with low satisfaction gives the highest score and the best opportunities. Plot Importance against Satisfaction: the high-importance, low-satisfaction corner is the sweet spot.

## ICE

Considers value, risk and economics.

- **Impact**: with survey data, Opportunity Score × number of customers affected; without it, a 1-10 estimate of how much the target metric moves.
- **Confidence**: 1-10, how sure we are; accounts for risk.
- **Ease**: 1-10, how easy to implement (the inverse of effort); accounts for economics.

**Score** = Impact × Confidence × Ease. Good for early-stage products or when there isn't enough data for RICE.

## RICE

- **Reach**: customers affected in a period, as a concrete number ("500 users per quarter").
- **Impact**: value per customer: the Opportunity Score with survey data, otherwise 3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal.
- **Confidence**: 100% backed by data, 80% some evidence, 50% gut feel.
- **Effort**: person-months across engineering, design and other functions.

**Score** = (Reach × Impact × Confidence) / Effort. Quantitative and defensible for a large backlog; weaker for strategic bets whose impact is hard to estimate.

## MoSCoW

- **Must have**: a failure without these; non-negotiable.
- **Should have**: important and expected, but delivery works without them.
- **Could have**: desirable, clearly lower priority; only if capacity allows.
- **Won't have (this time)**: explicitly out of scope; list them for clarity.

## Value vs Effort

- **High value, low effort** (quick wins): do first.
- **High value, high effort** (big bets): worth it, but scope carefully.
- **Low value, low effort** (fill-ins): when there's spare capacity.
- **Low value, high effort** (money pits): remove from the backlog.

Good for building shared understanding of trade-offs in a team session.

## Applying one

State the framework and why it fits, show the inputs for every item (not just the scores), and flag low-confidence estimates. Scores inform the decision; strategy and judgment make it.
