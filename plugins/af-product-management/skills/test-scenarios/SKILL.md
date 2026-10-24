---
name: test-scenarios
description: Use when turning user stories, acceptance criteria or a feature spec into QA test scenarios, such as happy paths, edge cases, error handling, and security or performance cases, with a coverage matrix.
argument-hint: "<user stories, acceptance criteria, or feature spec>"
---

# Test Scenarios

Turn user stories or a spec into test scenarios QA can execute immediately: each with an objective, starting conditions, a user role, steps with expected results, and expected outcomes. Every acceptance criterion maps to at least one scenario.

Accept user stories, acceptance criteria, PRD sections, feature descriptions or any specification of expected behaviour, plus any testing context or constraints.

## Scenario types

- **Happy path**: the expected flow works. Write these first, then layer in the rest.
- **Edge cases**: boundary conditions, unusual or invalid inputs, concurrent operations.
- **Errors**: what happens when things go wrong; it should fail gracefully.
- **Security** (when applicable): authentication, permissions, data access.
- **Performance** (when applicable): load, timeouts, large data.

For APIs, include rate limiting, timeouts, malformed requests and auth failures. Cover both positive tests (it works) and negative tests (it fails gracefully).

## Steps

1. **Review** each story and its acceptance criteria; name what behaviour each test validates. Done when every acceptance criterion is listed.
2. **Write scenarios** per story across the types above: starting conditions (system state, data, configuration, user permissions), user role, numbered steps each with its expected result, expected outcomes, postconditions, and priority (Critical / High / Medium / Low). Done when every acceptance criterion maps to at least one scenario.
3. **Coverage and needs.** Build the coverage matrix; list the test data required and flag scenarios that need specific environments or mocked third-party services. Done when no requirement has an empty row.

## Example

**Scenario**: View recently viewed products on a product page. **Objective**: the "Recently viewed" section displays correctly and excludes the current product. **Starting conditions**: user logged in or browser history enabled; at least 2 products viewed this session; now on a different product page. **Role**: online shopper.

| Step | Action | Expected result |
|---|---|---|
| 1 | Open any product page | Section appears at the bottom with previously viewed items |
| 2 | Scroll to the bottom | "Recently viewed" shows product cards |
| 3 | Check the thumbnails | Images, titles and prices display correctly |
| 4 | Look for the current product | It is not in the list |
| 5 | Click a card | The corresponding product page opens |

**Expected outcomes**: the section appears only after at least 1 prior product view; shows 4-8 complete cards; excludes the current product; each card shows "Viewed X minutes/hours ago"; cards link correctly; the section loads within 2 seconds.

## Output

```
## Test Scenarios: [Feature]
Source: [user stories / PRD / description] | Total: [n] | Coverage: [happy / edge / error / security / performance]

### Scenario 1: [Title]
Tests: [story or requirement] | Objective: [...]
Preconditions: [...] | User role: [...]
| Step | Action | Expected result |
Postconditions: [...] | Priority: [Critical / High / Medium / Low]

### Coverage matrix
| Requirement | Happy path | Edge cases | Error handling | Notes |

### Test data requirements
### Environment and mocking needs
```

Save as markdown. Next steps worth offering: `dummy-dataset` for the test data, more edge cases for a scenario, or the `user-stories` these scenarios test.
