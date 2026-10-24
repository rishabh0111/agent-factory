# Sales

Account research, call preparation, outreach, pipeline and forecast reviews, deal strategy and renewals, run by the sales specialist (`sales-specialist`). Start with `/af-sales:setup`: it shows what is connected and renders a starter dashboard.

## Installation

```
/plugin install af-sales --marketplace rishabh0111/agent-factory
```

## Context

Run `/af-setup` (from `af-core`) first. It writes your `company.md` and loads it into every session, so these skills work from your products, customers, voice and policies.

## Skills

Skills run when your request matches, or by name. A skill marked under *Interviews you* asks you questions in rounds, so run it yourself in the main session rather than through the specialist.

<!-- skills:start -->
| Skill | What it is for | Interviews you |
|---|---|---|
| `/af-sales:account-context` | 360-degree view of an account - CRM data, recent email threads, docs, transcripts, and internal chat chatter, synthesized into one brief. |  |
| `/af-sales:account-plan` | Build or refresh a strategic account plan - current state, goals, stakeholder coverage, opportunity map, risks, and the action plan - written to a doc and key fields synced to the CRM. |  |
| `/af-sales:account-research` | Research a target company and optionally a specific contact - company overview, recent news, likely priorities, and fit against your ICP. |  |
| `/af-sales:account-tiering` | Score and tier a list of accounts (or your full book) against ICP fit and engagement signals to prioritize where to spend time. |  |
| `/af-sales:call-prep` | Pre-call brief for an upcoming meeting - attendees, account history, prior call context from transcripts, open opportunity status, and suggested discovery questions. |  |
| `/af-sales:call-summary` | Turn a call transcript or call notes into a customer follow-up email draft, an internal chat summary, and proposed CRM updates. |  |
| `/af-sales:close-plan` | Build the business case and mutual action plan for a deal - the why-buy/why-now story, the ROI framing, and the dated step-by-step path to signature shared with the customer. |  |
| `/af-sales:competitive-intelligence` | Competitive analysis two ways - the in-deal play against a named competitor, and win/loss patterns, competitor mentions, and battlecards across the book. |  |
| `/af-sales:create-an-asset` | Build a customer deck, one-pager or leave-behind from your account data, call notes and approved materials, with no made-up numbers. |  |
| `/af-sales:crm-hygiene-check` | Read-only audit of your CRM opportunities for missing fields, stale dates, and stage mismatches - outputs a fix checklist to apply by hand or through update-opportunity. |  |
| `/af-sales:customer-health` | Health check on a customer account and QBR-ready prep - relationship strength, engagement trend, risk signals, value delivered, and the agenda that makes the review worth their time. |  |
| `/af-sales:customer-voice` | Surface what customers are actually saying - direct attributed quotes on a topic across call transcripts and email, across your accounts. |  |
| `/af-sales:daily-briefing` | Morning rundown - today's meetings with account context, opps closing soon with stale flags, waiting customer emails, and the day's top actions. |  |
| `/af-sales:deal-advance-gap` | Forward-looking gap check on one opportunity - exactly what is missing to advance it to the next stage and to close, with who does what by when. |  |
| `/af-sales:deal-review` | Deep-dive on a single opportunity - signal-adjusted health score, risks, gaps in qualification, and recommended next actions. |  |
| `/af-sales:deal-signals` | Proactive watch over your book - deals gone quiet, close dates slipping into view, champion changes, renewal windows opening, competitor mentions - surfaced as a short alert digest you can act on. |  |
| `/af-sales:deal-slip-scenario` | Model what happens to your number if a deal slips, shrinks, or dies - quota impact, coverage ratio change, and the substitute pipeline needed to stay on plan. |  |
| `/af-sales:draft-outreach` | Draft a personalized outreach email or multi-touch sequence to a prospect, create it as an email draft for review, and add the contact to a sequence in your sales engagement tool when asked. |  |
| `/af-sales:end-of-day` | The closing beat of the day - every call processed or explicitly skipped, the CRM brought current, commitments captured, and tomorrow's top three teed up. |  |
| `/af-sales:expansion-whitespace` | Find the expansion whitespace in an account or a book - what they own vs. what they could own, the evidence for each play, and the open opps to create. |  |
| `/af-sales:forecast` | Generate the commit / best-case / pipeline narrative for a forecast call or a 1:1 with your manager - what's closing, what's at risk, what changed since last time. |  |
| `/af-sales:handle-objection` | Work through a live objection or competitive threat - what's really being said, the response that has worked before, and the proof points to use, grounded in your own win/loss history and customer quotes. |  |
| `/af-sales:inbox-sweep` | Batch-process unread customer emails - classify, prioritize, and draft replies. |  |
| `/af-sales:lead-triage` | For a sales team working a CRM, score and route an inbound lead, or rank a backlog of leads, against your ICP and qualification framework, then recommend a priority, an owner and a next action. |  |
| `/af-sales:log-activity` | Log a call, meeting, or email exchange to the CRM after the fact as a completed activity on the right account, opportunity, and contact - drafted from your description or a transcript, shown with its sources and saved when you ask. |  |
| `/af-sales:pipeline-review` | Stage-by-stage pipeline health check - coverage, aging, conversion, and at-risk deals - from CRM opportunity data. |  |
| `/af-sales:renewal-radar` | Upcoming renewals with timing, risk, and uplift potential - and the renewal opportunity records to keep them honest. |  |
| `/af-sales:rep-context` | Leader's prep on a single rep before a 1:1 - their pipeline, recent activity, what they've been working on per chat and calendar, and where they might need help. |  |
| `/af-sales:route-lead` | Decide who owns an unrouted lead or opportunity and manage the handoff - deterministic routing by the org's own rules, a routing card the human router accepts or overrides, and drafted handoff notes. |  |
| `/af-sales:schedule-meeting` | Find a time, draft the invite, and book the meeting on Google Calendar or Outlook - then log it to the CRM as an event on the right account and opportunity. |  |
| `/af-sales:setup` | First-run setup - checks which tools are connected, shows what's connected and what each one unlocks, learns how you write from your sent email, and renders a starter dashboard right away with no upfront interview. |  |
| `/af-sales:stakeholder-map` | Map the people in a deal or account - roles, influence, sentiment, who's missing, and your best access path to the people you haven't reached. |  |
| `/af-sales:team-pipeline` | Leader view - roll up a team's pipeline by rep and stage, flag at-risk deals, and surface coaching moments. |  |
| `/af-sales:update-opportunity` | Guided updates to an opportunity - push the stage, move the close date, set next steps, fix amount or forecast category. |  |
| `/af-sales:weekly-wrap` | End-of-week summary for a rep or leader - what closed, what moved, what slipped, and what's on deck Monday. |  |
| `/af-sales:win-loss-review` | Analyze recently closed opportunities to find patterns in what wins and what loses - stage of loss, common objections from transcripts, deal characteristics. |  |
<!-- skills:end -->

## Connectors

Skills that read a CRM, email, calendar, call recorder, enrichment tool or chat expect that system's connector: [CONNECTORS.md](CONNECTORS.md) lists them, and the plugin's `.mcp.json` bundles the servers. With nothing connected, paste or upload the data instead.

Connector permissions are where your team controls what runs: each connector allows, asks or blocks each of its tools, and the skills stay inside those settings. A blocked write becomes a checklist to apply by hand. For scheduled runs, such as a morning briefing, set send, post and write tools to **ask**.

## Licence

[LICENSE](LICENSE).
