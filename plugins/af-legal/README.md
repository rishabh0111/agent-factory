# Legal

Contract and NDA review, NDA and privacy policy drafting, compliance checks, legal risk assessment, vendor checks, briefings and templated legal responses, run by the legal specialist (`legal-specialist`).

## Installation

```
/plugin install af-legal --marketplace rishabh0111/agent-factory
```

> **Not legal advice.** Have a qualified lawyer review any conclusion before relying on it. The example playbook reflects U.S. positions (Delaware, New York, California); set your own jurisdiction's positions first.

## Context

Run `/af-setup` (from `af-core`) first. It writes your `company.md` and loads it into every session, so these skills work from your products, customers, voice and policies. It also creates `.claude/legal.local.md`, the playbook that `review-contract`, `triage-nda` and `legal-response` read, and fills it from the legal positions `company.md` states. Keep the playbook in this shape:

```markdown
# Legal Playbook Configuration

## Contract Review Positions

### Limitation of Liability
- Standard position: Mutual cap at 12 months of fees paid/payable
- Acceptable range: 6-24 months of fees
- Escalation trigger: Uncapped liability, consequential damages inclusion

### Indemnification
- Standard position: Mutual indemnification for IP infringement and data breach
- Acceptable: Indemnification limited to third-party claims only
- Escalation trigger: Unilateral indemnification obligations, uncapped indemnification

### IP Ownership
- Standard position: Each party retains pre-existing IP; customer owns customer data
- Escalation trigger: Broad IP assignment clauses, work-for-hire provisions for pre-existing IP

### Data Protection
- Standard position: Require DPA for any personal data processing
- Requirements: Sub-processor notification, data deletion on termination, breach notification within 72 hours
- Escalation trigger: No DPA offered, cross-border transfer without safeguards

### Term and Termination
- Standard position: Annual term with 30-day termination for convenience
- Acceptable: Multi-year with termination for convenience after initial term
- Escalation trigger: Auto-renewal without notice period, no termination for convenience

### Governing Law
- Preferred: [Your jurisdiction]
- Acceptable: Major commercial jurisdictions (NY, DE, CA, England & Wales)
- Escalation trigger: Non-standard jurisdictions, mandatory arbitration in unfavorable venue

## NDA Defaults
- Mutual obligations required
- Term: 2-3 years standard, 5 years for trade secrets
- Standard carveouts: independently developed, publicly available, rightfully received from third party
- Residuals clause: acceptable if narrowly scoped

## Response Templates
Configure paths to your template files or define inline templates for common inquiries.
```


## Skills

Skills run when your request matches, or by name. A skill marked under *Interviews you* asks you questions in rounds, so run it yourself in the main session rather than through the specialist.

<!-- skills:start -->
| Skill | What it is for | Interviews you |
|---|---|---|
| `/af-legal:brief` | Generate contextual briefings for legal work — daily summary, topic research, or incident response. |  |
| `/af-legal:compliance-check` | Run a compliance check on a proposed action, product feature, or business initiative, surfacing applicable regulations, required approvals, and risk areas. |  |
| `/af-legal:legal-response` | Generate a response to a common legal inquiry using configured templates, with built-in escalation checks for situations that shouldn't use a templated reply. |  |
| `/af-legal:legal-risk-assessment` | Assess and classify legal risks using a severity-by-likelihood framework with escalation criteria. |  |
| `/af-legal:meeting-briefing` | Prepare structured briefings for meetings with legal relevance and track resulting action items. |  |
| `/af-legal:nda-drafting` | Drafting our own NDA from scratch for a counterparty to sign. |  |
| `/af-legal:privacy-policy-drafting` | Drafting or rewriting the public privacy policy for a product, site or app. |  |
| `/af-legal:review-contract` | Review a contract against your organization's negotiation playbook — flag deviations, generate redlines, provide business impact analysis. |  |
| `/af-legal:signature-request` | Prepare and route a document for e-signature — run a pre-signature checklist, configure signing order, and send for execution. |  |
| `/af-legal:triage-nda` | Rapidly triage an incoming NDA and classify it as GREEN (standard approval), YELLOW (counsel review), or RED (full legal review). |  |
| `/af-legal:vendor-check` | Check the status of existing agreements with a vendor across all connected systems — CLM, CRM, email, and document storage — with gap analysis and upcoming deadlines. |  |

| Command | What it is for |
|---|---|
| `/af-legal:draft-nda` | Draft an NDA on our own paper between the company and a counterparty, with clauses needing legal review marked |
| `/af-legal:privacy-policy` | Draft or update a product's privacy policy, with a compliance checklist and clauses needing legal review marked |
<!-- skills:end -->

## Connectors

Skills that read a document store, contract system, chat or email expect that system's connector: [CONNECTORS.md](CONNECTORS.md) lists them, and the plugin's `.mcp.json` bundles the servers. With nothing connected, paste or upload the data instead.

## Licence

[LICENSE](LICENSE); the NDA and privacy policy drafting skills and their commands also carry [LICENSE-pm](LICENSE-pm).
