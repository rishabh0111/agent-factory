---
description: Define your North Star Metric and its input metrics, from the business game to validation and counter-metrics
argument-hint: "<product or business>"
---

# /north-star

Find the single metric that best captures the value the product delivers, plus the input metrics that drive it.

## Usage

```
/north-star $ARGUMENTS
```

Examples:

```
/north-star B2B SaaS for team collaboration
/north-star Consumer fitness app monetized through subscriptions
/north-star We track DAU but it doesn't feel right
```

## Workflow

1. **Understand the product.** Read `company.md` and `.agents/product-marketing.md`, then ask, in one message, only what they don't answer: the value the product delivers, the business model (subscription, transaction, advertising, marketplace), the metrics tracked today, and why this is needed now. Wait for the answers.
2. **Run the `north-star-metric` skill.** Stop when its framework is saved.
3. **Offer next steps:**
   - OKRs built on the input metrics
   - A tracking plan for the inputs with the **analytics** skill
   - SQL to compute the metrics with `/af-data:write-query`, and a dashboard with `af-data:build-dashboard`
