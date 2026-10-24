---
description: Analyze, theme and prioritize a batch of feature requests from customers or stakeholders into a tiered backlog
argument-hint: "<feature requests as text or file>"
---

# /triage-requests

Turn a pile of feature requests from support tickets, sales calls, surveys or chat into a prioritized, actionable backlog.

```
/triage-requests $ARGUMENTS
```

Examples: `/triage-requests` with a pasted list, or with an uploaded CSV or spreadsheet. With no input, ask the user to paste or upload their requests.

## Workflow

1. **Accept the requests** in any format. When the input has columns (requester, request, date), preserve them.
2. **Context.** Take what `company.md` already says, then ask conversationally, not all at once, for the rest: the product and its stage, current goals or OKRs, constraints (team size, technical debt, deadlines), and segments whose requests carry more weight (enterprise, churning users, power users). Done when the goal the ranking serves is one sentence.
3. **Triage.** Run `/af-product-management:prioritize-features` in its raw-requests branch: themes with request counts, segment and sentiment signals, conflicts, scoring on impact, alignment, effort, risk and revenue signal, then the four tiers.
4. **Deliver** the triage report saved as markdown, plus the enriched data as CSV when the input was structured. Done when every request maps to a theme or the one-off list and every theme has a tier.
5. **Next steps.** Offer user stories for the top items (`/af-product-management:user-stories`), solution brainstorming for a theme (`/af-product-management:brainstorm ideas existing`), experiments to validate demand before building (`/af-product-management:brainstorm experiments existing`), or a stakeholder update on the analysis (`/af-product-management:stakeholder-update`).
