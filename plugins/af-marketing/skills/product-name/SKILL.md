---
name: product-name
description: Use when naming or renaming a product, feature or brand, or comparing candidate names. For naming an offer or package, see offers.
metadata:
  version: 1.0.0
---

# Product Name

Generate distinctive, memorable name options that fit the brand, the audience and the positioning, each with the reasoning and the availability risks to check before committing.

Read `company.md` first (and `.agents/product-marketing.md` if it exists) for brand values, voice, audience, positioning and competitors. Ask only for what's missing: what is being named and its core value, the naming conventions the company already uses, competitor names to stand apart from, and the markets and languages it must work in.

## Step 1: Generate options

Suggest five names. Favor names that are:

- Easy to pronounce and spell, including for the target markets' languages
- Distinct from competitors' names
- Aligned with the brand's tone and positioning
- Relevant to the product's core value or use case
- Plausibly available as a trademark and domain

Spread the five across styles (descriptive, suggestive, invented, metaphor, compound), so the user is choosing between directions and not between near-duplicates.

**Done when:** five names exist and no two share a root or style.

## Step 2: Write each one up

For each name:

1. **Rationale**: how it reflects the product's value and appeals to the audience
2. **Brand fit**: how it sits within the brand architecture and existing names
3. **Memorability**: what makes it distinctive and easy to recall
4. **Risks**: unintended meanings or slang in the target languages, similarity to competitor or well-known names, and spelling ambiguity when heard aloud
5. **Domain and trademark**: likely availability. When a lookup tool is connected, check the domain; otherwise say it is unchecked

**Done when:** every name has all five fields filled.

## Output

```
## Name Options: [What is being named]

| # | Name | Style | Rationale | Brand fit | Risks | Domain / trademark |
|---|---|---|---|---|---|---|

**Recommended**: [name and why]
```

Close with the checks a person must run before committing: a trademark search in each target market (with counsel for a company or product name), a domain and social handle check, and saying the name aloud to a few target customers.
