# agent-factory

Scope: a generic, open-source kit that runs a whole company on agents (see README.md). This repo is only about the company: roles, decision rights, hand-offs, operating rhythm, guardrails, company templates, and the optional knowledge add-on.

- Out of scope here: how software gets built. That is the separate `software-factory` repo; refer to it as an external dependency, never design it here.
- Keep the core generic. Anything specific to one company, vendor, market or jurisdiction belongs in examples or user configuration.
- `docs/conclusions.md` records settled findings. Add to it only with evidence, and say where the evidence came from.
- Form follows software-factory: skills only, in `skills/`. `agent-factory` is the entry point and the `af-*` skills are its stages. Every skill follows [docs/skill-conventions.md](docs/skill-conventions.md).
- Keep each `SKILL.md` under 10,000 characters; put detail in `references/` and `assets/`.
- The company file rules live in `skills/af-setup/scripts/validate.mjs` and are listed in `skills/af-setup/references/rules.md`; change both together, with a test in `tests/`. Run `node --test tests/*.test.mjs`.
