# Personas

The persona walks for step 3 of `design-critique`. Each archetype exposes failure modes a single design-director view misses. Select 2–3 by interface type, walk the primary action as each, and report the exact elements and interactions that fail them, not a description of the persona.

## Selecting personas

| Interface type | Primary personas | Why |
|----------------|------------------|-----|
| Landing page / marketing | Jordan, Riley, Casey | First impressions, trust, mobile |
| Dashboard / admin | Alex, Sam | Power users, accessibility |
| E-commerce / checkout | Casey, Riley, Jordan | Mobile, edge cases, clarity |
| Onboarding flow | Jordan, Casey | Confusion, interruption |
| Data-heavy / analytics | Alex, Sam | Efficiency, keyboard navigation |
| Form-heavy / wizard | Jordan, Sam, Casey | Clarity, accessibility, mobile |

Report red flags in this shape:

> **Alex (Power User)**: No keyboard shortcuts. The primary action takes 8 clicks. Forced modal onboarding. High abandonment risk.
>
> **Jordan (First-Timer)**: Icon-only sidebar navigation. Technical jargon in errors ("404 Not Found"). No visible help. Abandons at step 2.

## 1. Impatient power user: "Alex"

**Profile**: expert with similar products. Expects efficiency, hates hand-holding. Finds shortcuts or leaves.

**Behaviours**: skips all onboarding and instructions; looks for keyboard shortcuts at once; tries to bulk-select, batch-edit and automate; is frustrated by required steps that feel unnecessary; abandons if anything feels slow or patronising.

**Test questions**: Can Alex finish the core task in under 60 seconds? Are there shortcuts for common actions? Can onboarding be skipped entirely? Do modals close with Esc? Is there a power path (shortcuts, bulk actions)?

**Red flags**: forced or unskippable tutorials; no keyboard path for primary actions; slow animations that cannot be skipped; one-at-a-time workflows where batch is natural; redundant confirmations for low-risk actions.

## 2. Confused first-timer: "Jordan"

**Profile**: has never used this kind of product. Needs guidance at every step. Abandons rather than figures it out.

**Behaviours**: reads every instruction; hesitates before clicking anything unfamiliar; looks for help constantly; misreads jargon and abbreviations; takes every label literally.

**Test questions**: Is the first action obvious within 5 seconds? Are all icons labelled with text? Is there contextual help at decision points? Does the terminology assume prior knowledge? Is there a clear back or undo at every step?

**Red flags**: icon-only navigation; unexplained jargon; no visible help; ambiguous next steps after an action; no confirmation that an action succeeded.

## 3. Accessibility-dependent user: "Sam"

**Profile**: uses a screen reader (VoiceOver, NVDA, TalkBack) and keyboard-only navigation. May have low vision, a motor impairment or cognitive differences.

**Behaviours**: tabs through the interface in order; relies on labels and heading structure; cannot see hover states or visual-only cues; needs adequate contrast (4.5:1 for text); may zoom to 200%.

**Test questions**: Can the whole primary flow be done by keyboard? Is every interactive element focusable with a visible focus indicator? Do images have meaningful alt text? Does text meet WCAG AA contrast? Are state changes (loading, success, errors) announced?

**Red flags**: click-only interactions; missing or invisible focus indicators; meaning carried by colour alone (red for error, green for success); unlabelled fields or buttons; time limits without an extension; custom components that break screen-reader flow. For depth, recommend the `accessibility-review` skill.

## 4. Deliberate stress tester: "Riley"

**Profile**: methodical; pushes past the happy path, tries unexpected inputs, probes for gaps.

**Behaviours**: tests edges on purpose (empty states, long strings, special characters); submits unexpected data (emoji, right-to-left text, very long values); navigates backwards, refreshes mid-flow, opens several tabs; looks for gaps between what the UI promises and what happens; documents problems.

**Test questions**: What happens at 0 items, 1,000 items, very long text? Do error states recover, or leave the UI broken? Is state kept on refresh mid-flow? Do any features look like they work but produce wrong results? How is unexpected input handled (emoji, special characters, paste from a spreadsheet)?

**Red flags**: features that silently fail or give wrong results; errors that expose technical details or leave the UI broken; empty states with no guidance ("No results" and nothing else); flows that lose data on refresh or navigation; similar interactions behaving differently in different places. In a static design, check whether these states are designed at all.

## 5. Distracted mobile user: "Casey"

**Profile**: one-handed on a phone, on the move, often interrupted, possibly on a slow connection.

**Behaviours**: uses the thumb only and prefers bottom-of-screen actions; is interrupted mid-flow and returns later; switches apps often; has little patience; types as little as possible, prefers taps and selections.

**Test questions**: Are primary actions in the thumb zone (bottom half)? Is state kept when the user leaves and returns? Does it hold up on a slow connection? Do forms use autocomplete and smart defaults? Are touch targets at least 44×44 pt?

**Red flags**: important actions at the top of the screen; progress lost on a tab switch or interruption; large text inputs where a selection would do; heavy imagery on every screen; tiny or crowded tap targets.

## Project personas

When `company.md` or `PRODUCT.md` describes the audience, add 1–2 personas for the primary archetype the five above miss:

```
#### [Role]: "[Name]"
**Profile**: [2–3 characteristics drawn from the audience description]
**Behaviours**: [3–4 behaviours of that audience]
**Red flags**: [3–4 things that would alienate this user]
```

Build project personas only from audience facts the files state; with no audience description, the five archetypes are the whole set.
