---
description: Generate a marketing creative toolkit, from campaign ideas and positioning to value prop copy and product names
argument-hint: "<product or marketing challenge>"
---

# /market-product

Produce creative marketing assets in one pass, or only the modules you need: campaign ideas, positioning options, value proposition copy, and name options.

## Usage

```
/market-product $ARGUMENTS
```

Examples:

```
/market-product AI scheduling tool for remote teams, need launch marketing
/market-product Position our analytics product against enterprise competitors
/market-product We need a name for our new developer productivity feature
```

## Workflow

### 1. Understand the need

Read `company.md` and `.agents/product-marketing.md` first. Then ask, in one message, only what they don't answer:

- The product and its target audience
- Which modules: the full toolkit, or ideas, positioning, copy, or naming
- The context: launch, rebrand, campaign, or competitive repositioning
- Brand guidelines or tone of voice

Wait for the answers.

### 2. Generate the chosen modules

| Module | Skill | Produce |
|---|---|---|
| Campaign ideas | **marketing-ideas** | Five cost-effective ideas, mixing quick wins and bigger bets |
| Positioning | **product-marketing** (positioning options) | Options against the top competitors, with a recommendation |
| Value prop copy | **product-marketing** (value proposition statements) | Tagline, elevator pitch, landing page hero, sales one-liner, per segment |
| Naming | **product-name** | Five names with rationale, risks and availability notes |

Make ideas specific and actionable ("a template gallery seeded on r/notion"), never generic ("use social media"). Write copy in the customer's language, and tie it to the customer's job to be done rather than to features.

### 3. Assemble the toolkit

```
## Marketing Toolkit: [Product]

**Context**: [launch / rebrand / campaign / repositioning]

### Campaign ideas
| # | Idea | Channel | Effort | Expected impact |
|---|---|---|---|---|

### Positioning options
| # | Positioning | vs. competitor | Strength | Risk |
|---|---|---|---|---|
**Recommended positioning**: [which and why]

### Value prop copy
**Tagline**: | **Elevator pitch**: | **Landing page hero**: | **Sales one-liner**:

### Name options (if requested)
| # | Name | Rationale | Domain | Risk |
|---|---|---|---|---|

### Messaging matrix
| Audience | Key message | Proof point | CTA |
|---|---|---|---|
```

Include only the modules requested. Save as markdown.

### 4. Offer next steps

- Test the leading positioning as headlines with the **ab-testing** skill
- Draft full content (blog post, email, social) with **copywriting**, **emails** or **social**
- Define the North Star for the campaign: `/af-marketing:north-star`
- A battlecard to back the positioning: `/af-marketing:battlecard`
- Plan the full launch: `/af-marketing:plan-launch`
