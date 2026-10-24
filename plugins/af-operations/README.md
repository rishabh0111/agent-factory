# Operations

Process documentation, runbooks, change requests, capacity plans, vendor reviews, risk and status reporting, run by the operations specialist (`ops-specialist`).

## Installation

```
/plugin install af-operations --marketplace rishabh0111/agent-factory
```

## Context

Run `/af-setup` (from `af-core`) first. It writes your `company.md` and loads it into every session, so these skills work from your products, customers, voice and policies. Put operations facts under its Policies section, for example:

```markdown
## Policies

- Operations reports weekly. Approval chain: Manager, then Director, then VP.
- Compliance frameworks: SOC 2, ISO 27001. Fiscal year starts in January.
```

When a fact a skill needs is missing, the skill asks for it.

## Skills

Skills run when your request matches, or by name. A skill marked under *Interviews you* asks you questions in rounds, so run it yourself in the main session rather than through the specialist.

<!-- skills:start -->
| Skill | What it is for | Interviews you |
|---|---|---|
| `/af-operations:capacity-plan` | Plan resource capacity — workload analysis and utilization forecasting. |  |
| `/af-operations:change-request` | Create a change management request with impact analysis and rollback plan. |  |
| `/af-operations:compliance-tracking` | Track compliance requirements and audit readiness. |  |
| `/af-operations:process-doc` | Document a business process — flowcharts, RACI, and SOPs. |  |
| `/af-operations:process-optimization` | Analyze and improve business processes. |  |
| `/af-operations:risk-assessment` | Identify, assess, and mitigate operational risks. |  |
| `/af-operations:runbook` | Create or update an operational runbook for a recurring task or procedure. |  |
| `/af-operations:status-report` | Generate a status report with KPIs, risks, and action items. |  |
| `/af-operations:vendor-review` | Evaluate a vendor — cost analysis, risk assessment, and recommendation. |  |
<!-- skills:end -->

## Connectors

Skills that read an ITSM, project tracker, knowledge base or procurement system expect that system's connector: [CONNECTORS.md](CONNECTORS.md) lists them, and the plugin's `.mcp.json` bundles the servers. With nothing connected, paste or upload the data instead.

## Licence

[LICENSE](LICENSE).
