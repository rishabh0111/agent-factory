---
description: Turn user research data into personas, behavioral segments and a customer journey map, in one research report
argument-hint: "<research data, survey results, or product description>"
---

# /research-users

Turn raw research into personas, behavioral segments and a journey map. Accepts survey data, interview notes, feedback, analytics, or just a product description for exploratory research.

```
/research-users $ARGUMENTS
```

Examples: `/research-users` with uploaded survey results or interview notes, `/research-users B2B project management tool for agencies: help me understand our users`, or pasted support tickets.

## Workflow

1. **Inputs.** Accept any mix of surveys, interview notes or transcripts, support tickets or feature requests, analytics, NPS data, or a product description. Take what `company.md` already says, then ask what research exists and in what format, what the user wants to understand (who the users are, how they differ, where the friction is), and what decisions it will inform (roadmap, positioning, pricing, onboarding). With thin data, say so: 5 interviews give hypotheses, not conclusions. With no data, produce research-informed hypotheses and how to validate them. Done when the sources and the question are stated.
2. **Personas.** Run `/af-product-management:user-personas`: 3-4 personas, each with prevalence where the data allows, an unexpected insight, and the product decision it should influence.
3. **Segments.** Run `/af-product-management:user-segmentation` for behavioral segments of current users, with size, job, product fit, willingness to pay and engagement; name the highest-value and the highest-growth segment and map segments to personas. When the question reaches beyond current users to new markets, add `/af-product-management:market-segments`.
4. **Journey.** Run `/af-product-management:customer-journey-map` for the main persona: touchpoints, emotions, pain points and aha moments per stage, the biggest drop-off points, and moments of delight worth amplifying.
5. **Report**, saved as markdown. Done when every recommendation ties to a finding and the open questions name follow-up research.

```
## User Research Report: [Product]
Date: [today] | Data sources: [what was analyzed] | Sample size: [n]

### Executive summary: [3-5 sentences]
### Personas: [per persona: who, primary job, key pains, key gains, behavior, prevalence]
### User segments
| Segment | Size | Primary job | Product fit | Value | Growth |
|---|---|---|---|---|---|
### Customer journey map
| Stage | Touchpoints | Emotion | Pain points | Opportunities |
|---|---|---|---|---|
### Key insights
### Recommendations
### Open questions
```

6. **Next steps.** Offer interview scripts to go deeper on one persona (`/af-product-management:interview prep`), sentiment across these segments (`/af-product-management:analyze-feedback`), a value proposition for the top persona (`/af-product-management:value-proposition`), or the journey's pain points prioritized as feature opportunities (`/af-product-management:prioritize-features`).
