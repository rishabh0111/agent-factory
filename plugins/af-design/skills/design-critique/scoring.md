# Scoring

The scales for step 3 of `design-critique`. A task surface takes the heuristic score; a persuade surface takes the juror score. Every issue, on either scale, takes a P0–P3 severity.

## Contents

1. Issue severity (P0–P3)
2. Heuristic score (task surfaces)
3. Juror score (persuade surfaces)
4. What to fix first
5. Rounds

## 1. Issue severity (P0–P3)

| Priority | Name | Description | Action |
|----------|------|-------------|--------|
| **P0** | Blocking | Prevents task completion entirely | Fix immediately; a showstopper |
| **P1** | Major | Causes significant difficulty or confusion | Fix before release |
| **P2** | Minor | Annoyance, but a workaround exists | Fix in the next pass |
| **P3** | Polish | Nice to fix, no real user impact | Fix if time permits |

Unsure between two levels? Ask: "Would a user contact support about this?" If yes, it is at least P1. Keep P3s few: a long tail of minor issues buries the ones that matter.

## 2. Heuristic score (task surfaces)

Score each of Nielsen's 10 usability heuristics 0–4. A 4 means genuinely excellent, not "good enough". Most real interfaces score 20–32 out of 40.

### Mode applicability

A heuristic that genuinely cannot apply to the surface under review is scored `n/a` with a one-line reason, and the total is renormalised: the applicable maximum is 4 times the number of heuristics actually scored (**/40** when all ten apply, **/32** when two are `n/a`). Print the total over the applicable maximum, never `/40` over a partial set, and record which heuristics were `n/a` in a saved report.

### The table

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | ? | [specific finding, or "solid"] |
| 2 | Match System / Real World | ? | |
| 3 | User Control and Freedom | ? | |
| 4 | Consistency and Standards | ? | |
| 5 | Error Prevention | ? | |
| 6 | Recognition Rather Than Recall | ? | |
| 7 | Flexibility and Efficiency | ? | |
| 8 | Aesthetic and Minimalist Design | ? | |
| 9 | Error Recovery | ? | |
| 10 | Help and Documentation | ? | |
| **Total** | | **??/[applicable max]** | **[Rating band]** |

### Rating bands

| Score (of 40) | Share | Rating | What it means |
|---------------|-------|--------|---------------|
| 36–40 | 90%+ | Excellent | Minor polish only; ship it |
| 28–35 | 70%+ | Good | Address weak areas; solid foundation |
| 20–27 | 50%+ | Acceptable | Significant improvements needed before users are happy |
| 12–19 | 30%+ | Poor | Major UX overhaul required; core experience broken |
| 0–11 | below 30% | Critical | Redesign needed; unusable as it stands |

With `n/a` heuristics, read the band off the share: 24/32 is 75%, so Good.

### 1. Visibility of System Status

Keep users informed about what is happening through timely, appropriate feedback.

**Check for**: loading indicators during waits; confirmation of actions (save, submit, delete); progress indicators for multi-step processes; current location in navigation (breadcrumbs, active states); inline form validation, not only on submit.

| Score | Criteria |
|-------|----------|
| 0 | No feedback; the user is guessing what happened |
| 1 | Rare feedback; most actions produce no visible response |
| 2 | Partial; some states communicated, major gaps remain |
| 3 | Good; most operations give clear feedback, minor gaps |
| 4 | Excellent; every action confirms, progress is always visible |

### 2. Match Between System and Real World

Speak the user's language. Follow real-world conventions. Information appears in a natural, logical order.

**Check for**: familiar terminology (no unexplained jargon); information order matching user expectations; recognisable icons and metaphors; language suited to the audience; natural reading flow (left-to-right, top-to-bottom priority).

| Score | Criteria |
|-------|----------|
| 0 | Pure tech jargon, alien to users |
| 1 | Mostly confusing; requires domain expertise to navigate |
| 2 | Mixed; some plain language, some jargon leaks through |
| 3 | Mostly natural; an occasional term needs context |
| 4 | Speaks the user's language fluently throughout |

### 3. User Control and Freedom

Users need a clear "emergency exit" from unwanted states without an extended dialogue.

**Check for**: undo and redo; cancel on forms and modals; clear navigation back to safety (home, previous); an easy way to clear filters, search and selections; an escape from long or multi-step processes.

| Score | Criteria |
|-------|----------|
| 0 | Users get trapped; no way out without refreshing |
| 1 | Difficult exits; obscure paths to escape |
| 2 | Some exits; main flows have an escape, edge cases do not |
| 3 | Good control; users can exit and undo most actions |
| 4 | Full control; undo, cancel, back and escape everywhere |

### 4. Consistency and Standards

Users should not wonder whether different words, situations or actions mean the same thing.

**Check for**: consistent terminology; the same action giving the same result everywhere; platform conventions followed; visual consistency (colours, type, spacing, components); consistent interaction patterns (same gesture, same behaviour).

| Score | Criteria |
|-------|----------|
| 0 | Inconsistent everywhere; feels like different products stitched together |
| 1 | Many inconsistencies; similar things look or behave differently |
| 2 | Partially consistent; main flows match, details diverge |
| 3 | Mostly consistent; occasional deviation, nothing confusing |
| 4 | Fully consistent; a cohesive system, predictable behaviour |

### 5. Error Prevention

Better than a good error message is a design that prevents the problem.

**Check for**: confirmation before destructive actions; constraints preventing invalid input (date pickers, dropdowns); smart defaults; clear labels that prevent misunderstanding; autosave and draft recovery.

| Score | Criteria |
|-------|----------|
| 0 | Errors easy to make; no guardrails anywhere |
| 1 | Few safeguards; some inputs validated, most are not |
| 2 | Partial prevention; common errors caught, edge cases slip |
| 3 | Good prevention; most error paths blocked in advance |
| 4 | Excellent; errors nearly impossible through smart constraints |

### 6. Recognition Rather Than Recall

Minimise memory load. Make objects, actions and options visible or easy to retrieve.

**Check for**: visible options (not buried in hidden menus); contextual help where needed (tooltips, inline hints); recent items and history; autocomplete and suggestions; labels on icons (no icon-only navigation).

| Score | Criteria |
|-------|----------|
| 0 | Heavy memorisation; users must remember paths and commands |
| 1 | Mostly recall; many hidden features, few visible cues |
| 2 | Some aids; main actions visible, secondary features hidden |
| 3 | Good recognition; most things discoverable, few memory demands |
| 4 | Everything discoverable; users never need to memorise |

### 7. Flexibility and Efficiency of Use

Accelerators, invisible to novices, speed up expert use.

**Check for**: keyboard shortcuts for common actions; customisable elements; recents and favourites; bulk and batch actions; power-user features that leave the basics simple.

| Score | Criteria |
|-------|----------|
| 0 | One rigid path; no shortcuts or alternatives |
| 1 | Limited flexibility; few alternatives to the main path |
| 2 | Some shortcuts; basic keyboard support, limited bulk actions |
| 3 | Good accelerators; keyboard navigation, some customisation |
| 4 | Highly flexible; multiple paths, power features, customisable |

### 8. Aesthetic and Minimalist Design

No irrelevant or rarely needed information. Every element serves a purpose.

**Check for**: only the information each step needs; a clear hierarchy directing attention; purposeful use of colour and emphasis; no decorative clutter competing for attention; focused layouts.

| Score | Criteria |
|-------|----------|
| 0 | Overwhelming; everything competes for attention equally |
| 1 | Cluttered; too much noise, hard to find what matters |
| 2 | Some clutter; main content clear, periphery noisy |
| 3 | Mostly clean; focused, minor visual noise |
| 4 | Every element earns its pixel |

### 9. Help Users Recognise, Diagnose and Recover from Errors

Error messages use plain language, name the problem precisely and suggest a way out.

**Check for**: plain-language messages (no error codes for users); specific identification ("Email is missing @", not "Invalid input"); actionable recovery; errors shown near their source; non-blocking handling (the form keeps what was typed).

| Score | Criteria |
|-------|----------|
| 0 | Cryptic errors; codes, jargon, or no message at all |
| 1 | Vague errors; "Something went wrong" with no guidance |
| 2 | Clear but unhelpful; names the problem, not the fix |
| 3 | Clear with suggestions; names the problem and the next step |
| 4 | Perfect recovery; pinpoints the issue, suggests the fix, keeps the user's work |

### 10. Help and Documentation

Even when the system is usable without docs, help is easy to find, task-focused and concise.

**Check for**: searchable help; contextual help (tooltips, inline hints, guided tours); task-focused organisation, not feature-organised; concise, scannable content; access without leaving the current context.

| Score | Criteria |
|-------|----------|
| 0 | No help available anywhere |
| 1 | Help exists but is hard to find or irrelevant |
| 2 | Basic help; FAQ or docs exist, not contextual |
| 3 | Good documentation; searchable, mostly task-focused |
| 4 | Excellent contextual help; the right information at the right moment |

## 3. Juror score (persuade surfaces)

Score like an Awwwards juror: four criteria, 1–10 each, weighted **design 40%, usability 30%, creativity 20%, content 10%**.

**Design (40%)**: composition, typography, colour, imagery, craft.
- 9–10: every screen holds as a poster. Nothing could be removed or moved.
- 8: confident and coherent; one or two soft spots a designer would notice.
- 7: clean and professional, a clear system, little tension.
- 6: tidy but anonymous. Reads as a kit.
- 5 or less: weak hierarchy, accidental spacing, default type, mismatched images.

**Usability (30%)**: orientation in three seconds, readable text, obvious actions, an honest phone layout.
- 9–10: you know what it is, who it is for and what to do without scrolling; flawless on a phone.
- 8: clear and comfortable; minor friction (a long section, a small target).
- 7: works, with one real problem (weak contrast somewhere, a cramped phone layout).
- 6 or less: you have to hunt, or something breaks.

**Creativity (20%)**: an idea you can state in a sentence, carried through.
- 9–10: a concept specific to this subject that you have not seen applied this way.
- 8: a clear idea with one memorable move.
- 7: a tasteful execution of a known approach.
- 6 or less: the category default.

**Content (10%)**: words and pictures that are specific, true-sounding and edited.
- 9–10: every line could only be about this subject; the imagery is the subject.
- 7–8: clear and concrete, some generic lines.
- 6 or less: slogans, filler, stock.

`overall = 0.4·design + 0.3·usability + 0.2·creativity + 0.1·content`

For calibration: real award "Sites of the Day" land around 7.5–8.0 overall from the jury. An honest 8.5 is rare. When the design is one you produced and your first score is 9, score it again as the juror who did not build it.

### Caps

Caps override the arithmetic. Pass numbers refer to [looking.md](looking.md); tells are in [tells.md](tells.md).

- A measured failure still present (contrast below the minimum, clipped or overflowing text), from a check the user supplied or the design-check CLI: overall cannot exceed **6.0**.
- A headline of three or more lines at any width, an eyebrow label, monospace labels, 01/02/03 numbering, a decorative gradient, a shadow on a resting element, or a decorative hairline visible in a screen: overall cannot exceed **6.5**, whatever else is true.
- Pass 3 fails (the page could belong to anyone): creativity cannot exceed **6**.
- The idea passes for the nearest competitor (pass 14): creativity cannot exceed **7**.
- Fewer than four real pictures (photographs, archival images, footage; drawings do not count): design cannot exceed **6.5**.
- A page that barely moves, or motion that is one identical fade on every block (judge this only from a prototype or a live page): design cannot exceed **7**.
- No live thing (pass 14): creativity cannot exceed **7.5**.
- Any placeholder (grey box, lorem, "Image here"): content cannot exceed **5**.
- Two or more desktop screens that are mostly empty ground, or a page whose running text is small and grey: design cannot exceed **6.5**.
- A section the brief asked for that is missing or reduced to a few words: content cannot exceed **6**.
- No real button for the primary action on the first screen: usability cannot exceed **7**.
- The five-second pass fails (no clear title on the first screen saying what this is): usability cannot exceed **6**.
- Unequal page margins, a section huddled on one side with the other half empty, or a blank stretch taller than half a screen: design cannot exceed **6.5**.
- A section of running text with no heading naming it: usability cannot exceed **7**.
- Anything covering a headline at any scroll position: usability cannot exceed **6**.
- A blank band where a reveal did not fire, or content clipped off-screen: usability cannot exceed **5**.

## 4. What to fix first

Order the priority issues this way; later items cannot rescue earlier ones.

1. **The idea.** If pass 3 fails, change the concept of the first screen, not the details.
2. **Hierarchy.** One dominant element per screen. Make the big thing bigger and the small things fewer before touching anything else.
3. **Composition.** Shared edges, section spacing, variety of layout between sections, holes.
4. **Typography.** Scale contrast, line breaks, measure, leading.
5. **Imagery.** Replace weak pictures, unify crops and grade.
6. **Colour.** Proportion and accent discipline.
7. **Detail.** States, focus, small alignments, phone refinements.
8. **Motion.** Last.

When a recommended removal leaves a gap, recommend what fills it: close the gap, enlarge what remains, or let a picture or a colour field take the space. An ornament in the gap is the same problem again.

## 5. Rounds

When the user iterates (fix, re-share, critique again), run at most three rounds: critique, fix the top three, critique again. Stop early when a round finds no problem a stranger would notice. If round three still scores under 7.5 on the juror scale, or below Good on the heuristic scale, say so plainly, with the remaining problems listed; report the score as it is.
