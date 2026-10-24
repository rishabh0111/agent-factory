# Tells: the dated registry

A tell is a device that makes a design read as generated or templated. Tells are not bad design in themselves; most began as good ideas on good sites. They became tells by being produced by default, everywhere, without a reason. That is why this registry is dated, and why it never names a replacement font, colour or component: every published "use this instead" list has become the next wave of tells within months. The replacements here are procedures (derive it from the brand and the subject), not products.

Each row has a status for the critique:

- **finding**: report every instance you see, with its screen.
- **flag (threshold)**: report it once it passes the threshold; below that, ask whether it was a decision and what it is for.
- **judgement**: no fixed rule; report it when it reads as the default rather than a choice.

Tells marked in the juror caps ([scoring.md](scoring.md)) also cap the score on persuade surfaces.

## Contents

1. First wave (2023–2024)
2. Second wave (2025)
3. Third wave (2025–2026): the "fix" that became the look
4. Gallery fashion
5. Structural tells
6. Copy tells
7. Motion tells
8. Dashboard tells
9. Why removal is not enough

## 1. First wave (2023–2024)

| Tell | Status | Recommend instead |
| --- | --- | --- |
| Violet / indigo gradients on hero, buttons and glows | finding | A palette from the brand or the subject; flat colour |
| Gradient-filled headline text | finding | Solid ink |
| Glass panels: background blur, translucent cards | flag (2 or more) | Opaque surfaces one tone step from the ground |
| Glowing or gradient "Get started" button | finding | A flat button named for its action |
| Soft grey drop shadow under every card | finding | A tone step, or no box |
| Three identical feature cards, each with an icon in a rounded square | finding | A section composed for its content |
| Emoji as icons or bullets | finding | Words, or a real picture |
| Centred headline, subtitle, two buttons, screenshot below | judgement | A first screen built around this product's one thing |
| The same typeface every generated page uses | flag (when it is the tool's default face) | A type system chosen for this product |

## 2. Second wave (2025)

| Tell | Status | Recommend instead |
| --- | --- | --- |
| Eyebrow / kicker: tiny tracked uppercase label above every heading | finding | Fold it into the heading, or delete it |
| Pill badge above the hero headline ("New", "Beta", "Introducing") | finding | Say it in the supporting sentence |
| One word of the headline in italic serif, colour or underline | flag | One face, one colour |
| Bento grid of rounded tiles as the feature section | flag (as rows of cards) | A composed section; tiles only when density is the idea, filled, at strict sizes |
| Near-black ground with one neon accent and a glow | finding | A considered dark palette, no glow |
| Floating rounded pill navigation with blur | flag | A plain bar |
| Fake dashboard hero built from grey bars and donut charts | judgement | A real interface fragment, or no image |
| Decorative status dot ("Available for work", pulsing "live") | finding | Remove |
| Fade-and-rise on every section | judgement | One signature move |

## 3. Third wave (2025–2026): the "fix" that became the look

The remedy published for the first two waves was "warm it up and make it editorial". Generators adopted the remedy wholesale and it is now the most recognisable generated look of all.

| Tell | Status | Recommend instead |
| --- | --- | --- |
| Yellow-cream ground with a terracotta / rust / clay accent | finding together; terracotta alone is a finding; cream alone is a flag | A palette from the brand or subject. Warmth from a low-chroma stone, a deep ink, a photograph, or a full warm field |
| High-contrast or soft serif display as the shortcut to "premium" | judgement | Type chosen for this product, whatever class it is |
| Oversized italic serif headline | judgement | As chosen for the product |
| Broadsheet cosplay: hairline rules everywhere, zero radius, dense columns | finding (via hairlines) | Structure from space and tone |
| "Field notes", "Quietly trusted by", "On our desks": performative labels | finding | Plain section names |

## 4. Gallery fashion

These are common on award sites right now. In a study of award sites they appear *more* often on the top-scored sites than on the weak ones (panel observations: monospace labels 44% against 24%, index numbering 38% against 21%; measured thin rules 61% against 52%). They are findings here regardless: they are the first things a generator copies from the gallery, they carry no information, and a design built without them has to find real structure.

| Tell | Status | Recommend instead |
| --- | --- | --- |
| Monospace micro-labels, mono as a "technical" voice, mono captions | finding | The text face; tabular figures for data |
| Index numbering: 01 / 02 / 03, (001), "Step 02", numbered section markers | finding | Order by position, scale or the words; a real numbered list when it is truly a list |
| Thin rules: hairline dividers, ruled grids, 1px outlined boxes and tiles | finding (boxes: 3 or more) | Space, tone steps, filled shapes, a thick bar if a bar is the idea |
| Design-tool chrome as ornament: crosshairs, crop marks, selection handles, dashed guides, rulers | finding | Remove |
| Agency micro-meta: local time, coordinates, weather, version stamps, "©2026 — Scroll", middle-dot strings | finding | Remove |
| Tiny uppercase letter-spaced captions scattered around the viewport | finding (3 or more) | Sentence case at a readable size, placed with the content it describes |

Tiny tracked capitals are the one item in this group the data condemns as well: 16% of top sites against 57% of weak ones.

## 5. Structural tells

| Tell | Status | Recommend instead |
| --- | --- | --- |
| Headline as a full sentence at display size, three or four lines | finding (over two lines) | A title of about five words; the rest goes below |
| Stock section order: hero, logos, features, testimonial, pricing, CTA | judgement | The order of the argument (the `ux-copy` skill's page copy) |
| Every section the same layout family | finding (pass 9 in [looking.md](looking.md)) | A different composition per section |
| Everything centred | flag (over about 72% of text blocks) | Left-anchored, one centred moment |
| One medium border radius (12–16px) on everything | judgement | Square or fully round, chosen once |
| Nine nearly equal font sizes | flag (more than nine) | Five sizes, far apart |
| Invented social proof: logos, quotes, star rows, "10,000+ teams" | finding | Real proof, or none |
| Text or a box where a picture belongs | finding (a juror cap) | A real picture, or a design that needs none |

## 6. Copy tells

The genre's verbs and adjectives (unlock, supercharge, seamless, elevate, effortless, cutting-edge, all-in-one …); the correction ("not just X, it's Y"); tricolon headlines; "Get started" and "Learn more" as labels; more than a handful of em dashes; lorem ipsum. The full list, with what to write instead, is in the `ux-copy` skill's [page-copy.md](../ux-copy/page-copy.md), section "Copy that reads as generated".

## 7. Motion tells

Judge these from a prototype or a live page only: an identical fade-up on every block; a dozen staggered entrances on the first screen; a hover lift on every card; bounce easing; infinite loops that mean nothing; reveals that fail and leave a blank band.

## 8. Dashboard tells

Habits of generated dashboards, set against what well-made app screens do instead (counts from a study of 23 such screens).

| Tell | Recommend instead |
| --- | --- |
| A dark navy or tinted sidebar with a coloured active pill and a left bar | The sidebar on the page ground; a neutral grey pill, or the label brightening on dark. A left bar appears once in 23. |
| "Welcome back, Alex" with a waving hand and a subtitle | A noun title at about 24px, weight 600. Three screens greet; the emoji goes. |
| Four KPI cards, each with an icon in a tinted circle | One container split by hairlines, label over value. No icons on any of the 23. |
| A green "+12.5%" pill on every KPI | A delta on 9 of 20 screens, in words with its window; grey for zero; "+4 (new)" from zero. |
| A sparkline on every KPI | None on any of the 23. The trend has its own chart. |
| KPI values at 36–48px, bold, in the brand colour | 24–30px at weight 400–600 in ink; nothing at 48. |
| A gradient area chart with a smoothed spline and a dot on every point | A 2px straight line, no fill on 7 of 10, no markers. |
| A rainbow palette, a hue per bar or per chart | One hue per chart; the accent on data only; four hues at most on a screen. |
| Gridlines every 20px, axis lines on both sides, a legend for one series | 3–5 faint lines, no y-axis line, no legend for a single series; round ticks above the maximum. |
| A fat donut with labels on the slices and a big total in the hole | A thin ring, no slice labels, the legend as a table with the values. |
| Cards with a 16–24px radius, a 1px border and a large soft shadow | A border or a tone step, no shadow; a tight or a soft radius, chosen once. |
| A zebra table under uppercase tracked headers, with a checkbox, an avatar, a status chip and a kebab on every row | Rules and alignment: 12px grey headers, one status mark, one action where it is needed. |
| Left-aligned numbers in proportional digits | Right-aligned tabular figures, fixed decimals, units in grey. |
| Saturated status chips with white text | Pale tints with dark text of the same hue. |
| The accent on every button, tab and link | No filled primary on 12 of 23; near-black where there is one. |
| A top bar with search, a bell and an avatar on every screen, or one left mostly empty | No top bar on 9 of 23; when there is one, it carries search, the switcher or the object's name. |
| Export, Share and a date picker clustered by the title | Actions only when they are real; a freshness stamp instead. |
| Placeholder people and companies, round vanity totals, growth on a week-old account | The product's own data, small numbers at their real size, totals summed from the rows. |
| Pagination under a short list | Capped rows and "View all". |
| An equal four-up grid whatever the data, with orphan cells and stretched cards | A column count chosen by the item count; spans that change by row and land on the same lines. |
| Neon on dark, glowing borders, glass | True neutral darks, lightness steps, colour on the data. |
| The kit's own face: Geist or Inter on #f8f8f8 with white 12px cards and no hue on the data, or lime on black | One face taken from the brief (a ground from the product's world, a figure face with character, the brand's hue on the main data element) and one element only this product has. |
| A coloured icon per category in a list | One grey icon set; colour, if any, on the numbers. |
| An illustration and "No data yet" in an empty chart | The zero line drawn, and one sentence in the frame. |

## 9. Why removal is not enough

A design with every tell removed and nothing put in their place is an empty page with good manners, and that is a tell too (the "avoidance aesthetic": anyone could guess it from the category plus the list of things to avoid). The tells were filling a gap where an idea should have been. So every tell finding comes with what fills the gap: the idea from the subject, a composition built for the content, real pictures or committed type, and on app screens the product's own data at its real size, the screen's one question answered by its biggest block, and a grid whose sums close.
