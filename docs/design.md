# Design

How the kit is built, and why. The findings it rests on are in [conclusions.md](conclusions.md); the rules every skill follows are in [skill-conventions.md](skill-conventions.md).

## Shape

agent-factory is a set of agent skills, like its sibling [software-factory](https://github.com/rishabh0111/software-factory). It has no server or database, and installing it is installing the skills. A company is defined by its own file, `.agent-factory/company.yaml`. Its history is the append-only `decisions.md` and `ledger.md` files beside it.

```
company.yaml ──af-setup validates──> agent-factory (conductor)
                                      ├─ routes work ──> af-role <role>   ──> artifacts, ledger, decisions
                                      ├─ runs cadence ─> af-ritual <id>   ──> notes, outputs, decisions
                                      ├─ gates ───────> inbox.md (owner)
                                      └─ build work ──> engineering role ──> /software-factory ──> ship record ──> release_note
```

Human roles are seats. Every other role has `reports_to`, and its approver is the nearest seat above it. That lets each person own a domain: their squad's gated actions and their domain's `direction` and `one_way_door` calls come to them, not to one bottleneck owner. `config.yaml` maps seats to people, so one file serves a team of one to five (`validate.mjs --org` prints the tree).

Roles are data, not skills. `af-role` plays whichever role it is given, so a template can add or remove roles without code. It also means one agent loads one role per run, which keeps open question 1 open: a test can compare runs where a role runs in its own agent with runs where it shares one.

## Why not build on Paperclip

Paperclip has no per-role decision rights, its defaults are permissive, and its schema is large and changes weekly (conclusions §9). We own a thin model. Two later steps keep the door open:

1. **Package export.** Write the company as an [Agent Companies](https://github.com/paperclipai/paperclip/blob/master/docs/companies/companies-spec.md) package (`COMPANY.md`, `TEAM.md`, `AGENTS.md`), with our semantics in an `.agent-factory.yaml` sidecar under the spec's vendor-extension rule.
2. **Runtime adapters.** Map budgets, gates and tiers onto a runtime such as Paperclip, turning permission prompts and sandboxing on whatever the runtime's defaults are.

## The company file

| Section | Holds | Rules (full list: [rules.md](../skills/af-setup/references/rules.md)) |
|---|---|---|
| `identity` | name, stage, ordered values, post-decision norm | |
| `owner_role`, `human_floor` | the owner seat and the acts reserved for a person | owner is an enabled human; floor not empty (warning) |
| `roles` | mandate, `reports_to`, `owns` / `does_not_own`, `model_class`, actions with starting tiers and optional `software_factory` key | reporting chains end at the owner without loops; one owner per area; side-effect actions start gated |
| `artifacts` | typed hand-offs: producer, reviewer, consumers, fields | no self-review; same-model review warns; unused artifacts warn |
| `decisions` | kind, owner, recommend, input, record | `direction` and `one_way_door` belong to a human seat |
| `cadence` | rituals: period, chair, participants, inputs, outputs, decisions, questions | the decider attends |
| `planning` | cycle, cooldown, appetite, circuit breaker | a breaker needs an appetite cap |
| `metrics` | input / output / zero, owner, target, review ritual, what it drives | reviewed somewhere; outputs have inputs |
| `policies` | plain-language rules scoped to roles | references resolve |
| `escalation` | path and timeout | ends at the owner, no loops |
| `budget` | company and per-role monthly limits | pause at the limit; per-role limits fit |

The validator is one dependency-free Node script ([validate.mjs](../skills/af-setup/scripts/validate.mjs)). It converts YAML through a pinned `npx yaml@2.8.1`, so there is nothing to install.

## Alignment with software-factory

| Concept | agent-factory | software-factory |
|---|---|---|
| Decision kinds | `mechanical`, `taste`, `direction`, `one_way_door` | `mechanical`, `taste`, `direction` (sf-spec) |
| Permissions | action tiers `shadow` → `autonomous` | `policy:` `never` / `manual` / `auto` |
| Mapping | `autonomous` → `auto`; `shadow` → `never`; all other tiers → `manual`; stricter wins | written by `af-setup` from `validate.mjs --sf-policy` |
| Run state | `.agent-factory/runs/<id>/state.md` with a `Next` line | `.software-factory/runs/<id>/state.md` with a `Next` line |
| What waits on a person | `inbox.md` per seat, `/agent-factory digest` | `/software-factory digest`, merged into the engineering approver seat's |
| Hand-off | `build_request` artifact | request or tracker issue |
| Hand-back | `release_note` artifact | `evidence/ship.md` |

The two kits' gates stack, and neither one's approval stands in for the other's. Software-factory stays an external dependency: we describe how to call it ([af-role/references/software-factory.md](../skills/af-role/references/software-factory.md)), never how it works.

### Choices worth knowing

- **Templates cannot grant autonomy to side effects.** Autonomy is earned in the ledger: promotion on repeated clean runs, demotion on an unsafe event (conclusions §5). The promotion rules are not written yet.
- **`model_class` is an abstract label.** `config.yaml` maps it to real models, which keeps vendors out of the core.
- **Sampled actions** go to the owner for a check one time in five. This is a starting value, not evidence-based. Revisit it with ledger data.
- **The human floor is a placeholder list.** It differs by jurisdiction (open question 6), so setup marks it unverified when it can't confirm the list.

## Next

1. A contrasting Amazon-style template, to test whether the format can express a different playbook. `high-pace-startup` and `fast-startup` already differ in seats (five vs one) and cycle (two vs six weeks).
2. Promotion and demotion rules for tiers, read from `ledger.md`.
3. A first end-to-end trial on a small real company, as software-factory did, with its findings recorded as shared rules.
4. The Agent Companies export.
