---
name: north-star-metric
description: Use when choosing or fixing a North Star Metric and its input metrics, such as deciding what single metric the company should optimize, or when a current North Star (DAU, revenue) feels wrong.
metadata:
  version: 1.0.0
---

# North Star Metric

Pick one customer-centric metric that captures the value customers get from the product and leads long-term business results, plus the 3–5 input metrics teams move to drive it.

Read `company.md` first (and `.agents/product-marketing.md` if it exists) for the product, business model, vision and current metrics. Ask only for what's missing: what value the product delivers, the business model, the metrics tracked today, and why this is needed now (new product, current metric feels wrong, team alignment).

## What a North Star is

A North Star **is** one customer-centric KPI that reflects value delivered and leads business success. It **is not** several metrics, a revenue or LTV figure (those lag and say nothing about customer value), an OKR (key results can express the change you want in it), or a strategy (though choosing it is a strategic choice).

## Step 1: Classify the business game

| Game | Customers get value from | Examples |
|---|---|---|
| **Attention** | Time spent in the product | Facebook, Spotify, YouTube, TikTok |
| **Transaction** | Transactions on the platform | Amazon, Uber, Airbnb, PayPal |
| **Productivity** | Getting work done faster or better | Canva, Dropbox, Loom, Notion |

The game sets the kind of North Star that makes sense: time-based for attention, transaction counts for transaction, completed outcomes for productivity.

**Done when:** one game is named with the reason.

## Step 2: Propose and validate candidates

Propose 2–3 candidates and check each against every criterion:

1. **Understandable**: everyone in the company can explain it
2. **Customer value**: it rises only when customers get value. Activity alone ("daily active users") qualifies only if being active means getting value
3. **Habit**: it reflects lasting engagement, not one-off use
4. **Vision**: progress on it is progress toward the company's mission
5. **Measurable**: a precise definition and formula you can track
6. **Actionable**: product, marketing and operations can move it directly
7. **Leading**: it predicts future revenue and retention
8. **Hard to game**: it can't be pushed up without delivering real value

Recommend the strongest candidate, and name the common metrics you rejected (DAU, revenue, signups) with the reason for each.

**Done when:** every candidate has a pass or fail on all eight criteria, and one is recommended.

## Step 3: Define input metrics

Pick 3–5 input metrics for the chosen North Star. Each one:

- Moves faster than the North Star, so teams see results within weeks
- Drives the North Star directly
- Has one owning team

Together they should explain North Star movement without overlap or gaps. Add 1–2 **counter-metrics** that guard against gaming the North Star or its inputs (a target pursued alone stops measuring what it was meant to, which is Goodhart's law).

**Done when:** each input names its owner and how it drives the North Star, and the counter-metrics name what they protect.

## Output

```
## North Star Framework: [Product]

**Business game**: [Attention / Transaction / Productivity]

### North Star Metric
**Metric**: [precise name]
**Definition**: [formula or measurement method]
**Why this metric**: [value delivered, leads revenue, actionable]
**Current value**: [if known] | **Target**: [goal]

### Validation
| Criterion | Pass? | Notes |
|---|---|---|
(all eight criteria)

### Rejected candidates
| Metric | Why not |
|---|---|

### Input metrics
| Input metric | Drives the North Star by | Owner | Current | Target |
|---|---|---|---|---|

### Metrics tree
North Star → input metrics → team actions

### Counter-metrics
| Metric | Protects against |
|---|---|
```

Save it as markdown. Suggest revisiting the North Star yearly, or when the business model changes. Offer next steps: OKRs built on the inputs; a tracking plan with the **analytics** skill; SQL and a dashboard with `af-data:write-query` and `af-data:build-dashboard`.
