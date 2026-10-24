#!/usr/bin/env node
// Regenerates the blocks that come from docs/team.json and the plugin folders.
//
//   node scripts/build-site.mjs           write every generated block
//   node scripts/build-site.mjs --check   exit 1 if any block is out of date
//
// Outputs (each only between its markers; everything else is left as it is):
//   docs/index.html                       <!-- team:start --> ... <!-- team:end -->      team grid
//   README.md                             <!-- team:start --> ... <!-- team:end -->      specialists table
//   README.md                             <!-- team-grid:start --> ... <!-- team-grid:end -->  illustrated team grid
//   README.md                             <!-- core:start --> ... <!-- core:end -->      af-core commands table
//   plugins/<id>/agents/<agent>.md        <!-- skills:start --> ... <!-- skills:end -->  skills list, marking the
//                                         skills docs/team.json lists under "interviews"
//   plugins/<id>/README.md                <!-- skills:start --> ... <!-- skills:end -->  skill and command table
//
// Written whole:
//   plugins/af-core/skills/af-ask/catalog.md   every department, its specialist and skills
//
// Plain Node, no dependencies. Running it twice changes nothing the second time.

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DOCS = join(ROOT, "docs");
const REPO_URL = "https://github.com/rishabh0111/agent-factory";
const CHECK = process.argv.includes("--check");

const fail = (msg) => { console.error(`build-site: ${msg}`); process.exit(2); };
const read = (p) => readFileSync(p, "utf8");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const unesc = (s) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");

// ---------- data ----------

const team = JSON.parse(read(join(DOCS, "team.json")));
if (!Array.isArray(team) || team.length === 0) fail("docs/team.json must be a non-empty array");
const seen = new Set();
team.forEach((t, i) => {
  const where = `docs/team.json entry ${i + 1}`;
  for (const k of ["id", "agent", "name", "line", "ask", "accent"]) {
    if (typeof t[k] !== "string" || !t[k].trim()) fail(`${where}: "${k}" must be a non-empty string`);
  }
  if (!("illustration" in t) || (t.illustration !== null && typeof t.illustration !== "string")) {
    fail(`${where}: "illustration" must be a path under docs/ or null`);
  }
  if (!/^af-[a-z0-9-]+$/.test(t.id)) fail(`${where}: id "${t.id}" should look like af-<name>`);
  if (!/^[a-z][a-z0-9-]*$/.test(t.accent)) fail(`${where}: accent "${t.accent}" must be a palette token name, e.g. teal`);
  if (seen.has(t.id)) fail(`${where}: duplicate id "${t.id}"`);
  seen.add(t.id);
  if (t.illustration && !existsSync(join(DOCS, t.illustration))) fail(`${where}: ${t.illustration} not found under docs/`);
  // "interviews": skills that question the user in rounds. A subagent cannot wait for answers, so they run in the main session.
  if ("interviews" in t) {
    if (!Array.isArray(t.interviews) || t.interviews.some((n) => typeof n !== "string")) fail(`${where}: "interviews" must be an array of skill folder names`);
    for (const n of t.interviews) {
      if (!existsSync(join(ROOT, "plugins", t.id, "skills", n, "SKILL.md"))) fail(`${where}: interviews skill "${n}" not found in plugins/${t.id}/skills/`);
    }
  }
});

const INTERVIEW_NOTE = "interviews the user: runs in the main session";
const interviews = (id) => new Set(team.find((t) => t.id === id)?.interviews || []);

// ---------- the team grid ----------

function svgTitle(path) {
  const m = read(path).match(/<title[^>]*>([^<]*)<\/title>/);
  if (!m) fail(`${path} has no <title>; it is the image's alt text`);
  return unesc(m[1]).trim();
}

const DEFAULT_PORTRAIT = read(join(DOCS, "assets", "role-default.svg"));

function defaultPortrait(t) {
  const label = `${t.name} specialist`;
  const tid = `rd-${t.id}-t`;
  const initial = [...t.name.trim()][0].toUpperCase();
  return DEFAULT_PORTRAIT.trim()
    .replace(/\s*width="320" height="320"/, "")
    .replace(/aria-labelledby="rd-t"/, `aria-labelledby="${tid}"`)
    .replace(/<title id="rd-t">[^<]*<\/title>/, `<title id="${tid}">${esc(label)}</title>`)
    .replace(/(<text class="rd-in"[^>]*>)[^<]*(<\/text>)/, `$1${esc(initial)}$2`);
}

function card(t) {
  const picture = t.illustration
    ? `<img src="${esc(t.illustration)}" alt="${esc(svgTitle(join(DOCS, t.illustration)))}" width="320" height="320" loading="lazy" decoding="async">`
    : defaultPortrait(t);
  return [
    `<li class="card reveal" style="--accent: var(--accent-${t.accent})">`,
    picture,
    `<h3><a href="${REPO_URL}/tree/main/plugins/${esc(t.id)}">${esc(t.name)}<span class="visually-hidden"> plugin on GitHub</span></a></h3>`,
    `<p class="line">${esc(t.line)}</p>`,
    `<p class="bubble">“${esc(t.ask)}”</p>`,
    `</li>`,
  ].join("\n");
}

// ---------- README table and agent skill lists ----------

const mdCell = (s) => String(s).replace(/\|/g, "\\|").replace(/\n/g, " ");

function readmeTable() {
  return [
    "| Plugin | Specialist | Works on |",
    "|---|---|---|",
    ...team.map((t) => `| \`${t.id}\` | ${mdCell(t.agent)} | ${mdCell(t.line)} |`),
  ].join("\n");
}

// The README's illustrated grid: one cell per department, GRID_COLUMNS to a row,
// each with the role illustration (or the default portrait), the name linked to
// its plugin folder, the one-line summary and the plugin name.
const GRID_COLUMNS = 3;

function gridCell(t) {
  const illustration = t.illustration || "assets/role-default.svg";
  const alt = t.illustration ? svgTitle(join(DOCS, t.illustration)) : `${t.name} specialist`;
  return [
    `<td align="center" valign="top" width="${Math.floor(100 / GRID_COLUMNS)}%">`,
    `<img src="docs/${esc(illustration)}" alt="${esc(alt)}" width="140" height="140"><br>`,
    `<a href="plugins/${esc(t.id)}"><b>${esc(t.name)}</b></a><br>`,
    `<sub>${esc(t.line)}</sub><br>`,
    `<code>${esc(t.id)}</code>`,
    `</td>`,
  ].join("");
}

function readmeGrid() {
  const rows = [];
  for (let i = 0; i < team.length; i += GRID_COLUMNS) {
    const cells = team.slice(i, i + GRID_COLUMNS).map(gridCell);
    while (cells.length < GRID_COLUMNS) cells.push(`<td width="${Math.floor(100 / GRID_COLUMNS)}%"></td>`);
    rows.push(["<tr>", ...cells, "</tr>"].join("\n"));
  }
  return [
    `${team.length} departments, each a plugin with one specialist and its skills.`,
    "",
    "<table>",
    ...rows,
    "</table>",
  ].join("\n");
}

function readmeCore() {
  return [
    "| Command | What it does |",
    "|---|---|",
    ...skillsOf("af-core").map((s) => `| \`/${s.name}\` | ${mdCell(s.what).replace(/\s+/g, " ").trim()} |`),
  ].join("\n");
}

function skillsList(t) {
  const dir = join(ROOT, "plugins", t.id, "skills");
  if (!existsSync(dir)) fail(`plugins/${t.id}/skills/ not found`);
  const names = readdirSync(dir).filter((n) => statSync(join(dir, n)).isDirectory()).sort();
  if (names.length === 0) fail(`plugins/${t.id}/skills/ has no skill folders`);
  const asks = interviews(t.id);
  return names.map((n) => `- \`${t.id}:${n}\`${asks.has(n) ? ` (${INTERVIEW_NOTE})` : ""}`).join("\n");
}

// ---------- the af-ask catalog ----------

function frontmatter(text, file) {
  const m = text.replace(/^﻿/, "").match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) fail(`no frontmatter in ${file}`);
  const out = {};
  const lines = m[1].split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const kv = lines[i].match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!kv) continue;
    let [, key, val] = kv;
    if (/^[>|][-+]?$/.test(val)) {
      const block = [];
      while (i + 1 < lines.length && (/^\s+\S/.test(lines[i + 1]) || lines[i + 1].trim() === "")) block.push(lines[++i].trim());
      val = block.join(val.startsWith(">") ? " " : "\n").trim();
    } else if (val.startsWith('"') && val.endsWith('"') && val.length > 1) {
      try { val = JSON.parse(val); } catch { val = val.slice(1, -1); }
    } else if (val.startsWith("'") && val.endsWith("'") && val.length > 1) {
      val = val.slice(1, -1).replace(/''/g, "'");
    }
    out[key] = val;
  }
  return out;
}

function firstSentence(desc) {
  const s = String(desc || "").replace(/\\n/g, " ").replace(/\s+/g, " ").trim();
  const re = /^.*?(?<!\b(?:e\.g|i\.e|vs|etc|cf))[.!?](?=\s|$)/;
  const m = s.match(re);
  if (!m) return s;
  if (m[0].length >= 30) return m[0];
  const rest = s.slice(m[0].length).trim();
  const m2 = rest.match(re);
  return (m[0] + " " + (m2 ? m2[0] : rest)).trim();
}

function skillsOf(id) {
  const dir = join(ROOT, "plugins", id, "skills");
  if (!existsSync(dir)) fail(`plugins/${id}/skills/ not found`);
  return readdirSync(dir)
    .filter((n) => existsSync(join(dir, n, "SKILL.md")))
    .map((n) => {
      const file = join(dir, n, "SKILL.md");
      const fm = frontmatter(read(file), file);
      return { name: fm.name || n, what: firstSentence(fm.description), asks: interviews(id).has(n) };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function skillsTable(id) {
  return [
    "| Skill | What it is for |",
    "|---|---|",
    ...skillsOf(id).map((s) => `| \`${s.name}\` | ${mdCell(s.what).replace(/\s+/g, " ").trim()}${s.asks ? ` *Interviews the user: runs in the main session.*` : ""} |`),
  ];
}

// The plugin README's table: the invocable name of every skill and command,
// its one-line purpose, and the interview mark.
function commandsOf(id) {
  const dir = join(ROOT, "plugins", id, "commands");
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((n) => n.endsWith(".md"))
    .map((n) => {
      const file = join(dir, n);
      return { name: n.slice(0, -3), what: firstSentence(frontmatter(read(file), file).description) };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function readmeSkills(id) {
  const row = (s) => `| \`/${id}:${s.name}\` | ${mdCell(s.what).replace(/\s+/g, " ").trim()} | ${s.asks ? "yes" : ""} |`;
  const out = ["| Skill | What it is for | Interviews you |", "|---|---|---|", ...skillsOf(id).map(row)];
  const commands = commandsOf(id);
  if (commands.length) out.push("", "| Command | What it is for |", "|---|---|", ...commands.map((c) => `| \`/${id}:${c.name}\` | ${mdCell(c.what).replace(/\s+/g, " ").trim()} |`));
  return out.join("\n");
}

// Where a plugin says which outside systems its skills read: CONNECTORS.md,
// a bundled .mcp.json, or integration guides under tools/.
function connectorsOf(id) {
  const dir = join(ROOT, "plugins", id);
  const found = [];
  if (existsSync(join(dir, "CONNECTORS.md"))) found.push("`CONNECTORS.md` lists them");
  if (existsSync(join(dir, ".mcp.json"))) {
    let servers;
    try { servers = Object.keys(JSON.parse(read(join(dir, ".mcp.json"))).mcpServers || {}); } catch { fail(`plugins/${id}/.mcp.json is not valid JSON`); }
    if (servers.length) found.push(`\`.mcp.json\` bundles ${servers.length} MCP server${servers.length === 1 ? "" : "s"}`);
  }
  const guides = join(dir, "tools", "integrations");
  if (existsSync(guides) && statSync(guides).isDirectory()) {
    found.push(existsSync(join(dir, "tools", "REGISTRY.md"))
      ? "`tools/REGISTRY.md` indexes the integration guides in `tools/integrations/`"
      : "integration guides in `tools/integrations/`");
  }
  return found.length ? found.join("; ") : "none";
}

function catalog() {
  const out = [
    "# Catalog",
    "",
    "Generated by `scripts/build-site.mjs` from `docs/team.json` and `plugins/*/skills/*/SKILL.md`. Do not edit by hand; regenerate with `node scripts/build-site.mjs`.",
  ];
  for (const t of team) {
    out.push(
      "",
      `## ${t.name}`,
      "",
      `- Plugin: \`${t.id}\``,
      `- Specialist: \`${t.agent}\`. ${t.line}`,
      `- Install: \`/plugin install ${t.id} --marketplace rishabh0111/agent-factory\``,
      `- Connectors: ${connectorsOf(t.id)}`,
      "",
      ...skillsTable(t.id),
    );
  }
  out.push("", "## `af-core`", "", ...skillsTable("af-core"));
  return out.join("\n") + "\n";
}

// ---------- marker replacement ----------

function fill(text, name, body, file) {
  const start = `<!-- ${name}:start -->`;
  const end = `<!-- ${name}:end -->`;
  const a = text.indexOf(start);
  const b = text.indexOf(end);
  if (a < 0 || b < 0 || b < a) fail(`${file}: missing ${start} ... ${end} markers`);
  if (text.indexOf(start, a + 1) >= 0) fail(`${file}: ${start} appears more than once`);
  const eol = text.includes("\r\n") ? "\r\n" : "\n";
  const inner = eol + body.replace(/\r?\n/g, eol) + eol;
  return text.slice(0, a + start.length) + inner + text.slice(b);
}

const jobs = [
  { file: join(DOCS, "index.html"), name: "team", body: () => team.map(card).join("\n") },
  { file: join(ROOT, "README.md"), name: "team", body: readmeTable },
  { file: join(ROOT, "README.md"), name: "team-grid", body: readmeGrid },
  { file: join(ROOT, "README.md"), name: "core", body: readmeCore },
  ...team.map((t) => ({ file: join(ROOT, "plugins", t.id, "agents", `${t.agent}.md`), name: "skills", body: () => skillsList(t) })),
  ...team.map((t) => ({ file: join(ROOT, "plugins", t.id, "README.md"), name: "skills", body: () => readmeSkills(t.id) })),
  { file: join(ROOT, "plugins", "af-core", "skills", "af-ask", "catalog.md"), whole: catalog },
];

const stale = [];
for (const job of jobs) {
  const rel = job.file.slice(ROOT.length + 1).replace(/\\/g, "/");
  if (job.whole ? !existsSync(dirname(job.file)) : !existsSync(job.file)) fail(`${job.whole ? dirname(rel) : rel} not found`);
  const before = existsSync(job.file) ? read(job.file) : null;
  const after = job.whole ? job.whole() : fill(before, job.name, job.body(), rel);
  if (after === before) continue;
  stale.push(rel);
  if (!CHECK) writeFileSync(job.file, after);
}

if (CHECK) {
  if (stale.length) {
    console.error(`build-site: out of date, run node scripts/build-site.mjs:\n  ${stale.join("\n  ")}`);
    process.exit(1);
  }
  console.log(`build-site: up to date (${jobs.length} files checked)`);
} else {
  console.log(stale.length ? `build-site: updated\n  ${stale.join("\n  ")}` : "build-site: nothing to change");
}
