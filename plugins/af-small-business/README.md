# Small business

Invoicing, payroll, cash flow, month-end, hiring, sales pipeline, marketing and support for a small company, run by the small-business specialist (`small-business-specialist`). Ask in plain words, such as "who owes me money?", and the `smb-router` skill picks the right skill.

## Installation

```
/plugin install af-small-business --marketplace rishabh0111/agent-factory
```

> **Not financial, tax, legal or HR advice.** Review every output, with a qualified professional where it matters, before using it.

## Getting started

1. Run `/af-setup` (from `af-core`). It writes your `company.md` and loads it into every session.
2. Run `/af-small-business:smb-onboard` yourself in the main session, since it interviews you. It connects your first two tools, runs one real report, takes what `company.md` already says, and saves the rest of your business profile into `company.md`.
3. From then on, describe what you need.

Every skill also works without connectors: from a CSV export, a pasted email, an uploaded PDF or plain conversation.

## Skills

Skills run when your request matches, or by name. A skill marked under *Interviews you* asks you questions in rounds, so run it yourself in the main session rather than through the specialist.

<!-- skills:start -->
| Skill | What it is for | Interviews you |
|---|---|---|
| `/af-small-business:ad-manager` | The ads consultant that becomes an ads agent. |  |
| `/af-small-business:ap-processor` | Works the bill pile end to end: reads bills and vendor statements out of the AP inbox or from uploaded PDFs and phone photos, pulls out vendor, amount, due date, and line detail, codes each one to the right account and job, matches it against the purchase order and the receiving ticket, then stages the entries and a proposed payment run in QuickBooks, Xero, or NetSuite for the owner to approve in one pass. |  |
| `/af-small-business:brand-style` | Sets and updates the owner's brand look and output preferences, which every page and document the plugin produces then follows automatically. | yes |
| `/af-small-business:build-agent` | Turns a task the owner keeps doing by hand into a named, reusable skill they can trigger by name or put on a schedule. |  |
| `/af-small-business:build-connector` | Gets Claude talking to a tool nobody built an official connector for. |  |
| `/af-small-business:business-pulse` | Produces a one-page cross-functional business snapshot for SMB owners — cash position (the ledger: MYOB, NetSuite, QuickBooks, Xero, or Zoho Books), sales trend (PayPal/Square/Stripe), pipeline movement (HubSpot), this week's commitments (Calendar), urgent watch-list items (Gmail or M365, Slack), and the single most important thing needing attention today. |  |
| `/af-small-business:call-list` | Builds today's call list. Runs lead-triage to rank the top-5 leads most worth calling, supplies talking points from email history, blocks time on the calendar, and drafts follow-up messages. |  |
| `/af-small-business:canva-creator` | Takes an approved content brief and executes a campaign end-to-end: builds the posting calendar, generates Canva designs for social posts, drafts caption and email copy, and stages social sends in HubSpot. |  |
| `/af-small-business:cash-flow-snapshot` | Reads AR/AP, historical cash timing, and known fixed costs from the ledger (MYOB, NetSuite, QuickBooks, Xero, or Zoho Books) or from PayPal, Square, or Stripe — or a CSV upload — and produces a 30/60/90-day cash flow forecast with percentage-variance confidence bands and named risk flags. |  |
| `/af-small-business:close-month` | Closes the books and turns them into a decision as a three-link chain — month-end-prep reconciles the ledger against every connected payment processor and writes the P&L narrative, cash-flow-snapshot then refreshes the 30/60/90-day forecast off the newly closed numbers rather than raw ones, and report-builder publishes and distributes the close packet. |  |
| `/af-small-business:content-strategy` | Analyzes sales data from PayPal and QuickBooks to find top performers and slow movers, layers in seasonality, and produces a prioritized 30-day content brief: what to push, what offers to run, what to hold. |  |
| `/af-small-business:contract-review` | Lightweight NDA, MSA, and vendor contract review for SMBs without legal on staff. |  |
| `/af-small-business:crm-autopilot` | Keeps the CRM current without the owner ever opening it. |  |
| `/af-small-business:grant-rfp-writer` | Finds grant and solicitation opportunities the organization actually qualifies for, runs a hard go/no-go before anyone starts writing, drafts the application or response from past submissions and real program data, and tracks every deadline and reporting obligation that follows an award. |  |
| `/af-small-business:grow-pipeline` | Fills the funnel end to end without the owner babysitting it — reads the market and the competition for context, builds a ranked list of named prospects with a reason attached to each, writes personalized outreach in the owner's own voice, and logs every touch to the CRM. |  |
| `/af-small-business:growth-pulse` | Answers one question for an SMB owner — is the growth engine actually working? |  |
| `/af-small-business:hiring-screener` | Takes a pile of applications and turns it into a ranked shortlist, scored only against the job's stated rubric, with drafted replies to every candidate, scheduled interviews, and an onboarding checklist for whoever gets hired. |  |
| `/af-small-business:inbox-manager` | Turns a full inbox into a short, ranked list of what actually needs the owner. |  |
| `/af-small-business:inventory-planner` | Works out what to reorder and when, from what is actually selling: pulls sales history and stock on hand from Shopify, Square, NetSuite, or an uploaded CSV, computes 7-day and 28-day sales velocity per item, projects a conservative stockout date for each, sizes a 60-day reorder quantity, and drafts the purchase orders and vendor emails to cover it. |  |
| `/af-small-business:invoice-chase` | Drafts overdue-invoice reminder emails from the ledger (MYOB, NetSuite, QuickBooks, Xero, or Zoho Books) plus PayPal, Stripe, and Airwallex data, matched to each customer's payment history and tone (gentle for good customers, firm for repeat late payers). |  |
| `/af-small-business:job-post-builder` | Builds end-to-end hiring packets — job post, structured interview guide with scoring rubric, and offer letter template — from a hiring brief. |  |
| `/af-small-business:lead-finder` | Builds a ranked list of prospects worth contacting. |  |
| `/af-small-business:lead-triage` | For a small-business owner doing their own selling: scores inbound HubSpot leads by engagement signals, company fit, and urgency markers, ranks the ones worth a call today with talking points, drafts the follow-ups, and proposes calendar times for the owner to book. |  |
| `/af-small-business:marketing-monday` | Delivers the weekly growth briefing as one merged read — whether the growth engine is working, what customers are saying in public and private, what competitors actually changed, and the three growth actions worth taking this week. |  |
| `/af-small-business:monday-brief` | Runs the owner's Monday morning briefing as a two-link chain — business-pulse for the cross-connector snapshot of cash, sales, and pipeline, and report-builder for any saved KPI reports the owner has already defined — then reads the week ahead straight from Calendar and mail and merges all three parts into a single one-page Monday document, delivered per the owner's stored output preference. |  |
| `/af-small-business:month-end-prep` | Reconciles the accounting ledger (MYOB, NetSuite, QuickBooks, Xero, or Zoho Books) against PayPal, Shopify, Square, and Stripe settlements, flags transactions that need attention, suspicious duplicates, and missing receipts, then writes a plain-English P&L narrative and exports a close packet (xlsx + one-page PDF). |  |
| `/af-small-business:outreach-composer` | Writes prospect outreach and follow-up sequences that sound like the owner wrote them, not like an AI did. |  |
| `/af-small-business:pay-the-bills` | Works the bill pile from the AP inbox all the way to a staged payment run — reads and codes every bill, then checks the cash position before a dollar is committed, then stages the run for one-click approval and keeps the books tidy for close. |  |
| `/af-small-business:payroll-prep` | Gets payroll ready to run without anyone getting shorted: pulls timesheets from Gusto, QuickBooks Payroll, or an uploaded spreadsheet, totals regular, overtime, and PTO hours by person, flags every anomaly it finds — missed punches, overtime spikes, rate changes, mid-period hires and terminations, hours off the schedule — and stages the run for the owner to approve line by line before a dollar moves. | yes |
| `/af-small-business:plan-payroll` | Runs the payroll-confidence chain end to end — forecasts cash across the payroll window with cash-flow-snapshot, ranks and drafts overdue-invoice reminders with invoice-chase to close any gap, then assembles timesheets, flags every anomaly, and stages the run with payroll-prep. | yes |
| `/af-small-business:proposal-builder` | Turns whatever came out of a discovery conversation — a call transcript, a voice memo, jobsite photos, an RFP document, a set of drawings, or scrappy notes — into a branded, costed proposal, estimate, or statement of work built on the owner's own templates and historical pricing. |  |
| `/af-small-business:reactivate` | Wins back customers who have quietly stopped buying — finds the ones whose gap has stretched past their own normal rhythm or who are showing churn signals, ranks them by what the relationship was worth, drafts a win-back message per customer in the owner's voice, and sends and logs only what the owner approves. |  |
| `/af-small-business:report-builder` | Turns a plain-English description of a recurring report into a real, repeatable report — defines the metrics, pulls them from whatever data sources are connected, delivers a chat summary plus an XLSX workbook, and saves the definition so the same report reruns on demand or on a schedule. |  |
| `/af-small-business:report-pack` | Delivers the owner's custom recurring report pack on a set cadence — runs the saved report definition from report-builder, wraps it in a business-pulse snapshot so the numbers have context, and hands over one chat summary plus the workbook. |  |
| `/af-small-business:restock` | Turns what is actually selling into a reorder decision and gets it all the way into the books — computes sales velocity and conservative stockout dates per item, sizes the reorder, drafts the purchase order and the vendor email, and then stages the matching entry so the bill matches against the PO when it arrives. |  |
| `/af-small-business:review-reputation` | Watches what customers are saying in public and in private, then does something about it. |  |
| `/af-small-business:seo-ai-visibility` | Audits and fixes both halves of being found — classic search and AI answers. |  |
| `/af-small-business:smb-onboard` | Claude as the trainer. Walks an SMB owner through connecting their first two tools, runs one recipe to prove immediate value, interviews them about their business (industry, size, top three headaches), stores that context persistently so every other skill benefits, and sets a weekly check-in cadence. | yes |
| `/af-small-business:smb-router` | The front door to the Small Business plugin. |  |
| `/af-small-business:social-content-engine` | Runs the owner's content operation as a standing thing rather than a one-off: keeps a rolling posting calendar, learns the owner's voice, generates on-brand Canva graphics, writes captions that sound like them, repurposes one asset into every channel format, and stages posts for approval instead of publishing on its own. |  |
| `/af-small-business:speed-to-lead` | Makes sure no inbound lead goes unanswered. |  |
| `/af-small-business:tax-prep` | Prepares tax materials as a two-link chain — month-end-prep confirms the books are closed and reconciled first, then tax-season-organizer calculates the quarterly estimated payment or builds the year-end 1099-NEC list and accountant packet from those closed numbers. |  |
| `/af-small-business:tax-season-organizer` | Prepares tax-season materials for the owner's accountant, not tax advice. |  |
| `/af-small-business:ticket-deflector` | Reads a forwarded customer email or ticket, pulls order and refund status from a payments connector (PayPal, Square, or Stripe) or Shopify, account history from the CRM, and open tickets from a support desk (Zoho Desk), drafts a tone-matched reply in the owner's writing voice, and can issue a refund through the payments connector with explicit owner approval. |  |
<!-- skills:end -->

## Connectors

Skills that read an accounting ledger, payments, storefront, CRM, mail or calendar expect that system's connector: the plugin's `.mcp.json` bundles the servers. With nothing connected, paste or upload the data instead. A tool you already connected yourself may also appear under this plugin; either entry works.

## Licence

[LICENSE](LICENSE).
