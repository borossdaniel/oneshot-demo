# OneShot demo

This repo is **deliberately out of date**, the way an AI agent writes code from memory:

- `src/chat.js` calls `claude-sonnet-4-5`, which Anthropic retires on 30 November 2026
- `.env.example` uses `gpt-5`, which OpenAI retires on 11 December 2026
- `Dockerfile` uses Node 20, which no longer gets security fixes
- the CI workflow uses old `actions/checkout` and `actions/setup-node` versions

The [OneShot](https://github.com/borossdaniel/OneShot) GitHub Action finds every one of them and marks the exact line. Open the latest run under **Actions** to see it.

Add it to your own repo:

```yaml
- uses: borossdaniel/OneShot@v1
```

Or check any public repo without installing anything: [oneshotagent.dev](https://oneshotagent.dev/#check).
