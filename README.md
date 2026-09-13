# checkout-demo

A deliberately failing checkout regression fixture for the [Mandate](https://github.com/Mzoratto/mandate) governed AgentOS scenario.

## Contract

Restore the checkout test suite by repairing the coupon calculation. Work is limited to `services/checkout/**` and `tests/checkout/**`. Database schema changes, secrets, production deployment, and unrelated repository paths are outside authority.

```bash
npm test
```

The initial commit intentionally fails the coupon test. A governed execution must preserve the failing base commit as its protected `repositoryCommit` assumption and provide independently verified test and review evidence before completion.
