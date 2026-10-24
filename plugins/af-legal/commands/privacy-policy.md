---
description: Draft or update a product's privacy policy, with a compliance checklist and clauses needing legal review marked
argument-hint: "<product and data handling context>"
---

# /privacy-policy

Draft the privacy policy for a product or service.

```
/privacy-policy $ARGUMENTS
```

Examples: `/privacy-policy SaaS analytics tool collecting behaviour data, US and EU customers`, `/privacy-policy Mobile app with location data and third-party integrations`.

## Workflow

1. **Gather context.** Take what `company.md` and `$ARGUMENTS` already say, then ask in one message for the rest: the product, the data collected (personal, usage, cookies, location, payment), where users are, third-party sharing (analytics, advertising, integrations), where data is stored and for how long, and whether children may use it. Done when every input of the `/af-legal:privacy-policy-drafting` skill has a value or is flagged unknown.
2. **Draft.** Run `/af-legal:privacy-policy-drafting` with those answers, through its practice check.
3. **Deliver.** Hand over the skill's output: the policy, the compliance checklist, the legal-review clause table and the implementation checklist. Save it as markdown and offer a DOCX export. When a planned data practice is itself in doubt, offer `/af-legal:compliance-check` before publishing.
