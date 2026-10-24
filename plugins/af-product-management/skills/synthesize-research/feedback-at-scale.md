# Feedback at scale: sentiment by segment

The branch of `synthesize-research` for large volumes of short feedback: app store or review-site reviews, NPS or CSAT verbatims, survey free text, support ticket exports, social listening. It adds sentiment scoring and segment profiles on top of the main thematic analysis.

## Steps

1. **Ingest.** Read every source and inventory it: type (NPS, reviews, tickets, survey), count, date range, and metadata columns (segment, plan, rating, geography). Ask which segments to analyze separately and what the user is looking for (general themes, a specific issue, trends over time). Done when the inventory is listed.
2. **Score sentiment.** Classify each item positive, neutral or negative, and give each segment an overall score from -1 to +1. Flag sarcasm, mixed sentiment and non-English text as low-confidence. For NPS data, analyze Detractors (0-6), Passives (7-8) and Promoters (9-10) separately. Done when every item has a label.
3. **Themes.** Code and cluster items into themes (the main skill's thematic analysis), count mentions per theme, and look for the need behind each request rather than the surface topic. Separate feature requests from fundamental pain points.
4. **Segments.** Identify at least 3 segments from metadata or from the feedback itself. Flag segments with small samples as low confidence.
5. **Trends.** When dates exist, show sentiment shifts over time as chart-ready data.
6. **Prioritize** insights by frequency, severity and business impact. Done when every recommendation cites the theme and segment it comes from.

## Per segment

- **Profile**: name, common characteristics, share of the feedback, primary use case.
- **Job to be done** and desired outcomes.
- **Sentiment**: score (-1 to +1), satisfaction drivers and detractors, NPS proxy where applicable.
- **Top positive themes**: what they love, with examples.
- **Top pain points**: frequent complaints, unmet needs, friction points, direct quotes.
- **Product-segment fit**: how well the product serves them, what would improve fit, churn risk.
- **Recommendations**: the 2-3 highest-impact improvements, split into quick wins and strategic initiatives; whether to prioritize or de-prioritize the segment.

## Report

```
## Feedback Analysis: [Product]
Date: [today] | Items: [n] | Source: [type] | Period: [range]

### Overall sentiment
Positive [x%] | Neutral [y%] | Negative [z%] | Average score [-1..+1] | Trend [improving / stable / declining]

### Top themes
| # | Theme | Mentions | Sentiment | Segments most affected |
|---|---|---|---|---|

### Theme deep-dive (top 5-8)
What users say (with quotes) | Root cause | Impact on retention, satisfaction or revenue | Recommendation

### Segments
| Segment | Volume | Avg sentiment | Top theme | Key difference |
|---|---|---|---|---|
[Per-segment profiles]

### Notable quotes
### Trends over time
### Actionable insights
### Gaps: what this feedback cannot tell you, and the follow-up research to run
```

Save as markdown. When the input was structured (CSV), also save the items enriched with sentiment labels and themes as CSV. Then offer personas from these patterns (`user-personas`), feature request triage of the top themes (`prioritize-features`), or an interview script to go deeper on one theme (`interview-script`).
