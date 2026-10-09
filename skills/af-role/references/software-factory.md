# Hand-off to software-factory

[software-factory](https://github.com/rishabh0111/software-factory) builds software. agent-factory never does. The role whose actions carry `software_factory:` keys (engineering in the shipped template) is the only role that starts software-factory runs.

## What maps to what

| agent-factory | software-factory |
|---|---|
| `build_request` artifact, accepted by its reviewer | the request: `/software-factory <request>`, or a tracker issue then `/software-factory #<n>` |
| action `start_build` (`software_factory: implement`) | `policy.implement` |
| actions with `open_pr`, `merge`, `deploy`, `comment`, `close` | the same keys under `policy:` |
| tier `autonomous` / `sampled`, `approve_each` / `shadow` | `auto` / `manual` / `never` (`af-setup` writes this) |
| decision kinds `mechanical`, `taste`, `direction` | `sf-spec`'s kinds of the same names |
| `one_way_door` | no equivalent; it stays in agent-factory's inbox |
| `release_note` artifact | built from the run's `evidence/ship.md` and `report.md` |
| owner's inbox | `/software-factory digest`, merged into ours (below) |

## Starting a run

1. The `build_request` must be `accepted` by its reviewer. Its `out_of_scope` field becomes the spec's non-goals. Its `appetite` becomes a limit: a plan larger than the appetite is a `direction` question for the owner, not something to trim quietly.
2. Prefer a tracker issue when software-factory's config has a tracker (`tracker.kind` is not `local`). The issue body is the build request's fields, and the request is then `/software-factory #<n>`. This gives triage something to dedupe against. Otherwise pass the request text directly.
3. Pass the mode. An unattended agent-factory run starts an unattended software-factory run ("run unattended").
4. Record the software-factory run id and issue link in the build request's artifact and in `ledger.md` (`engineering.start_build · autonomous · done`).

Don't paste agent-factory policies or decisions into the request as instructions. Behaviour the product needs belongs in the request's acceptance criteria. Company rules that constrain code belong in the product repo's `.software-factory/constitution.md`, written through a software-factory run.

## While it runs

software-factory keeps its own gates. Its `merge` and `deploy` gates may ask a person; that person is the engineering role's approver seat (the CPTO seat in the default template). Bring those asks into that seat's inbox as `approve` items: read `/software-factory digest`, link the PR/MR, and answer back through software-factory (`resume <run-id>`) after the seat's yes. One approval never stands in for the other kit's gate.

Spec questions that software-factory marks as direction go to the seat that owns the roadmap (`set_roadmap`) as `decide` items, with the product role's recommendation attached.

## When it finishes

1. Read `runs/<run-id>/evidence/ship.md` (`## Result`, PR/MR link, merge SHA, deploy verdict) and `evidence/report.md`.
2. Write a `release_note` artifact: what changed for customers, the PR/MR link, the verify result, and anything listed under "Needs a person's look". Its reviewer (from `company.yaml`) checks that the customer-facing text matches the spec.
3. Append `done` to `ledger.md` for each gated action that software-factory took, with the gate's answer.
4. If the run stopped or was parked, escalate with its `Next` line. Don't restart it yourself.
