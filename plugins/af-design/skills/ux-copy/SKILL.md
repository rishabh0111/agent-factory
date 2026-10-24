---
name: ux-copy
description: Write or review UX copy — microcopy, error messages, empty states, CTAs. Trigger with "write copy for", "what should this button say?", "review this error message", or when naming a CTA, wording a confirmation dialog, filling an empty state, or writing onboarding text or a page headline.
argument-hint: "<context or copy to review>"
---

# /ux-copy

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../../CONNECTORS.md).

Write or review UX copy for any interface context, so users understand what happened, what matters, and what to do next.

## Usage

```
/ux-copy $ARGUMENTS
```

## What I Need From You

- **Context**: What screen, flow, or feature? A screenshot or the whole flow beats an isolated string.
- **User state**: What is the user trying to do? What do they already know? How are they feeling?
- **Tone**: Formal, friendly, playful, reassuring?
- **Constraints**: Character limits, platform guidelines, languages it ships in?

## Principles

1. **Clear**: Say exactly what you mean. No jargon, no ambiguity.
2. **Concise**: Use the fewest words that convey the full meaning. Say each idea once.
3. **Consistent**: Same terms for the same things everywhere.
4. **Useful**: Every word should help the user accomplish their goal.
5. **Human**: Write like a helpful person, not a robot.
6. **True**: Keep the factual meaning, the product's terms and the brand voice. Ask before changing a factual claim, a legal meaning, or a term that may be domain-specific.

## Steps

### 1. Gather the context

Read the Voice section of `company.md`; it sets the voice every string keeps. When a style guide or terminology list exists (in the knowledge base, or `DESIGN.md` / `PRODUCT.md` in the working folder), read it too. Read the entire interaction path the copy sits in, not the isolated string: the screen before, the screen after, the error and empty states. Infer the audience and the task from the product context and the surrounding UI.

Done when you can name who is reading, what they know, what they are trying to do, and the voice.

### 2. Audit the language (when reviewing)

Go through the whole path and list every instance of:

- ambiguous nouns, verbs and actions;
- internal jargon or assumed knowledge;
- vague labels, outcomes and system states;
- missing consequences, recovery or timing;
- inconsistent terminology and capitalisation;
- redundant headings, intros, helper text and confirmations;
- text that breaks at realistic widths or in translation;
- tone that ignores stress, risk, success or urgency;
- copy that reads as generated (the list in [page-copy.md](page-copy.md), "Copy that reads as generated").

Done when every string on the path has been read and each finding names its string and its screen.

### 3. Set the message hierarchy

For each state, decide:

1. the one fact the user needs now;
2. the action available next;
3. the supporting context that changes the decision;
4. the tone this moment calls for.

If the heading already explains the state, the introduction adds new information or goes.

### 4. Write by function

- **Interface copy** (buttons, navigation, forms, errors, permissions, confirmations, loading, empty and success states, tooltips, help, onboarding): [patterns.md](patterns.md).
- **Page copy** (landing pages, launch and campaign pages, headlines, supporting lines, proof): [page-copy.md](page-copy.md). Write the argument first, then the headlines inside the two-line budget.

Give each recommended string 2–3 alternatives with the tone and when each fits.

### 5. Finish the typography of the words

- Curly quotes and apostrophes (“ ” ’), a real ellipsis (…), an en dash for ranges (9–5).
- A non-breaking space between a number and its unit, and before the last short word of a headline that would otherwise orphan.
- Tabular figures wherever numbers line up in columns (prices, tables).
- Balanced line breaks on headings; for a break that matters, mark it in the copy deck (`Stools for / small kitchens`) and check it at phone width.
- All caps only for three words or fewer, with 0.02–0.06em tracking.
- No text under 13px, no centred paragraph longer than three lines, no justified text.

### 6. Verify

Read the flow in context with the new copy in place and check:

- comprehension without hidden product knowledge;
- actionability at errors, empty states and decision points;
- factual accuracy and consistent terminology;
- scanability at the target widths and at 200% zoom;
- long names, localisation expansion, plurals and dynamic values;
- accessible names and announced state changes;
- tone fitted to the consequence and the emotional context.

Done when every check passes and each string is as short as it can be without removing meaning or recovery. When the new copy changes the layout (longer labels, extra lines), suggest a `design-critique` pass.

## Voice and Tone

Voice stays consistent; tone adapts to the moment:
- **Success**: Celebratory but not over the top; routine success is brief
- **Error**: Empathetic and helpful
- **Warning**: Clear and actionable
- **Neutral**: Informative and concise
- **Serious moments** (privacy, payment, deletion, access loss, blocked work): warmth is welcome, jokes are not

Use plain language without flattening terminology the audience genuinely knows. Keep one word per concept; vary nothing for literary effect. When terms drift across the product, keep a short terminology glossary and attach it to the output.

## Localisation and Accessibility

- Write complete, translatable messages rather than concatenated fragments.
- Keep variables and numbers structured so translators can reorder them.
- Leave room for expansion instead of abbreviating early.
- Alt text carries the image's information; decorative images get empty alt.
- Screen-reader names match the visible labels and outcomes; icon-only controls get accessible names.
- The message stands without punctuation, colour or an icon carrying it alone.

## Output

```markdown
## UX Copy: [Context]

### Findings (when reviewing)
| String | Screen | Problem | Rewrite |
|--------|--------|---------|---------|
| [Current copy] | [Where] | [Ambiguous / jargon / missing recovery / generated / …] | [New copy] |

### Recommended Copy
**[Element]**: [Copy]

### Alternatives
| Option | Copy | Tone | Best For |
|--------|------|------|----------|
| A | [Copy] | [Tone] | [When to use] |
| B | [Copy] | [Tone] | [When to use] |
| C | [Copy] | [Tone] | [When to use] |

### Rationale
[Why this copy works — user context, clarity, action-orientation]

### Localization Notes
[Anything translators should know — idioms to avoid, character expansion, cultural context, variables and plurals]

### Sample Details to Confirm
[Every plausible detail you wrote where the brief gave only its shape, so the client confirms or replaces it]
```

## If Connectors Available

If **~~knowledge base** is connected:
- Pull your brand voice guidelines and content style guide
- Check for existing copy patterns and terminology standards

If **~~design tool** is connected:
- View the screen context in Figma to understand the full user flow
- Check character limits and layout constraints from the design

## Tips

1. **Be specific about context** — "Error message when payment fails" is better than "error message."
2. **Share your brand voice** — "We're professional but warm" helps me match your tone.
3. **Consider the user's emotional state** — Error messages need empathy. Success messages can celebrate.
4. **Share the whole flow** — Copy that reads well alone can repeat or contradict the screen next to it.
