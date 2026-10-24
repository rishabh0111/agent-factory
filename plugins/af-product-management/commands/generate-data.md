---
description: Generate a realistic dummy dataset for testing, demos or prototypes as CSV, JSON, SQL inserts or a Python script
argument-hint: "<description of the data you need>"
---

# /generate-data

Create realistic fake data for development, testing, demos or prototyping, with the generator script so it can be regenerated.

```
/generate-data $ARGUMENTS
```

Examples: `/generate-data 1000 users with names, emails, plan tier, signup date, and activity score`, `/generate-data E-commerce orders: products, customers, timestamps, amounts`, or a pasted table definition to match.

## Workflow

1. **Define the dataset.** From the request, establish the entities, columns with types and constraints, row count, relationships between tables, distributions ("80% on the free plan") and realistic constraints (unique emails, chronological dates). Ask only for what is missing, including the output format. Done when the schema is complete.
2. **Generate.** Run `/af-product-management:dummy-dataset` to its completion criteria: script, output file and validation.
3. **Deliver** the data file and generator script to the user's workspace, with the schema, a 5-row sample and how to regenerate.
4. **Next steps.** Offer more columns or rows, related tables (orders for these users), test scenarios that use the data (`/af-product-management:test-scenarios`), or SQL queries to analyze it.
