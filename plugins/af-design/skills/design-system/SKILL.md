---
name: design-system
description: Audit, document, or extend your design system. Use when checking for naming inconsistencies or hardcoded values across components, writing documentation for a component's variants, states, and accessibility notes, or designing a new pattern that fits the existing system, or writing a DESIGN.md from screens, Figma or a brief.
argument-hint: "[audit | document | extract | extend] <component or system>"
---

# /design-system

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../../CONNECTORS.md).

Manage your design system — audit for consistency, document components or the whole system, consolidate repeated patterns, or design new ones. Everything here works from screens, a Figma library or a written brief; no code access is needed.

## Usage

```
/design-system audit                    # Full system audit
/design-system document [component]     # Document a component
/design-system document                 # Write or refresh DESIGN.md for the whole system
/design-system extract [area]           # Consolidate repeated patterns into the system
/design-system extend [pattern]         # Design a new component or pattern
```

## Where the System Lives

- **`DESIGN.md`** at the root of the working folder (or where `docs/agents/work-docs.md` says, when that file exists) is the system's portable record: machine-readable tokens plus the rules for applying them. Design tools and coding agents read it, so new screens stay on-brand. [design-md.md](design-md.md) has the format and how to write it.
- **The Figma library** (styles, variables, components and variants), when **~~design tool** is connected.
- **Product context** comes from `company.md`, and from `PRODUCT.md` when the working folder has one. DESIGN.md stays strictly visual: it carries a product line only when that line is a durable brand commitment that constrains the visuals (a binding logo, an identity asset, an accessibility need).

Read whichever of these exist before any mode.

## Components of a Design System

### Design Tokens
Atomic values that define the visual language:
- Colors (brand, semantic, neutral)
- Typography (scale, weights, line heights)
- Spacing (scale, component padding)
- Borders (radius, width)
- Shadows (elevation levels)
- Motion (durations, easings)

Name tokens by meaning, in two layers: primitives (`oxblood-deep`, `space-4`) and semantic tokens that point at them (`text-danger`, `surface-raised`). A token earns its place by being reused with one meaning; a value used once stays a value.

### Components
Reusable UI elements with defined:
- Variants (primary, secondary, ghost)
- States (default, hover, focus, active, disabled, loading, error)
- Sizes (sm, md, lg)
- Behavior (interactions, animations)
- Accessibility (role, label, keyboard)

### Patterns
Common UI solutions combining components:
- Forms (input groups, validation, submission)
- Navigation (sidebar, tabs, breadcrumbs)
- Data display (tables, cards, lists)
- Feedback (toasts, modals, inline messages)
- Composition (form rows, toolbar groups, empty states)

## Principles

1. **Consistency over creativity** — The system exists so teams don't reinvent the wheel
2. **Flexibility within constraints** — Components should be composable, not rigid
3. **Document everything** — If it's not documented, it doesn't exist
4. **Version and migrate** — Breaking changes need migration paths
5. **Grow incrementally** — Add what is clearly reusable now: used three or more times with the same intent. Premature abstraction is worse than duplication.

## Modes

### audit

Review the library and a sample of real screens against the system. Check naming, token coverage (in Figma: fills, text and effects not linked to a style or variable; detached instances), component completeness (every variant, every state, docs), and drift between the library and the screens that use it. Fill in Output — Audit.

Done when every component in scope has a completeness score and every hard-coded value found is counted against its category.

### document [component]

Document one component from its Figma component set, its screens, or its spec. Fill in Output — Document.

Done when every variant and every state in the component set has a row, and the accessibility section names role, keyboard behaviour and what a screen reader announces.

### document (whole system)

Write or refresh `DESIGN.md` by following [design-md.md](design-md.md): scan mode when there are screens, a library or brand guidelines to read; seed mode when there is only a brief.

Done when DESIGN.md has frontmatter holding only tokens the system really uses, its sections are in the canonical order with none invented, and the qualitative language has been confirmed by the user.

### extract [area]

Consolidate repeated patterns from screens into the system by following [extract.md](extract.md).

Done when each extracted item has an entry in the library or DESIGN.md, and every screen that used the old version is listed with its replacement.

### extend [pattern]

Design a new component or pattern that fits the system. Check first whether an existing component, a variant of one, or a composition of several already covers the need. Fill in Output — Extend.

Done when the proposal uses only existing tokens (or names each new token and why), and every state and its accessibility behaviour is specified.

## Output — Audit

```markdown
## Design System Audit

### Summary
**Components reviewed:** [X] | **Issues found:** [X] | **Score:** [X/100]

### Naming Consistency
| Issue | Components | Recommendation |
|-------|------------|----------------|
| [Inconsistent naming] | [List] | [Standard to adopt] |

### Token Coverage
| Category | Defined | Hardcoded Values Found |
|----------|---------|----------------------|
| Colors | [X] | [X] fills not linked to a style or variable |
| Spacing | [X] | [X] instances of arbitrary values |
| Typography | [X] | [X] instances of custom fonts/sizes |

### Component Completeness
| Component | States | Variants | Docs | Score |
|-----------|--------|----------|------|-------|
| Button | ✅ | ✅ | ⚠️ | 8/10 |
| Input | ✅ | ⚠️ | ❌ | 5/10 |

### Patterns and Systemic Issues
- [A recurring gap, e.g. "Hard-coded greys in 15+ screens; three near-identical neutrals should be one token"]

### Priority Actions
1. [Most impactful improvement]
2. [Second priority]
3. [Third priority]
```

## Output — Document

```markdown
## Component: [Name]

### Description
[What this component is and when to use it]

### Variants
| Variant | Use When |
|---------|----------|
| [Primary] | [Main actions] |
| [Secondary] | [Supporting actions] |

### Props / Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| [prop] | [type] | [default] | [description] |

### States
| State | Visual | Behavior |
|-------|--------|----------|
| Default | [description] | — |
| Hover | [description] | [interaction] |
| Focus | [description] | [visible focus treatment] |
| Active | [description] | [interaction] |
| Disabled | [description] | Non-interactive |
| Loading | [description] | [animation] |

### Accessibility
- **Role**: [ARIA role or native control]
- **Keyboard**: [Tab, Enter, Escape behavior]
- **Screen reader**: [Announced as...]

### Do's and Don'ts
| ✅ Do | ❌ Don't |
|------|---------|
| [Best practice] | [Anti-pattern] |

### Code Example
[Framework-appropriate code snippet, when the system has a code library]
```

## Output — Extend

```markdown
## New Component: [Name]

### Problem
[What user need or gap this component addresses]

### Existing Patterns
| Related Component | Similarity | Why It's Not Enough |
|-------------------|-----------|---------------------|
| [Component] | [What's shared] | [What's missing] |

### Proposed Design

#### API / Props
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| [prop] | [type] | [default] | [description] |

#### Variants
| Variant | Use When | Visual |
|---------|----------|--------|
| [Variant] | [Scenario] | [Description] |

#### States
| State | Behavior | Notes |
|-------|----------|-------|
| Default | [Description] | — |
| Hover | [Description] | [Interaction] |
| Focus | [Description] | [Visible focus treatment] |
| Disabled | [Description] | Non-interactive |
| Loading | [Description] | [Animation] |

#### Tokens Used
- Colors: [Which tokens]
- Spacing: [Which tokens]
- Typography: [Which tokens]

### Accessibility
- **Role**: [ARIA role]
- **Keyboard**: [Expected interactions]
- **Screen reader**: [Announced as...]

### Open Questions
- [Decision that needs design review]
- [Edge case to resolve]
```

## If Connectors Available

If **~~design tool** is connected:
- Audit components directly in Figma — check naming, variants, and token usage
- Pull component properties, styles, variables and layer structure for documentation and for DESIGN.md

If **~~knowledge base** is connected:
- Search for existing component documentation, brand guidelines and usage guidelines
- Publish updated documentation to your wiki

## Tips

1. **Start with an audit** — Know where you are before deciding where to go.
2. **Document as you build** — It's easier to document a component while designing it.
3. **Prioritize coverage over perfection** — 80% of components documented beats 100% of 10 components.
4. **Keep DESIGN.md current** — Refresh it when the design drifts, and before a large redesign, so the current state is on record.
