# S1: Kanban Board (120 min)

**Tests:** end-to-end ownership: UI, API, persistence, optimistic updates.

## Requirements

Three columns: **To do**, **Doing**, **Done**. Cards have a title and optional description.

### Frontend
1. Add, edit, and delete cards.
2. Drag a card between columns (and reorder within a column). Use the HTML5 drag API or a library.
3. Optimistic UI: the card moves instantly; if the server call fails, roll back and show an error.
4. Loading and empty states for each column.

### Backend
| Method | Path | Behavior |
|--------|------|----------|
| GET | `/cards` | All cards with column and position |
| POST | `/cards` | Create |
| PATCH | `/cards/:id` | Update title/description, or move: `{ column, position }` |
| DELETE | `/cards/:id` | Delete |

- Persist to SQLite or a JSON file. Order must survive a reload.
- Validate input (title required, max 100 chars; column must be one of the three).

## Edge cases

- Moving a card must keep positions consistent in both the source and target columns.
- Two quick moves in a row must not corrupt order.
- Server down: the app shows an error, not a blank page.

## Stretch goals

- Multi-user support with simple login (reuse B3).
- Keyboard-accessible moving (e.g. select card, press arrow keys).
- Tests for the move logic on the backend, plus one UI test.

## Interviewers look for

- A clear API contract the front end actually follows.
- Order logic that doesn't depend on array luck.
- Errors handled at both layers.

## Self-reflection

Which half took longer, UI or API? Which half did you rewrite? Note it in `NOTES.md`.
