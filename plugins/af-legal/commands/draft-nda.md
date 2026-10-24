---
description: Draft an NDA on our own paper between the company and a counterparty, with clauses needing legal review marked
argument-hint: "<parties and context>"
---

# /draft-nda

Draft a Non-Disclosure Agreement for the company to send out.

```
/draft-nda $ARGUMENTS
```

Examples: `/draft-nda Mutual NDA with a potential enterprise customer`, `/draft-nda One-way NDA for a freelance contractor accessing our codebase`.

## Workflow

1. **Gather context.** Take what `company.md` and `$ARGUMENTS` already say, then ask in one message for the rest: the counterparty and its role, mutual or one-way, the information to protect (trade secrets, code, business data, customer data), the governing jurisdiction, the duration, and any extra concerns (non-compete, non-solicit, IP ownership). Done when every input of the `/af-legal:nda-drafting` skill has a value or a stated assumption.
2. **Draft.** Run `/af-legal:nda-drafting` with those answers, through its self-check against `triage-nda`.
3. **Deliver.** Hand over the skill's output: the agreement, the legal-review clause table, the plain-language summary. Save it as markdown and offer a DOCX export. Once counsel has approved the text, offer `/af-legal:signature-request`.
