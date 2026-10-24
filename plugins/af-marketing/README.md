# Marketing

The marketing specialist (`marketing-specialist`) and 54 skills for positioning, copy, conversion, SEO, paid channels, email, launches, pricing and growth.

## Installation

```
/plugin install af-marketing --marketplace rishabh0111/agent-factory
```

## Context

Most skills read `.agents/product-marketing.md` before asking you anything. Run `/af-setup` (from `af-core`) to create it pointing at your `company.md`, then `/af-marketing:product-marketing` to add the marketing-only sections: competitors, differentiation, objections, proof points. `product-marketing` interviews you, so run it in the main session rather than through the specialist.

## Tools

Skills that read an ad account, analytics, CRM or email platform name the integration guide they need. [tools/REGISTRY.md](tools/REGISTRY.md) indexes the guides in `tools/integrations/`, and [tools/SETUP.md](tools/SETUP.md) walks through connecting one with read-only credentials first.

## Skills

Skills run when your request matches, or by name. A skill marked under *Interviews you* asks you questions in rounds, so run it yourself in the main session rather than through the specialist.

<!-- skills:start -->
| Skill | What it is for | Interviews you |
|---|---|---|
| `/af-marketing:ab-testing` | When the user wants to plan, design, or implement an A/B test or experiment, or build a growth experimentation program. |  |
| `/af-marketing:ad-creative` | When the user wants to generate, iterate, or scale ad creative — headlines, descriptions, primary text, or full ad variations — for any paid advertising platform. |  |
| `/af-marketing:ads` | When the user wants help with paid advertising campaigns on Google Ads, Meta (Facebook/Instagram), LinkedIn, Twitter/X, or other ad platforms. |  |
| `/af-marketing:ai-seo` | When the user wants to optimize content for AI search engines, get cited by LLMs, or appear in AI-generated answers. |  |
| `/af-marketing:analytics` | When the user wants to set up, improve, or audit analytics tracking and measurement. |  |
| `/af-marketing:aso` | When the user wants to audit or optimize an App Store or Google Play listing. |  |
| `/af-marketing:attribution` | When the user wants to figure out which marketing actually drives conversions and revenue, choose or interpret an attribution model, or reconcile conflicting numbers across tools. |  |
| `/af-marketing:churn-prevention` | When the user wants to reduce churn, build cancellation flows, set up save offers, recover failed payments, or implement retention strategies. |  |
| `/af-marketing:co-marketing` | When the user wants to find co-marketing partners, plan joint campaigns, or brainstorm partnership opportunities. |  |
| `/af-marketing:cold-email` | Write and run B2B cold outbound that gets replies, from cold emails and follow-ups to sending setup, LinkedIn, multichannel cadences, and reply handling. |  |
| `/af-marketing:community-marketing` | Build and leverage online communities to drive product growth and brand loyalty. |  |
| `/af-marketing:competitor-profiling` | When the user wants to research, profile, or analyze competitors from their URLs. |  |
| `/af-marketing:competitors` | When the user wants to create competitor comparison or alternative pages for SEO and buyer-facing use. |  |
| `/af-marketing:content-strategy` | When the user wants to plan a content marketing strategy (blog, SEO and editorial content), decide what content to create, or figure out what topics to cover. |  |
| `/af-marketing:conversion-tracking` | Set up, audit, verify, or fix website conversion tracking. |  |
| `/af-marketing:copy-editing` | When the user wants to edit, review, or improve existing marketing copy, or refresh outdated content. |  |
| `/af-marketing:copywriting` | When the user wants to write, rewrite, or improve marketing copy for any page, including homepage, landing pages, pricing pages, feature pages, about pages, or product pages. |  |
| `/af-marketing:cro` | When the user wants to optimize, improve, or increase conversions on any marketing page or form — including homepage, landing pages, pricing pages, feature pages, lead capture forms, or contact forms. |  |
| `/af-marketing:customer-research` | When the user wants to conduct, analyze, or synthesize customer research across a market or segment to inform marketing and positioning. |  |
| `/af-marketing:directory-submissions` | When the user wants to submit their product to startup, SaaS, AI, agent, MCP, no-code, or review directories for backlinks, domain rating, and discovery. |  |
| `/af-marketing:emails` | When the user wants to create or optimize an email sequence, drip campaign, automated email flow, or lifecycle email program. |  |
| `/af-marketing:events` | When the user wants to plan, run, sponsor, speak at, or get pipeline from events — webinars, conferences, trade shows, meetups, dinners, workshops, virtual summits, or user conferences. |  |
| `/af-marketing:free-tools` | When the user wants to plan, evaluate, or build a free tool for marketing purposes — lead generation, SEO value, or brand awareness. |  |
| `/af-marketing:image` | When the user wants to create, generate, edit, or optimize images for marketing — blog heroes, social graphics, product mockups, profile banners, listing visuals, or brand assets. |  |
| `/af-marketing:influencer-marketing` | When the user wants to run influencer, creator, or ambassador partnerships to promote their product — finding and vetting partners, structuring deals, briefing creators, disclosure compliance, and measuring ROI. |  |
| `/af-marketing:launch` | When the user wants to plan the marketing launch of a product or feature. |  |
| `/af-marketing:lead-magnets` | When the user wants to create, plan, or optimize a lead magnet for email capture or lead generation. |  |
| `/af-marketing:link-building` | When the user wants to earn backlinks or third-party mentions that lift rankings and AI citations. |  |
| `/af-marketing:marketing-council` | When the user wants multiple expert perspectives on a marketing question — a simulated board of advisors staffed by legendary marketers (Seth Godin, David Ogilvy, Eugene Schwartz, April Dunford, Rory Sutherland, Alex Hormozi, Byron Sharp, and more). |  |
| `/af-marketing:marketing-ideas` | When the user needs marketing ideas, inspiration, or strategies for their SaaS or software product. |  |
| `/af-marketing:marketing-loops` | When the user wants to set up a recurring, self-running marketing workflow — a repeatable loop an AI agent runs on a cadence (weekly, daily, on a trigger) rather than a one-off task. |  |
| `/af-marketing:marketing-plan` | When the user needs a comprehensive marketing or go-to-market plan covering the whole funnel over quarters, for a client, a company they advise, or their own product. |  |
| `/af-marketing:marketing-psychology` | When the user wants to apply psychological principles, mental models, or behavioral science to marketing. |  |
| `/af-marketing:north-star-metric` | Use when choosing or fixing a North Star Metric and its input metrics, such as deciding what single metric the company should optimize, or when a current North Star (DAU, revenue) feels wrong. |  |
| `/af-marketing:offers` | When the user wants to design, construct, or improve an offer — the thing they actually sell — including value framing, bonus stacking, guarantee design, scarcity/urgency, naming, and payment structure. |  |
| `/af-marketing:onboarding` | When the user wants to optimize product onboarding for new users after signup, user activation, first-run experience, or time-to-value. |  |
| `/af-marketing:paywalls` | When the user wants to create or optimize in-app paywalls, upgrade screens, upsell modals, or feature gates. |  |
| `/af-marketing:popups` | When the user wants to create or optimize popups, modals, overlays, slide-ins, or banners for conversion purposes. |  |
| `/af-marketing:pricing` | When the user wants help with how pricing is packaged and presented to buyers. |  |
| `/af-marketing:product-marketing` | When the user wants to create or update their product marketing context document. | yes |
| `/af-marketing:product-name` | Use when naming or renaming a product, feature or brand, or comparing candidate names. |  |
| `/af-marketing:programmatic-seo` | When the user wants to create SEO-driven pages at scale using templates and data. |  |
| `/af-marketing:prospecting` | When the user wants to find, qualify, and build a list of prospects to reach out to, across B2B SaaS, general B2B, or local small businesses. |  |
| `/af-marketing:public-relations` | When the user wants help with public relations, earned media, press coverage, journalist outreach, or media strategy (not pull requests). |  |
| `/af-marketing:referrals` | When the user wants to create, optimize, or analyze a referral program, affiliate program, or word-of-mouth strategy. |  |
| `/af-marketing:revops` | When the user wants help with revenue operations, lead lifecycle management, or marketing-to-sales handoff processes. |  |
| `/af-marketing:sales-enablement` | When the user wants to create sales collateral, pitch decks, one-pagers, objection handling docs, or demo scripts. |  |
| `/af-marketing:schema` | When the user wants to add, fix, or optimize schema markup and structured data on their site. |  |
| `/af-marketing:seo-audit` | When the user wants to audit, review, or diagnose SEO issues on their site. |  |
| `/af-marketing:signup` | When the user wants to optimize signup, registration, account creation, or trial activation flows. |  |
| `/af-marketing:site-architecture` | When the user wants to plan, map, or restructure their website's page hierarchy, navigation, URL structure, or internal linking. |  |
| `/af-marketing:sms` | When the user wants to plan, build, or optimize SMS, MMS, or WhatsApp marketing — including welcome flows, abandoned cart texts, post-purchase, win-back, promotional sends, or transactional/auth SMS. |  |
| `/af-marketing:social` | When the user wants help creating, scheduling, or optimizing social media content for LinkedIn, Twitter/X, Instagram, TikTok, or Facebook, or wants to do social listening and engagement triage. |  |
| `/af-marketing:video` | When the user wants to create, generate, or produce video content using AI tools or programmatic frameworks. |  |

| Command | What it is for |
|---|---|
| `/af-marketing:battlecard` | Create a sales-ready battlecard against one competitor, covering positioning, comparison, objections and landmines |
| `/af-marketing:growth-strategy` | Design sustainable growth, from growth loops to the GTM motion mix, experiments and a 90-day plan |
| `/af-marketing:market-product` | Generate a marketing creative toolkit, from campaign ideas and positioning to value prop copy and product names |
| `/af-marketing:north-star` | Define your North Star Metric and its input metrics, from the business game to validation and counter-metrics |
| `/af-marketing:plan-launch` | Build a full go-to-market plan, from beachhead segment and ICP to messaging, channels and launch timeline |
<!-- skills:end -->

## Licence

[LICENSE](LICENSE). Some skills and commands are also covered by [LICENSE-pm](LICENSE-pm), which lists them.
