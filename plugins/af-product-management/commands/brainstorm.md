---
description: Brainstorm a product idea, problem space or strategic question with a sharp thinking partner, or generate ranked ideas or experiments for a new or existing product
argument-hint: "[ideas|experiments] [existing|new] <topic, problem, or idea to explore>"
---

# /brainstorm

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../CONNECTORS.md).

Push a product topic further than the PM would get alone.

```
/brainstorm $ARGUMENTS
```

Examples: `/brainstorm Our users drop off during onboarding` (sparring session), `/brainstorm ideas existing Mobile banking app engagement`, `/brainstorm ideas new AI meal planning for busy parents`, `/brainstorm experiments existing Onboarding flow redesign`, `/brainstorm experiments new Marketplace for freelance designers`.

## Pick the mode

Read the first words of `$ARGUMENTS`:

- **No mode word**: a **sparring session**, a conversation rather than a deliverable.
- **`ideas`**: a ranked idea set from PM, designer and engineer perspectives.
- **`experiments`**: validation experiments for the ideas or assumptions given.

For `ideas` and `experiments`, the stage is `existing` (continuous discovery on a live product) or `new` (initial discovery for an unvalidated concept). When the stage word is missing, infer it from `company.md` or ask: "Is this for an existing product or a new product concept?"

## Workflow

1. **Starting point.** Take what `company.md`, uploaded files (PRDs, research, strategy decks) and `$ARGUMENTS` already say. For a sparring session, identify what the PM brought and open in the matching mode of the `/af-product-management:product-brainstorming` skill: a problem or vague instinct → problem exploration; a half-formed idea → assumption testing; a broad question → strategy exploration; a constraint to work around → solution ideation. Ask one clarifying question, then dive in: a whiteboard conversation, not an intake form. Done when the topic and mode are set.
2. **Pull context** when connected; otherwise work from what the PM provides, without asking them to connect tools.
   - **~~knowledge base**: prior research, specs, decisions, earlier brainstorm notes.
   - **~~product analytics**: usage, adoption and behavior data, so ideas rest on real numbers.
   - **~~project tracker**: similar ideas explored, attempted or shelved; related epics.
   - **~~chat**: recent team discussions and customer conversations on the topic.
3. **Run the mode.**
   - Sparring session: the `product-brainstorming` skill's session rhythm: frame, diverge, provoke, converge, capture.
   - `ideas`: the skill's trio ideation branch, for the chosen stage; then spar on the top 5.
   - `experiments`: `/af-product-management:design-experiments` for the chosen stage, ranked by learning per effort.
4. **Close.** For a sparring session, summarize only when the PM signals they are done or the conversation has run its course: the 2-5 key ideas, the strongest direction and why (take a position), its riskiest assumption, the single most useful next step, and parked ideas. For `ideas` and `experiments`, deliver the skill's output and save it as markdown when substantial. Done when the PM has one next step.
5. **Offer next steps**:
   - Turn the top idea into a spec: `/af-product-management:write-spec`.
   - Identify the assumptions behind the top ideas: `/af-product-management:identify-assumptions`.
   - Design experiments to validate them: `/af-product-management:brainstorm experiments`.
   - Map the space into an opportunity solution tree: `/af-product-management:opportunity-solution-tree`.
   - Prioritize the ideas against the current backlog: `/af-product-management:prioritize-features`.
   - Check how competitors approach this: `/af-product-management:competitive-brief`.
   - Plan interviews to test the riskiest assumption: `/af-product-management:interview-script`.
