---
name: write-query
description: Write optimized SQL for your dialect with best practices. Use when translating a natural-language data need into SQL, building a multi-CTE query with joins and aggregations, optimizing a query against a large partitioned table, or getting dialect-specific syntax for Snowflake, BigQuery, Postgres, etc.
argument-hint: "<description of what data you need>"
---

# /write-query - Write Optimized SQL

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../../CONNECTORS.md).

Write a SQL query from a natural language description, optimized for your specific SQL dialect and following best practices.

## Usage

```
/write-query <description of what data you need>
```

## Workflow

### 1. Understand the Request

Parse the user's description to identify:

- **Output columns**: What fields should the result include?
- **Filters**: What conditions limit the data (time ranges, segments, statuses)?
- **Aggregations**: Are there GROUP BY operations, counts, sums, averages?
- **Joins**: Does this require combining multiple tables?
- **Ordering**: How should results be sorted?
- **Limits**: Is there a top-N or sample requirement?
- **Time range and granularity**: Which period, bucketed by day, week or month?

When a metric is ambiguous ("active users", "churned", "conversion"), ask the user to define it precisely before writing the query.

### 2. Determine SQL Dialect

If the user's SQL dialect is not already known, ask which they use:

- **PostgreSQL** (including Aurora, RDS, Supabase, Neon)
- **Snowflake**
- **BigQuery** (Google Cloud)
- **Redshift** (Amazon)
- **Databricks SQL**
- **MySQL** (including Aurora MySQL, PlanetScale)
- **SQL Server** (Microsoft)
- **DuckDB**
- **SQLite**
- **Other** (ask for specifics)

Remember the dialect for future queries in the same session. If the user is unsure which database they use, write the query in the two most likely dialects.

### 3. Discover Schema

If a data warehouse MCP server is connected:

1. Search for relevant tables based on the user's description
2. Inspect column names, types, and relationships
3. Check for partitioning or clustering keys that affect performance
4. Look for pre-built views or materialized views that might simplify the query

If the user provides a schema (DDL, a SQL dump, documentation, or a diagram), read it and map the request to specific tables, columns, keys and joins.

If there is no schema at all, infer a reasonable one from the question using common SaaS conventions (`users`, `accounts`, `events`, `subscriptions`, `orders`), show it, and ask the user to confirm before writing the query.

### 4. Write the Query

Follow these best practices:

**Structure:**
- Use CTEs (WITH clauses) for readability when queries have multiple logical steps
- One CTE per logical transformation or data source
- Name CTEs descriptively (e.g., `daily_signups`, `active_users`, `revenue_by_product`)

**Performance:**
- Never use `SELECT *` in production queries -- specify only needed columns
- Filter early (push WHERE clauses as close to the base tables as possible)
- Use partition filters when available (especially date partitions)
- Prefer `EXISTS` over `IN` for subqueries with large result sets
- Use appropriate JOIN types (don't use LEFT JOIN when INNER JOIN is correct)
- Avoid correlated subqueries when a JOIN or window function works
- Be mindful of exploding joins (many-to-many)

**Readability:**
- Add comments explaining the "why" for non-obvious logic
- Use consistent indentation and formatting
- Alias tables with meaningful short names (not just `a`, `b`, `c`)
- Put each major clause on its own line
- Comment the intent, not just the mechanics: queries get shared with analysts who need to know what the business question was

**Edge cases:**
- NULLs in join keys, filters and aggregates
- Timezones: say which timezone date boundaries use
- Duplicates: deduplicate before counting when the source can repeat rows

**Dialect-specific optimizations:**
- Apply dialect-specific syntax and functions (see `sql-queries` skill for details)
- Use dialect-appropriate date functions, string functions, and window syntax
- Note any dialect-specific performance features (e.g., Snowflake clustering, BigQuery partitioning)

### 5. Present the Query

Present it in this shape:

```
## SQL Query: [What it does]

**Dialect**: [BigQuery / PostgreSQL / ...]
**Tables used**: [list]

### Query
[SQL code block with comments]

### What this returns
[Columns, rows, expected result shape]

### Assumptions
- [Schema assumptions]
- [Business-logic assumptions, such as how "active" is defined]

### Notes
- [Performance: expected cost, partition usage, potential bottlenecks]
- [Edge cases handled or flagged]
- [How to adjust for common variations: time range, granularity, extra filters]
```

### 6. Offer to Execute

If a data warehouse is connected, offer to run the query and analyze the results. If the user wants to run it themselves, the query is ready to copy-paste.

Then offer: a companion query for a related metric, a dashboard around the query (the `build-dashboard` skill), or a cohort version of it (the `cohort-analysis` skill).

## Examples

**Simple aggregation:**
```
/write-query Count of orders by status for the last 30 days
```

**Complex analysis:**
```
/write-query Cohort retention analysis -- group users by their signup month, then show what percentage are still active (had at least one event) at 1, 3, 6, and 12 months after signup
```

**Performance-critical:**
```
/write-query We have a 500M row events table partitioned by date. Find the top 100 users by event count in the last 7 days with their most recent event type.
```

## Tips

- Mention your SQL dialect upfront to get the right syntax immediately
- If you know the table names, include them -- otherwise Claude will help you find them
- Specify if you need the query to be idempotent (safe to re-run) or one-time
- For recurring queries, mention if it should be parameterized for date ranges
