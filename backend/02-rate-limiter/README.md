# B2: Rate Limiter (45 min)

**Tests:** algorithms, time handling, data structures, clean abstractions, testing with fake clocks.

## Requirements

Implement a reusable rate limiter, then wire it in as middleware for a tiny HTTP server.

```
limiter = RateLimiter(limit=5, windowSeconds=10)
limiter.allow("user-123")  // true or false
```

1. Allow at most `limit` requests per `windowSeconds` per key.
2. Implement **one** algorithm of your choice: fixed window, sliding window log, sliding window counter, or token bucket. State why in `NOTES.md`.
3. Middleware returns `429` with a `Retry-After` header (seconds) when blocked, and sets `X-RateLimit-Remaining` on allowed requests.
4. Key by client IP (or an `X-API-Key` header if present).
5. Inject the clock so tests don't need real sleeping.

## Edge cases

- Burst at a window boundary (fixed window lets 2x through; can you explain this?).
- Memory growth: old keys must eventually be cleaned up.
- Two requests at the exact same millisecond.

## Stretch goals

- Implement a second algorithm behind the same interface and compare behavior in tests.
- Sketch (in `NOTES.md`) how it works across multiple server instances (e.g. Redis with atomic ops).

## Interviewers look for

- Tests using a fake clock that cover the boundary behavior.
- An honest explanation of the algorithm's trade-offs.
- A small, clean interface.
