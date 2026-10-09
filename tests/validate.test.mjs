// node --test tests/
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readdirSync, writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";

import { approverOf, check, loadYaml, sfPolicy } from "../skills/af-setup/scripts/validate.mjs";

const TEMPLATES = "skills/af-setup/assets/templates";
const SCRIPT = "skills/af-setup/scripts/validate.mjs";
const BASE = loadYaml(join(TEMPLATES, "fast-startup.yaml"));
const SEATS = loadYaml(join(TEMPLATES, "high-pace-startup.yaml"));

const base = () => structuredClone(BASE);
const find = (xs, id) => xs.find((x) => x.id === id);
const rules = (t, severity = "error") => new Set(check(t).filter((i) => i.severity === severity).map((i) => i.rule));

for (const name of readdirSync(TEMPLATES).filter((f) => f.endsWith(".yaml")))
  test(`shipped template ${name} is clean`, () => {
    assert.deepEqual(check(loadYaml(join(TEMPLATES, name))), []);
  });

test("owner must be human", () => {
  const t = base();
  find(t.roles, "owner").kind = "agent";
  assert.ok(rules(t).has("owner"));
});

test("side-effect actions cannot start autonomous", () => {
  const t = base();
  find(find(t.roles, "support").actions, "issue_refund").tier = "autonomous";
  assert.ok(rules(t).has("gated-side-effects"));
});

test("software-factory merge must be a side effect", () => {
  const t = base();
  find(find(t.roles, "engineering").actions, "merge_change").side_effect = false;
  assert.ok(rules(t).has("gated-side-effects"));
});

test("producer cannot review its own artifact", () => {
  const t = base();
  find(t.artifacts, "pitch").reviewed_by = "product";
  assert.ok(rules(t).has("no-self-review"));
});

test("same-model review warns", () => {
  const t = base();
  find(t.roles, "ceo").model_class = "standard";
  assert.ok(rules(t, "warning").has("diverse-review"));
});

for (const kind of ["direction", "one_way_door"])
  test(`${kind} decisions belong to a human`, () => {
    const t = base();
    find(t.decisions, "approve_discount").kind = kind;
    assert.ok(rules(t).has("human-decides"));
  });

test("a domain seat may own its direction calls", () => {
  const t = structuredClone(SEATS);
  assert.equal(find(t.decisions, "set_roadmap").owner, "cpto");
  assert.ok(!rules(t).has("human-decides"));
});

test("every role but the owner reports to someone", () => {
  const t = structuredClone(SEATS);
  delete find(t.roles, "account_executive").reports_to;
  assert.ok(rules(t).has("reports-to"));
});

test("reporting lines have no loops and end at the owner", () => {
  const loop = structuredClone(SEATS);
  find(loop.roles, "cpto").reports_to = "product_manager";
  assert.ok(rules(loop).has("reports-to"));
  const owner = structuredClone(SEATS);
  find(owner.roles, "ceo").reports_to = "cpto";
  assert.ok(rules(owner).has("reports-to"));
});

test("an agent's approver is the nearest human seat above it", () => {
  assert.equal(approverOf(SEATS, "engineering_lead"), "cpto");
  assert.equal(approverOf(SEATS, "support"), "head_of_customer");
  assert.equal(approverOf(SEATS, "bookkeeper"), "head_of_operations");
  assert.equal(approverOf(SEATS, "analyst"), "ceo");
  assert.equal(approverOf(SEATS, "cpto"), "ceo");
  assert.equal(approverOf(SEATS, "ceo"), "ceo");
  assert.equal(approverOf(BASE, "support"), "owner"); // through the agent ceo
});

test("an area has one owner", () => {
  const t = base();
  find(t.roles, "sales").owns.push("pricing");
  assert.ok(rules(t).has("single-owner"));
});

test("the decider attends the ritual", () => {
  const t = base();
  find(t.cadence, "betting_table").decides.push("approve_discount");
  assert.ok(rules(t).has("decider-present"));
});

test("escalation ends at the owner", () => {
  const t = base();
  t.escalation.path = ["owner", "ceo"];
  assert.ok(rules(t).has("escalation-ends-at-owner"));
});

test("budget pauses and per-role limits fit", () => {
  const t = base();
  t.budget.on_limit = "continue";
  t.budget.per_role.finance = 5000;
  const r = rules(t);
  assert.ok(r.has("budget-pause") && r.has("budget"));
});

test("a disabled role cannot be referenced", () => {
  const t = base();
  find(t.roles, "legal").enabled = false;
  assert.ok(rules(t).has("ref"));
});

test("unknown references are errors", () => {
  const t = base();
  find(t.metrics, "revenue").reviewed_in = ["board_meeting"];
  assert.ok(rules(t).has("ref"));
});

test("circuit breaker needs an appetite cap", () => {
  const t = base();
  delete t.planning.appetite_cap;
  assert.ok(rules(t).has("circuit-breaker"));
});

test("shape errors: unknown field, bad enum, missing section", () => {
  const t = base();
  find(t.roles, "ceo").salary = 1;
  find(t.decisions, "change_pricing").kind = "owner_challenge";
  delete t.budget;
  const issues = check(t);
  assert.ok(issues.length >= 3 && issues.every((i) => i.rule === "shape"));
});

test("software-factory policy follows tiers, stricter wins", () => {
  const t = base();
  assert.deepEqual(sfPolicy(t), {
    implement: "auto", open_pr: "manual", merge: "manual", deploy: "manual", comment: "manual", close: "manual",
  });
  find(find(t.roles, "engineering").actions, "deploy_release").tier = "shadow";
  find(t.roles, "support").actions.push({ id: "x", side_effect: true, tier: "approve_each", software_factory: "deploy" });
  assert.equal(sfPolicy(t).deploy, "never");
});

test("cli exit codes", () => {
  const ok = spawnSync(process.execPath, [SCRIPT, join(TEMPLATES, "fast-startup.yaml")], { encoding: "utf8" });
  assert.equal(ok.status, 0, ok.stderr);
  const t = base();
  t.escalation.path = ["ceo"];
  const dir = mkdtempSync(join(tmpdir(), "af-"));
  const bad = join(dir, "bad.yaml");
  writeFileSync(bad, JSON.stringify(t)); // JSON is valid YAML
  const r = spawnSync(process.execPath, [SCRIPT, bad], { encoding: "utf8" });
  assert.equal(r.status, 1);
  assert.match(r.stdout, /escalation-ends-at-owner/);
});
