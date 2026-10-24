# How to look

The passes for step 2 of `design-critique`. Make each pass on its own and write its answer down; blended passes blur into "looks fine". Look at the first screen at desktop width, then the full page or flow, then the phone's first screen and its full page.

## Contents

1. Passes for every surface
2. App-screen passes
3. Evidence

## 1. Passes for every surface

1. **One second, then five.** Glance and look away. What did you see? There should be exactly one answer: a word, an image, an object. If the answer is "a website", there is no focal point. Is that first thing the right one, and what is the emotional reaction to it? Then give the first screen five seconds as a stranger: can you say what this is, who it is for and what to do next? A title that only makes sense after scrolling is not a title.
2. **Squint.** Blur your attention until text becomes grey bars. The screen should reduce to two or three large masses with clear size differences. Many small similar masses means everything is medium and nothing leads. Follow the reading order the masses set: is it the order the user needs?
3. **Cover the logo.** Could this first screen belong to a competitor, or to a different industry? If swapping the name and the noun in the headline would produce an equally valid page, the page has no idea. Compare with the idea the brief states, when it states one. Then scroll: does the idea reach the pricing, the FAQ and the footer, or does the page turn into stock blocks after the first screen?
4. **Edges.** Follow the left edge of every text block down the page. Count the distinct x positions. A composed page has two or three, reused on purpose. Six means things were placed one at a time.
5. **Space and frame.** Are related things close and unrelated things far? Is the gap between sections clearly larger than any gap inside a section? Is any region empty by accident (a hole) rather than by decision (a rest)? A hole usually sits beside a short column or under a removed decoration. Then the frame: are the left and right page margins equal? Does any section keep its text in one half and leave the other half empty? Is there a stretch of nothing taller than half a screen? Readers name these first ("it is pushed to the left", "random empty space"), before any detail; in a study of 100 award-winning sites, about 1 section in 100 left half the width empty.
6. **Type.** Is the jump from body text to headline decisive (three times or more)? More than five sizes on the page? A headline with one orphan word on its last line? A paragraph wider than about 75 characters, or centred over more than three lines? Is the typography building the hierarchy, or fighting it?
7. **Colour.** Name the proportions: which colour holds most of the surface, which supports, where is the accent? An accent that appears in ten places means nothing. One that appears on the single action and one detail means "here".
8. **Images** (persuade surfaces). Count the real pictures: are there at least four, and is there a moving one? A page of drawings only, or of type only, looks unfinished beside one with real photographs and footage. Is every image doing a job (showing the thing, setting the place, proving the claim)? Do the crops share ratios? Is anything a grey box, a stretched photo, a fake screen made of bars? Does the photography share one light and one grade, or is it a stock mix?
9. **Sameness.** Write one word for each section's layout (split, list, full-bleed, grid, statement, index …). The same word twice in a row, or three times on the page, is the template showing.
10. **Phone.** Is the phone screen a composition of its own, with its own crop and its own line breaks, or the desktop page squeezed? Is the first screen still one clear thing?
11. **Fullness** (persuade surfaces). Go through the desktop screens one by one. Is each a composed poster, or a narrow column of small text with dead ground either side? Is any statement held on screen for three screens? An austere page is not a restrained one: a page that could pass for an unfinished wireframe (grey shapes, grey text, one small column) is underbuilt. A single motif or drawing blown up to fill a whole screen with nothing to read is a hole too, however bold it looks.
12. **Substance and task.** Does every section the brief asked for deliver its information completely and at a readable size (the full menu, each room, every speaker, the price and what it includes)? Would the visitor leave knowing what they came to find out? Can the user finish their goal, are interactive elements obviously interactive, and is any step unnecessary? Is the primary action a real button on the first screen?
13. **Collisions.** Is anything lying on top of a headline, a statement or a button at any scroll position? Does any element run off the edge of the phone screen? A row that scrolls sideways on the phone reads as cut off, in a screenshot and to most visitors; flag it unless the cut is plainly deliberate (a partial card showing at the edge).
14. **The competitor and the live thing.** Put the nearest competitor's name on the page: does the idea still work? Then name the one live thing: what the visitor can do, or what differs each visit. If either answer is weak, that is the first problem of the critique, ahead of any detail.
15. **Consistency.** Does it follow the design system (`DESIGN.md` or the Figma library)? Are spacing, colours and type consistent between screens? Do similar elements look and behave alike?
16. **Access at a glance.** Low-contrast text, small or crowded touch targets, text too small to read comfortably, meaning carried by colour alone, images with no stated alt text. Record what you see here; a full audit is the `accessibility-review` skill.

From blind comparisons: a richer page full of template devices beat a cleaner page that was thin, every time. Removing tells is not the job; passes 11–13 are where you check the design did not lose its substance with them.

## 2. App-screen passes

App screens (dashboards, queues, settings, editors) replace passes 8 and 11 and the live-thing half of pass 14 with these. App screens have no motion floor: motion there is feedback (press, hover, focus, a menu or sheet opening, a row arriving), and nothing performs an entrance.

1. Is the screen's question answered by the biggest thing on it, and is that read first? Is the largest figure the one that answers the title row's sentence?
2. Does every block share the screen's edges? Is there a dead strip on one side, a card stopping short, an orphan cell, a stretched card with a blank band (a legend pinned to its foot, four rows in a card kept at its neighbour's height)?
3. Is colour only on data, on status and on the one primary action, and does the main data element carry the one hue? Does the chosen typeface show on the first screen?
4. Do the numbers add up, and do they line up digit for digit? List every fact that appears twice and check that the copies agree; recompute each total and change from the values as displayed; check that every relative figure names what it is against.
5. Does every zero look like a zero and every missing value like a dash? Does every count badge sit on a queue that needs action, with its noun clear from the label?
6. Does every legend swatch match the mark it explains, and does any caption have to say which bars are which (then the chart should encode it)? Does any label collide with a line or another label?
7. On the phone, is the navigation folded away, and does each block still answer its question?

## 3. Evidence

Say what you looked at in the report's Evidence line: Figma frames, static screenshots, a live page in a browser at which widths, or simulator, emulator or device captures. A static frame proves layout, not behaviour; findings about gestures, focus or motion from a static frame are marked "to verify".
