---
name: nda-drafting
description: Drafting our own NDA from scratch for a counterparty to sign. Use when the company needs a new mutual or one-way confidentiality agreement for a partnership, customer evaluation, contractor or investor conversation, and no counterparty paper exists yet.
argument-hint: "<parties and context>"
---

# NDA Drafting

Draft a Non-Disclosure Agreement the company sends out on its own paper: specific to the information being shared, written in plain language, with every clause that needs a lawyer's judgement marked. An NDA the counterparty sent us goes to `triage-nda` instead.

**Important**: This is a starting draft, not legal advice. NDAs are binding contracts; a licensed lawyer in the governing jurisdiction reviews the final text before anyone signs.

## Context

Read `company.md` first for the company's legal name, address, signatories and products, and ask only for what is missing. Read the **NDA Defaults** in `.claude/legal.local.md` (created by `/af-setup`): they set the mutuality, term, carveouts and residuals position this draft starts from. With no playbook, use the market defaults listed under Step 2 of `triage-nda` and say so in the cover note.

## Inputs

| Input | Example |
|---|---|
| Party one: legal name, address, representatives and titles | "Acme Ltd, 1 High St, London; Jane Doe, CEO" |
| Party two: legal name, address, representatives and titles | |
| Information types to be shared | business plans, customer lists, technical specifications, pricing, source code |
| Direction | mutual (both disclose) or one-way (name the discloser) |
| Purpose | evaluating a partnership, a pilot, an acquisition, contractor access |
| Governing jurisdiction | "State of California, United States", "England and Wales" |
| Duration | agreement term, and how long confidentiality survives |
| Extra concerns | non-solicit, non-compete, IP ownership of feedback |

## Steps

### 1. Settle the shape

Confirm each input above. Decide:
- Company or individual on each side.
- Mutual or one-way. Prefer mutual: it is fairer and faster to negotiate. Pick one-way only when the information types show a single discloser, and name the direction in the title.
- Durations per information type: trade secrets may warrant protection for as long as they stay secret, other information 2 to 5 years.
- Where an extra concern (non-solicit, non-compete, exclusivity, IP assignment) belongs: these normally sit outside an NDA. Say so, and draft them only when the user confirms, marked for legal review.

Done when every input has a value or a stated assumption.

### 2. Draft the agreement

Write the full NDA in these sections, using the actual information types so the agreement reads specific, not generic:

1. **Preamble**: both parties' full legal names and addresses, the purpose, the Effective Date.
2. **Definitions**: *Confidential Information*, with concrete examples of what is and is not covered; *Excluded Information*: public knowledge, prior possession, independent development, rightful receipt from a third party.
3. **Obligations**: the receiving party's duty, the permitted use (the stated purpose only). ⚠️ Standard of care: "the same care as its own confidential information, and no less than reasonable care".
4. **Permitted disclosures**: employees, advisors and contractors on a need-to-know basis who are bound by equivalent obligations; disclosures required by law, with notice to the discloser where legally allowed.
5. **Term and duration**: the sharing period and the survival period. ⚠️ Different durations per information type.
6. **Return or destruction**: on request or termination, with written certification of destruction, and a retention exception for copies kept for legal compliance or backups.
7. **Remedies**: ⚠️ irreparable harm and injunctive relief, in addition to other remedies.
8. **General provisions**: governing law and jurisdiction; ⚠️ dispute resolution (litigation, arbitration or mediation); severability; entire agreement; amendments only in writing signed by both; counterparts.

Mark each clause that needs a lawyer's judgement with **[⚠️ LEGAL REVIEW REQUIRED]** and a one-line reason. Write for a reader without legal training: short sentences, terms defined on first use, no Latin. Choose clarity first; the lawyer refines precision.

Done when all eight sections are present and every ⚠️ clause carries its reason.

### 3. Self-check against triage

Run the draft through the `triage-nda` screen. Our own paper should classify GREEN against our playbook; any FLAG is either fixed in the draft or listed as a deliberate choice in the customization notes.

Done when the draft screens GREEN or every non-GREEN item is explained.

## Output

```markdown
## NDA: [Party one] and [Party two] ([Mutual / One-way])

### Summary
- Parties
- Information types covered
- Term and survival
- Governing law and jurisdiction
- Basis: [Playbook / Market defaults]

### Agreement
[Full NDA text, ⚠️ clauses marked]

### Clauses requiring legal review
| Clause | Why it needs review | Decision for the parties |
|---|---|---|

### Plain-language summary
[What signing this means, for a non-lawyer]

### Customization notes
- Decisions the parties still need to make
- Industry conventions to check (technology, pharma and finance have their own)
- Next steps: legal review in the governing jurisdiction, then `signature-request`
```

Save as markdown and offer a DOCX export for signing.
