---
description: Analyze product feedback at scale, with sentiment scores, themes and segment-level insights
argument-hint: "<feedback data as CSV, text, or file>"
---

# /analyze-feedback

Turn a large volume of product feedback (reviews, surveys, support tickets, NPS responses) into themes, sentiment and segment-level insights.

```
/analyze-feedback $ARGUMENTS
```

Examples: `/analyze-feedback` with an uploaded CSV of NPS responses, pasted app store reviews, or a support ticket export.

## Workflow

1. **Accept the data**: CSV or spreadsheet with feedback text and optional metadata (date, segment, rating), pasted text, or exports from feedback tools; pull from **~~user feedback** when connected. Ask what kind of feedback it is, which segments to analyze separately (tier, plan, geography), and what the user is looking for (general themes, a specific issue, trends over time). Done when the source, count and question are stated.
2. **Analyze.** Run `/af-product-management:synthesize-research` in its feedback-at-scale branch: sentiment per item and per segment, themes with mention counts and the needs behind them, segment profiles, trends when dates exist, NPS bands analyzed separately.
3. **Deliver** the feedback analysis report saved as markdown, plus the enriched CSV with sentiment labels when the input was structured. Done when edge cases (sarcasm, mixed sentiment, non-English text) and small-sample segments are flagged, and the gaps section names the follow-up research.
4. **Next steps.** Offer personas from these patterns (`/af-product-management:user-personas`), triage of the top themes as feature requests (`/af-product-management:triage-requests`), or an interview script to go deeper on one theme (`/af-product-management:interview prep`).
