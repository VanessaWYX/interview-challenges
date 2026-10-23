# F1: Todo List with Filters (45 min)

**Tests:** state management, event handling, derived state, basic accessibility.

## Requirements

1. Add a todo via an input (Enter key or button). Ignore empty or whitespace-only text.
2. Toggle a todo complete/incomplete.
3. Delete a todo.
4. Filter: All / Active / Completed.
5. Show "N items left" (active count).
6. "Clear completed" button, hidden when nothing is completed.
7. Persist todos in `localStorage` and restore them on reload.

## Edge cases to handle

- Very long text should wrap, not break the layout.
- Duplicate todo text is allowed, but each todo needs a stable unique id.
- Corrupt `localStorage` data must not crash the app.

## Stretch goals

- Double-click to edit a todo (Escape cancels, Enter saves).
- Keyboard accessible: all controls reachable by Tab, visible focus.
- Unit tests for the filtering logic.

## Interviewers look for

- Derived values (filtered list, count) computed from state, not stored separately.
- Immutable updates, no mutating state in place.
- Semantic HTML (`button`, `label`, `ul`) rather than clickable divs.
