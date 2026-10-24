---
name: write-spec
description: Use when writing a feature spec or PRD from a problem statement, user request or vague idea, scoping a first version with segments, goals and non-goals, expanding a lean PRD into a detailed spec, or reviewing an existing PRD for gaps.
argument-hint: "<feature or problem statement>"
---

# Write Spec

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../../CONNECTORS.md).

Write a product requirements document (PRD) that gets engineers, designers, leadership and stakeholders aligned on what to build first and why, readable in a few minutes.

Read `company.md` first for the product, customers, strategy and metrics; ask only for what is missing.

## Pick the branch

- **Lean PRD** (the default): the shortest document that lets the team decide and start, about one to two pages (roughly 600-1,000 words). A PRD with two or three segments can run longer, but every section stays as short as it can be.
- **Detailed spec**: only when the user asks for one, or asks to expand a lean PRD. Same eight sections, going through more of the questions, plus requirements by priority with acceptance criteria, user stories, leading and lagging metrics, and tagged open questions. Read [references/detailed-spec.md](references/detailed-spec.md) for this branch.
- **Review an existing PRD**: see the last section.

## Lean by default

- **Complete means no gap that blocks a decision about the first version**, not every question answered. The questions under each section are a checklist to pick from.
- **A section with little to say gets a line or two.** If you don't know the contacts, leave Contacts out; never list roles to fill in later, pad a section, or write "TBD".
- **Market Segments and Value Propositions are always included**: who has the problem, and why they would care.
- **What you don't know** goes to 7.4 Assumptions and open questions, clearly marked, and stays out of the body.

## Steps

1. **Start from what the user gave you.** Accept any input: a feature name ("SSO support"), a problem statement ("enterprise customers keep asking for centralized auth"), a user request ("users want to export their data as CSV"), a vague idea ("we should do something about onboarding drop-off"), or a document (brief, research, thread, email). If the user problem, the target users, or how success will be measured is missing, ask about them first: up to three short questions in one message, and no PRD in that reply. Ask only what only the user knows; research what the web can answer. Write without the answers only when the user says to go ahead, and then mark those gaps as assumptions. Done when the problem, users and success measure are known or marked as assumptions.
2. **Pull context.** If **~~project tracker** is connected, find related tickets, epics, existing requirements and dependencies. If **~~knowledge base** is connected, find related research, prior specs, design docs, meeting notes and decision records. If **~~design** is connected, pull related mockups, wireframes and design-system components. With nothing connected, work from what the user provides. Search the web for the market, competitors and alternatives, regulations, or what changed recently. A finding goes into the document only if it changes a decision (why now, who the segment is, what we do better than the alternatives), with the source next to the claim; other useful findings go in your reply as notes. Done when every external claim in the draft has a source.
3. **Think before writing** (this stays out of the document): what problem are we solving, for whom, how will we know it worked, and what is the smallest first version that tests it? If the idea is too big, propose phases and spec only the first.
4. **Write the eight sections.**

   **1. Summary** (2-3 sentences): what is this, for whom, and why now?

   **2. Contacts** (optional in the lean version): name, role and comment for key stakeholders.

   **3. Background**: what is this initiative about? Why now: has something changed, or just become possible? Ground the problem in evidence (research, support data, metrics, customer feedback), with attribution.

   **4. Objective**: what is the objective, and why does it matter to customers and the company? How does it align with the vision and strategy (one line, if relevant)? Key results: 1-3 measurable results in SMART OKR form. Goals are outcomes, not outputs ("reduce time to first value by 50%", not "build an onboarding wizard"), and specific ("increase NPS from 32 to 45 within 90 days of launch", not "improve NPS").

   **5. Market segment(s)** (always included): for whom are we building this? Define segments by people's problems or jobs, not demographics. Focus the first version on two or three segments at most. What constraints exist?

   **6. Value proposition(s)** (always included, one per segment): the 6-part template, starting from the customer and naming the alternatives:
   - **Who**: the segment from section 5
   - **Why**: the job they're trying to get done, and the problem in the way
   - **What before**: how they do it today, and what hurts
   - **How**: how our solution gets the job done (the key capability; section 7 has the features)
   - **What after**: the improved outcome, and what becomes possible
   - **Alternatives**: what they'd use without us, and why they'd choose us

   Finish with a one- or two-sentence value proposition statement. In the lean version each part is a line or two; the detailed version goes deeper and can add a Value Curve. The full method is the `value-proposition` skill. This section is the spine of the PRD: section 7 delivers the How, and the key results in section 4 measure the What after. If they don't line up, fix that before anything else.

   **7. Solution**
   - 7.1 UX / prototypes: the key flow, or a link to wireframes (skip if there are none yet)
   - 7.2 Key features: the must-haves for the first version, a line or two each
   - 7.3 Technology (optional, only if relevant)
   - 7.4 Assumptions and open questions: what we believe but haven't proven, and what we still need to find out. Only genuinely open questions: leave out what context already answers.

   **8. Release**: what goes in the first version, what comes later, and what we are explicitly not doing (non-goals, with a brief reason each: they prevent scope creep). How long could it take, in relative timeframes rather than exact dates; note any hard deadlines and dependencies.

   Done when sections 4, 6 and 7 line up and every unknown sits in 7.4.
5. **Plain language.** Write for a primary school graduate: short, clear sentences, no jargon. Keep it scannable: a busy reader should get the gist from the headers and bold text.
6. **Save** as `PRD-[product-name].md`, starting with:
   ```
   ## Product Requirements Document: [Feature name]
   **Author**: [user] | **Date**: [today] | **Status**: Draft
   ```
7. **Say what you left out.** In your reply, not the document, one line listing what you skipped on purpose (for example competitive analysis, detailed UX flows, rollout plan). Then offer: the detailed version or one expanded section; tightening the scope further; a `pre-mortem` or `strategy-red-team` pass; `user-stories` for engineering; a `stakeholder-update` to socialize it.

Be opinionated about scope: a tight PRD beats an expansive vague one, and non-goals matter as much as goals.

## Reviewing an existing PRD

Check it against the same standard. Is anything missing that blocks a decision about the first version? Are Market Segments there, with a 6-part value proposition for each segment? Does the Solution deliver its How, and do the key results measure its What after? Are assumptions marked as assumptions? What could be cut without losing anything the team needs? Return the gaps first, then the cuts.
