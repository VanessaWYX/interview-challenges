# B3: Auth with Sessions (75 min)

**Tests:** security fundamentals, password handling, middleware, data modeling.

## Requirements

Build a small API with registration and login.

| Method | Path | Behavior |
|--------|------|----------|
| POST | `/register` | `{ email, password }` returns `201` |
| POST | `/login` | Valid credentials set a session cookie; invalid returns `401` |
| POST | `/logout` | Invalidates the session |
| GET | `/me` | Returns the current user; `401` if not logged in |
| GET | `/notes` / POST `/notes` | Per-user private notes, available only when logged in |

## Rules

1. Hash passwords with bcrypt, argon2, or scrypt. **Never** store plaintext or use a plain fast hash.
2. Validate email format; require passwords of 8+ chars. Duplicate email returns `409`.
3. Session cookie must be `HttpOnly`, `SameSite=Lax` (or Strict), and `Secure` in production.
4. Session ids are random and unguessable (at least 128 bits from a CSPRNG), stored server-side with an expiry.
5. Login errors must not reveal whether the email exists (same message for wrong email and wrong password).
6. A user must never read or modify another user's notes (test this).

## Edge cases

- Expired sessions return `401`.
- Logging in again should not reuse the old session id.
- Email comparison is case-insensitive.

## Stretch goals

- Limit failed logins per account/IP (reuse B2).
- Password reset flow design in `NOTES.md` (token generation, expiry, single use).
- CSRF protection for state-changing routes.

## Interviewers look for

- No secrets or passwords in logs or responses.
- Authorization checks on every notes route.
- Tests for the "other user's note" case.
