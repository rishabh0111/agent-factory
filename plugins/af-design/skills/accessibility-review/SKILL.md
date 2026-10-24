---
name: accessibility-review
description: Run a WCAG 2.1 AA accessibility audit on a design or page. Trigger with "audit accessibility", "check a11y", "is this accessible?", or when reviewing a design for color contrast, keyboard navigation, touch target size, or screen reader behavior before handoff, including iOS and Android screens.
argument-hint: "<Figma URL, URL, or description>"
---

# /accessibility-review

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../../CONNECTORS.md).

Audit a design or page for WCAG 2.1 AA accessibility compliance, and report every finding with its criterion, its impact and its fix.

## Usage

```
/accessibility-review $ARGUMENTS
```

Audit for accessibility: @$1

## What I Need From You

- **The design**: Figma URL, screenshots, a prototype, or a live URL
- **Platform**: web, iOS, Android, or several
- **States**: the error, empty, loading and focus states, when they are designed

## Steps

### 1. Pin the target and the evidence

Name the screens, the platform and the appearances in scope (light, dark). Note what kind of evidence you have, because it decides what you can verify: static frames prove colour, size, text and layout; a prototype adds flow and focus order; a live page with a browser tool adds keyboard behaviour and what a screen reader announces. For native iOS or Android screens, also run [native.md](native.md).

Done when you can name the screens, the platform and the evidence type.

### 2. Check every criterion

Go through the quick reference below and mark each criterion for each screen: **pass**, **fail**, **n/a**, or **to test** when the evidence cannot show it (a screen reader's announcement from a static frame). Measure contrast for every text style and every non-text element that carries meaning, in each appearance in scope.

Done when every criterion has a mark and every fail has a location.

### 3. Score and prioritise

Tag every issue P0–P3 and give the accessibility score, both below. Look across the findings for patterns that point to a systemic gap rather than one-off mistakes.

### 4. Write the report

Use the Output template. Explain each issue's impact on the people it affects, make each recommendation specific enough to act on, and include what works well so it is kept.

Done when every fail is in the report with its criterion, severity, location and fix, and every "to test" item is in the testing list.

## WCAG 2.1 AA Quick Reference

### Perceivable
- **1.1.1** Non-text content has alt text that carries the image's information; decorative images are marked decorative (empty alt)
- **1.3.1** Info and structure conveyed semantically: a heading hierarchy, landmarks and form labels that exist in structure, not only in looks (annotate them in the design)
- **1.3.4** Orientation: content works in portrait and landscape unless one is essential
- **1.4.1** Use of colour: meaning never carried by colour alone (red for error, green for success needs text or an icon too)
- **1.4.3** Contrast ratio >= 4.5:1 (normal text), >= 3:1 (large text); 7:1 is the AAA target (1.4.6)
- **1.4.4** Resize text: text scales to 200% without loss of content or function
- **1.4.10** Reflow: no horizontal scrolling at 320 CSS px wide (the 400% zoom case)
- **1.4.11** Non-text contrast >= 3:1 (UI components, focus indicators, graphics)

### Operable
- **2.1.1** All functionality available via keyboard
- **2.1.2** No keyboard trap: focus can always leave a modal, menu or widget
- **2.2.1** Timing adjustable: time limits can be turned off, adjusted or extended
- **2.2.2** Pause, stop, hide: moving, auto-playing or auto-updating content has controls
- **2.3.1** Three flashes: nothing flashes more than three times a second
- **2.4.3** Logical focus order
- **2.4.7** Visible focus indicator
- **Target size**: 44×44 CSS px is the design target (2.5.5, AAA in WCAG 2.1). The floor is 24×24 CSS px (2.5.8, AA in WCAG 2.2), unless an exception applies: spacing, an equivalent control, inline text, browser default styling, or an essential size. Spacing passes when a 24 px circle centred on the target overlaps no other target and no other undersized target's circle.
- **Motion**: every animation has a reduced-motion alternative that keeps the state change and the hierarchy visible (a crossfade, an instant cut); motion never blocks focus, reading or finishing the task (2.3.3 is the AAA criterion).
- **Gestures**: custom sliders, drag surfaces and horizontally scrolling strips state how they work by touch and by keyboard, how a single tap or a button replaces a path-based or dragging gesture, and how an interrupted gesture resets.

### Understandable
- **3.2.1** Predictable on focus (no unexpected changes)
- **3.3.1** Error identification: the error is described in text, next to its field
- **3.3.2** Labels or instructions for inputs, with required fields marked consistently

### Robust
- **4.1.2** Name, role, value for all UI components (the design names each custom component's role, label and states)
- **4.1.3** Status messages: loading, success and error states are announced without moving focus

## Common Issues

1. Insufficient color contrast, often only in the dark appearance
2. Missing form labels, or placeholders used as labels
3. No keyboard access to interactive elements
4. Missing alt text on meaningful images
5. Focus traps in modals
6. Missing ARIA landmarks
7. Auto-playing media without controls
8. Time limits without extension options
9. Meaning carried by colour alone
10. Motion with no reduced-motion alternative

## Scoring

**Severity**, for every issue:
- **P0 Blocking**: prevents task completion. Fix immediately.
- **P1 Major**: significant difficulty, or a WCAG AA failure. Fix before release.
- **P2 Minor**: annoyance; a workaround exists. Fix in the next pass.
- **P3 Polish**: nice to fix, no real user impact. Fix if time permits.

Keep P3s few: a long tail of minor issues buries the ones that matter.

**Accessibility score, 0–4**: 0 = inaccessible (fails WCAG A); 1 = major gaps (unlabelled controls, no keyboard path); 2 = partial (some accessibility effort, significant gaps); 3 = good (WCAG AA mostly met, minor gaps); 4 = excellent (WCAG AA fully met, approaching AAA).

## Testing Approach

1. Automated scan (catches ~30% of issues)
2. Keyboard-only navigation
3. Screen reader testing (VoiceOver, NVDA, TalkBack)
4. Color contrast verification, in every appearance
5. Zoom to 200% — does layout break?

Say which of these produced each finding (static frame, prototype, live page in a browser, emulated viewport, physical device) and list what stayed untested.

## Output

```markdown
## Accessibility Audit: [Design/Page Name]
**Standard:** WCAG 2.1 AA | **Date:** [Date] | **Platform:** [web / iOS / Android]
**Evidence:** [static frames / prototype / live page / device] | **Appearances:** [light / dark]

### Summary
**Accessibility score:** [0–4] ([band]) | **Issues found:** [X] | **P0:** [X] | **P1:** [X] | **P2:** [X] | **P3:** [X]
**Top issues:** [3–5, most severe first]

### Findings

#### Perceivable
| # | Issue | Location | WCAG Criterion | Severity | Impact | Recommendation |
|---|-------|----------|---------------|----------|--------|----------------|
| 1 | [Issue] | [Screen, element] | [1.4.3 Contrast] | P1 | [Who it affects and how] | [Fix] |

#### Operable
| # | Issue | Location | WCAG Criterion | Severity | Impact | Recommendation |
|---|-------|----------|---------------|----------|--------|----------------|
| 1 | [Issue] | [Screen, element] | [2.1.1 Keyboard] | P1 | [Impact] | [Fix] |

#### Understandable
| # | Issue | Location | WCAG Criterion | Severity | Impact | Recommendation |
|---|-------|----------|---------------|----------|--------|----------------|
| 1 | [Issue] | [Screen, element] | [3.3.2 Labels] | P2 | [Impact] | [Fix] |

#### Robust
| # | Issue | Location | WCAG Criterion | Severity | Impact | Recommendation |
|---|-------|----------|---------------|----------|--------|----------------|
| 1 | [Issue] | [Screen, element] | [4.1.2 Name, Role, Value] | P1 | [Impact] | [Fix] |

### Color Contrast Check
| Element | Appearance | Foreground | Background | Ratio | Required | Pass? |
|---------|-----------|-----------|------------|-------|----------|-------|
| [Body text] | [Light / Dark] | [color] | [color] | [X]:1 | 4.5:1 | ✅/❌ |

### Keyboard Navigation
| Element | Tab Order | Enter/Space | Escape | Arrow Keys |
|---------|-----------|-------------|--------|------------|
| [Element] | [Order] | [Behavior] | [Behavior] | [Behavior] |

### Screen Reader
| Element | Announced As | Issue |
|---------|-------------|-------|
| [Element] | [What SR says] | [Problem if any] |

### Patterns and Systemic Issues
- [e.g. "Touch targets are below 24 px throughout the mobile filter bar"]

### What Works Well
- [Good practice to keep and repeat]

### To Test
- [Each criterion marked "to test", with the tool or person that can verify it]

### Priority Fixes
1. **[P0/P1 fix]** — Affects [who] and blocks [what]
2. **[P1/P2 fix]** — Improves [what] for [who]
3. **[P2/P3 fix]** — Nice to have
```

## If Connectors Available

If **~~design tool** is connected:
- Inspect color values, font sizes, and touch targets directly from Figma
- Check component ARIA roles and keyboard behavior in the design spec

If **~~project tracker** is connected:
- Create tickets for each accessibility finding with severity and WCAG criterion
- Link findings to existing accessibility remediation epics

## Tips

1. **Start with contrast and keyboard** — These catch the most common and impactful issues.
2. **Test with real assistive technology** — My audit is a great start, but manual testing with VoiceOver/NVDA catches things I can't.
3. **Prioritize by impact** — Fix issues that block users first, polish later.
4. **Send both appearances** — Dark mode fails contrast more often than light.
