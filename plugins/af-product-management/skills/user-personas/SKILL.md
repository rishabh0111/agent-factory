---
name: user-personas
description: Use when building product personas from interviews, surveys or other user research, or refreshing personas that no longer drive product decisions.
argument-hint: "<product and the research data>"
---

# User Personas

Evidence-based personas, built from research data, that change product decisions. Behavior predicts product needs better than demographics, so personas are clusters of behavior, goals and context. To size and prioritize user groups for strategy, use the `user-segmentation` skill; personas can sit on top of its segments.

Read `company.md` first for the product and customers; ask only for what is missing. Read the CSV, spreadsheet, survey, transcript or other research the user provides. With no data, write the personas as labelled hypotheses and say how to validate each.

## Steps

1. **Review** all research data. Done when every source is listed with its participant count.
2. **Find behavioral patterns**: recurring goals, pains, contexts and behaviors across participants.
3. **Distinguishing variables**: name the dimensions that separate one cluster from another (company size, technical skill, usage frequency, primary use case). Done when each persona differs from the others on at least one named variable.
4. **Build 3 personas** by default; go up to 5 only when the data shows more distinct clusters. More than 5 stops being actionable.
5. **Validate**: cross-check every claim against the data, size each persona from quantitative data when possible, and flag data gaps. Done when every pain, gain and insight cites a source or is marked as a hypothesis.

## Persona template

```
[Persona name]: "[quote that captures them]"

Who they are: role, company type and size, experience level; how they found and started using the product
Prevalence: [% of user base, if the data allows]

Primary job to be done: When [situation], I want to [motivation], so I can [outcome]
  Context and frequency of the job; how they measure success

How they use the product: frequency and depth, key workflows and features, tools used alongside

Top 3 pains: each with its impact and severity; workarounds they have built
Top 3 gains: benefits and outcomes they seek; what would make them switch or churn

One unexpected insight: a counterintuitive behavior or motivation from the data, and why it matters for product decisions

Product fit: how the product addresses (or could address) their needs; friction points and unmet needs

Representative quotes: 2-3 verbatim
```

## Quality bar

- Grounded in research, with direct quotes; demographics only as supporting detail.
- Distinct and non-overlapping.
- Each persona names at least one product decision it should influence.
- Dated, with a note to refresh as the product and market change.
