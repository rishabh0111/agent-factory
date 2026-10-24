---
name: privacy-policy-drafting
description: Drafting or rewriting the public privacy policy for a product, site or app. Use when a product needs its first privacy notice, when data collection, third parties or markets change and the published policy must follow, or when a GDPR, CCPA or COPPA disclosure has to be written for users.
argument-hint: "<product and data handling context>"
---

# Privacy Policy Drafting

Draft the privacy policy users read: specific to what the product actually collects, in plain language, with every clause that needs a privacy lawyer's judgement marked. Whether a planned feature is allowed at all is a `compliance-check` question; this skill writes the notice once the practice is known.

**Important**: This is a starting draft, not legal advice. A privacy policy is binding and states the company's obligations and users' rights; a data-privacy lawyer reviews it before publication.

## Context

Read `company.md` first for the product, the company's legal name and address, customers and markets, and ask only for what is missing. Read the **Data Protection** positions in `.claude/legal.local.md` when present.

## Inputs

| Input | Example |
|---|---|
| Product name and URL | the URL is optional; when given, research it |
| Company legal name and registered address | |
| Privacy contact | privacy@company.com, DPO if one is appointed |
| Data collected | names, emails, usage behaviour, location, payment, device identifiers |
| Where users are | US, EU, California, UK: sets the applicable laws |
| Third parties | analytics, advertising, payments, SDKs, integrations |
| Storage and retention | where data sits and how long |
| Age of users | under 13 or under 16 triggers children's rules |

## Steps

### 1. Map the data

If a product URL is given, visit it and note forms, logins, payments, cookies, tracking scripts and third-party integrations. Then list every data item under:
- **Direct collection**: what users enter.
- **Automatic collection**: IP address, usage, device, cookies.
- **Third-party data**: what arrives from partners, integrations, providers.
- **Special categories**: health, financial, biometric, children's data.

Done when every item has a source, a purpose and a retention period, or is flagged as unknown.

### 2. Identify the laws

Mark each that applies and why:
- **GDPR** (EU users): explicit consent, data subject rights, DPA with processors, DPIA for risky processing.
- **CCPA/CPRA** (California): rights to access, delete and opt out; detailed disclosures; no discrimination for exercising rights.
- **Other US state laws** (e.g. Virginia, Texas).
- **Sector laws**: HIPAA (health), GLBA (finance), FERPA (education), COPPA and the UK Children's Code (children).

Done when the list of laws and the markets that trigger them is fixed.

### 3. Draft the policy

Open with a preamble: what the policy covers, the last-updated date, how to contact you. Then these sections, each specific to the mapped data:

1. **Information we collect**: personal, usage, device, location, payment, communications. ⚠️ Special categories.
2. **How we collect it**: directly, automatically, from third parties.
3. **How we use it**: service and support, improvement and personalisation, analytics, marketing, security and fraud prevention, legal compliance. State each purpose concretely: "we analyse usage patterns to find features users find confusing", not "to improve the product". ⚠️ Any further purpose.
4. **Legal basis** (⚠️, essential under GDPR): consent, contract, legal obligation, vital interests, public task, legitimate interests, mapped to each purpose.
5. **Sharing and third parties**: service providers, partners, authorities. ⚠️ Where they are located.
6. **International transfers** (⚠️): mechanism (Standard Contractual Clauses, adequacy decision, consent) and where data is stored and processed.
7. **Retention** (⚠️): a concrete period per data type: account data, logs, deleted content.
8. **User rights** (⚠️, varies by jurisdiction): access, deletion, correction, restriction, portability, marketing opt-out, complaint to a data protection authority, and how to exercise each.
9. **Cookies and tracking** (⚠️): each tool, its purpose, how to manage it, and whether consent is required (GDPR requires it for non-essential cookies).
10. **Security**: encryption in transit and at rest, access controls, audits, incident response, and the honest limit that no system is fully secure.
11. **Children's privacy** (⚠️ when users may be under 13): parental consent, age gates, COPPA and equivalents.
12. **Contact**: privacy email, mailing address, response time, DPO where required.
13. **Policy changes**: notice period, how users are told, the choice offered on material changes.
14. **Additional provisions**: whether data is sold or shared (state it explicitly either way), third-party links, governing law, effective date.

Mark each clause needing a lawyer with **[⚠️ LEGAL REVIEW REQUIRED]** and a one-line reason. Write for a general audience, terms defined on first use.

Done when every mapped data item appears in sections 1, 3 and 7, and every ⚠️ clause carries its reason.

### 4. Check against practice

The policy must match what the product does. For each statement that the product does not yet do (encryption, a rights-request process, a cookie banner), list it in the implementation checklist: either the product changes or the policy does.

Done when no statement in the policy is unbacked by practice or by a checklist item.

## Output

```markdown
## Privacy Policy: [Product]

### Summary
Product and purpose · data collected · jurisdictions · key user rights · retention · contact

### Policy
[Full policy text, ⚠️ clauses marked]

### Compliance checklist
| Regulation | Applies because | Status | Notes |
|---|---|---|---|

### Clauses requiring legal review
| Clause | Why | Priority |
|---|---|---|

### Implementation checklist
- [ ] Data-privacy lawyer reviews the policy
- [ ] Cookie consent banner (where required)
- [ ] Data subject request process: easy to reach, quick to answer
- [ ] Records of processing and the legal basis for each purpose
- [ ] DPA signed with every processor
- [ ] Technical measures the policy promises are in place
- [ ] Users notified of material changes, with a choice where required
```

Save as markdown and offer a DOCX export. Update the policy whenever data practices change, not on a calendar.
