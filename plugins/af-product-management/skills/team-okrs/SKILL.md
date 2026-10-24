---
name: team-okrs
description: Use when drafting or reviewing a team's OKRs for a quarter or other period, aligning team goals with company objectives, or explaining how OKRs relate to KPIs and a North Star Metric.
argument-hint: "<team or product area, period, company objective>"
---

# Team OKRs

Draft three alternative OKR sets for a team, each laddering visibly to company objectives, to spark the strategic discussion rather than settle it.

Read `company.md` first for the company's strategy, objectives and metrics; ask only for what is missing: the team or product area, the period (quarterly is standard), the company-level objectives, last period's hits, misses and learnings, and known constraints or priorities. Read any company OKRs or strategy documents the user provides. Without company OKRs, derive team objectives from the product strategy or business goals.

## What OKRs are

**OKR** (Christina Wodtke, *Radical Focus*):
- **Objective** (why, what, when): a qualitative, inspiring, time-bound goal, typically quarterly, directional and action-oriented.
- **Key results** (how much): typically 3 quantitative metrics with expected values, each independently measurable, with an owner and a baseline.

OKRs mean one inspiring goal, a team empowered to find the best approach, and continuous monitoring, learning and improvement.

**OKRs, KPIs and the North Star Metric work together; they are not alternatives.** Key results are always quantitative metrics, some of which may be KPIs. KPIs are a few key metrics tracked over a longer period: they can serve as key results, as health metrics that balance OKRs, or you can set key results on a KPI's input metrics. The North Star Metric is a single customer-centric KPI and a leading indicator of business success; key results can express the expected change in it. Explain this relationship whenever comparing them.

## Steps

1. **Think it through.** What is the company strategy? What are the 3-5 most impactful areas this team can influence? How do they ladder to company goals? What would success look like for customers and the business? Done when each candidate area maps to a company objective.
2. **Draft three OKR sets** of equal weight, each one Objective with 3 key results (5 at most), plus a short rationale. All three should be credible, none an obvious winner. Done when every key result has a metric, baseline and target.

   Example:
   ```
   Objective: Delight new users with an effortless onboarding experience
   Key Results:
   - CSAT >= 75% on the onboarding survey
   - 66%+ of onboardings completed within two days
   - Average time-to-value <= 20 minutes
   ```
3. **Check quality.** For each OKR: is the objective inspiring (would a team rally around it)? Is every key result an outcome, not an output ("increase activation by 20%", not "ship the onboarding redesign" or "launch 5 features")? Can completion be checked with data, not judgment? Is the target ambitious, at roughly 60-70% confidence? Could a key result be gamed; if so, add a counter-metric. Does the set balance leading and lagging indicators? Done when every flagged issue has a fix.
4. **Flag assumptions** about data availability for each key result.

Keep to 3 objectives per team per period at most: more means less focus.

## Output

```
## Team OKRs: [Team] - [Period]
Aligned to: [company objective(s)]

### Option 1. Objective: [inspiring statement]
| # | Key result | Baseline | Target | Owner |
|---|---|---|---|---|
Rationale: [...]

### Option 2 ... ### Option 3 ...

### Alignment map
Company objective → team objective → key results → expected impact

### Scoring guide
0.0-0.3 significant miss, investigate and learn | 0.4-0.6 progress but short | 0.7-0.9 well-calibrated stretch, the target zone | 1.0 nailed it, or the target wasn't ambitious enough

### Check-in cadence
Weekly traffic-light update per key result | mid-period deep review, adjust if context changed | end of period: score, reflect, feed the next period

### Assumptions about data
```

Save as `OKRs-[team]-[period].md`.
