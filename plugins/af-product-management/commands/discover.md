---
description: Run a full product discovery cycle, from ideation through assumption mapping to an experiment plan
argument-hint: "<product or feature idea>"
---

# /discover

Move from divergent ideas to a focused validation plan in one sitting, with checkpoints where the user steers. Tell the user upfront it takes 15-30 minutes, and that at each checkpoint they can redirect, skip or go deeper.

```
/discover $ARGUMENTS
```

Examples: `/discover Smart notification system for our project management tool`, `/discover New product: AI writing assistant for non-native speakers`.

## Workflow

1. **Context.** Take what `company.md`, uploaded research, PRDs, transcripts, data and `$ARGUMENTS` already say, then ask for the rest: what is being explored (idea, feature area, opportunity space), what is already known (research, feedback, data), and what decision the discovery informs (build or kill, prioritize, pivot). Decide whether this is an **existing** product (continuous discovery, check for usage data that informs assumptions) or a **new** product (initial discovery, validate desirability before feasibility). If the user has research data, pull its insights before ideating. Done when the discovery question is one sentence and the stage is set.
2. **Ideas (diverge).** Run the trio ideation branch of `/af-product-management:product-brainstorming` for the stage, presenting the top 10 ideas with a brief rationale. **Checkpoint**: "Here are 10 ideas. Which should we stress-test? Pick 3-5, or I can carry all forward."
3. **Assumptions.** For each selected idea, run `/af-product-management:identify-assumptions` for the stage, then compile one master list across all ideas.
4. **Prioritize.** Run `/af-product-management:prioritize-assumptions` on the master list: the Impact × Risk matrix, the leap-of-faith assumptions, and groups that one experiment can test together. **Checkpoint**: "Here are your riskiest assumptions. Which feel most critical to validate first?"
5. **Experiments.** For the top assumptions, run `/af-product-management:design-experiments` for the stage: 1-2 experiments per assumption, with success criteria, effort and timeline, sequenced by dependency and effort.
6. **Discovery plan.** Compile and save as markdown. Done when every experiment maps to an assumption and every assumption to a selected idea.

```
## Discovery Plan: [Topic]
Date: [today] | Product stage: [existing / new]
Discovery question: [what we are trying to learn]

### Ideas explored
### Selected ideas for validation: [3-5, with rationale]

### Critical assumptions
| # | Assumption | Category | Impact | Uncertainty | Priority |
|---|---|---|---|---|---|

### Validation experiments
| # | Tests assumption | Method | Success criteria | Effort | Timeline |
|---|---|---|---|---|---|

### Experiment details: [hypothesis, setup, measurement, decision criteria]

### Timeline
Week 1: [experiments] | Week 2: [experiments] | Week 3: [analysis and decision]

### Decision framework
- If [experiment] succeeds → [next step]
- If [experiment] fails → [pivot / kill / investigate further]
```

7. **Next steps.** The plan is a living document: offer to update it as experiments report. Then offer a spec for the top idea (`/af-product-management:write-spec`), an interview script to run alongside the experiments (`/af-product-management:interview-script`), metrics to track the experiments (`/af-product-management:setup-metrics`), or user stories for the MVP (`/af-product-management:user-stories`).
