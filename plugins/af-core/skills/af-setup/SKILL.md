---
name: af-setup
description: Set up company.md and load it into every session, specialist and department skill.
disable-model-invocation: true
---

# Setup

Run this from the root of the user's repository. One run leaves three things in place: a filled `company.md` at the root, a project `CLAUDE.md` that imports it, and each installed department's context file pointing at it. Re-running updates what changed and leaves the rest.

`company.md` is the single source of truth for company facts. Everything else points at it; copy a fact out of it only where a skill needs a fixed format.

## 1. company.md

**Exists:** read it, list the sections that are empty or still hold the template's guidance text, and ask whether to fill those now.

**Missing:** offer two ways and recommend the first.

1. **Draft, then correct.** Read what the repository already says about the company: README, website copy, docs, pricing pages, `package.json` or similar. Draft every section of [the template](../../templates/company.md), then show the draft and ask what is wrong or missing.
2. **Copy the template.** Copy [the template](../../templates/company.md) to `company.md` at the root and leave the user to fill it.

Fill in **rounds**, one round per group of sections, waiting for each answer before the next round:

1. Products and Customers
2. Voice
3. Policies and Limits
4. Systems and Glossary

Learnings starts empty. Leave a section's guidance text in place when the user has nothing for it yet.

Done when `company.md` exists at the root and the user has seen every section.

## 2. CLAUDE.md

The project `CLAUDE.md` loads into the main session and into every subagent, so an import there carries `company.md` to skills and specialists alike.

- Find the project `CLAUDE.md`: `./CLAUDE.md`, else `./.claude/CLAUDE.md`. Neither exists: create `./CLAUDE.md`.
- Add this section, unless an `@company.md` import is already there:

  ```markdown
  ## Company

  @company.md
  ```

  From `.claude/CLAUDE.md` the import is `@../company.md`, since imports resolve from the importing file.

Done when the project `CLAUDE.md` holds exactly one import of `company.md`.

## 3. Department context files

Some department skills read their own context file before `company.md` reaches them. For each department plugin that is installed (its skills appear as `af-<department>:<skill>`), do its row:

| Plugin | File | What to do |
|---|---|---|
| `af-legal` | `.claude/legal.local.md` | Point at company.md (below). Under the pointer, keep or add `## Contract Review Positions`, `## NDA Defaults` and `## Response Templates`, filled from the legal positions in company.md's Policies and Limits when it states them. These are legal's own playbook; the af-legal README has an example. |
| `af-marketing` | `.agents/product-marketing.md` | Point at company.md (below). Product, audience, voice and learnings stay in company.md; the `product-marketing` skill adds the marketing-only sections (competitors, differentiation, objections, proof points) under the pointer. |
| `af-small-business` | the `## Business context` block | Nothing to write. `smb-onboard` takes the answers company.md already gives and saves the block into company.md. Tell the user to run it next to connect their tools. |
| `af-human-resources`, `af-operations` | none | Their skills read company.md directly. Put HR and operations facts (headquarters, headcount, benefits, approval chain, compliance frameworks, fiscal year) under Policies. |

**The pointer** is the first lines of the file:

```markdown
<!-- Company facts live in company.md, loaded through CLAUDE.md. Set up by /af-setup. -->
Products, customers, voice, policies, limits, systems and glossary: read `company.md` at the repository root. This file holds only what is specific to <department>.
```

When the file already exists, add the pointer at the top and keep the rest. Where its content contradicts company.md, show both versions and ask which is right; correct company.md, not the copy.

Done when every installed department in the table has its row done.

## 4. Report

Tell the user:
- which `company.md` sections are filled and which are still empty
- the `CLAUDE.md` that now imports it
- each department file written or updated, and the departments with nothing to write
- the next step: `/af-ask` to find a specialist, or `smb-onboard` when `af-small-business` is installed
