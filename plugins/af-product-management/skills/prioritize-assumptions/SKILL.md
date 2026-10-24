---
name: prioritize-assumptions
description: Use when a list of product assumptions needs ranking, deciding which assumption to test first, or placing assumptions on an impact × risk matrix.
argument-hint: "<idea or list of assumptions>"
---

# Prioritize Assumptions

Triage assumptions on an **Impact × Risk** matrix and attach an experiment to each one worth testing. Read any assumption lists or research the user provides; when there is no list yet, run the `identify-assumptions` skill first.

## Scoring

- **Impact**: the value created if the assumption holds, times the number of customers affected. With customer data, Impact = Opportunity Score × # customers, where Opportunity Score = Importance × (1 − Satisfaction), normalized to 0-1 (Dan Olsen).
- **Risk**: (1 − Confidence) × Effort to validate.

The same terms feed **ICE**, Impact × Confidence (1-10) × Ease (1-10), and **RICE**, (Reach × Impact × Confidence) / Effort, when the user wants a single ranked number. The `prioritization-frameworks` skill holds the full formulas and templates.

## Steps

1. **Score** each assumption on Impact and Risk (High / Low, or 1-10 when there is data). Done when every assumption has both scores and a one-line reason.
2. **Place on the matrix.**

   | | Low risk | High risk |
   |---|---|---|
   | **High impact** | Proceed to build: low risk, high reward | **Test first**: design an experiment |
   | **Low impact** | Defer until higher-priority assumptions are settled | Reject: not worth the investment |

   Flag the leap-of-faith assumptions (high impact, high uncertainty) and group assumptions one experiment can test together. Done when every assumption sits in one quadrant.
3. **Experiments** for every *test first* assumption: maximum validated learning for minimum effort, measuring behavior rather than opinion, with a metric and a success threshold. The `design-experiments` skill holds the method catalogue. Done when every *test first* row has a metric and threshold.

## Output

| # | Assumption | Impact | Risk | Quadrant | Experiment | Metric | Success threshold |
|---|---|---|---|---|---|---|---|

Order by test priority. Save as markdown when substantial.
