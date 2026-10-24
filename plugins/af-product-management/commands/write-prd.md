---
description: Write a lean product requirements document from a feature idea or problem statement, with a detailed spec on request
argument-hint: "<feature or problem statement>"
---

# /write-prd

Write a lean PRD that aligns stakeholders and guides development, from anything between a vague idea and a detailed brief.

```
/write-prd $ARGUMENTS
```

Examples: `/write-prd SSO support for enterprise customers`, `/write-prd Users are dropping off during onboarding, we need to fix step 3`, or an uploaded brief, research doc or strategy deck.

## Workflow

1. **Write.** Run `/af-product-management:write-spec`: lean by default, the detailed spec only when the user asks. When the input lacks the user problem, target users or success metrics, it asks at most three questions in one message; if the user says "just write it", it marks the gaps as assumptions. Done when the skill's completion criteria are met and the PRD is saved.
2. **Review and iterate.** Say in one line what was left out on purpose, then offer: the detailed version or one expanded section; tighter scope (challenge what really needs to be in the first version); `/af-product-management:pre-mortem` or `/af-product-management:red-team-prd` on the PRD; `/af-product-management:write-stories` for engineering; a stakeholder update to socialize it (`/af-product-management:stakeholder-update`).
