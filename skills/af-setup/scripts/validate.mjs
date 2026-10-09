#!/usr/bin/env node
// Check a company file against the template rules.
//
//   node validate.mjs <company.yaml>... [--strict] [--json]
//   node validate.mjs --sf-policy <company.yaml>   software-factory policy: block
//   node validate.mjs --org <company.yaml>         seats, squads and approvers
//
// YAML is converted with a pinned `npx yaml@2.8.1 --json`, so the script has
// no install step. Exit 0 when clean (warnings allowed unless --strict), 1 on
// errors, 2 on usage or conversion failure. Rules: ../references/rules.md.

import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const YAML_CLI = "yaml@2.8.1";

export function loadYaml(path) {
  const src = readFileSync(path, "utf8");
  // A constant command string: nothing from the file reaches the shell.
  const r = spawnSync(`npx -y ${YAML_CLI} --json`, { input: src, encoding: "utf8", shell: true });
  if (r.status !== 0) throw new Error(`yaml conversion failed: ${(r.stderr || "").trim()}`);
  const docs = JSON.parse(r.stdout);
  if (docs.length !== 1) throw new Error(`expected one YAML document, found ${docs.length}`);
  return docs[0];
}

// ---- shape ---------------------------------------------------------------

const PERIOD = /^\d+[dwmqy]$/;
const ID = /^[a-z][a-z0-9_]*$/;
const TIERS = ["shadow", "approve_each", "sampled", "autonomous"];
const KINDS = ["mechanical", "taste", "direction", "one_way_door"];

// Field spec: [type, required, extra]. Types: str, num, bool, id, period,
// enum, list:<type>, obj:<name>, map:num.
const SHAPES = {
  template: {
    identity: ["obj:identity", true],
    owner_role: ["id", true],
    human_floor: ["list:str", false],
    roles: ["list:obj:role", true],
    artifacts: ["list:obj:artifact", false],
    decisions: ["list:obj:decision", false],
    cadence: ["list:obj:ritual", false],
    planning: ["obj:planning", false],
    metrics: ["list:obj:metric", false],
    policies: ["list:obj:policy", false],
    escalation: ["obj:escalation", true],
    budget: ["obj:budget", true],
  },
  identity: {
    id: ["id", true], name: ["str", true], version: ["str", true], description: ["str", false],
    stage: ["str", true], values: ["list:str", false], post_decision_norm: ["str", false],
  },
  role: {
    id: ["id", true], title: ["str", true], function: ["str", true],
    kind: ["enum", false, ["agent", "human"]], enabled: ["bool", false], mandate: ["str", true],
    reports_to: ["id", false],
    owns: ["list:str", false], does_not_own: ["list:str", false], model_class: ["str", false],
    actions: ["list:obj:action", false],
  },
  action: {
    id: ["id", true], description: ["str", false], side_effect: ["bool", true],
    tier: ["enum", true, TIERS], software_factory: ["enum", false, ["implement", "open_pr", "merge", "deploy", "comment", "close"]],
  },
  artifact: {
    id: ["id", true], description: ["str", false], produced_by: ["id", true], reviewed_by: ["id", false],
    consumed_by: ["list:id", false], external_consumer: ["str", false], fields: ["list:str", false],
  },
  decision: {
    id: ["id", true], description: ["str", false], kind: ["enum", true, KINDS], owner: ["id", true],
    recommend: ["list:id", false], input: ["list:id", false], record: ["id", false],
  },
  ritual: {
    id: ["id", true], every: ["period", true], owner: ["id", true], participants: ["list:id", false],
    inputs: ["list:id", false], outputs: ["list:id", false], decides: ["list:id", false], questions: ["list:str", false],
  },
  planning: {
    cycle: ["period", true], cooldown: ["period", false], appetite_cap: ["str", false],
    circuit_breaker: ["bool", false], backlog: ["str", false], plan_change_requires: ["id", true],
  },
  metric: {
    id: ["id", true], kind: ["enum", true, ["input", "output", "zero"]], owner: ["id", true], target: ["str", true],
    reviewed_in: ["list:id", true], drives: ["list:id", false],
  },
  policy: { id: ["id", true], rule: ["str", true], applies_to: ["list:id", false] },
  escalation: { path: ["list:id", true], timeout_hours: ["num", true] },
  budget: {
    monthly_limit: ["num", true], currency: ["str", false], on_limit: ["str", false], per_role: ["map:num", false],
  },
};

function checkShape(value, type, where, out, extra) {
  const bad = (msg) => out.push({ severity: "error", rule: "shape", where, message: msg });
  const isObj = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
  if (type.startsWith("list:")) {
    if (!Array.isArray(value)) return bad("expected a list");
    value.forEach((v, i) => checkShape(v, type.slice(5), `${where}[${i}]`, out, extra));
    return;
  }
  if (type.startsWith("obj:")) {
    if (!isObj(value)) return bad("expected a mapping");
    const shape = SHAPES[type.slice(4)];
    const label = value.id !== undefined ? `${where.replace(/\[\d+\]$/, "")}.${value.id}` : where;
    for (const k of Object.keys(value)) if (!(k in shape)) out.push({ severity: "error", rule: "shape", where: label, message: `unknown field '${k}'` });
    for (const [k, [t, req, ex]] of Object.entries(shape)) {
      if (value[k] === undefined || value[k] === null) {
        if (req) out.push({ severity: "error", rule: "shape", where: label, message: `missing '${k}'` });
      } else checkShape(value[k], t, `${label}.${k}`, out, ex);
    }
    return;
  }
  if (type === "map:num") {
    if (!isObj(value)) return bad("expected a mapping");
    for (const [k, v] of Object.entries(value)) if (typeof v !== "number") out.push({ severity: "error", rule: "shape", where: `${where}.${k}`, message: "expected a number" });
    return;
  }
  if (type === "str" && typeof value !== "string" && typeof value !== "number") return bad("expected text");
  if (type === "num" && typeof value !== "number") return bad("expected a number");
  if (type === "bool" && typeof value !== "boolean") return bad("expected true or false");
  if (type === "id" && (typeof value !== "string" || !ID.test(value))) return bad("expected a lowercase snake_case id");
  if (type === "period" && (typeof value !== "string" || !PERIOD.test(value))) return bad("expected a period like 1w, 6w, 1q");
  if (type === "enum" && !extra.includes(value)) return bad(`expected one of ${extra.join(", ")}`);
}

// ---- rules ---------------------------------------------------------------

export function check(t) {
  const issues = [];
  checkShape(t, "obj:template", "<root>", issues);
  if (issues.length) return issues; // cross-references are meaningless on a broken shape

  const error = (rule, where, message) => issues.push({ severity: "error", rule, where, message });
  const warn = (rule, where, message) => issues.push({ severity: "warning", rule, where, message });
  const L = (k) => t[k] ?? [];
  const byId = (xs) => new Map(xs.map((x) => [x.id, x]));

  // Ids are unique across the whole file, so a reference is never ambiguous.
  const seen = new Map();
  for (const sec of ["roles", "artifacts", "decisions", "cadence", "metrics", "policies"])
    for (const x of L(sec)) {
      if (seen.has(x.id)) error("unique-id", `${sec}.${x.id}`, `id is also used in ${seen.get(x.id)}`);
      else seen.set(x.id, sec);
    }

  const roles = byId(L("roles"));
  const enabled = new Set(L("roles").filter((r) => r.enabled !== false).map((r) => r.id));
  const artifacts = byId(L("artifacts"));
  const decisions = byId(L("decisions"));
  const rituals = byId(L("cadence"));
  const metrics = byId(L("metrics"));
  const roleRef = (where, id) => {
    if (!roles.has(id)) return error("ref", where, `unknown role '${id}'`), false;
    if (!enabled.has(id)) return error("ref", where, `role '${id}' is disabled`), false;
    return true;
  };

  // The owner is an enabled human and holds the acts the law reserves for a person.
  const owner = roles.get(t.owner_role);
  if (!owner) error("owner", "owner_role", `unknown role '${t.owner_role}'`);
  else if (owner.kind !== "human") error("owner", "owner_role", "the owner role must be human");
  else if (owner.enabled === false) error("owner", "owner_role", "the owner role cannot be disabled");
  if (!L("human_floor").length) warn("human-floor", "human_floor", "no acts listed; fill in the ones your jurisdiction reserves for a person");

  // Reporting lines: every role but the owner reports to someone, with no
  // loops, so every chain ends at the owner and every agent has a human above
  // it. That human approves the agent's gated actions.
  for (const r of L("roles")) {
    if (r.enabled === false) continue;
    const where = `roles.${r.id}.reports_to`;
    if (r.id === t.owner_role) {
      if (r.reports_to) error("reports-to", where, "the owner reports to nobody");
      continue;
    }
    if (!r.reports_to) {
      error("reports-to", where, "missing; every role except the owner reports to a role");
      continue;
    }
    if (!roleRef(where, r.reports_to)) continue;
    const chain = [r.id];
    for (let cur = roles.get(r.reports_to); cur; cur = roles.get(cur.reports_to)) {
      if (chain.includes(cur.id)) {
        error("reports-to", where, `loop: ${[...chain, cur.id].join(" -> ")}`);
        break;
      }
      chain.push(cur.id);
      if (!cur.reports_to) {
        if (cur.id !== t.owner_role) error("reports-to", where, `chain ends at '${cur.id}', not the owner`);
        break;
      }
    }
  }

  // Owned areas are disjoint: two roles owning one thing means neither does.
  const owned = new Map();
  for (const r of L("roles")) {
    if (r.enabled === false) continue;
    for (const a of r.owns ?? []) {
      if (owned.has(a)) error("single-owner", `roles.${r.id}.owns`, `'${a}' is also owned by '${owned.get(a)}'`);
      owned.set(a, r.id);
      if ((r.does_not_own ?? []).includes(a)) error("single-owner", `roles.${r.id}`, `'${a}' is both owned and not owned`);
    }
  }

  // Side effects start gated. Autonomy is earned on evidence, never granted by a template.
  for (const r of L("roles")) {
    const ids = new Set();
    for (const a of r.actions ?? []) {
      const where = `roles.${r.id}.actions.${a.id}`;
      if (ids.has(a.id)) error("unique-id", where, "action listed twice");
      ids.add(a.id);
      if (a.side_effect && !["shadow", "approve_each"].includes(a.tier))
        error("gated-side-effects", where, `side-effect actions must start at shadow or approve_each, not ${a.tier}`);
      if (a.software_factory && !a.side_effect && a.software_factory !== "implement")
        error("gated-side-effects", where, `software-factory '${a.software_factory}' changes the outside world; mark side_effect: true`);
    }
  }

  // Hand-offs: produced by a live role, never reviewed by the producer.
  for (const a of L("artifacts")) {
    const where = `artifacts.${a.id}`;
    roleRef(`${where}.produced_by`, a.produced_by);
    if (a.reviewed_by) {
      roleRef(`${where}.reviewed_by`, a.reviewed_by);
      const p = roles.get(a.produced_by), rv = roles.get(a.reviewed_by);
      if (a.reviewed_by === a.produced_by) error("no-self-review", where, "the producer cannot review its own artifact");
      else if (p?.model_class && p.model_class === rv?.model_class)
        warn("diverse-review", where, `producer and reviewer share model_class '${p.model_class}'; same-model review tends to rubber-stamp`);
    }
    for (const c of a.consumed_by ?? []) roleRef(`${where}.consumed_by`, c);
    const used = (a.consumed_by ?? []).length || a.reviewed_by || a.external_consumer
      || L("cadence").some((c) => (c.inputs ?? []).includes(a.id)) || L("decisions").some((d) => d.record === a.id);
    if (!used) warn("orphan-artifact", where, "nothing consumes this artifact");
  }

  // Decision rights: one owner each; direction and one-way doors belong to a human seat.
  for (const d of L("decisions")) {
    const where = `decisions.${d.id}`;
    roleRef(`${where}.owner`, d.owner);
    for (const r of [...(d.recommend ?? []), ...(d.input ?? [])]) roleRef(where, r);
    if ((d.kind === "direction" || d.kind === "one_way_door") && roles.get(d.owner)?.kind !== "human")
      error("human-decides", where, `${d.kind} decisions belong to a human role, not '${d.owner}'`);
    if ((d.recommend ?? []).includes(d.owner)) warn("no-self-review", where, "the owner also recommends; nobody checks the proposal");
    if (d.record && !artifacts.has(d.record)) error("ref", `${where}.record`, `unknown artifact '${d.record}'`);
    if (d.kind !== "mechanical" && !d.record) warn("decision-log", where, "non-mechanical rulings should name a record artifact (what, why, cost if wrong)");
  }

  // Rituals: one owner, inputs exist, decisions taken there are taken by their owners.
  for (const c of L("cadence")) {
    const where = `cadence.${c.id}`;
    roleRef(`${where}.owner`, c.owner);
    const present = new Set([c.owner, ...(c.participants ?? [])]);
    for (const p of c.participants ?? []) roleRef(`${where}.participants`, p);
    for (const k of ["inputs", "outputs"])
      for (const i of c[k] ?? []) if (!artifacts.has(i)) error("ref", `${where}.${k}`, `unknown artifact '${i}'`);
    for (const id of c.decides ?? []) {
      const d = decisions.get(id);
      if (!d) error("ref", `${where}.decides`, `unknown decision '${id}'`);
      else if (!present.has(d.owner)) error("decider-present", where, `'${d.owner}' owns '${id}' but does not attend`);
    }
  }

  // Metrics: one owner, reviewed somewhere, output metrics fed by input metrics.
  const driven = new Set(L("metrics").flatMap((m) => m.drives ?? []));
  for (const m of L("metrics")) {
    const where = `metrics.${m.id}`;
    roleRef(`${where}.owner`, m.owner);
    if (!m.reviewed_in.length) error("shape", `${where}.reviewed_in`, "a metric is reviewed in at least one ritual");
    for (const r of m.reviewed_in) if (!rituals.has(r)) error("ref", `${where}.reviewed_in`, `unknown ritual '${r}'`);
    for (const o of m.drives ?? []) {
      if (!metrics.has(o)) error("ref", `${where}.drives`, `unknown metric '${o}'`);
      else if (metrics.get(o).kind !== "output") error("drives-output", `${where}.drives`, `'${o}' is not an output metric`);
    }
    if (m.kind === "output" && !driven.has(m.id)) warn("input-for-output", where, "no input metric drives this output metric");
  }

  for (const p of L("policies")) for (const r of p.applies_to ?? []) roleRef(`policies.${p.id}.applies_to`, r);

  if (t.planning) {
    roleRef("planning.plan_change_requires", t.planning.plan_change_requires);
    if (t.planning.circuit_breaker && !t.planning.appetite_cap) error("circuit-breaker", "planning", "a circuit breaker needs an appetite_cap to trip on");
  }

  // Escalation ends at the human, with no loops.
  const path = t.escalation.path;
  path.forEach((r) => roleRef("escalation.path", r));
  if (path.at(-1) !== t.owner_role) error("escalation-ends-at-owner", "escalation.path", `must end at '${t.owner_role}'`);
  if (new Set(path).size !== path.length) error("escalation-loop", "escalation.path", "a role appears twice");
  if (!(t.escalation.timeout_hours > 0)) error("shape", "escalation.timeout_hours", "must be positive");

  // Budgets are enforced outside the agents and pause at the limit.
  const b = t.budget;
  if ((b.on_limit ?? "pause") !== "pause") error("budget-pause", "budget.on_limit", "spending must pause at the limit");
  if (!(b.monthly_limit > 0)) error("budget", "budget.monthly_limit", "must be positive");
  let total = 0;
  for (const [r, amount] of Object.entries(b.per_role ?? {})) {
    roleRef("budget.per_role", r);
    if (!(amount > 0)) error("budget", `budget.per_role.${r}`, "must be positive");
    total += amount;
  }
  if (total > b.monthly_limit) error("budget", "budget.per_role", "per-role limits exceed the company limit");

  return issues;
}

// ---- org -----------------------------------------------------------------

// Who approves a role's gated actions: the nearest human above it. The owner,
// with nobody above, approves its own.
export function approverOf(t, roleId) {
  const roles = new Map((t.roles ?? []).map((r) => [r.id, r]));
  const seen = new Set([roleId]);
  let r = roles.get(roleId);
  if (r && !r.reports_to) return r.kind === "human" ? r.id : null;
  for (r = roles.get(r?.reports_to); r && !seen.has(r.id); r = roles.get(r.reports_to)) {
    if (r.kind === "human") return r.id;
    seen.add(r.id);
  }
  return null;
}

export function orgLines(t) {
  const roles = (t.roles ?? []).filter((r) => r.enabled !== false);
  const kids = (id) => roles.filter((r) => r.reports_to === id);
  const lines = [];
  const walk = (r, depth) => {
    const gated = (r.actions ?? []).filter((a) => a.side_effect).map((a) => `${a.id}:${a.tier}`);
    const label = r.kind === "human" ? `${r.title} [human seat: ${r.id}]` : `${r.title} (${r.id}, ${r.model_class ?? "no model_class"})`;
    lines.push(`${"  ".repeat(depth)}${label}${r.owns?.length ? ` owns ${r.owns.join(", ")}` : ""}`);
    if (gated.length) lines.push(`${"  ".repeat(depth + 1)}gated: ${gated.join(", ")} -> approver ${approverOf(t, r.id)}`);
    kids(r.id).forEach((k) => walk(k, depth + 1));
  };
  roles.filter((r) => !r.reports_to).forEach((r) => walk(r, 0));
  return lines;
}

// ---- software-factory policy ---------------------------------------------

// Maps action tiers onto software-factory's `policy:` values. Only
// `autonomous` becomes auto; shadow means the agent may draft but not act.
const TIER_TO_POLICY = { autonomous: "auto", sampled: "manual", approve_each: "manual", shadow: "never" };

export function sfPolicy(t) {
  const policy = {};
  for (const r of t.roles ?? [])
    for (const a of r.actions ?? [])
      if (a.software_factory) {
        const v = TIER_TO_POLICY[a.tier];
        const prev = policy[a.software_factory];
        // Two actions mapping to one key: the stricter wins.
        const order = ["never", "manual", "auto"];
        policy[a.software_factory] = prev && order.indexOf(prev) < order.indexOf(v) ? prev : v;
      }
  return policy;
}

// ---- cli -----------------------------------------------------------------

function main(argv) {
  const flags = new Set(argv.filter((a) => a.startsWith("--")));
  const paths = argv.filter((a) => !a.startsWith("--"));
  if (!paths.length) {
    console.error("usage: validate.mjs <company.yaml>... [--strict] [--json] | --sf-policy | --org <company.yaml>");
    return 2;
  }
  let failed = false;
  for (const path of paths) {
    let t;
    try {
      t = loadYaml(path);
    } catch (e) {
      console.error(`${path}: ${e.message}`);
      return 2;
    }
    if (flags.has("--org")) {
      orgLines(t).forEach((l) => console.log(l));
      continue;
    }
    if (flags.has("--sf-policy")) {
      console.log("policy:");
      for (const [k, v] of Object.entries(sfPolicy(t))) console.log(`  ${k}: ${v}`);
      continue;
    }
    const issues = check(t);
    const blocking = issues.filter((i) => i.severity === "error" || flags.has("--strict"));
    if (flags.has("--json")) console.log(JSON.stringify({ path, ok: !blocking.length, issues }));
    else {
      for (const i of issues) console.log(`${path}: ${i.severity}: [${i.rule}] ${i.where}: ${i.message}`);
      if (!blocking.length) console.log(`${path}: ok (${issues.length} warnings)`);
    }
    failed ||= blocking.length > 0;
  }
  return failed ? 1 : 0;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url))
  process.exitCode = main(process.argv.slice(2));
