# B1: URL Shortener API (60 min)

**Tests:** REST design, validation, data modeling, status codes, testing.

## Requirements

Build an HTTP API (any language/framework). Storage: SQLite or in-memory is fine.

| Method | Path | Behavior |
|--------|------|----------|
| POST | `/links` | Body `{ "url": "https://...", "alias": "optional" }` returns `201` with `{ code, shortUrl, url }` |
| GET | `/:code` | `302` redirect to the original URL; `404` if unknown |
| GET | `/links/:code/stats` | `{ url, createdAt, clicks }` |
| DELETE | `/links/:code` | `204`, then the code returns `404` |

## Rules

1. Only `http` and `https` URLs are valid. Return `400` with a helpful message otherwise.
2. Generated codes: 6-8 chars, URL-safe, no collisions (retry on conflict).
3. If `alias` is given, it must be 3-20 chars of `[a-zA-Z0-9_-]` and not already used (`409` if taken).
4. Posting the same URL twice may return the same code (your choice, document it in `NOTES.md`).
5. Every redirect increments `clicks`.

## Edge cases

- Malformed JSON body, missing `url`, a URL over 2048 chars.
- Aliases that clash with your own routes (e.g. `links`).
- Concurrent requests creating the same alias.

## Stretch goals

- Optional `expiresAt`; expired links return `410`.
- Tests: at least 5, covering success, validation failure, and collision.
- Explain in `NOTES.md` how you'd scale this to 10k redirects/second.

## Interviewers look for

- Correct and consistent status codes.
- Validation at the boundary, with clear errors.
- A schema with a unique index on `code`.
