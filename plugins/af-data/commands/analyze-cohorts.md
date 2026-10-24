---
description: Run a cohort analysis on user data, from retention curves and feature adoption to engagement trends
argument-hint: "<data file or description of what to analyze>"
---

# /analyze-cohorts

Analyze retention and engagement by cohort from uploaded data, a connected warehouse, or a description of the analysis you need.

## Usage

```
/analyze-cohorts $ARGUMENTS
```

Examples:

```
/analyze-cohorts [upload a CSV of user activity]
/analyze-cohorts Monthly retention for Jan–Jun signups, grouped by acquisition channel
/analyze-cohorts Set up a cohort analysis for our onboarding redesign
```

## Workflow

1. **Ask for the cohort definition** the `cohort-analysis` skill needs: cohort key, retention event, granularity and time range. Ask in one message and wait for the answers.
2. **Run the `cohort-analysis` skill** on the data, or on the warehouse through the `sql-queries` skill when no file was given. Stop when its report and files are saved.
3. **Offer next steps:**
   - Segment the cohorts by another dimension
   - Set retention thresholds to alert on
   - Design an experiment to lift the weakest cohort with `af-marketing:ab-testing`, then read its result with `/af-data:analyze-test`
