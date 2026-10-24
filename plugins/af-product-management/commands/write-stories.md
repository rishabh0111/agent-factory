---
description: Break a feature or PRD into backlog items as user stories, job stories or Why-What-Acceptance items, with acceptance criteria
argument-hint: "[user|job|wwa] <feature description or PRD>"
---

# /write-stories

Break a feature into well-structured backlog items in the team's format, each with acceptance criteria.

```
/write-stories $ARGUMENTS
```

Examples: `/write-stories user Allow users to export reports as PDF and CSV`, `/write-stories job Notification system for task deadlines`, `/write-stories wwa Dark mode for the mobile app`, or an uploaded PRD or feature spec.

## Workflow

1. **Accept the feature** in any form: PRD, feature description, research finding or verbal idea. With no feature given, ask for one.
2. **Format.** Use `user`, `job` or `wwa` from the invocation; otherwise ask which the team uses, recommending user stories when unsure.
3. **Decompose.** Run `/af-product-management:user-stories` to its completion criteria: 5-15 INVEST items, ordered, with testable acceptance criteria, and spikes and design needs flagged.
4. **Deliver** the backlog saved as markdown.
5. **Next steps.** Offer test scenarios for these stories (`/af-product-management:test-scenarios`), dummy data for development (`/af-product-management:generate-data`), fitting them into a sprint (`/af-product-management:sprint plan`), or conversion to another format.
