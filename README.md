# agent-factory

An open-source kit for running a whole company on agents.

Describe the company you want, say "a password-manager Chrome extension, freemium, run like a fast startup", and the kit sets up the organisation: every role from CEO to support, what each role may decide and do, how work moves between them, and the operating rhythm that keeps it going. One person owns it; agents run it.

## Goals

- **A company in a box.** Product, engineering, design, marketing, sales, support, finance, legal and leadership roles, each with decision rights, actions and hand-offs to the others.
- **Copy how great companies operate.** A *company template* captures a company's operating mechanisms as data: which roles exist, who decides what, cadence, metrics, policies. Swap the template to run a different playbook.
- **For anyone.** Generic and open source. Nothing about one company, vendor or market is built in; those live in the user's configuration.
- **Knowledge is an add-on.** A user can attach knowledge packs built from books, papers and standards so decisions cite them. Without packs, every role works on built-in guidance.

## Non-goals

- Building the product itself. Engineering roles can hand product work to a software factory (a separate project) or to any coding agent.
- Removing the owner entirely. A few acts legally need a named person (see [docs/conclusions.md](docs/conclusions.md#4-the-human-floor)). The aim is to shrink the owner's part to those few acts.

## Install

Any agent that supports Agent Skills:

```
npx skills@latest add rishabh0111/agent-factory
```

Claude Code, as a plugin:

```
/plugin marketplace add rishabh0111/agent-factory
/plugin install agent-factory@agent-factory
```

The skills need Node 20 or later. To build software, also install [software-factory](https://github.com/rishabh0111/software-factory).

## Use

Run setup once, in the repo that will hold the company's files (in Claude Code: `/af-setup`). It picks a company template, asks what's specific to your company (name, jurisdiction, budget, who holds each seat), and writes `.agent-factory/company.yaml`. Nothing runs until the validator passes and you approve the file.

## Templates

| Template | For |
|---|---|
| [high-pace-startup](skills/af-setup/assets/templates/high-pace-startup.yaml) (default) | A small founding team. Five human seats (CEO; product and engineering; growth; customer; operations), each leading an agent squad of two to seven roles, 30 roles in all, each with one job. Each seat approves its own squad's actions and makes its own domain's direction calls; the CEO seat holds the legal acts and company-level calls. One person can hold several seats. Two-week bets, a daily brief per seat, weekly reviews per domain |
| [fast-startup](skills/af-setup/assets/templates/fast-startup.yaml) | A solo founder: one human, agents in every function, six-week bets |

Then hand it work:

```
/agent-factory digest                         # what is waiting on you
/agent-factory run the betting table          # a ritual from the cadence
/agent-factory answer ticket 4812             # routed to the role that owns it
/agent-factory approve 3                      # answer an inbox item
/agent-factory resume
```

## The skills

| Skill | What it does |
|---|---|
| `agent-factory` | The entry point. Routes work to the owning role, runs rituals, holds actions and owner decisions at their gates, keeps your inbox |
| `af-setup` | One-time setup: template → `company.yaml`, validated; aligns software-factory's merge and deploy policy with the engineering role |
| `af-role` | Plays one role from the company file for one run; also reviews another role's artifact |
| `af-ritual` | Runs one ritual: inputs, independent contributions, decisions, notes |

Roles are data in the company file, not separate skills, so a template can add or drop roles without code. Build work goes to software-factory; the two kits share decision kinds and their policy settings line up.

## Status

Early. The company file format, its validator, the four skills and two templates exist. Not yet run end to end on a real company. [docs/design.md](docs/design.md) covers the design and what comes next, [docs/skill-conventions.md](docs/skill-conventions.md) the rules every skill follows, and [docs/conclusions.md](docs/conclusions.md) the research behind it.

Tests: `node --test tests/*.test.mjs`.
