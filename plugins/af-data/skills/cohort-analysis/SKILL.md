---
name: cohort-analysis
description: Use when analyzing retention or engagement by cohort, such as retention curves by signup month, feature adoption across cohorts, why recent cohorts churn faster, or setting up a cohort analysis before data exists.
---

# Cohort Analysis

Group users by a shared starting point and track what each group does over time, so changes in retention, adoption or engagement show up as differences between cohorts instead of hiding in an average.

Read `company.md` first for the product, its core action and recent launches. Ask only for what's missing.

## Step 1: Define the cohort

Settle four choices before touching data:

- **Cohort key:** what groups users (signup week or month, acquisition channel, plan tier, first feature used, exposure to a launch)
- **Retention event:** the action that counts as "retained". Push for a meaningful action (completed a project, made a purchase) over "logged in", because the analysis is only as good as this definition.
- **Granularity:** daily, weekly or monthly periods
- **Time range:** at least 3–4 cohorts, each with several periods of history

**Done when:** all four are written down and the user has confirmed the retention event.

## Step 2: Get the data

Two paths:

- **Data provided** (CSV, Excel, JSON, query results): check the structure (user id, cohort date, activity date, event type), cohort sizes, date ranges, missing values and duplicates. Summarize what's there before analyzing.
- **No data yet:** write the extraction SQL with the `sql-queries` skill (its cohort retention pattern is the starting point), and describe the table the analysis needs so the user can run it and come back.

**Done when:** a validated dataset is in hand, or the SQL and expected table shape are delivered.

## Step 3: Analyze

Process the data in Python (pandas, numpy) and save the script so the user can re-run it on new data.

- Build the cohort table: cohort size and retention rate per cohort per period
- Plot retention curves (one line per cohort) and a heatmap (cohorts × periods), using the `data-visualization` skill
- Compare feature adoption rates across cohorts when adoption is in scope
- Compute period-over-period changes and flag anomalies

Look for these patterns:

- **Early churn** concentrated in specific cohorts
- **Curve shape:** does retention flatten (a retained core exists) or keep falling toward zero?
- **Late-stage engagement shifts** and feature adoption clusters
- **Trend across cohorts:** are newer cohorts improving, declining or stable?

Before calling a difference a trend, rule out two look-alikes:

- **Founding-user bias:** the earliest cohorts often retain better because they self-selected; note it when comparing them with later ones.
- **Seasonality:** cohort differences can be calendar-driven (holidays, fiscal year-end); flag when a gap lines up with the calendar.

**Done when:** the cohort table is built and two or three findings are stated, each with its supporting numbers and with founding-user bias and seasonality ruled in or out.

## Step 4: Report

```
## Cohort Analysis: [Description]

**Cohort definition**: [e.g., signup month]
**Retention event**: [e.g., completed a project]
**Granularity**: [weekly/monthly] | **Range**: [dates]

### Retention table
| Cohort | Size | Period 1 | Period 2 | Period 3 | ... |
|---|---|---|---|---|---|

### Key findings
1. **[Finding]**: [supporting data]

### Cohort comparison
- **Best cohort**: [which, and why]
- **Worst cohort**: [which, and why]
- **Trend**: [improving / declining / stable]

### Benchmarks
| Period | Our rate | Benchmark | Gap |
|---|---|---|---|
(Cite the benchmark source, or mark the column "not available".)

### Recommendations
1. [What to change or investigate]

### Follow-up research
- Qualitative: interviews with users from churning cohorts, surveys of engaged cohorts, session replays of key flows, win/loss comparison of high and low retention cohorts
- Quantitative: deeper segment cuts, follow-up SQL, experiments to lift the weakest cohort (designed with `af-marketing:ab-testing`)
```

Save the report as markdown, plus the cohort table as CSV and the script when data was provided.

**Done when:** the report has every section filled or marked not applicable, and the files are saved.
