# Support

Ticket triage, customer replies, escalations, knowledge-base articles and customer research, run by the support specialist (`support-specialist`).

## Installation

```
/plugin install af-customer-support --marketplace rishabh0111/agent-factory
```

## Context

Run `/af-setup` (from `af-core`) first. It writes your `company.md` and loads it into every session, so these skills work from your products, customers, voice and policies.

## Skills

Skills run when your request matches, or by name. A skill marked under *Interviews you* asks you questions in rounds, so run it yourself in the main session rather than through the specialist.

<!-- skills:start -->
| Skill | What it is for | Interviews you |
|---|---|---|
| `/af-customer-support:customer-escalation` | Package an escalation for engineering, product, or leadership with full context. |  |
| `/af-customer-support:customer-research` | Support research on one customer's question or ticket, multi-source with source attribution. |  |
| `/af-customer-support:draft-response` | Draft a professional customer-facing response tailored to the situation and relationship. |  |
| `/af-customer-support:kb-article` | Draft a knowledge base article from a resolved issue or common question. |  |
| `/af-customer-support:ticket-triage` | Triage and prioritize a support ticket or customer issue. |  |
<!-- skills:end -->

## Connectors

Skills that read a ticketing system, knowledge base, issue tracker or CRM expect that system's connector: [CONNECTORS.md](CONNECTORS.md) lists them, and the plugin's `.mcp.json` bundles the servers. With nothing connected, paste or upload the data instead.

## Licence

[LICENSE](LICENSE).
