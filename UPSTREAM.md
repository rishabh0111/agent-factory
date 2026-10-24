# Upstream sources

This file records where each skill and command in agent-factory came from: the upstream repo, the commit we copied, and the path in that repo. Use it to find what changed upstream since we copied, then port the fixes you want by hand. Kinds: **as-is** keeps the upstream text under the upstream folder name; **renamed** takes one upstream source under a new name; **merged** combines several sources into one skill, so upstream changes have to be applied by intent. The twelve specialist agents and the `af-core` skills `af-add-specialist` and `af-setup` were written here and have no upstream; `af-ask` follows the shape of mattpocock's `ask-matt` with our own catalogue. Run `scripts/upstream-diff.sh <path-to-upstream-clone>` to list upstream commits touching each row's paths.

## Upstream repos

| Name | URL | Commit copied | Licence |
|---|---|---|---|
| knowledge-work-plugins | https://github.com/anthropics/knowledge-work-plugins | `bc8f6922cfeea215a202cdcc9f0d299a990889a8` | Apache-2.0 |
| marketingskills | https://github.com/coreyhaines31/marketingskills | `e85f3cbc2e4a79bf33b2a12e9bdd9087d414735b` | MIT |
| gstack | https://github.com/garrytan/gstack | `b616d6c53dd8fc0d8db210444b44a131b553b83e` | MIT |
| mattpocock-skills | https://github.com/mattpocock/skills | `5beb35b040e3de97e54fa9e386d7e42d15c295c2` | MIT |
| pm-skills | https://github.com/phuryn/pm-skills | `07b34f64ee828df08953f505b7f747aef85ae7c6` | MIT |
| taste-skill | https://github.com/Leonxlnx/taste-skill | `6010f91a9935f1c167dfc500fb1a475681892e6b` | MIT |
| impeccable | https://github.com/pbakaus/impeccable | `936867543ac2576920d663cc9803597f6044f3ac` | Apache-2.0 |

## Skills and commands

| Ours | Upstream repo | Upstream path(s) | Kind |
|---|---|---|---|
| af-ask | mattpocock-skills | `skills/engineering/ask-matt` | renamed |
| customer-escalation (af-customer-support) | knowledge-work-plugins | `customer-support/skills/customer-escalation` | as-is |
| customer-research (af-customer-support) | knowledge-work-plugins | `customer-support/skills/customer-research` | as-is |
| draft-response (af-customer-support) | knowledge-work-plugins | `customer-support/skills/draft-response` | as-is |
| kb-article (af-customer-support) | knowledge-work-plugins | `customer-support/skills/kb-article` | as-is |
| ticket-triage (af-customer-support) | knowledge-work-plugins | `customer-support/skills/ticket-triage` | as-is |
| analyze (af-data) | knowledge-work-plugins | `data/skills/analyze` | as-is |
| build-dashboard (af-data) | knowledge-work-plugins | `data/skills/build-dashboard` | as-is |
| create-viz (af-data) | knowledge-work-plugins | `data/skills/create-viz` | as-is |
| data-context-extractor (af-data) | knowledge-work-plugins | `data/skills/data-context-extractor` | as-is |
| data-visualization (af-data) | knowledge-work-plugins | `data/skills/data-visualization` | as-is |
| explore-data (af-data) | knowledge-work-plugins | `data/skills/explore-data` | as-is |
| sql-queries (af-data) | knowledge-work-plugins, pm-skills | `knowledge-work-plugins:data/skills/sql-queries` `pm-skills:pm-data-analytics/skills/sql-queries` | merged |
| statistical-analysis (af-data) | knowledge-work-plugins | `data/skills/statistical-analysis` | as-is |
| validate-data (af-data) | knowledge-work-plugins | `data/skills/validate-data` | as-is |
| write-query (af-data) | knowledge-work-plugins, pm-skills | `knowledge-work-plugins:data/skills/write-query` `pm-skills:pm-data-analytics/commands/write-query.md` | merged |
| ab-test-analysis (af-data) | pm-skills | `pm-data-analytics/skills/ab-test-analysis` | as-is |
| cohort-analysis (af-data) | pm-skills | `pm-data-analytics/skills/cohort-analysis` | as-is |
| analyze-cohorts (command, af-data) | pm-skills | `pm-data-analytics/commands/analyze-cohorts.md` | as-is |
| analyze-test (command, af-data) | pm-skills | `pm-data-analytics/commands/analyze-test.md` | as-is |
| accessibility-review (af-design) | knowledge-work-plugins, impeccable | `knowledge-work-plugins:design/skills/accessibility-review` `impeccable:.claude/skills/impeccable/reference/audit.md` `impeccable:.claude/skills/impeccable/reference/audit.native.md` | merged |
| design-critique (af-design) | knowledge-work-plugins, impeccable, taste-skill | `knowledge-work-plugins:design/skills/design-critique` `impeccable:.claude/skills/impeccable/reference/critique.md` `impeccable:.claude/skills/impeccable/reference/ios.md` `impeccable:.claude/skills/impeccable/reference/android.md` `impeccable:.claude/skills/impeccable/reference/audit.native.md` `taste-skill:skills/taste-skill/references/critique.md` `taste-skill:skills/taste-skill/references/tells.md` `taste-skill:skills/taste-skill/references/app-screens.md` | merged |
| design-handoff (af-design) | knowledge-work-plugins | `design/skills/design-handoff` | as-is |
| design-system (af-design) | knowledge-work-plugins, impeccable | `knowledge-work-plugins:design/skills/design-system` `impeccable:.claude/skills/impeccable/reference/document.md` `impeccable:.claude/skills/impeccable/reference/extract.md` | merged |
| research-synthesis (af-design) | knowledge-work-plugins | `design/skills/research-synthesis` | as-is |
| user-research (af-design) | knowledge-work-plugins | `design/skills/user-research` | as-is |
| ux-copy (af-design) | knowledge-work-plugins, impeccable, taste-skill | `knowledge-work-plugins:design/skills/ux-copy` `impeccable:.claude/skills/impeccable/reference/clarify.md` `taste-skill:skills/taste-skill/references/copy.md` | merged |
| audit-support (af-finance) | knowledge-work-plugins | `finance/skills/audit-support` | as-is |
| close-management (af-finance) | knowledge-work-plugins | `finance/skills/close-management` | as-is |
| financial-statements (af-finance) | knowledge-work-plugins | `finance/skills/financial-statements` | as-is |
| journal-entry (af-finance) | knowledge-work-plugins | `finance/skills/journal-entry` | as-is |
| journal-entry-prep (af-finance) | knowledge-work-plugins | `finance/skills/journal-entry-prep` | as-is |
| reconciliation (af-finance) | knowledge-work-plugins | `finance/skills/reconciliation` | as-is |
| sox-testing (af-finance) | knowledge-work-plugins | `finance/skills/sox-testing` | as-is |
| variance-analysis (af-finance) | knowledge-work-plugins | `finance/skills/variance-analysis` | as-is |
| comp-analysis (af-human-resources) | knowledge-work-plugins | `human-resources/skills/comp-analysis` | as-is |
| draft-offer (af-human-resources) | knowledge-work-plugins | `human-resources/skills/draft-offer` | as-is |
| interview-prep (af-human-resources) | knowledge-work-plugins | `human-resources/skills/interview-prep` | as-is |
| onboarding (af-human-resources) | knowledge-work-plugins | `human-resources/skills/onboarding` | as-is |
| org-planning (af-human-resources) | knowledge-work-plugins | `human-resources/skills/org-planning` | as-is |
| people-report (af-human-resources) | knowledge-work-plugins | `human-resources/skills/people-report` | as-is |
| performance-review (af-human-resources) | knowledge-work-plugins | `human-resources/skills/performance-review` | as-is |
| policy-lookup (af-human-resources) | knowledge-work-plugins | `human-resources/skills/policy-lookup` | as-is |
| recruiting-pipeline (af-human-resources) | knowledge-work-plugins | `human-resources/skills/recruiting-pipeline` | as-is |
| brief (af-legal) | knowledge-work-plugins | `legal/skills/brief` | as-is |
| compliance-check (af-legal) | knowledge-work-plugins | `legal/skills/compliance-check` | as-is |
| legal-response (af-legal) | knowledge-work-plugins | `legal/skills/legal-response` | as-is |
| legal-risk-assessment (af-legal) | knowledge-work-plugins | `legal/skills/legal-risk-assessment` | as-is |
| meeting-briefing (af-legal) | knowledge-work-plugins | `legal/skills/meeting-briefing` | as-is |
| review-contract (af-legal) | knowledge-work-plugins | `legal/skills/review-contract` | as-is |
| signature-request (af-legal) | knowledge-work-plugins | `legal/skills/signature-request` | as-is |
| triage-nda (af-legal) | knowledge-work-plugins | `legal/skills/triage-nda` | as-is |
| vendor-check (af-legal) | knowledge-work-plugins | `legal/skills/vendor-check` | as-is |
| nda-drafting (af-legal) | pm-skills | `pm-toolkit/skills/draft-nda` | renamed |
| privacy-policy-drafting (af-legal) | pm-skills | `pm-toolkit/skills/privacy-policy` | renamed |
| draft-nda (command, af-legal) | pm-skills | `pm-toolkit/commands/draft-nda.md` | as-is |
| privacy-policy (command, af-legal) | pm-skills | `pm-toolkit/commands/privacy-policy.md` | as-is |
| capacity-plan (af-operations) | knowledge-work-plugins | `operations/skills/capacity-plan` | as-is |
| change-request (af-operations) | knowledge-work-plugins | `operations/skills/change-request` | as-is |
| compliance-tracking (af-operations) | knowledge-work-plugins | `operations/skills/compliance-tracking` | as-is |
| process-doc (af-operations) | knowledge-work-plugins | `operations/skills/process-doc` | as-is |
| process-optimization (af-operations) | knowledge-work-plugins | `operations/skills/process-optimization` | as-is |
| risk-assessment (af-operations) | knowledge-work-plugins | `operations/skills/risk-assessment` | as-is |
| runbook (af-operations) | knowledge-work-plugins | `operations/skills/runbook` | as-is |
| status-report (af-operations) | knowledge-work-plugins | `operations/skills/status-report` | as-is |
| vendor-review (af-operations) | knowledge-work-plugins | `operations/skills/vendor-review` | as-is |
| competitive-brief (af-product-management) | knowledge-work-plugins, pm-skills | `knowledge-work-plugins:product-management/skills/competitive-brief` `pm-skills:pm-market-research/skills/competitor-analysis` | merged |
| metrics-review (af-product-management) | knowledge-work-plugins, pm-skills | `knowledge-work-plugins:product-management/skills/metrics-review` `pm-skills:pm-product-discovery/skills/metrics-dashboard` | merged |
| product-brainstorming (af-product-management) | knowledge-work-plugins, pm-skills | `knowledge-work-plugins:product-management/skills/product-brainstorming` `pm-skills:pm-product-discovery/skills/brainstorm-ideas-new` `pm-skills:pm-product-discovery/skills/brainstorm-ideas-existing` | merged |
| roadmap-update (af-product-management) | knowledge-work-plugins, pm-skills | `knowledge-work-plugins:product-management/skills/roadmap-update` `pm-skills:pm-execution/skills/outcome-roadmap` | merged |
| sprint-planning (af-product-management) | knowledge-work-plugins, pm-skills | `knowledge-work-plugins:product-management/skills/sprint-planning` `pm-skills:pm-execution/skills/sprint-plan` | merged |
| stakeholder-update (af-product-management) | knowledge-work-plugins | `product-management/skills/stakeholder-update` | as-is |
| synthesize-research (af-product-management) | knowledge-work-plugins, pm-skills | `knowledge-work-plugins:product-management/skills/synthesize-research` `pm-skills:pm-product-discovery/skills/summarize-interview` `pm-skills:pm-market-research/skills/sentiment-analysis` | merged |
| write-spec (af-product-management) | knowledge-work-plugins, pm-skills | `knowledge-work-plugins:product-management/skills/write-spec` `pm-skills:pm-execution/skills/create-prd` | merged |
| opportunity-solution-tree (af-product-management) | pm-skills | `pm-product-discovery/skills/opportunity-solution-tree` | as-is |
| interview-script (af-product-management) | pm-skills | `pm-product-discovery/skills/interview-script` | as-is |
| identify-assumptions (af-product-management) | pm-skills | `pm-product-discovery/skills/identify-assumptions-new` `pm-product-discovery/skills/identify-assumptions-existing` | merged |
| prioritize-assumptions (af-product-management) | pm-skills | `pm-product-discovery/skills/prioritize-assumptions` | as-is |
| design-experiments (af-product-management) | pm-skills | `pm-product-discovery/skills/brainstorm-experiments-new` `pm-product-discovery/skills/brainstorm-experiments-existing` | merged |
| prioritize-features (af-product-management) | pm-skills | `pm-product-discovery/skills/prioritize-features` `pm-product-discovery/skills/analyze-feature-requests` | merged |
| customer-journey-map (af-product-management) | pm-skills | `pm-market-research/skills/customer-journey-map` | as-is |
| market-sizing (af-product-management) | pm-skills | `pm-market-research/skills/market-sizing` | as-is |
| market-segments (af-product-management) | pm-skills | `pm-market-research/skills/market-segments` | as-is |
| user-segmentation (af-product-management) | pm-skills | `pm-market-research/skills/user-segmentation` | as-is |
| user-personas (af-product-management) | pm-skills | `pm-market-research/skills/user-personas` | as-is |
| ansoff-matrix (af-product-management) | pm-skills | `pm-product-strategy/skills/ansoff-matrix` | as-is |
| pestle-analysis (af-product-management) | pm-skills | `pm-product-strategy/skills/pestle-analysis` | as-is |
| porters-five-forces (af-product-management) | pm-skills | `pm-product-strategy/skills/porters-five-forces` | as-is |
| swot-analysis (af-product-management) | pm-skills | `pm-product-strategy/skills/swot-analysis` | as-is |
| product-strategy (af-product-management) | pm-skills | `pm-product-strategy/skills/product-strategy` | as-is |
| product-vision (af-product-management) | pm-skills | `pm-product-strategy/skills/product-vision` | as-is |
| value-proposition (af-product-management) | pm-skills | `pm-product-strategy/skills/value-proposition` `pm-product-strategy/commands/value-proposition.md` | merged |
| business-model (af-product-management) | pm-skills | `pm-product-strategy/skills/business-model` `pm-product-strategy/skills/lean-canvas` `pm-product-strategy/skills/startup-canvas` `pm-product-strategy/commands/business-model.md` | merged |
| pricing-strategy (af-product-management) | pm-skills | `pm-product-strategy/skills/pricing-strategy` `pm-product-strategy/skills/monetization-strategy` | merged |
| team-okrs (af-product-management) | pm-skills | `pm-execution/skills/brainstorm-okrs` | renamed |
| user-stories (af-product-management) | pm-skills | `pm-execution/skills/user-stories` `pm-execution/skills/job-stories` `pm-execution/skills/wwas` | merged |
| pre-mortem (af-product-management) | pm-skills | `pm-execution/skills/pre-mortem` `pm-execution/commands/pre-mortem.md` | merged |
| strategy-red-team (af-product-management) | pm-skills | `pm-execution/skills/strategy-red-team` | as-is |
| prioritization-frameworks (af-product-management) | pm-skills | `pm-execution/skills/prioritization-frameworks` | as-is |
| release-notes (af-product-management) | pm-skills | `pm-execution/skills/release-notes` | as-is |
| sprint-retro (af-product-management) | pm-skills | `pm-execution/skills/retro` | renamed |
| stakeholder-map (af-product-management) | pm-skills | `pm-execution/skills/stakeholder-map` `pm-execution/commands/stakeholder-map.md` | merged |
| summarize-meeting (af-product-management) | pm-skills | `pm-execution/skills/summarize-meeting` | as-is |
| test-scenarios (af-product-management) | pm-skills | `pm-execution/skills/test-scenarios` `pm-execution/commands/test-scenarios.md` | merged |
| dummy-dataset (af-product-management) | pm-skills | `pm-execution/skills/dummy-dataset` | as-is |
| account-context (af-sales) | knowledge-work-plugins | `sales/skills/account-context` | as-is |
| account-plan (af-sales) | knowledge-work-plugins | `sales/skills/account-plan` | as-is |
| account-research (af-sales) | knowledge-work-plugins | `sales/skills/account-research` | as-is |
| account-tiering (af-sales) | knowledge-work-plugins | `sales/skills/account-tiering` | as-is |
| call-prep (af-sales) | knowledge-work-plugins | `sales/skills/call-prep` | as-is |
| call-summary (af-sales) | knowledge-work-plugins | `sales/skills/call-summary` | as-is |
| close-plan (af-sales) | knowledge-work-plugins | `sales/skills/close-plan` | as-is |
| competitive-intelligence (af-sales) | knowledge-work-plugins | `sales/skills/competitive-intelligence` | as-is |
| create-an-asset (af-sales) | knowledge-work-plugins | `sales/skills/create-an-asset` | as-is |
| crm-hygiene-check (af-sales) | knowledge-work-plugins | `sales/skills/crm-hygiene-check` | as-is |
| customer-health (af-sales) | knowledge-work-plugins | `sales/skills/customer-health` | as-is |
| customer-voice (af-sales) | knowledge-work-plugins | `sales/skills/customer-voice` | as-is |
| daily-briefing (af-sales) | knowledge-work-plugins | `sales/skills/daily-briefing` | as-is |
| deal-advance-gap (af-sales) | knowledge-work-plugins | `sales/skills/deal-advance-gap` | as-is |
| deal-review (af-sales) | knowledge-work-plugins | `sales/skills/deal-review` | as-is |
| deal-signals (af-sales) | knowledge-work-plugins | `sales/skills/deal-signals` | as-is |
| deal-slip-scenario (af-sales) | knowledge-work-plugins | `sales/skills/deal-slip-scenario` | as-is |
| draft-outreach (af-sales) | knowledge-work-plugins | `sales/skills/draft-outreach` | as-is |
| end-of-day (af-sales) | knowledge-work-plugins | `sales/skills/end-of-day` | as-is |
| expansion-whitespace (af-sales) | knowledge-work-plugins | `sales/skills/expansion-whitespace` | as-is |
| forecast (af-sales) | knowledge-work-plugins | `sales/skills/forecast` | as-is |
| handle-objection (af-sales) | knowledge-work-plugins | `sales/skills/handle-objection` | as-is |
| inbox-sweep (af-sales) | knowledge-work-plugins | `sales/skills/inbox-sweep` | as-is |
| lead-triage (af-sales) | knowledge-work-plugins | `sales/skills/lead-triage` | as-is |
| log-activity (af-sales) | knowledge-work-plugins | `sales/skills/log-activity` | as-is |
| pipeline-review (af-sales) | knowledge-work-plugins | `sales/skills/pipeline-review` | as-is |
| renewal-radar (af-sales) | knowledge-work-plugins | `sales/skills/renewal-radar` | as-is |
| rep-context (af-sales) | knowledge-work-plugins | `sales/skills/rep-context` | as-is |
| route-lead (af-sales) | knowledge-work-plugins | `sales/skills/route-lead` | as-is |
| schedule-meeting (af-sales) | knowledge-work-plugins | `sales/skills/schedule-meeting` | as-is |
| setup (af-sales) | knowledge-work-plugins | `sales/skills/setup` | as-is |
| stakeholder-map (af-sales) | knowledge-work-plugins | `sales/skills/stakeholder-map` | as-is |
| team-pipeline (af-sales) | knowledge-work-plugins | `sales/skills/team-pipeline` | as-is |
| update-opportunity (af-sales) | knowledge-work-plugins | `sales/skills/update-opportunity` | as-is |
| weekly-wrap (af-sales) | knowledge-work-plugins | `sales/skills/weekly-wrap` | as-is |
| win-loss-review (af-sales) | knowledge-work-plugins | `sales/skills/win-loss-review` | as-is |
| ad-manager (af-small-business) | knowledge-work-plugins | `small-business/skills/ad-manager` | as-is |
| ap-processor (af-small-business) | knowledge-work-plugins | `small-business/skills/ap-processor` | as-is |
| brand-style (af-small-business) | knowledge-work-plugins | `small-business/skills/brand-style` | as-is |
| build-agent (af-small-business) | knowledge-work-plugins | `small-business/skills/build-agent` | as-is |
| build-connector (af-small-business) | knowledge-work-plugins | `small-business/skills/build-connector` | as-is |
| business-pulse (af-small-business) | knowledge-work-plugins | `small-business/skills/business-pulse` | as-is |
| call-list (af-small-business) | knowledge-work-plugins | `small-business/skills/call-list` | as-is |
| canva-creator (af-small-business) | knowledge-work-plugins | `small-business/skills/canva-creator` | as-is |
| cash-flow-snapshot (af-small-business) | knowledge-work-plugins | `small-business/skills/cash-flow-snapshot` | as-is |
| close-month (af-small-business) | knowledge-work-plugins | `small-business/skills/close-month` | as-is |
| content-strategy (af-small-business) | knowledge-work-plugins | `small-business/skills/content-strategy` | as-is |
| contract-review (af-small-business) | knowledge-work-plugins | `small-business/skills/contract-review` | as-is |
| crm-autopilot (af-small-business) | knowledge-work-plugins | `small-business/skills/crm-autopilot` | as-is |
| grant-rfp-writer (af-small-business) | knowledge-work-plugins | `small-business/skills/grant-rfp-writer` | as-is |
| grow-pipeline (af-small-business) | knowledge-work-plugins | `small-business/skills/grow-pipeline` | as-is |
| growth-pulse (af-small-business) | knowledge-work-plugins | `small-business/skills/growth-pulse` | as-is |
| hiring-screener (af-small-business) | knowledge-work-plugins | `small-business/skills/hiring-screener` | as-is |
| inbox-manager (af-small-business) | knowledge-work-plugins | `small-business/skills/inbox-manager` | as-is |
| inventory-planner (af-small-business) | knowledge-work-plugins | `small-business/skills/inventory-planner` | as-is |
| invoice-chase (af-small-business) | knowledge-work-plugins | `small-business/skills/invoice-chase` | as-is |
| job-post-builder (af-small-business) | knowledge-work-plugins | `small-business/skills/job-post-builder` | as-is |
| lead-finder (af-small-business) | knowledge-work-plugins | `small-business/skills/lead-finder` | as-is |
| lead-triage (af-small-business) | knowledge-work-plugins | `small-business/skills/lead-triage` | as-is |
| marketing-monday (af-small-business) | knowledge-work-plugins | `small-business/skills/marketing-monday` | as-is |
| monday-brief (af-small-business) | knowledge-work-plugins | `small-business/skills/monday-brief` | as-is |
| month-end-prep (af-small-business) | knowledge-work-plugins | `small-business/skills/month-end-prep` | as-is |
| outreach-composer (af-small-business) | knowledge-work-plugins | `small-business/skills/outreach-composer` | as-is |
| pay-the-bills (af-small-business) | knowledge-work-plugins | `small-business/skills/pay-the-bills` | as-is |
| payroll-prep (af-small-business) | knowledge-work-plugins | `small-business/skills/payroll-prep` | as-is |
| plan-payroll (af-small-business) | knowledge-work-plugins | `small-business/skills/plan-payroll` | as-is |
| proposal-builder (af-small-business) | knowledge-work-plugins | `small-business/skills/proposal-builder` | as-is |
| reactivate (af-small-business) | knowledge-work-plugins | `small-business/skills/reactivate` | as-is |
| report-builder (af-small-business) | knowledge-work-plugins | `small-business/skills/report-builder` | as-is |
| report-pack (af-small-business) | knowledge-work-plugins | `small-business/skills/report-pack` | as-is |
| restock (af-small-business) | knowledge-work-plugins | `small-business/skills/restock` | as-is |
| review-reputation (af-small-business) | knowledge-work-plugins | `small-business/skills/review-reputation` | as-is |
| seo-ai-visibility (af-small-business) | knowledge-work-plugins | `small-business/skills/seo-ai-visibility` | as-is |
| smb-onboard (af-small-business) | knowledge-work-plugins | `small-business/skills/smb-onboard` | as-is |
| smb-router (af-small-business) | knowledge-work-plugins | `small-business/skills/smb-router` | as-is |
| social-content-engine (af-small-business) | knowledge-work-plugins | `small-business/skills/social-content-engine` | as-is |
| speed-to-lead (af-small-business) | knowledge-work-plugins | `small-business/skills/speed-to-lead` | as-is |
| tax-prep (af-small-business) | knowledge-work-plugins | `small-business/skills/tax-prep` | as-is |
| tax-season-organizer (af-small-business) | knowledge-work-plugins | `small-business/skills/tax-season-organizer` | as-is |
| ticket-deflector (af-small-business) | knowledge-work-plugins | `small-business/skills/ticket-deflector` | as-is |
| brainstorm (command, af-product-management) | knowledge-work-plugins, pm-skills | `knowledge-work-plugins:product-management/commands/brainstorm.md` `pm-skills:pm-product-discovery/commands/brainstorm.md` | merged |
| discover (command, af-product-management) | pm-skills | `pm-product-discovery/commands/discover.md` | as-is |
| interview (command, af-product-management) | pm-skills | `pm-product-discovery/commands/interview.md` | as-is |
| setup-metrics (command, af-product-management) | pm-skills | `pm-product-discovery/commands/setup-metrics.md` | as-is |
| triage-requests (command, af-product-management) | pm-skills | `pm-product-discovery/commands/triage-requests.md` | as-is |
| analyze-feedback (command, af-product-management) | pm-skills | `pm-market-research/commands/analyze-feedback.md` | as-is |
| competitive-analysis (command, af-product-management) | pm-skills | `pm-market-research/commands/competitive-analysis.md` | as-is |
| research-users (command, af-product-management) | pm-skills | `pm-market-research/commands/research-users.md` | as-is |
| market-scan (command, af-product-management) | pm-skills | `pm-product-strategy/commands/market-scan.md` | as-is |
| pricing (command, af-product-management) | pm-skills | `pm-product-strategy/commands/pricing.md` | as-is |
| strategy (command, af-product-management) | pm-skills | `pm-product-strategy/commands/strategy.md` | as-is |
| generate-data (command, af-product-management) | pm-skills | `pm-execution/commands/generate-data.md` | as-is |
| meeting-notes (command, af-product-management) | pm-skills | `pm-execution/commands/meeting-notes.md` | as-is |
| plan-okrs (command, af-product-management) | pm-skills | `pm-execution/commands/plan-okrs.md` | as-is |
| red-team-prd (command, af-product-management) | pm-skills | `pm-execution/commands/red-team-prd.md` | as-is |
| sprint (command, af-product-management) | pm-skills | `pm-execution/commands/sprint.md` | as-is |
| transform-roadmap (command, af-product-management) | pm-skills | `pm-execution/commands/transform-roadmap.md` | as-is |
| write-prd (command, af-product-management) | pm-skills | `pm-execution/commands/write-prd.md` | as-is |
| write-stories (command, af-product-management) | pm-skills | `pm-execution/commands/write-stories.md` | as-is |
| ab-testing (af-marketing) | marketingskills | `skills/ab-testing` | as-is |
| ad-creative (af-marketing) | marketingskills | `skills/ad-creative` | as-is |
| ads (af-marketing) | marketingskills | `skills/ads` | as-is |
| ai-seo (af-marketing) | marketingskills | `skills/ai-seo` | as-is |
| analytics (af-marketing) | marketingskills | `skills/analytics` | as-is |
| aso (af-marketing) | marketingskills | `skills/aso` | as-is |
| attribution (af-marketing) | marketingskills | `skills/attribution` | as-is |
| churn-prevention (af-marketing) | marketingskills | `skills/churn-prevention` | as-is |
| co-marketing (af-marketing) | marketingskills | `skills/co-marketing` | as-is |
| cold-email (af-marketing) | marketingskills | `skills/cold-email` | as-is |
| community-marketing (af-marketing) | marketingskills | `skills/community-marketing` | as-is |
| competitor-profiling (af-marketing) | marketingskills | `skills/competitor-profiling` | as-is |
| competitors (af-marketing) | marketingskills | `skills/competitors` | as-is |
| content-strategy (af-marketing) | marketingskills | `skills/content-strategy` | as-is |
| conversion-tracking (af-marketing) | marketingskills | `skills/conversion-tracking` | as-is |
| copy-editing (af-marketing) | marketingskills | `skills/copy-editing` | as-is |
| copywriting (af-marketing) | marketingskills | `skills/copywriting` | as-is |
| cro (af-marketing) | marketingskills | `skills/cro` | as-is |
| customer-research (af-marketing) | marketingskills, pm-skills | `marketingskills:skills/customer-research` `pm-skills:pm-go-to-market/skills/ideal-customer-profile` `pm-skills:pm-go-to-market/skills/beachhead-segment` | merged |
| directory-submissions (af-marketing) | marketingskills | `skills/directory-submissions` | as-is |
| emails (af-marketing) | marketingskills | `skills/emails` | as-is |
| events (af-marketing) | marketingskills | `skills/events` | as-is |
| free-tools (af-marketing) | marketingskills | `skills/free-tools` | as-is |
| image (af-marketing) | marketingskills | `skills/image` | as-is |
| influencer-marketing (af-marketing) | marketingskills | `skills/influencer-marketing` | as-is |
| launch (af-marketing) | marketingskills, pm-skills | `marketingskills:skills/launch` `pm-skills:pm-go-to-market/skills/gtm-strategy` `pm-skills:pm-go-to-market/skills/gtm-motions` | merged |
| lead-magnets (af-marketing) | marketingskills | `skills/lead-magnets` | as-is |
| link-building (af-marketing) | marketingskills | `skills/link-building` | as-is |
| marketing-council (af-marketing) | marketingskills | `skills/marketing-council` | as-is |
| marketing-ideas (af-marketing) | marketingskills, pm-skills | `marketingskills:skills/marketing-ideas` `pm-skills:pm-marketing-growth/skills/marketing-ideas` | merged |
| marketing-loops (af-marketing) | marketingskills | `skills/marketing-loops` | as-is |
| marketing-plan (af-marketing) | marketingskills | `skills/marketing-plan` | as-is |
| marketing-psychology (af-marketing) | marketingskills | `skills/marketing-psychology` | as-is |
| offers (af-marketing) | marketingskills | `skills/offers` | as-is |
| onboarding (af-marketing) | marketingskills | `skills/onboarding` | as-is |
| paywalls (af-marketing) | marketingskills | `skills/paywalls` | as-is |
| popups (af-marketing) | marketingskills | `skills/popups` | as-is |
| pricing (af-marketing) | marketingskills | `skills/pricing` | as-is |
| product-marketing (af-marketing) | marketingskills, pm-skills | `marketingskills:skills/product-marketing` `pm-skills:pm-marketing-growth/skills/positioning-ideas` `pm-skills:pm-marketing-growth/skills/value-prop-statements` | merged |
| programmatic-seo (af-marketing) | marketingskills | `skills/programmatic-seo` | as-is |
| prospecting (af-marketing) | marketingskills | `skills/prospecting` | as-is |
| public-relations (af-marketing) | marketingskills | `skills/public-relations` | as-is |
| referrals (af-marketing) | marketingskills, pm-skills | `marketingskills:skills/referrals` `pm-skills:pm-go-to-market/skills/growth-loops` | merged |
| revops (af-marketing) | marketingskills | `skills/revops` | as-is |
| sales-enablement (af-marketing) | marketingskills, pm-skills | `marketingskills:skills/sales-enablement` `pm-skills:pm-go-to-market/skills/competitive-battlecard` | merged |
| schema (af-marketing) | marketingskills | `skills/schema` | as-is |
| seo-audit (af-marketing) | marketingskills | `skills/seo-audit` | as-is |
| signup (af-marketing) | marketingskills | `skills/signup` | as-is |
| site-architecture (af-marketing) | marketingskills | `skills/site-architecture` | as-is |
| sms (af-marketing) | marketingskills | `skills/sms` | as-is |
| social (af-marketing) | marketingskills | `skills/social` | as-is |
| video (af-marketing) | marketingskills | `skills/video` | as-is |
| north-star-metric (af-marketing) | pm-skills | `pm-marketing-growth/skills/north-star-metric` | as-is |
| product-name (af-marketing) | pm-skills | `pm-marketing-growth/skills/product-name` | as-is |
| battlecard (command, af-marketing) | pm-skills | `pm-go-to-market/commands/battlecard.md` | as-is |
| growth-strategy (command, af-marketing) | pm-skills | `pm-go-to-market/commands/growth-strategy.md` | as-is |
| plan-launch (command, af-marketing) | pm-skills | `pm-go-to-market/commands/plan-launch.md` | as-is |
| market-product (command, af-marketing) | pm-skills | `pm-marketing-growth/commands/market-product.md` | as-is |
| north-star (command, af-marketing) | pm-skills | `pm-marketing-growth/commands/north-star.md` | as-is |
| ceo-review (af-leadership) | gstack | `openclaw/skills/gstack-openclaw-ceo-review` | renamed |
| office-hours (af-leadership) | gstack | `openclaw/skills/gstack-openclaw-office-hours` | renamed |

## How to port an upstream change

1. Clone the upstream repo (or `git pull` an existing clone) and run `scripts/upstream-diff.sh <clone>` from this repo to see which rows have new commits.
2. In the clone, read the change: `git diff <sha>..main -- <path>`, with the commit and path from the tables above.
3. For an as-is or renamed row, apply the diff to our copy, keeping our names, cross-references and tool rewrites.
4. For a merged row, read the change and apply its intent by hand to the part of our skill that came from that source.
5. Once ported, update the commit in the repo table only if every row from that upstream is now current.
