# Writing DESIGN.md

The `document` mode of `design-system` for the whole system. DESIGN.md captures the visual design system in one file at the root of the working folder, so people and agents producing new screens stay on-brand.

It follows the [DESIGN.md format spec](https://raw.githubusercontent.com/google-labs-code/design.md/main/docs/spec.md): optional YAML frontmatter carrying machine-readable design tokens, then up to eight markdown sections in a fixed order. **Tokens are normative; prose says how to apply them.** Sections may be omitted when not relevant, but those present stay in the canonical order with the canonical headings, so the file stays portable across DESIGN.md-aware tools.

## Contents

1. The frontmatter
2. The eight sections
3. When to write it
4. Scan mode: from screens, Figma or guidelines
5. Seed mode: from a brief
6. Style
7. Pitfalls

## 1. The frontmatter

```yaml
---
name: <project title>
description: <one-line tagline>
colors:
  primary: "#b8422e"
  neutral-bg: "#faf7f2"
  # ...one entry per colour the system uses; key = descriptive slug
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "4.5rem"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "0em"
  body:
    # ...
rounded:
  sm: "4px"
  md: "8px"
spacing:
  sm: "8px"
  md: "16px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
    padding: "16px 48px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
---
```

Rules that matter:

- **Five groups only**: `colors`, `typography`, `rounded`, `spacing`, `components`. Shadows, motion, breakpoints and focus rings have no frontmatter group; they go in the prose sections with their exact values.
- **Token references** use `{path.to.token}` (`{colors.primary}`, `{rounded.md}`). Components may reference primitives; primitives do not reference each other.
- **Colours accept any valid CSS colour string.** Hex is the portable default; keep `rgb()`, `hsl()`, `oklch()` or wide-gamut values when that is the system's own source of truth. One format per token, one source of truth.
- **A tonal scale** the system defines (a `surface-container-low` family, 50–900 steps) goes in as sibling colour keys.
- **Component sub-tokens** are limited to eight props: `backgroundColor`, `textColor`, `typography`, `rounded`, `padding`, `size`, `height`, `width`. Anything else about a component goes in its Components prose.
- **Scale keys are open-ended.** Use the names the system already uses (`oxblood-deep`, `surface-container-low`); keep them rather than renaming to Material defaults.
- **Variants are a naming convention**: `button-primary`, `button-primary-hover`, `button-primary-active` as sibling keys.
- **Only real tokens.** Every entry corresponds to a token the system actually uses; empty scale keys or invented tokens pollute the spec.

## 2. The eight sections

In this order, with exactly these headings:

1. `## Overview`
2. `## Colors`
3. `## Typography`
4. `## Layout`
5. `## Elevation & Depth`
6. `## Shapes`
7. `## Components`
8. `## Do's and Don'ts`

Omit a section that does not apply rather than filling it with invented rules. Responsive behaviour and breakpoints go in Layout, depth and the shadow vocabulary in Elevation & Depth, radius and form language in Shapes, per-component behaviour and motion in Components. Unknown sections survive the format, but new visual guidance uses the canonical structure whenever it fits.

## 3. When to write it

- A coherent visual system exists (in Figma, in shipped screens, in brand guidelines) but there is no DESIGN.md.
- A first set of designs is finished and its provisional decisions need to be fixed in writing.
- An existing DESIGN.md is stale: the design has drifted.
- Before a large redesign, to capture the current state as a reference.

**An existing DESIGN.md is never silently overwritten.** Read it first, draft your changes, show the user what would change, and ask whether to refresh it (update values, keep the prose), overwrite it, or merge (keep its decisions, add what is new) before writing.

Pick the path by looking first: when there are screens, a Figma library or brand guidelines to read, use scan mode. When there is nothing visual yet, offer seed mode, and say you are switching.

## 4. Scan mode: from screens, Figma or guidelines

### Step 1: Find the design sources

In priority order; a higher source wins when two disagree:

1. **Figma library**: colour, text and effect styles; variables and their modes (light, dark, brand); the main components (button, card, input, navigation, dialog) with their variant properties and default styles.
2. **Brand guidelines and style guides** in the knowledge base or the files the user shares.
3. **An existing DESIGN.md**, or other design-system documentation.
4. **Shipped or mocked screens**: read colours, sizes, weights, spacing, radii and shadows off the screenshots or Figma frames. With a live page and a browser tool, sample the computed styles of body text, headings, links, buttons and cards; this catches values the library misses.
5. **A written brief** only, with nothing visual: switch to seed mode.

Values read off a screenshot are approximations. Mark them as measured from a screenshot, and replace them when a library or guideline gives the exact value.

### Step 2: Extract what can be extracted

Build a structured draft. For each token class:

- **Colours**: group into Primary / Secondary / Tertiary / Neutral. A system with one accent is Primary + Neutral; omit Secondary and Tertiary rather than inventing them.
- **Typography**: map the observed sizes and weights to the hierarchy display / headline / title / body / label. Note the font families with fallbacks, and the scale ratio.
- **Elevation**: catalogue the shadow vocabulary. A flat system that uses tonal layering instead is a valid answer; state it explicitly.
- **Components**: for each common component (button, card, input, chip, list item, tooltip, navigation), record shape (radius), colour assignment, hover and focus treatment, internal padding.
- **Layout and spacing**: grid, container widths, breakpoints, rhythm and density behaviour.
- **Shapes**: radius, corners, borders, clipping, and any recurring form or silhouette.

Then stage the frontmatter from the draft:

- **Colours**: one entry per colour, keyed by a descriptive slug (`oxblood-deep`, `editorial-magenta`, not `blue-800`), in the system's canonical format. Prose may name the colour and describe its role but never restates a different value.
- **Typography**: one entry per role, with only the props that are real (`fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`, `fontFeature`, `fontVariation`).
- **Rounded / Spacing**: the scale steps the system actually uses, under its own step names.
- **Components**: one entry per variant, referencing primitives. A variant that needs a property outside the eight carries it in the Components prose.

Skip anything the system does not have.

### Step 3: Propose the qualitative language

These need creative input that cannot be read off the screens. Draft 2–3 options for each, then put them to the user in one set of questions alongside the draft:

- **Creative North Star**: a single named metaphor for the whole system ("The Editorial Sanctuary", "The Lab Notebook"), honouring the brand personality in `company.md` or `PRODUCT.md`.
- **Overview voice**: mood adjectives, the aesthetic philosophy in 2–3 sentences, and any visual anti-reference the user confirms.
- **Colour character**: descriptive names for the key colours ("Deep Muted Teal-Navy", not "blue-800"), based on hue and saturation.
- **Elevation philosophy**: flat, layered or lifted; if shadows exist, whether their role is ambient or structural.
- **Component philosophy**: the feel of buttons, cards and inputs in one phrase ("tactile and confident", "refined and restrained").

Write the file once the user has chosen; until then, show the draft with the options in place.

### Step 4: Write DESIGN.md

The file opens with the staged frontmatter, then the body:

```markdown
---
name: [Project Title]
description: [one-line tagline]
colors:
  # ... staged frontmatter
---

# Design System: [Project Title]

## Overview

**Creative North Star: "[Named metaphor in quotes]"**

[2–3 paragraphs: personality, density and aesthetic philosophy. Start from the North Star and work outward. State only confirmed visual rejections. End with a short **Key Characteristics:** bullet list.]

## Colors

[The palette's character in one sentence.]

### Primary
- **[Descriptive Name]** (#HEX / oklch(...)): [Where and why this colour is used. Specific about context, not just role.]

### Secondary (optional; omit with only one accent)
- **[Descriptive Name]** (#HEX): [Role.]

### Tertiary (optional)
- **[Descriptive Name]** (#HEX): [Role.]

### Neutral
- **[Descriptive Name]** (#HEX): [Text / background / border / divider role.]

### Named Rules (optional, powerful)
**The [Rule Name] Rule.** [Short, forceful doctrine, e.g. "The One Voice Rule. The primary accent is used on ≤10% of any given screen. Its rarity is the point."]

## Typography

**Display Font:** [Family] (with [fallback])
**Body Font:** [Family] (with [fallback])
**Label/Mono Font:** [Family, if distinct]

**Character:** [1–2 sentences on the pairing's personality.]

### Hierarchy
- **Display** ([weight], [size/clamp], [line-height]): [Purpose; where it appears.]
- **Headline** ([weight], [size], [line-height]): [Purpose.]
- **Title** ([weight], [size], [line-height]): [Purpose.]
- **Body** ([weight], [size], [line-height]): [Purpose. Max line length, e.g. 65–75ch, if relevant.]
- **Label** ([weight], [size], [letter-spacing], [case if uppercase]): [Purpose.]

### Named Rules (optional)
**The [Rule Name] Rule.** [Short doctrine about type.]

## Layout

[The grid or spatial model, container behaviour, density, breakpoints and responsive changes, and the spacing rhythm. Exact values only when observed.]

## Elevation & Depth

[One paragraph: shadows, tonal layering, or a hybrid? If no shadows, say so and describe how depth is conveyed instead.]

### Shadow Vocabulary (if applicable)
- **[Role name]** (`box-shadow: [exact value]`): [When to use it.]

### Named Rules (optional)
**The [Rule Name] Rule.** [e.g. "The Flat-By-Default Rule. Surfaces are flat at rest. Shadows appear only as a response to state (hover, elevation, focus)."]

## Shapes

[The form language: corner and radius strategy, borders, clipping, any recurring silhouette or geometry.]

## Components

For each component, lead with a short character line, then shape, colour assignment, states, motion and any distinctive behaviour.

### Buttons
- **Shape:** [radius described, exact value in parens]
- **Primary:** [colour assignment + padding, in semantic and exact terms]
- **Hover / Focus:** [transitions, treatments, durations and easing]
- **Secondary / Ghost / Tertiary (if applicable):** [brief description]

### Chips (if used)
- **Style:** [background, text colour, border treatment]
- **State:** [selected / unselected, filter / action variants]

### Cards / Containers
- **Corner Style:** [radius]
- **Background:** [colours used]
- **Shadow Strategy:** [reference Elevation & Depth]
- **Border:** [if any]
- **Internal Padding:** [scale]

### Inputs / Fields
- **Style:** [stroke, background, radius]
- **Focus:** [treatment]
- **Error / Disabled:** [if applicable]

### Navigation
- **Style, typography, default / hover / active states, mobile treatment.**

### [Signature Component] (optional; a distinctive custom component worth documenting)
[Description.]

## Do's and Don'ts

### Do:
- **Do** [specific prescription with exact values / named rule].

### Don't:
- **Don't** [specific prohibition confirmed by the system or the user].
```

Do's and Don'ts are concrete visual guardrails grounded in the existing system or the user's chosen direction. Lead each with "Do" or "Don't", include exact values only when established, and keep a task-specific concept from becoming a system-wide prohibition.

### Step 5: Confirm and refine

Show the user the full DESIGN.md, highlighting the non-obvious creative choices (descriptive colour names, atmosphere language, named rules), and offer to revise a section, add component patterns you missed, or adjust the atmosphere language.

## 5. Seed mode: from a brief

For a product with no visual system yet. It produces a direction the user chose, not a fabricated token spec.

### Step 1: Product context and a direction

Product context comes first: `company.md`, or `PRODUCT.md` when the folder has one. When neither describes the product and its audience, ask for that before any visual decision.

Seed mode needs a concrete first surface: the one the user names, or ask what they want to make first. Then offer 2–3 visual directions drawn from the brief, each covering the design thesis, palette strategy, type character, layout behaviour, material and depth, form language, imagery stance and motion grammar, and let the user choose one. When the user has already chosen a direction in this conversation, use it.

### Step 2: Write the seed DESIGN.md

Use the canonical section order. Lead the file with:

```markdown
<!-- SEED: established with the user before any designs exist; run design-system document again once there are screens or a library, to capture the real tokens and components. -->
```

Per section:

- **Overview**: the chosen thesis, layout behaviour, material character, imagery stance, motion grammar and reusable signature. The first surface's own composition stays in its brief, out of the global system.
- **Colors**: the palette strategy and roles. Values only when the user or an existing asset established them; otherwise `[to be resolved during design]`.
- **Typography**: the type character and role relationships. Font names only when established; otherwise `[to be resolved during design]`.
- **Layout**: the spatial grammar and responsive behaviour, without pretending exact measurements are settled.
- **Elevation & Depth**: the chosen material and depth behaviour, stated as an invariant.
- **Shapes**: the chosen form and corner language.
- **Components**: omitted; none exist yet.
- **Do's and Don'ts**: the durable guardrails confirmed while choosing the direction, not task-local refusals.

The frontmatter carries `name` and `description` only; real tokens arrive on the next scan-mode run.

### Step 3: Confirm

Show the seed DESIGN.md, say that it is a seed (the marker is the commitment), and tell the user to run `design-system document` again once screens or a library exist.

## 6. Style

- **Frontmatter first, prose second.** Tokens live in the frontmatter; prose gives them context and never redefines a value.
- **Descriptive before technical**: "Gently curved edges (8px radius)" rather than "rounded-lg". Lead with the description, the exact value in parens (hex, px or rem, weight).
- **Functional before decorative**: for each token, say where and why it is used, not just what it is.
- **Named Rules**: `**The [Name] Rule.** [short doctrine]`. Memorable, citable, and stickier for agents than bullet lists. Aim for 1–3 per section.
- **Decisive where the evidence is decisive.** Hard language for real invariants, softer language for provisional guidance.
- **Concrete tests only when grounded** in the observed system or a confirmed decision. A one-sentence test beats a paragraph of principle.
- **Product context selectively.** It explains why the visuals fit; it does not supply page composition or a visual don't-list by default.
- **Colours grouped by role** (Primary / Secondary / Tertiary / Neutral), not by hex or hue order.

## 7. Pitfalls

- Layer names and class names pasted raw: translate them into descriptive language.
- Every value extracted: stop at what is actually reused; one-offs pollute the system.
- Components invented: if the system has only buttons and cards, document only those.
- Content duplicated from `company.md` or `PRODUCT.md`: DESIGN.md is strictly visual.
- Canonical sections renamed or replaced by near-synonyms: "Colors", not "Color Palette & Roles"; "Typography", not "Typography Rules". Tools parse the exact headings.
- Token values repeated in prose with a different value: the frontmatter is normative.
- Frontmatter groups outside the five (`motion:`, `breakpoints:`, `shadows:`): those values belong in the prose sections.
