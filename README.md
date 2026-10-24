# agent-factory

Specialist agents for company work, one per department. Each specialist does the following:
- reads your company profile first
- works through its department's skills
- brings anything sent, signed, paid or published to a person before acting

Website: https://rishabh0111.github.io/agent-factory/

## Start in three steps

Needs Claude Code 2.1.275 or later.

1. Install the core and the departments you use:

   ```
   /plugin install af-core --marketplace rishabh0111/agent-factory
   /plugin install af-legal --marketplace rishabh0111/agent-factory
   ```

2. Run `/af-setup` in your repository. It fills `company.md` with you (products, customers, voice, policies, limits, systems, glossary), imports it into the project `CLAUDE.md` so every skill and specialist reads it, and points each installed department's own context file at it.
3. Ask for a specialist by role: "have the legal specialist triage this NDA", "ask the sales specialist to prepare my call with Acme".

Each department's skills apply on their own once installed, so install only the departments you use. Skills that interview you, such as office hours or onboarding, run in the main session rather than through a specialist; `/af-ask` says which.

## Specialists

<!-- team:start -->
| Plugin | Specialist | Works on |
|---|---|---|
| `af-customer-support` | support-specialist | Triages tickets, drafts replies, writes help articles. |
| `af-sales` | sales-specialist | Researches accounts, preps calls, drafts outreach, forecasts. |
| `af-finance` | finance-specialist | Journal entries, reconciliations, month-end close, variance. |
| `af-legal` | legal-specialist | Contracts, NDAs, privacy policies, compliance risk. |
| `af-human-resources` | hr-specialist | Offers, interview plans, onboarding, reviews, pay. |
| `af-operations` | ops-specialist | Process docs, runbooks, change requests, vendor reviews. |
| `af-data` | data-specialist | Explores data, writes SQL, reads A/B tests and cohorts. |
| `af-design` | design-specialist | Critiques designs, checks accessibility, writes UX copy. |
| `af-product-management` | product-specialist | Discovery, strategy, specs, roadmaps and sprints. |
| `af-marketing` | marketing-specialist | Positioning, GTM, copy, SEO, ads and launches. |
| `af-leadership` | ceo-advisor | Reviews strategy, scope and plans before you commit. |
| `af-small-business` | small-business-specialist | Invoices, payroll, cash flow, pipeline and support. |
<!-- team:end -->

Skills that read a CRM, ticketing, HR or accounting system expect that system's connector. A plugin lists them in its `CONNECTORS.md`, its bundled `.mcp.json`, or, for marketing, `tools/REGISTRY.md`. `/af-ask` names the one a skill needs.

Engineering work goes to [software-factory](https://github.com/rishabh0111/software-factory).

## Add a specialist

Run `/af-add-specialist` (part of `af-core`) from this repository. It creates the department's plugin, specialist and skills, registers it in the marketplace, adds its card to the website, and runs the checks. A specialist without its own illustration gets a default portrait.

## Licence

Each plugin's licence file sits beside its content.
