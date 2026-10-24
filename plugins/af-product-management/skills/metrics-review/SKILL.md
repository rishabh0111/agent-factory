---
name: metrics-review
description: Use when running a weekly, monthly or quarterly product metrics review, investigating a sudden spike or drop, comparing performance against targets, or defining which product metrics to track, including choosing a North Star and designing a metrics dashboard with alert thresholds.
argument-hint: "<time period or metric focus>"
---

# Metrics Review

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../../CONNECTORS.md).

Review and analyze product metrics, identify trends, and surface actionable insights, or define the metrics framework a product should be reviewed against.

Read `company.md` first for the product, its goals and the metrics already in use; ask only for what is missing.

## Pick the branch

- **Review**: numbers exist and need analysis. The workflow below.
- **Define**: the product needs a North Star, input metrics, guardrails, alerts or a dashboard spec. Follow [dashboard-design.md](dashboard-design.md); the hierarchy, good-metric criteria and metric definitions below apply to both branches.

## Usage

```
/metrics-review $ARGUMENTS
```

## Workflow

### 1. Gather Metrics Data

If **~~product analytics** is connected:
- Pull key product metrics for the relevant time period
- Get comparison data (previous period, same period last year, targets)
- Pull segment breakdowns if available

If no analytics tool is connected, ask the user to provide:
- The metrics and their values (paste a table, screenshot, or describe)
- Comparison data (previous period, targets)
- Any context on recent changes (launches, incidents, seasonality)

Ask the user:
- What time period to review? (last week, last month, last quarter)
- What metrics to focus on? Or should we review the full product metrics suite?
- Are there specific targets or goals to compare against?
- Any known events that might explain changes (launches, outages, marketing campaigns, seasonality)?

### 2. Organize the Metrics

Structure the review using a metrics hierarchy: North Star metric at the top, L1 health indicators (acquisition, activation, engagement, retention, revenue, satisfaction), and L2 diagnostic metrics for drill-down. See **Product Metrics Hierarchy** below for full definitions.

If the user has not defined their metrics hierarchy, help them identify their North Star and key L1 metrics before proceeding.

### 3. Analyze Trends

For each key metric:
- **Current value**: What is the metric today?
- **Trend**: Up, down, or flat compared to previous period? Over what timeframe?
- **vs Target**: How does it compare to the goal or target?
- **Rate of change**: Is the trend accelerating or decelerating?
- **Anomalies**: Any sudden changes, spikes, or drops?

Identify correlations:
- Do changes in one metric correlate with changes in another?
- Are there leading indicators that predict lagging metric changes?
- Do segment breakdowns reveal that an aggregate trend is driven by a specific cohort?

### 4. Generate the Review

#### Summary
2-3 sentences: overall product health, most notable changes, key callout.

#### Metric Scorecard
Table format for quick scanning:

| Metric | Current | Previous | Change | Target | Status |
|--------|---------|----------|--------|--------|--------|
| [Metric] | [Value] | [Value] | [+/- %] | [Target] | [On track / At risk / Miss] |

#### Trend Analysis
For each metric worth discussing:
- What happened and how significant is the change
- Why it likely happened (attribution based on known events, correlated metrics, segment analysis)
- Whether this is a one-time event or a sustained trend

#### Bright Spots
What is going well:
- Metrics beating targets
- Positive trends to sustain
- Segments or features showing strong performance

#### Areas of Concern
What needs attention:
- Metrics missing targets or trending negatively
- Early warning signals before they become problems
- Metrics where we lack visibility or understanding

#### Recommended Actions
Specific next steps based on the analysis:
- Investigations to run (dig deeper into a concerning trend)
- Experiments to launch (test hypotheses about what could improve a metric)
- Investments to make (double down on what is working)
- Alerts to set (monitor a metric more closely)

#### Context and Caveats
- Known data quality issues
- Events that affect comparability (outages, holidays, launches)
- Metrics we should be tracking but are not yet

### 5. Follow Up

After generating the review:
- Ask if any metric needs deeper investigation
- Offer to create a dashboard spec for ongoing monitoring ([dashboard-design.md](dashboard-design.md))
- Offer to draft experiment proposals for areas of concern
- Offer to set up a metrics review template for recurring use

## What Makes a Good Metric

**Metrics, KPIs and the North Star.** Metrics are everything measurable. KPIs are the few key quantitative metrics tracked over a longer period. The North Star is a single customer-centric KPI that leads business success.

**Four criteria** (Ben Yoskovitz and Alistair Croll, *Lean Analytics*):
1. **Understandable**: it creates a common language.
2. **Comparative**: over time, not a snapshot.
3. **Ratio or rate**: more revealing than a whole number.
4. **Behavior-changing**: the golden rule. If a metric will not change how you behave, it is a bad metric.

**Four pairs of metric types:**
- **Vanity vs actionable**: only actionable metrics change behavior.
- **Qualitative vs quantitative**: quantitative tells you what, qualitative tells you why. You need both; keep talking to customers.
- **Exploratory vs reporting**: explore the data to find what you did not expect.
- **Lagging vs leading**: leading indicators shorten learning cycles (customer complaints predict churn).

**Audit routine**: check every tracked metric against the four criteria, update dashboards so every key metric passes, name the vanity metrics and use them with care, classify leading and lagging, then pick one problem and dig deep into its data.

## Product Metrics Hierarchy

### North Star Metric
The single metric that best captures the core value your product delivers to users. It should be:

- **Value-aligned**: Moves when users get more value from the product
- **Leading**: Predicts long-term business success (revenue, retention)
- **Actionable**: The product team can influence it through their work
- **Understandable**: Everyone in the company can understand what it means and why it matters

**Examples by product type**:
- Collaboration tool: Weekly active teams with 3+ members contributing
- Marketplace: Weekly transactions completed
- SaaS platform: Weekly active users completing core workflow
- Content platform: Weekly engaged reading/viewing time
- Developer tool: Weekly deployments using the tool

### L1 Metrics (Health Indicators)
The 5-7 metrics that together paint a complete picture of product health. These map to the key stages of the user lifecycle:

**Acquisition**: Are new users finding the product?
- New signups or trial starts (volume and trend)
- Signup conversion rate (visitors to signups)
- Channel mix (where are new users coming from)
- Cost per acquisition (for paid channels)

**Activation**: Are new users reaching the value moment?
- Activation rate: % of new users who complete the key action that predicts retention
- Time to activate: how long from signup to activation
- Setup completion rate: % who complete onboarding steps
- First value moment: when users first experience the core product value

**Engagement**: Are active users getting value?
- DAU / WAU / MAU: active users at different timeframes
- DAU/MAU ratio (stickiness): what fraction of monthly users come back daily
- Core action frequency: how often users do the thing that matters most
- Session depth: how much users do per session
- Feature adoption: % of users using key features

**Retention**: Are users coming back?
- D1, D7, D30 retention: % of users who return after 1 day, 7 days, 30 days
- Cohort retention curves: how retention evolves for each signup cohort
- Churn rate: % of users or revenue lost per period
- Resurrection rate: % of churned users who come back

**Monetization**: Is value translating to revenue?
- Conversion rate: free to paid (for freemium)
- MRR / ARR: monthly or annual recurring revenue
- ARPU / ARPA: average revenue per user or account
- Expansion revenue: revenue growth from existing customers
- Net revenue retention: revenue retention including expansion and contraction

**Satisfaction**: How do users feel about the product?
- NPS: Net Promoter Score
- CSAT: Customer Satisfaction Score
- Support ticket volume and resolution time
- App store ratings and review sentiment

### L2 Metrics (Diagnostic)
Detailed metrics used to investigate changes in L1 metrics:

- Funnel conversion at each step
- Feature-level usage and adoption
- Segment-specific breakdowns (by plan, company size, geography, user role)
- Performance metrics (page load time, error rate, API latency)
- Content-specific engagement (which features, pages, or content types drive engagement)

## Common Product Metrics

### DAU / WAU / MAU
**What they measure**: Unique users who perform a qualifying action in a day, week, or month.

**Key decisions**:
- What counts as "active"? A login? A page view? A core action? Define this carefully — different definitions tell different stories.
- Which timeframe matters most? DAU for daily-use products (messaging, email). WAU for weekly-use products (project management). MAU for less frequent products (tax software, travel booking).

**How to use them**:
- DAU/MAU ratio (stickiness): values above 0.5 indicate a daily habit. Below 0.2 suggests infrequent usage.
- Trend matters more than absolute number. Is active usage growing, flat, or declining?
- Segment by user type. Power users and casual users behave very differently.

### Retention
**What it measures**: Of users who started in period X, what % are still active in period Y?

**Common retention timeframes**:
- D1 (next day): Was the first experience good enough to come back?
- D7 (one week): Did the user establish a habit?
- D30 (one month): Is the user retained long-term?
- D90 (three months): Is this a durable user?

**How to use retention**:
- Plot retention curves by cohort. Look for: initial drop-off (activation problem), steady decline (engagement problem), or flattening (good — you have a stable retained base).
- Compare cohorts over time. Are newer cohorts retaining better than older ones? That means product improvements are working.
- Segment retention by activation behavior. Users who completed onboarding vs those who did not. Users who used feature X vs those who did not.

### Conversion
**What it measures**: % of users who move from one stage to the next.

**Common conversion funnels**:
- Visitor to signup
- Signup to activation (key value moment)
- Free to paid (trial conversion)
- Trial to paid subscription
- Monthly to annual plan

**How to use conversion**:
- Map the full funnel and measure conversion at each step
- Identify the biggest drop-off points — these are your highest-leverage improvement opportunities
- Segment conversion by source, plan, user type. Different segments convert very differently.
- Track conversion over time. Is it improving as you iterate on the experience?

### Activation
**What it measures**: % of new users who reach the moment where they first experience the product's core value.

**Defining activation**:
- Look at retained users vs churned users. What actions did retained users take that churned users did not?
- The activation event should be strongly predictive of long-term retention
- It should be achievable within the first session or first few days
- Examples: created first project, invited a teammate, completed first workflow, connected an integration

**How to use activation**:
- Track activation rate for every signup cohort
- Measure time to activate — faster is almost always better
- Build onboarding flows that guide users to the activation moment
- A/B test activation flows and measure impact on retention, not just activation rate

## Goal Setting Frameworks

### OKRs (Objectives and Key Results)

**Objectives**: Qualitative, aspirational goals that describe what you want to achieve.
- Inspiring and memorable
- Time-bound (quarterly or annually)
- Directional, not metric-specific

**Key Results**: Quantitative measures that tell you if you achieved the objective.
- Specific and measurable
- Time-bound with a clear target
- Outcome-based, not output-based
- 2-4 Key Results per Objective

**Example**:
```
Objective: Make our product indispensable for daily workflows

Key Results:
- Increase DAU/MAU ratio from 0.35 to 0.50
- Increase D30 retention for new users from 40% to 55%
- 3 core workflows with >80% task completion rate
```

### OKR Best Practices
- Set OKRs that are ambitious but achievable. 70% completion is the target for stretch OKRs.
- Key Results should measure outcomes (user behavior, business results), not outputs (features shipped, tasks completed).
- Do not have too many OKRs. 2-3 objectives with 2-4 KRs each is plenty.
- OKRs should be uncomfortable. If you are confident you will hit all of them, they are not ambitious enough.
- Review OKRs at mid-period. Adjust effort allocation if some KRs are clearly off track.
- Grade OKRs honestly at end of period. 0.0-0.3 = missed, 0.4-0.6 = progress, 0.7-1.0 = achieved.

### Setting Metric Targets
- **Baseline**: What is the current value? You need a reliable baseline before setting a target.
- **Benchmark**: What do comparable products achieve? Industry benchmarks provide context.
- **Trajectory**: What is the current trend? If the metric is already improving at 5% per month, a 6% target is not ambitious.
- **Effort**: How much investment are you putting behind this? Bigger bets warrant more ambitious targets.
- **Confidence**: How confident are you in hitting the target? Set a "commit" (high confidence) and a "stretch" (ambitious).

## Metric Review Cadences

### Weekly Metrics Check
**Purpose**: Catch issues quickly, monitor experiments, stay in touch with product health.
**Duration**: 15-30 minutes.
**Attendees**: Product manager, maybe engineering lead.

**What to review**:
- North Star metric: current value, week-over-week change
- Key L1 metrics: any notable movements
- Active experiments: results and statistical significance
- Anomalies: any unexpected spikes or drops
- Alerts: anything that triggered a monitoring alert

**Action**: If something looks off, investigate. Otherwise, note it and move on.

### Monthly Metrics Review
**Purpose**: Deeper analysis of trends, progress against goals, strategic implications.
**Duration**: 30-60 minutes.
**Attendees**: Product team, key stakeholders.

**What to review**:
- Full L1 metric scorecard with month-over-month trends
- Progress against quarterly OKR targets
- Cohort analysis: are newer cohorts performing better?
- Feature adoption: how are recent launches performing?
- Segment analysis: any divergence between user segments?

**Action**: Identify 1-3 areas to investigate or invest in. Update priorities if metrics reveal new information.

### Quarterly Business Review
**Purpose**: Strategic assessment of product performance, goal-setting for next quarter.
**Duration**: 60-90 minutes.
**Attendees**: Product, engineering, design, leadership.

**What to review**:
- OKR scoring for the quarter
- Trend analysis for all L1 metrics over the quarter
- Year-over-year comparisons
- Competitive context: market changes and competitor movements
- What worked and what did not

**Action**: Set OKRs for next quarter. Adjust product strategy based on what the data shows.

## Dashboard Design

Dashboard principles, layout, anti-patterns and alerting live in [dashboard-design.md](dashboard-design.md).

## Output Format

Use tables for the scorecard. Use clear status indicators. Keep the summary tight — the reader should get the essential story in 30 seconds.

## Tips

- Start with the "so what" — what is the most important thing in this metrics review? Lead with that.
- Absolute numbers without context are useless. Always show comparisons (vs previous period, vs target, vs benchmark).
- Be careful about attribution. Correlation is not causation. If a metric moved, acknowledge uncertainty about why.
- Segment analysis often reveals that an aggregate metric masks important differences. A flat overall number might hide one segment growing and another shrinking.
- Not all metric movements matter. Small fluctuations are noise. Focus attention on meaningful changes.
- If a metric is missing its target, do not just report the miss — recommend what to do about it.
- Metrics reviews should drive decisions. If the review does not lead to at least one action, it was not useful.
