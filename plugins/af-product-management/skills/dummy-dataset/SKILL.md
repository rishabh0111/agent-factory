---
name: dummy-dataset
description: Use when a realistic fake dataset is needed for testing, a demo or a prototype, such as users, orders, events or customer feedback, as CSV, JSON, SQL inserts or a generator script.
argument-hint: "<rows, entities, columns, constraints, format>"
---

# Dummy Dataset

Generate realistic fake data that respects the business rules, plus the script that made it so the user can regenerate it with different parameters.

## Inputs

The product or system; the dataset type (customer feedback, transactions, user profiles); entities and relationships between tables; columns with types and value ranges; row count (default 100); distributions ("80% on the free plan"); constraints (unique emails, chronological dates, foreign keys); and format: **CSV** (flat, imports anywhere), **JSON** (nested, for APIs and frontends), **SQL INSERT** (for test databases) or a **Python script** (reproducible; the user can tweak and re-run). Ask for the format if it is not given. Accept a pasted table definition as the schema.

## Steps

1. **Specify** each column: name, type, value range, generator and distribution, plus the cross-column rules. Done when the schema table is complete.
2. **Write the generator.** A Python script using the standard library (`csv`, `json`, `random`, `datetime`) with a fixed seed. Values look real: proper names, valid email formats, plausible dates, realistic price distributions (not uniform random), realistic cardinality (1,000 users don't live in 1,000 unique cities). Enforce unique IDs, foreign keys and chronological order. Done when every constraint is enforced in code.
3. **Run it** and write the output in the requested format, next to the script. Done when the file exists and its row count matches.
4. **Validate.** Check row count, uniqueness, foreign keys, ranges and the target distributions against the output. Done when every constraint passes, or the failure is reported.

All names, emails and identifiers are fake; real personal data never goes in. For demo data, make it tell a story: a seasonal trend, a retention problem, a power-user segment.

## Example specification

Customer feedback: `feedback_id` (F0001, F0002...), `customer_name`, `email` (gmail, yahoo, company domains), `feedback_date` (last 90 days), `rating` (1-5), `category` (Bug, Feature Request, Complaint, Praise), `text` (realistic feedback), `product` (electronics, clothing, home). Rules: ratings 40% 5-star, 30% 4-star, 20% 3-star, 10% 1-2 star; Bug only with ratings 1-3; Feature Request only with ratings 3-5.

## Output

```
## Generated Dataset: [description]
Rows: [n] | Columns: [list] | Format: [CSV / JSON / SQL / Python]

### Schema
| Column | Type | Constraints | Distribution |

### Sample (first 5 rows)

### Files
- [data file]
- [generator script]

### How to regenerate
python [script] (change ROWS or SEED at the top)
```

Next steps worth offering: more columns or rows, related tables (orders for these users), `test-scenarios` that use the data, or SQL queries to analyze it.
