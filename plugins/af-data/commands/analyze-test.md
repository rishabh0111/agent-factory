---
description: Analyze A/B test results, from significance and sample size checks to a ship, extend or stop call
argument-hint: "<test results as data, screenshot, or description>"
---

# /analyze-test

Read an experiment's results and get a decision you can act on.

## Usage

```
/analyze-test $ARGUMENTS
```

Examples:

```
/analyze-test Control: 4.2% conversion (n=5000), Variant: 4.8% conversion (n=5100)
/analyze-test [upload a CSV of test results]
/analyze-test [screenshot from your experimentation platform]
```

## Workflow

1. **Collect what's missing.** The `ab-test-analysis` skill needs the primary metric, the guardrails, and the planned sample size or stopping rule. When the input doesn't give them, ask in one message and wait for the answer.
2. **Run the `ab-test-analysis` skill.** Stop when its report is saved.
3. **Offer next steps:**
   - Design a follow-up experiment with `af-marketing:ab-testing`
   - Run the analysis for specific segments
   - Write the SQL to monitor the metric after launch, with `/af-data:write-query`
