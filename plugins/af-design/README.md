# Design

Design critique, accessibility reviews, design systems, UX copy, user research and developer handoff, run by the design specialist (`design-specialist`).

## Installation

```
/plugin install af-design --marketplace rishabh0111/agent-factory
```

## Context

Run `/af-setup` (from `af-core`) first. It writes your `company.md` and loads it into every session, so these skills work from your products, customers, voice and policies. UX copy follows its Voice section.

## Skills

Skills run when your request matches, or by name. A skill marked under *Interviews you* asks you questions in rounds, so run it yourself in the main session rather than through the specialist.

<!-- skills:start -->
| Skill | What it is for | Interviews you |
|---|---|---|
| `/af-design:accessibility-review` | Run a WCAG 2.1 AA accessibility audit on a design or page. |  |
| `/af-design:design-critique` | Get structured design feedback on usability, hierarchy, and consistency. |  |
| `/af-design:design-handoff` | Generate developer handoff specs from a design. |  |
| `/af-design:design-system` | Audit, document, or extend your design system. |  |
| `/af-design:research-synthesis` | Use when synthesizing usability test notes, UX interviews, surveys or NPS responses into themes, user segments and recommendations for a design, flow or interface. |  |
| `/af-design:user-research` | Use when planning or running UX research for a design, such as a usability test, a UX research plan, an interview guide about how people use an interface, or a survey about a flow. |  |
| `/af-design:ux-copy` | Write or review UX copy — microcopy, error messages, empty states, CTAs. |  |
<!-- skills:end -->

## Connectors

Skills that read a design tool, knowledge base or user-feedback tool expect that system's connector: [CONNECTORS.md](CONNECTORS.md) lists them, and the plugin's `.mcp.json` bundles the servers. With nothing connected, paste or upload the data instead. Every skill also works from a description or a screenshot.

## Licence

[LICENSE](LICENSE).
