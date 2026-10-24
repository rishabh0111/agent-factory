---
name: opportunity-solution-tree
description: Use when structuring product discovery around one outcome, mapping a metric to the customer opportunities, solutions and experiments beneath it, or deciding which problem to work on next with an opportunity solution tree (OST).
argument-hint: "<desired outcome or product area>"
---

# Opportunity Solution Tree

The opportunity solution tree (Teresa Torres, *Continuous Discovery Habits*) connects one desired **outcome** to customer **opportunities**, possible **solutions**, and **experiments** that test them. It keeps a team from jumping to solutions before the opportunity space is mapped.

Read `company.md` first for the product, customers and current goals; ask only for what is missing.

## The four levels

1. **Desired outcome** (root): one measurable product or business outcome, from the OKRs or strategy, e.g. "increase 7-day retention to 40%".
2. **Opportunities**: customer needs, pains or desires found in research. Problems worth solving, never features. Phrase them in the customer's voice: "I struggle to...", "I wish I could...". Every opportunity traces back to evidence.
3. **Solutions**: possible ways to address an opportunity. The product trio (PM, designer, engineer) ideates together; the best ideas often come from engineers.
4. **Experiments**: fast, cheap tests that show whether a solution addresses the opportunity, aimed at its value, usability, viability or feasibility risk. Prefer skin-in-the-game evidence (Alberto Savoia) over opinions.

## Rules

- **One outcome per tree.**
- **Opportunities, not features.** Customers describe problems; the team designs solutions.
- **Compare and contrast.** At least 3 solutions per prioritized opportunity before choosing one.
- **Discovery loops.** A failed experiment sends you back up the tree: kill the solution, explore a sibling branch.
- **Living artifact.** Update the tree weekly as interviews, analytics and experiments land.

## Steps

Inputs: a desired outcome, customer research (interviews, surveys, analytics, feedback), and optionally existing opportunities or ideas to organize.

1. **Outcome.** Confirm or help articulate a single measurable outcome. Done when the root names a metric and a target.
2. **Opportunities.** From the research, identify 3-7 opportunities, grouping related ones under parent opportunities. Done when each is customer-voiced and cites its evidence.
3. **Prioritize.** Rank opportunities by Opportunity Score, **Importance × (1 − Satisfaction)** with both normalized to 0-1 (Dan Olsen, *The Lean Product Playbook*), or by a stated qualitative judgement when scores are unavailable. Done when the top 2-3 are chosen with a reason.
4. **Solutions.** For each chosen opportunity, generate 3+ solutions from the PM, designer and engineer perspectives. Done when every chosen opportunity has at least 3.
5. **Experiments.** For the most promising solutions, design 1-2 experiments each: hypothesis, method, metric, success threshold. The `design-experiments` skill holds the method catalogue. Done when every experiment has all four fields.
6. **Draw the tree** as an indented hierarchy:

```
Outcome: [metric → target]
├── Opportunity A: "I struggle to..."  (score 0.62, evidence: 7/12 interviews)
│   ├── Solution A1
│   │   └── Experiment: [hypothesis | method | metric | threshold]
│   ├── Solution A2
│   └── Solution A3
└── Opportunity B: ...
```

Save as markdown when substantial. Done when every leaf experiment links up to the outcome through a solution and an opportunity.
