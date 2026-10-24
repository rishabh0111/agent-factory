---
name: design-critique
description: Get structured design feedback on usability, hierarchy, and consistency. Trigger with "review this design", "critique this mockup", "what do you think of this screen?", or when sharing a Figma link or screenshot for feedback at any stage from exploration to final polish, or when asking whether a screen looks generic, templated or off-platform.
argument-hint: "<Figma URL, screenshot, or description>"
---

# /design-critique

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../../CONNECTORS.md).

Get structured design feedback across multiple dimensions: judged from the pictures, scored honestly, and closed with the questions that decide what to fix first.

## Usage

```
/design-critique $ARGUMENTS
```

Review the design: @$1

If a Figma URL is provided, pull the design from Figma. If a file is referenced, read it. If a live URL is given and a browser tool is available, open it in a fresh tab and capture it at desktop and phone width. Otherwise, ask the user to describe or share their design.

## What I Need From You

- **The design**: Figma URL, screenshots, a live URL, or a detailed description
- **Context**: What is this? Who is it for? What stage (exploration, refinement, final)?
- **Focus** (optional): "Focus on mobile" or "Focus on the onboarding flow"

## Steps

### 1. Pin the target and its context

- Name the exact target: which frames, pages or screens, at which widths, on which platform. A product with many views gets 3–5 representative screens, not one.
- Read `company.md` for the product, audience and voice. When `PRODUCT.md` or `DESIGN.md` sits in the working folder, read them too: the audience gives you project personas, the design system gives you the consistency baseline.
- Classify the surface, because it picks the score:
  - **Task surface**: app screens, dashboards, settings, forms, checkouts, admin tools.
  - **Persuade surface**: landing pages, campaigns, product launches, brand sites, portfolios.
  - A mixed target (a marketing site with a sign-up flow) scores each part on its own scale.
- Note the platform. Native iOS or Android screens also get [ios.md](ios.md) or [android.md](android.md); a cross-platform app gets both.
- Drop findings the user has asked you to ignore: an ignore list they give, or `critique-ignore.md` in the designs folder (`docs/designs/` unless `docs/agents/work-docs.md` names another).

Done when you can name the target, its surface type, its platform, its stage and who it is for.

### 2. Look before you judge

Critique the picture, never the explanation: the frames show what is there, the designer's notes show what was meant. Run the passes in [looking.md](looking.md) one at a time, desktop first and then phone. App screens also take the app-screen passes in the same file.

Keep the registry in [tells.md](tells.md) beside you while you look; every tell you see is a finding with a location.

Done when every pass has a written answer for every screen in the target.

### 3. Assess

Work in this order, so the verdict that matters most forms before the details colour it:

1. **Design specificity.** Is the composition, interaction and visual language grounded in this product, or could an unrelated product use it unchanged? Passes 3 and 14 in [looking.md](looking.md) carry the evidence.
2. **Holistic design.** Hierarchy, information architecture, emotional fit, discoverability, composition, typography, colour, accessibility, states, copy and edge cases.
3. **Cognitive load.** Run the checklist in [cognitive-load.md](cognitive-load.md); record each failed item and every decision point with more than four visible options.
4. **Emotional journey.** Where are the peaks and the valleys? Does the end of the flow leave a good last impression (peak-end rule)? Is there reassurance at the high-stakes moments: paying, deleting, sending, publishing?
5. **Personas.** Pick 2–3 from [personas.md](personas.md) by interface type, plus 1–2 project personas when `company.md` or `PRODUCT.md` describes the audience. Walk the primary action as each one.
6. **Score.** Task surfaces take the heuristic score, persuade surfaces the juror score, both in [scoring.md](scoring.md) with its caps and its P0–P3 severity scale.

If the design-check CLI recorded in `docs/agents/tools.md` is present and the target is a live page, run its detect scan only after items 1–6 are written, then weave its findings in: where it agrees, what it caught that you missed, and which of its findings are false positives. Otherwise your own looking is the whole assessment.

Done when the specificity verdict, the cognitive-load count, the persona walks and the score are all written down.

### 4. Write the report

Use the Output template below. Weave the evidence into one report rather than pasting each step's notes. Give 3–5 priority issues, ordered by importance, each tagged P0–P3 from [scoring.md](scoring.md).

When you are working in a folder, also save the report as `critique-<target>-<date>.md` in the designs folder. When an earlier critique of the same target is there, add the trend line: the scores in order, each with its own denominator when they differ (`24/32 → 30/40`), noting when runs scored different heuristic sets. A first run says "First run for this target, no trend yet."

### 5. Close with targeted questions

The questions are the last thing in the reply; the whole report comes before them. Ask 2–4, each tied to a specific finding and each with 2–3 concrete answer options:

1. **Priority direction**: which of the top 2–3 issue categories to tackle first.
2. **Design intent**: when the critique found a tonal mismatch, whether it was intended, offering 2–3 tonal directions that would fix it.
3. **Scope**: top 3 only, all issues, or blocking issues only.
4. **Constraints** (only when the findings touch many areas): which sections stay as they are.

With fewer than three priority issues (count them), the questions are optional; when you skip them, the reply ends with the line `Questions skipped: <n> priority issues`.

Done when the reply ends with either the targeted questions or the skip line.

### 6. Turn the answers into an action plan

When the user answers, list the fixes in priority order: their stated priorities first, then impact. Each item names the issue, the concrete fix, and who does it: the designer in the design file, or the af-design skill that covers it (`ux-copy` for wording, `accessibility-review` for a full audit, `design-system` for tokens and components, `design-handoff` for the build spec, `user-research` when the answer needs real users). Include only items inside the chosen scope and outside the off-limits areas. End with a re-critique once the fixes are in, so the score shows the change.

## How to Give Feedback

- **Be specific**: "The CTA competes with the navigation", "the supporting paragraph starts 40px left of the headline's edge", "the phone hero crops the bottle out of frame". Name the element, the screen and the measurement.
- **Explain why**: connect each finding to a design principle, a heuristic, or what it costs the user.
- **Give the fix**: state the concrete change, in place of "consider exploring".
- **Acknowledge what works**: 2–3 strengths, each with the reason it works.
- **Prioritize ruthlessly**: if everything is important, nothing is.
- **State criticism plainly**: honest feedback is what lets a team ship good design.
- **Match the stage**: exploration gets direction and big moves; final polish gets alignment, states and detail.

## Output

```markdown
## Design Critique: [Design Name]
**Target:** [frames / pages, widths, platform] | **Surface:** [task / persuade] | **Stage:** [stage]
**Evidence:** [Figma frames, screenshots, live page at 1440 and 390, simulator or device captures]

### Overall Impression
- **Seen in one second:** [the one thing]
- **Idea (one sentence):** [the idea, or "none found"]
- **Biggest opportunity:** [one sentence]
- **Emotional journey:** [peaks, valleys, reassurance at high-stakes moments]

### Design Specificity Verdict
[Authored for this product, or category-interchangeable? Structural sameness, interchangeable choices, missed chances for product character. Name the live thing, or say there is none.]

### Score
[Task surface: the heuristic table from scoring.md, total over the applicable maximum, rating band.]
[Persuade surface: design _ · usability _ · creativity _ · content _ → overall _._ | Caps applied: … | Layout words by section: hero=… / …]

### What Works Well
- [Strength and why it works]
- [Strength and why it works]

### Priority Issues
1. **[P?] [What]**. *Seen in:* [screen, width]. *Why it matters:* [cost to users or goals]. *Fix:* [concrete change]. *Next:* [designer / skill]
2. …

### Persona Red Flags
**[Persona]**: [exact elements and interactions that fail them, and where they abandon]

### Cognitive Load
[Failed checklist items: n of 8 → low / moderate / high. Decision points with more than four options.]

### Consistency and Accessibility
| Element | Issue | Recommendation |
|---------|-------|----------------|
| [Typography / spacing / colour / contrast / target size] | [Issue] | [Fix] |

### Minor Observations
- [Smaller issue]

### Questions to Consider
- [Provocative question that might unlock a better solution, e.g. "What would a confident version of this look like?"]

[Trend line, when an earlier critique exists]

[Targeted questions with options, or `Questions skipped: <n> priority issues`]
```

## If Connectors Available

If **~~design tool** is connected:
- Pull the design directly from Figma and inspect components, tokens, and layers
- Compare against the existing design system for consistency

If **~~user feedback** is connected:
- Cross-reference design decisions with recent user feedback and support tickets

## Tips

1. **Share the context** — "This is a checkout flow for a B2B SaaS" helps me give relevant feedback.
2. **Specify your stage** — Early exploration gets different feedback than final polish.
3. **Ask me to focus** — "Just look at the navigation" gives you more depth on one area.
4. **Send phone and desktop** — Many of the strongest findings show at only one width.
