---
description: Scan a market or industry with SWOT, PESTLE, Porter's Five Forces and the Ansoff Matrix, then synthesize them into strategic recommendations
argument-hint: "<product, market, or industry>"
---

# /market-scan

Run four strategy frameworks on one market and make them talk to each other. The synthesis is the most valuable part.

```
/market-scan $ARGUMENTS
```

Examples: `/market-scan EdTech market for corporate learning`, `/market-scan Our fintech product, preparing for a board strategy review`, or an uploaded market brief or strategy doc.

## Workflow

1. **Context.** Take what `company.md` already says about the product, customers and market; ask only for what is missing: what is being analyzed, the purpose (strategic planning, market entry, investor prep, annual review), the current position in the market, and whether to run all four frameworks or a subset. Done when the scope and purpose are one sentence each.
2. **Run the frameworks in order**, each building on the previous, grounded in current web research (named regulations, market data, specific players):
   - `/af-product-management:swot-analysis`: internal strengths and weaknesses, external opportunities and threats, with actions;
   - `/af-product-management:pestle-analysis`: macro factors with impact, trend and timeframe;
   - `/af-product-management:porters-five-forces`: force intensities with specific drivers, and industry attractiveness;
   - `/af-product-management:ansoff-matrix`: concrete, risk-adjusted growth opportunities per quadrant.

   Done when each framework meets its own skill's completion criteria.
3. **Synthesize.** Cross-reference the four: converging signals (what several frameworks agree on), strategic imperatives (actions critical across analyses), key risks, and the best risk-adjusted growth opportunities. Done when each recommendation cites evidence from at least two frameworks.
4. **Report**, saved as markdown:

   ```
   ## Strategic Market Scan: [Market / product]
   Date: [today] | Purpose: [...]

   ### Executive summary
   [5-7 sentences: the strategic situation and the key recommendations]

   ### SWOT analysis
   [2×2 table + actions]
   ### PESTLE analysis
   | Factor | Current state | Impact | Trend | Timeframe |
   ### Porter's Five Forces
   | Force | Intensity | Key drivers | Implications |
   Industry attractiveness: [High / Medium / Low]
   ### Ansoff growth matrix
   | Strategy | Opportunity | Risk | Investment | Priority |

   ### Cross-framework synthesis
   Converging signals | Strategic imperatives | Key risks | Best opportunities

   ### Strategic recommendations
   1. [Recommendation, with supporting evidence from several frameworks]

   ### Monitoring plan
   | Signal | What to watch | Source | Check frequency |
   ```

5. **Next steps.** Offer a strategy built on these findings (`/af-product-management:strategy`), deep-dives on competitors named in the Five Forces (`/af-product-management:competitive-brief`), or pricing for the market-penetration opportunity (`/af-product-management:pricing`).
