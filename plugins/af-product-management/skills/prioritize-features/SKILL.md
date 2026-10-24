---
name: prioritize-features
description: Use when triaging a batch of customer or stakeholder feature requests, ranking a feature backlog or list of product ideas, or making a scope decision between candidate features.
argument-hint: "<product goal and the requests or backlog>"
---

# Prioritize Features

Rank feature requests or backlog ideas against product goals and recommend what to pursue. Customers describe problems; the team designs solutions. So prioritize **opportunities (problems)**, not the features customers propose, and look for the need behind each request: "add dark mode" may mean "reduce eye strain in long sessions".

Read `company.md` first for the product, its stage and its goals; ask only for what is missing, including constraints (team size, technical debt, deadlines) and any segments whose requests carry extra weight (enterprise, churning users, power users). If the user provides spreadsheets, CSVs or documents, read them directly and preserve their columns.

## Pick the branch

- **Raw requests** (support tickets, sales calls, surveys, chat): cluster into themes first, then rank the themes.
- **Backlog or idea list**: rank the items directly.

## Scoring

Evaluate every theme or item on:

- **Impact**: customer value and number of users affected, and how much it moves the desired outcome. With customer data, use Opportunity Score = Importance × (1 − Satisfaction), normalized to 0-1 (Dan Olsen, *The Lean Product Playbook*): high importance with low satisfaction marks the best opportunities.
- **Effort**: development, design and coordination, as a T-shirt size (S / M / L / XL).
- **Risk**: technical and market uncertainty, the assumptions still untested, and what happens if we do nothing.
- **Strategic alignment**: fit with the product vision and current goals (High / Medium / Low / None).
- **Revenue signal**: ties to deals, retention or expansion.

For a single ranked number, ICE (Impact × Confidence × Ease) suits quick scoring and RICE adds Reach for larger teams. The `prioritization-frameworks` skill holds the full formulas, Kano and the other frameworks.

## Steps

1. **Goal.** Confirm the product objective and the success metrics that guide the ranking. Done when the goal is one measurable sentence.
2. **Themes** (raw requests only). Extract from each request the core ask, who asked and when, and frequency signals. Group similar requests into named themes and count requests per theme. Note which segments drive which themes, any frustration or churn threats, conflicting requests ("simplify the UI" vs "add more configuration"), and high-value one-offs that fit no theme. Above 50 requests, summarize themes first and offer to drill into any of them. Done when every request maps to a theme or the one-off list.
3. **Score** each theme or item on the factors above. Done when every row has every factor.
4. **Recommend.**
   - Backlog: rank the top 5, each with rationale and the trade-offs considered, then list what was deprioritized and why.
   - Raw requests: sort themes into **Act now**, **Plan next**, **Collect more signal** and **Decline or defer** (with rationale). For each top theme give the rationale, alternative solutions worth considering, its high-risk assumptions, and the cheapest way to test them.

   Done when every item or theme has a tier or rank and a reason.

## Output

```
## Feature Prioritization: [Product / area]
Date: [today] | Items analyzed: [n] | Themes: [n]

| # | Theme / feature | Requests | Impact | Effort | Risk | Alignment | Priority |
|---|---|---|---|---|---|---|---|

### Act now / Top 5
- [Theme or feature]: why, recommended action (build / prototype / investigate), assumptions to test
### Plan next
### Collect more signal
### Decline or defer: [with rationale]
### Notable one-off requests
### Patterns: [what users are telling us, segment patterns, gaps between asks and needs]
```

Save as markdown. When the input was structured data, also save the enriched table as CSV.
