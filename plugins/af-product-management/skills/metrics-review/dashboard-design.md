# Designing a metrics framework and dashboard

The branch of `metrics-review` for defining what to measure: a North Star, its input metrics, guardrails and alerts, written up as a dashboard spec. Building the dashboard file itself (HTML, charts, filters) is the data department's `build-dashboard` skill; setting up event tracking for marketing is the marketing department's `analytics` skill.

## Steps

1. **Understand what to measure.** The product or feature area; its stage (pre-launch, recently launched, mature); current goals or OKRs; existing metrics and what is missing or broken; the analytics tools in use. Read any existing dashboards, analytics data, OKRs or strategy docs. Done when the goal the dashboard serves is one sentence: what decision does it support?
2. **Audit existing metrics** against the four good-metric criteria in the main skill. Mark vanity metrics, and classify each as leading or lagging. Done when every existing metric is kept, rewritten or dropped with a reason.
3. **Define the framework.** The L1 lifecycle metrics in the main skill are the pool these layers draw from:
   - **North Star**: the single customer-centric metric that best captures value delivered and leads business success. Check it measures value delivery, leads, and is actionable. Push past vanity engagement: most teams pick a vanity metric here.
   - **Input metrics (3-5)**: the levers that drive the North Star, each directly actionable by a team. Together they should explain the North Star without overlap or gaps (MECE). Map the causal chain: input → North Star → business outcome.
   - **Health metrics (3-5)**: guardrails that should stay stable (error rate, latency, support ticket volume, NPS, churn), each with a healthy range.
   - **Business metrics**: revenue, cost and unit economics (MRR, CAC, LTV, churn).
   - **Counter-metrics (1-2)**: signals that you are optimizing the wrong way. If the North Star is daily active users, watch session quality. They guard against Goodhart's law: when a metric becomes a target, it stops being a good measure.

   Done when each metric has a precise definition (numerator, denominator, time window), a data source and an owner.
4. **Thresholds and alerts.** For each metric, set green (healthy), yellow (investigate) and red (act now: page or escalate) bands and a check frequency. For each alert, name who is notified, through which channel, and the expected response time. Done when every alert is actionable and owned.
5. **Layout and cadence.** Lay the dashboard out by the principles below and set the review cadence. Pre-launch, define the metrics now and note that baselines need calibrating after launch. Recommend fewer metrics, well instrumented.
6. **Tools.** Suggest tools that fit the user's stack: product analytics (Amplitude, Mixpanel, PostHog), SQL dashboards (Looker, Metabase, Mode), operational health (Datadog, Grafana). Done when the spec below is complete and saved as markdown.

## Dashboard principles

1. **Start with the question, not the data.** Design backwards from the decision the dashboard supports.
2. **Hierarchy.** The North Star is the most prominent; input and L1 metrics next; L2 on drill-down.
3. **Context over numbers.** Every value shows a comparison (previous period, target, benchmark) and a trend direction.
4. **Fewer metrics, more insight.** 5-10 that matter; everything else goes in a detailed report. If it does not fit on one screen, cut metrics.
5. **Consistent time periods** across the dashboard.
6. **Status colors**: green on track, yellow needs attention, red off track.
7. **Actionability.** Every metric is one the team can influence.

**Layout**, top to bottom: North Star with trend line and target; input and L1 scorecard (value, change, target, status); key funnels with drop-off per stage; active experiments and recent launches; L2 metrics, segment breakdowns and time series on drill-down.

```
┌─────────────────────────────────────────────┐
│  NORTH STAR: [metric] — [current value]     │
│  Trend: [↑/↓ X% vs last period]             │
├──────────────────┬──────────────────────────┤
│  Input metric 1  │  Input metric 2          │
│  [sparkline]     │  [sparkline]             │
├──────────────────┼──────────────────────────┤
│  Input metric 3  │  Input metric 4          │
├──────────────────┴──────────────────────────┤
│  HEALTH: [latency] [error rate] [NPS]       │
├─────────────────────────────────────────────┤
│  BUSINESS: [MRR] [CAC] [LTV] [churn]        │
└─────────────────────────────────────────────┘
```

**Anti-patterns**: vanity metrics that only go up (total signups ever); dashboards that need scrolling; raw numbers with no comparison; stale dashboards nobody reviews; output dashboards (tickets closed, PRs merged) instead of outcomes; one dashboard for every audience, when executives, PMs and engineers need different views.

**Alerting.** Threshold alerts (error rate > 1%), trend alerts (sustained decline over days or weeks), anomaly alerts (deviation from the expected range). Every alert is actionable, has an owner and a severity, and is tuned regularly: too many false positives and people ignore all of them.

**Cadence.** Take the weekly check, monthly review and quarterly business review from the main skill's *Metric Review Cadences*, and add a daily glance at operational health (errors, latency, critical flows) and the North Star. The monthly review asks whether each input is driving the North Star as expected; the quarterly review recalibrates the framework itself.

## Dashboard spec

```
## Metrics Dashboard: [Product / feature]

North Star: [name] | Definition: [formula] | Current: [value] | Target: [goal]

### Input metrics
| Metric | Definition | Data source | Owner | Visualization | Target | Current |
|---|---|---|---|---|---|---|

### Health metrics
| Metric | Healthy range | Yellow | Red | Check frequency |
|---|---|---|---|---|

### Business metrics
| Metric | Definition | Target |
|---|---|---|

### Counter-metrics
| Metric | Why it matters | Watch for |
|---|---|---|

### Metrics tree
North Star: [metric]
├── Input: [metric 1] → driven by [team / action]
├── Input: [metric 2] → driven by [team / action]
└── Counter: [metric] → watch for [degradation signal]

### Alerts
| Alert | Condition | Owner | Channel | Response time |
|---|---|---|---|---|

### Implementation notes
Data sources, refresh frequency (real-time / hourly / daily), tool recommendations

### Review cadence
```

Then offer SQL to compute the metrics (the data department's `write-query` skill), OKRs built on the framework, a cohort analysis to set realistic baselines, or a recurring review template.
