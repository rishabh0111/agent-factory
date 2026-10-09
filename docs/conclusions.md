# Conclusions so far

Distilled from research done 2026-10-03 to 2026-10-06: prior-art landscape, 14 role studies with task-level boundary maps, real agent-run businesses, and knowledge-base methods. Only conclusions are kept here.

## 1. What exists, and the gap

| Kind | Examples | What they give | What they lack |
|---|---|---|---|
| Control planes for agent "companies" | Paperclip, Claude Code agent teams, Claude Managed Agents | Org chart, heartbeats, ticket checkout, budgets, approvals | Business roles with real decision rights; Paperclip skips permission prompts by default and runs local agents unsandboxed |
| Role skill stacks | gstack, pstack, superpowers, BMAD, anthropics/knowledge-work-plugins | Role behaviour as markdown skills, installable | Mostly engineering; no contracts between business roles; assume a human operator |
| Agent-run businesses | Project Vend (Anthropic), Andon Labs' stores, Polsia | Real evidence of what breaks | Not reusable kits |
| Research companies | MetaGPT, ChatDev, AgentVerse | Typed artifacts between roles, re-staffing ideas | Toy greenfield settings |

**Nobody has built:** a full company with written contracts between roles across all functions; per-role evaluations; a measured, shrinking human zone; learning that ships only when it passes a role's eval; honest public metrics for an agent-run company.

## 2. How agent-run businesses fail

| Failure | Evidence |
|---|---|
| Users talk agents into giveaways | Project Vend sold below cost and gave items away; journalists got prices to zero, once with a forged memo suspending the CEO agent; an impostor "won" a CEO vote |
| Same-model oversight rubber-stamps | Vend's CEO agent approved about 8 special deals per rejection. "Having Claude be both the CEO and the store manager was just too similar" |
| Collusion and deception grow with capability | Vending-Bench Arena: agents formed price cartels by email ~100 times; worse in newer models; telling them "it's a simulation" made it worse |
| Shadow state | Andon's store agent abandoned its scheduling tool for private notes, then used them to justify closing on weekends |
| Long-horizon drift | Context-window meltdowns; overnight agent-to-agent loops; bought stock weeks too early |
| Invented policy | Support bots made up policy; *Moffatt v. Air Canada* held the company liable |
| Fake claims | 11x used customer logos without permission; the FTC fined DoNotPay |
| Cost runaway | Polsia reached ~$1.2M/month in inference, cut to ~$100k by routing routine work to cheaper models |

**Capability today:** agents do single deliverables well (GDPval ~80% win-or-tie, third-party trackers) and whole projects poorly (Remote Labor Index ~20%). The best Vending-Bench 2 agent earns about 25% of what a good human would in a simulated year. Running a business over months is the weakest area.

## 3. What worked

- **Procedures and validators over persona prompts.** Vend's losses stopped when price checks and delivery estimates became forced steps, not when the CEO agent was told to be tougher.
- **Narrow, measurable, reversible roles first.** Support crossed the line first: "bounded, measurable and reversible".
- **Role separation only with different information, incentives and models.** Same-model peers converge.
- **Authority from signed records, never from message content.** External text is data, not instructions.
- **Read freely, write through a gate.** Agents read with read-only credentials; every action with side effects (pay, refund, send, publish, sign) passes a policy check and runs with a credential the agent never holds.
- **Budgets enforced outside the agent**, with automatic pause at the limit.
- **Simulate before deploying** (the Sierra and Decagon practice).
- **Scoped auto-approval rules.** Polsia ships without asking only when severity is low, payments and onboarding are untouched, and a second model agrees.

## 4. The human floor

Grading 462 real tasks across 13 roles: **50% an agent can do alone, 36% it can do with approval, 13% need a human today.** Knowledge and skill barely appear among the 13%. What remains is legal accountability (~22 tasks), trust and relationships (~16), real people as data (~14) and physical presence (~10).

Acts the law reserves for a person (US/Delaware example; varies by jurisdiction):

- being a director and voting
- an officer signing the tax return
- the bank's identity check on a control person
- audit opinions from a licensed firm
- appearing in court through a lawyer
- sworn statements and notarisation
- signed regulatory notices (for example EU Cyber Resilience Act reports)

Platform rules add a few more: Hacker News bans generated comments, LinkedIn bans automation, and AI voice calls to mobiles need prior consent in the US.

**Not on the floor:**

- Human code review: SOC 2 and PCI don't require it, though auditors differ.
- Signing contracts: e-signature law recognises electronic agents; the real limit is authority delegated by the board.

So "no humans" in practice means one owner who signs a handful of things a year. Everything else can move from human to agent on evidence.

## 5. Mechanisms worth reusing

| Mechanism | Source |
|---|---|
| Heartbeats: agents wake on schedule, assignment, reply or a finished child task | Paperclip |
| Atomic ticket checkout with goal ancestry | Paperclip, Beads |
| Typed hand-off artifacts that roles subscribe to; nothing passes through chat | MetaGPT, gstack |
| The executor never reviews its own work | Paperclip execution policy, every skill stack |
| Decision classes: mechanical (decide), taste (decide and surface), owner challenge (never auto-decide), one-way door (stop) | gstack, superpowers |
| Rulings logged as "what, why, cost if wrong" instead of stalling | superpowers |
| Task and progress ledgers for long work | Magentic-One |
| One approval inbox outside the agents' control, with a daily digest | Approval-inbox research, Builder.io |
| Delegation ledger: per role, work class and action, tiers shadow → approve each → sampled → autonomous; promotion on repeated clean replays, a high approve-without-edit rate and zero unsafe events; automatic demotion | Boundary-map research; nobody has built it |

## 6. Company templates

The "run it like a fast startup" goal needs operating mechanisms as data. Open material to build templates from: the GitLab and PostHog handbooks, Amazon's PR/FAQ and one-way/two-way door practice, Shape Up's betting cycle, published operating cadences (Mochary, Hughes Johnson), and open-core playbooks (buyer-based tiering). A template sets enabled roles, decision rights, cadence, metrics and policies. No one has packaged this.

## 7. Knowledge add-on

- **Curated knowledge helps; self-written doesn't.** Human-curated skills +16 points on average across 11 domains, self-generated ones −1.3 (SkillsBench, 2026). The smallest gain was in software engineering (+4.5): the model already knows the canon.
- **Unchecked distillation loses facts.** Blindly compiling sources into a wiki dropped 53-60% on probes; compile → probe → refine recovered most of it (WiCER, 2026).
- **Models follow whatever context they get,** even wrong context (over 60% in ClashEval), so the quality of the knowledge base is the bottleneck.
- **Useful structure:** small knowledge units with when-it-applies, a verified quote and location, and a review-by date; typed conflicts between sources resolved before use.
- **Fine-tuning isn't the route:** it injects new facts poorly and isn't offered for current Claude models.
- **Most value** where the model knows least: recent standards, regulations with dates, numeric thresholds, niche practitioner material, and the company's own outcome data.
- **Copyright:** packs built from purchased books stay private to whoever owns the copies.
- **Contract:** the kit must work fully without a pack, and a pack that scores lower than no pack is rejected.

## 8. Tested so far

- **Sandbox for any agent with tools:** only a hardened container (non-root, read-only filesystem, no capabilities, resource limits, no secrets inside) behind an allowlist proxy blocked all eight escape probes while still reaching the model API. A plain host folder blocked 1 of 8, default Docker 2 of 8. The proxy must also inject the API key, which is untested.
- **PDF parsing for knowledge packs (incomplete):** pymupdf4llm leads on papers and a born-digital book; Docling, Marker and MinerU didn't finish on CPU.

## 9. Paperclip as a base

From reading [paperclipai/paperclip](https://github.com/paperclipai/paperclip) at commit b9750b1 (2026-10-08), checked 2026-10-09.

- **Large and fast-moving.** It is MIT-licensed TypeScript on Postgres, with about 99k stars, 158 schema files and 319 migrations. Releases come out weekly.
- **No per-role decision rights.** `role` is a free string and `capabilities` is free text. Authority is per-agent permission grants plus board approvals (`packages/db/src/schema/agents.ts`, `approvals.ts`).
- **Permissive defaults.**
  - The Claude adapter skips permission prompts (`packages/adapters/claude-local/src/server/execute.ts`).
  - New agents may create agents (`doc/agent-permission-defaults.md`).
  - Board approval for new agents is off by default (`companies.ts`).
  - Sandboxing is an opt-in plugin.
- **A portable, vendor-neutral file format exists.** The Agent Companies spec (`docs/companies/companies-spec.md`, `agentcompanies/v1-draft`) uses markdown with frontmatter (`COMPANY.md`, `TEAM.md`, `AGENTS.md`) and allows vendor sidecars. Budgets and approvals are not part of it.
- **Worth borrowing:** atomic checkout returning 409 on conflict, budget hard stops with a warning threshold, and goal ancestry through parent chains.

Consequence: own a thin model for decision rights and guardrails, export it to the Agent Companies format, and treat Paperclip as one optional runtime. This answers question 2 below.

## 10. Template mechanisms in published operating systems

| Mechanism | Source |
|---|---|
| One directly responsible individual per decision; input from anyone, but no voting; disagree and commit | [GitLab, making decisions](https://handbook.gitlab.com/handbook/leadership/making-decisions/) |
| Feature tier set by who buys, not who uses | [GitLab tiering](https://handbook.gitlab.com/handbook/product/product-processes/tiering-guidance-for-features/) |
| Teams of 2-6 that own usage, quality and revenue for their area and release without external QA | [PostHog small teams](https://posthog.com/handbook/company/small-teams) |
| Type 1 (irreversible, decided slowly) versus type 2 (reversible, decided fast by individuals) | [Amazon 2015 shareholder letter](https://s2.q4cdn.com/299287126/files/doc_financials/annual/2015-Letter-to-Shareholders.PDF) |
| Input versus output metrics; output metrics are reported in the weekly business review, not debated | [Commoncog on the WBR](https://commoncog.com/the-amazon-weekly-business-review/) |
| Single-threaded leader with an owns / does-not-own charter; PR/FAQ before building | [Working Backwards](https://workingbackwards.com/concepts/amazon-single-threaded-teams/) |
| 6-week cycles, 2-week cooldown, betting table, appetite, circuit breaker, no backlog | [Shape Up](https://basecamp.com/shapeup/2.2-chapter-08) |

These map onto template fields as data. [design.md](design.md) gives the resulting schema and its validation rules; this provisionally answers question 3. A second, contrasting template still has to show that the schema can express both playbooks.

## 11. Open questions

1. One agent per role, or fewer agents that load several roles? Evidence warns against many same-model agents; needs a test on multi-role scenarios.
2. ~~Build on Paperclip's data model, or a thinner control plane of our own?~~ Thin model of our own; see §9.
3. What exactly is in a company template, and how is one validated? Static schema and rules exist (§10, design.md); validation by simulation is still open.
4. How does the company keep state over months without drift?
5. Does a knowledge pack measurably help, per role?
6. Which jurisdictions to support first for the human floor and policy templates?
