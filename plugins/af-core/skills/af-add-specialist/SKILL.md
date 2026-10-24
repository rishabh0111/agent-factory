---
name: af-add-specialist
description: Add a new specialist department to agent-factory, or add skills to an existing one.
disable-model-invocation: true
---

# Add a specialist

Run this from the root of the agent-factory repository. One run adds one department: its plugin, its specialist, its skills, its marketplace entry and its card on the website. Re-running for an existing department adds skills to it instead.

## 1. Settle the department

Ask once, with a recommended answer for each, and look up anything the repository already shows:

- **Department id**: `af-<department>`, lowercase and hyphenated, e.g. `af-procurement`. It must not already exist under `plugins/`, unless you are adding skills to it.
- **Specialist name**: `<department>-specialist`.
- **Display name** for the website, e.g. "Procurement".
- **Scope**: what the specialist works on, as a comma-separated phrase. It completes "Procurement specialist for …".
- **Website line** (8 words at most) and **example ask** (10 words at most), in the voice of the existing entries in `docs/team.json`.
- **Accent**: a palette token from the existing cards. Pick one used least.
- **Skills**: the jobs this department does. For each, either copy an existing skill folder the user points to, or write a new one with `/sk-build-skill`. That skill comes from the skills repository: install it with `/plugin install skills-core --marketplace rishabh0111/skills`.

Done when every field has an answer.

## 2. Create the plugin

```
plugins/<id>/
  .claude-plugin/plugin.json
  agents/<agent>.md
  skills/<skill>/SKILL.md      one folder per skill
  README.md
  CONNECTORS.md                only when a skill reads an outside system
```

- `plugin.json`: copy the shape of an existing department's file, with this plugin's `name` and a one-line `description` ("<Display name> specialist (<agent>) and its department skills.").
- The agent file: copy [../../templates/specialist.md](../../templates/specialist.md) and replace `{{agent}}`, `{{Role}}`, `{{role}}` and `{{scope}}`. Leave the `skills` markers empty; the build fills them.
- `README.md`: copy the shape of an existing department's README: one line on what the department does, the install line `/plugin install <id> --marketplace rishabh0111/agent-factory`, the `/af-setup` context line, empty `skills` markers for the build to fill, and a connectors line.
- Skill frontmatter `name` must equal the folder name, and every skill needs a `description` naming when to use it.

Done when the folder matches the tree above.

## 3. Register it

- **Marketplace:** add `{ "name": "<id>", "source": "./plugins/<id>", "description": "<same as plugin.json>" }` to `.claude-plugin/marketplace.json`, in the same place as the other departments.
- **Website and README:** add an entry to `docs/team.json` with `id`, `agent`, `name`, `line`, `ask`, `accent`, and `illustration`.
  - `illustration` is `null` until a custom one exists; the site then shows the default portrait.
  - `interviews` (optional) lists the skill folders that ask the user questions in rounds. The build marks them in the specialist's skill list so the specialist hands them back to the main session.
  - For a custom illustration, draw `docs/assets/<department>.svg`: 320×320, flat shapes, the `--accent-*` palette tokens in `docs/assets/site.css`, the existing `docs/assets/*.svg` portraits as the style reference, one accent colour, two or three role props, `<title>` and `<desc>`. Or ask the design specialist to draw it. Then set the path.

## 4. Build and check

```
node scripts/build-site.mjs
npx -y @anthropic-ai/claude-code@2.1.308 plugin validate . --strict
node scripts/build-site.mjs --check
```

The build writes the team grid on the website, the specialists table in `README.md`, and the skill list in every specialist file. Fix anything the validator or `--check` reports, then run all three again.

Done when validation passes and `--check` exits 0.

## 5. Report

Tell the user:
- the files created
- the install line for the new department
- whether it has a custom illustration or the default portrait

Suggest a commit message such as `feat: add <display name> specialist`.
