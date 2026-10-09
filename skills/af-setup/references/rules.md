# Company file rules

`scripts/validate.mjs` enforces these. Errors make the file unusable; warnings flag choices the evidence argues against. The reason column points to the finding behind each rule (`docs/conclusions.md` in the agent-factory repo).

| Rule | Severity | Checks | Why |
|---|---|---|---|
| `shape` | error | Required fields present, no unknown fields, enums and periods valid, ids lowercase snake_case | A typo must not silently turn a rule off |
| `unique-id` | error | Every id is unique across the whole file; actions unique within a role | References are never ambiguous |
| `ref` | error | Every role, artifact, decision, ritual and metric reference exists; referenced roles are enabled | A hand-off to nobody is a dropped task |
| `owner` | error | `owner_role` is an enabled human | Some acts legally need a named person (§4) |
| `reports-to` | error | Every enabled role except the owner has `reports_to`; chains have no loops and end at the owner; the owner reports to nobody | Every agent has a human seat above it, who approves its gated actions |
| `human-floor` | warning | `human_floor` lists at least one act | Same; the list differs by jurisdiction |
| `single-owner` | error | No area is owned by two roles, or both owned and not owned by one | Two owners means no owner (GitLab DRI, §10) |
| `gated-side-effects` | error | Side-effect actions start at `shadow` or `approve_each`; software-factory `open_pr`, `merge`, `deploy`, `comment`, `close` are side effects | Read freely, write through a gate; autonomy is earned on evidence (§3, §5) |
| `no-self-review` | error / warning | An artifact's reviewer is not its producer (error); a decision's owner doesn't also recommend it (warning) | The executor never reviews its own work (§5) |
| `diverse-review` | warning | Producer and reviewer have different `model_class` | Same-model oversight rubber-stamps (§2, §3) |
| `orphan-artifact` | warning | Every artifact is consumed, reviewed, used in a ritual or as a decision record, or leaves the company | Output nobody reads is waste or shadow state |
| `human-decides` | error | `direction` and `one_way_door` decisions are owned by a human role (any seat, not only the owner) | Never auto-decide these (§5); a domain seat decides its own domain |
| `decision-log` | warning | Non-mechanical decisions name a record artifact | Rulings are logged as what, why, cost if wrong (§5) |
| `decider-present` | error | A ritual that takes a decision includes that decision's owner | Otherwise the ritual decides for someone absent |
| `drives-output` | error | `drives` points at output metrics | Input metrics move output metrics (Amazon WBR, §10) |
| `input-for-output` | warning | Every output metric has an input metric driving it | Output metrics are reported, not debated |
| `circuit-breaker` | error | A circuit breaker has an `appetite_cap` | It needs something to trip on (Shape Up, §10) |
| `escalation-ends-at-owner` | error | The escalation path ends at the owner | Every unresolved question has a final answerer |
| `escalation-loop` | error | No role appears twice in the path | Loops stall forever |
| `budget-pause` | error | `budget.on_limit` is `pause` | Budgets are enforced outside the agent, with automatic pause (§3) |
| `budget` | error | Limits positive; per-role limits fit within the company limit | Same |
