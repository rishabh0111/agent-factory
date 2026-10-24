# Data

Data exploration, SQL, statistical analysis, charts, dashboards and pre-share validation, run by the data specialist (`data-specialist`).

## Installation

```
/plugin install af-data --marketplace rishabh0111/agent-factory
```

## Context

Run `/af-setup` (from `af-core`) first. It writes your `company.md` and loads it into every session, so these skills work from your products, customers, voice and policies.

## Skills

Skills run when your request matches, or by name. A skill marked under *Interviews you* asks you questions in rounds, so run it yourself in the main session rather than through the specialist.

<!-- skills:start -->
| Skill | What it is for | Interviews you |
|---|---|---|
| `/af-data:ab-test-analysis` | Use when A/B test or experiment results are in and need a verdict, such as whether a variant won, whether a test reached significance, or whether to ship, extend or stop. |  |
| `/af-data:analyze` | Answer data questions -- from quick lookups to full analyses. |  |
| `/af-data:build-dashboard` | Build an interactive HTML dashboard with charts, filters, and tables. |  |
| `/af-data:cohort-analysis` | Use when analyzing retention or engagement by cohort, such as retention curves by signup month, feature adoption across cohorts, why recent cohorts churn faster, or setting up a cohort analysis before data exists. |  |
| `/af-data:create-viz` | Create publication-quality visualizations with Python. |  |
| `/af-data:data-context-extractor` | Generate or improve a company-specific data analysis skill by extracting tribal knowledge from analysts. |  |
| `/af-data:data-visualization` | Create effective data visualizations with Python (matplotlib, seaborn, plotly). |  |
| `/af-data:explore-data` | Profile and explore a dataset to understand its shape, quality, and patterns. |  |
| `/af-data:sql-queries` | Write correct, performant SQL across all major data warehouse dialects (Snowflake, BigQuery, Databricks, PostgreSQL, etc.). |  |
| `/af-data:statistical-analysis` | Apply statistical methods including descriptive stats, trend analysis, outlier detection, and hypothesis testing. |  |
| `/af-data:validate-data` | QA an analysis before sharing -- methodology, accuracy, and bias checks. |  |
| `/af-data:write-query` | Write optimized SQL for your dialect with best practices. |  |

| Command | What it is for |
|---|---|
| `/af-data:analyze-cohorts` | Run a cohort analysis on user data, from retention curves and feature adoption to engagement trends |
| `/af-data:analyze-test` | Analyze A/B test results, from significance and sample size checks to a ship, extend or stop call |
<!-- skills:end -->

## Connectors

Skills that read a data warehouse expect that system's connector: [CONNECTORS.md](CONNECTORS.md) lists them, and the plugin's `.mcp.json` bundles the servers. With nothing connected, paste or upload the data instead. Without a warehouse, skills write the SQL for you to run and analyse the results you paste or upload as CSV or Excel.

## Licence

[LICENSE](LICENSE). Some skills and commands are also covered by [LICENSE-pm](LICENSE-pm), which lists them.
