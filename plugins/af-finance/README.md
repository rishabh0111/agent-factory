# Finance

Journal entries, reconciliations, month-end close, financial statements, variance analysis, audit support and SOX testing, run by the finance specialist (`finance-specialist`).

## Installation

```
/plugin install af-finance --marketplace rishabh0111/agent-factory
```

## Context

Run `/af-setup` (from `af-core`) first. It writes your `company.md` and loads it into every session, so these skills work from your products, customers, voice and policies.

## Skills

Skills run when your request matches, or by name. A skill marked under *Interviews you* asks you questions in rounds, so run it yourself in the main session rather than through the specialist.

<!-- skills:start -->
| Skill | What it is for | Interviews you |
|---|---|---|
| `/af-finance:audit-support` | Support SOX 404 compliance with control testing methodology, sample selection, and documentation standards. |  |
| `/af-finance:close-management` | Manage the month-end close process with task sequencing, dependencies, and status tracking. |  |
| `/af-finance:financial-statements` | Generate financial statements (income statement, balance sheet, cash flow) with period-over-period comparison and variance analysis. |  |
| `/af-finance:journal-entry` | Prepare journal entries with proper debits, credits, and supporting detail. |  |
| `/af-finance:journal-entry-prep` | Prepare journal entries with proper debits, credits, and supporting documentation for month-end close. |  |
| `/af-finance:reconciliation` | Reconcile accounts by comparing GL balances to subledgers, bank statements, or third-party data. |  |
| `/af-finance:sox-testing` | Generate SOX sample selections, testing workpapers, and control assessments. |  |
| `/af-finance:variance-analysis` | Decompose financial variances into drivers with narrative explanations and waterfall analysis. |  |
<!-- skills:end -->

## Connectors

Skills that read an ERP or accounting system, data warehouse, spreadsheets or BI tool expect that system's connector: [CONNECTORS.md](CONNECTORS.md) lists them, and the plugin's `.mcp.json` bundles the servers. With nothing connected, paste or upload the data instead.

## Licence

[LICENSE](LICENSE).
