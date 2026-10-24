# HR

Offers, interview plans, onboarding, performance reviews, compensation, org planning and policy questions, run by the HR specialist (`hr-specialist`).

## Installation

```
/plugin install af-human-resources --marketplace rishabh0111/agent-factory
```

## Context

Run `/af-setup` (from `af-core`) first. It writes your `company.md` and loads it into every session, so these skills work from your products, customers, voice and policies. Put HR facts under its Policies section, for example:

```markdown
## Policies

- Headquarters: City, State. Employees: 500.
- Benefits: health insurance through Provider Name; PTO X days; parental leave X weeks.
- Compensation: paid in USD; equity as RSUs, 4-year vesting with a 1-year cliff.
```

When a fact a skill needs is missing, the skill asks for it.

## Skills

Skills run when your request matches, or by name. A skill marked under *Interviews you* asks you questions in rounds, so run it yourself in the main session rather than through the specialist.

<!-- skills:start -->
| Skill | What it is for | Interviews you |
|---|---|---|
| `/af-human-resources:comp-analysis` | Analyze compensation — benchmarking, band placement, and equity modeling. |  |
| `/af-human-resources:draft-offer` | Draft an offer letter with comp details and terms. |  |
| `/af-human-resources:interview-prep` | Create structured interview plans with competency-based questions and scorecards. |  |
| `/af-human-resources:onboarding` | Generate an employee onboarding checklist and first-week plan for a new hire joining the company. |  |
| `/af-human-resources:org-planning` | Headcount planning, org design, and team structure optimization. |  |
| `/af-human-resources:people-report` | Generate headcount, attrition, diversity, or org health reports. |  |
| `/af-human-resources:performance-review` | Structure a performance review with self-assessment, manager template, and calibration prep. |  |
| `/af-human-resources:policy-lookup` | Find and explain company policies in plain language. |  |
| `/af-human-resources:recruiting-pipeline` | Track and manage recruiting pipeline stages. |  |
<!-- skills:end -->

## Connectors

Skills that read an HRIS, applicant tracker, compensation data or knowledge base expect that system's connector: [CONNECTORS.md](CONNECTORS.md) lists them, and the plugin's `.mcp.json` bundles the servers. With nothing connected, paste or upload the data instead.

## Licence

[LICENSE](LICENSE).
