---
description: Analyze the competitive landscape for a product, comparing strengths and weaknesses and finding where to differentiate
argument-hint: "<your product or market>"
---

# /competitive-analysis

Research the competitive landscape from the product side: who competes, how they position, and where the product should differentiate.

```
/competitive-analysis $ARGUMENTS
```

Examples: `/competitive-analysis AI-powered project management tools`, `/competitive-analysis Our product vs Notion, Asana and Monday.com`, or an uploaded competitor list or market brief.

## Workflow

1. **Context.** Take what `company.md` and `$ARGUMENTS` already say, then ask for the rest: the product and the category it competes in; specific competitors to analyze, or whether to identify them; the lens (features, positioning, pricing, go-to-market); and the use (strategy, roadmap, investor pitch, sales enablement). Done when the competitive set or the landscape-scan scope is agreed.
2. **Analyze.** Run `/af-product-management:competitive-brief`, with its landscape scan when no competitors were named, using web research for current data. For each competitor: positioning, strengths, weaknesses, pricing, traction and recent moves.
3. **Deliver** the brief saved as markdown, dated, with the landscape table, feature comparison matrix, 2x2 positioning map, differentiation opportunities, threats and the double-down / close-the-gap / ignore recommendations. Done when table stakes are separated from differentiators. Note that competitive landscapes shift fast: suggest a quarterly refresh.
4. **Next steps.** Offer a sales battle card against one competitor (`/af-marketing:sales-enablement`), differentiated positioning (`/af-product-management:value-proposition`), or the feature gaps to close added to the roadmap (`/af-product-management:roadmap-update`).
