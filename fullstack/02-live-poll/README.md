# S2: Live Poll (90 min)

**Tests:** real-time communication, data consistency, UI that reacts to server events.

## Requirements

1. Create a poll: a question and 2-6 options. You get a shareable link `/poll/:id`.
2. Anyone with the link can vote **once** (enforce with a cookie or localStorage token plus a server-side check).
3. Results update live for everyone viewing the page, without a manual refresh. Use WebSockets or Server-Sent Events (SSE).
4. Show each option's count and percentage as a bar.
5. The poll creator can close the poll with an admin link/token. Voting then returns `403` and the UI disables voting.

## API sketch

- `POST /polls` returns `{ id, adminToken }`
- `GET /polls/:id` returns the poll and results
- `POST /polls/:id/vote` with `{ optionId }`
- `POST /polls/:id/close` with the admin token
- `GET /polls/:id/stream` (SSE) or a WebSocket endpoint

## Edge cases

- Two voters at the same moment must both be counted (no lost updates).
- A client that reconnects after a drop should get the current state.
- Unknown poll id shows a friendly 404 page.
- Percentages must not show `NaN` with zero votes.

## Stretch goals

- Show "N people watching now".
- Rate-limit voting (reuse B2).
- Explain in `NOTES.md` what changes if this needs to run on 3 server instances.

## Interviewers look for

- Atomic vote increments.
- Clean teardown of connections.
- Honest limits on "one vote per person" (cookies are easy to bypass; say so).
