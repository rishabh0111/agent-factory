---
name: af-ask
description: Ask which specialist and which skill fit a company task. A guide to every agent-factory department.
disable-model-invocation: true
---

# Ask

The user has a piece of company work and doesn't know which specialist or skill handles it. Answer with the specialist, the skill and the exact words to ask with.

Every department, its specialist and its skills, each with a one-line purpose, are in [catalog.md](catalog.md). Before you say what a skill does, read its `SKILL.md`.

## 1. First run

When `company.md` is missing from the repository root, or the project `CLAUDE.md` does not import it (`@company.md`), say so first and point to `/af-setup`. It fills `company.md` with the user, imports it into `CLAUDE.md` so every skill and specialist sees it, and points each installed department's context file at it.

## 2. Match the task

1. Find the department in [catalog.md](catalog.md) whose specialist line covers the task. When two could take it, pick by the deliverable:
   - a contract → Legal
   - a forecast → Sales or Finance, by who owns the number
   - a launch → Marketing, with Product for the spec
   - a hire → HR
   - a dashboard → Data
2. Find the skill in that department whose description matches the task.
3. **Installed?** If the department's plugin is missing, give its install line: `/plugin install <plugin> --marketplace rishabh0111/agent-factory`.
4. **Connector.** When the skill reads an outside system (CRM, ticketing, HR, accounting, data warehouse), follow the department's Connectors line in [catalog.md](catalog.md) to the file that lists them, and name the connector the skill expects.
5. **Main session or specialist.** A skill marked *Interviews the user* asks questions in rounds and waits for each answer, which a specialist subagent cannot do. Give its command to run directly, `/<plugin>:<skill>`, instead of the specialist. Treat an unmarked skill that does the same alike.

## 3. Work that spans departments

Run one specialist per deliverable. Pass each one's output to the next as data. Examples:
- a product launch: Product writes the spec, Marketing the launch plan, Sales the outreach
- a new hire: HR drafts the offer, Legal reviews it, Finance checks the budget

The person approves at each hand-off where something leaves the company.

## 4. What specialists do alone and what they bring to you

- **Alone:** research, analysis, drafts and recommendations.
- **Brought to a person first:** anything sent, signed, paid, filed or published.

Say this when the user expects something to go out automatically.

## 5. No department fits

Say so. Two ways forward:
- run the work with the closest specialist, naming the gap
- add a department with `/af-add-specialist`

## Elsewhere

- **Building or changing software:** `/sf-ask`, from software-factory.
- **General thinking, writing and research:** `/sk-ask`.

## Reply

- **Specialist:** the role, plus the plugin if it isn't installed.
- **Skill:** the skill, in one line.
- **Ask:** the exact words to type, e.g. "have the legal specialist triage this NDA", or the skill's command when it interviews the user.
