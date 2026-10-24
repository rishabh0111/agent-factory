---
description: Design a product metrics framework and dashboard spec, with a North Star, input, health and counter-metrics, and alert thresholds
argument-hint: "<product or feature area>"
---

# /setup-metrics

Choose what to measure for a product or feature, from the North Star down to the alerts that catch problems early.

```
/setup-metrics $ARGUMENTS
```

Examples: `/setup-metrics SaaS project management tool`, `/setup-metrics The new checkout flow we just launched`.

## Workflow

1. **Context.** Take what `company.md` and `$ARGUMENTS` already say, then ask in one message for the rest: the product or feature area, its stage (pre-launch, recently launched, mature), current goals or OKRs, existing metrics and what is missing or broken, and the analytics tools in use. Done when the decision the dashboard supports is one sentence.
2. **Design.** Run `/af-product-management:metrics-review` in its define branch: audit existing metrics, then define the North Star, 3-5 input metrics, health metrics, business metrics and 1-2 counter-metrics, each with a precise formula, source and owner.
3. **Thresholds.** For every metric, green, yellow (investigate) and red (act now) bands and a check frequency; for every alert, an owner, a channel and a response time.
4. **Deliver** the dashboard spec, with its metrics tree, implementation notes and review cadence, saved as markdown. Done when every metric on the spec has a definition, a source and a threshold.
5. **Next steps.** Offer SQL to compute the metrics (`/af-data:write-query`), OKRs built on the framework (`/af-product-management:team-okrs`), a cohort analysis to set realistic baselines (`/af-data:analyze`), or a recurring review using `/af-product-management:metrics-review`.
