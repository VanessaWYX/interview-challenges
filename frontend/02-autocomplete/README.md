# F2: Autocomplete Search Box (60 min)

**Tests:** async handling, debouncing, race conditions, keyboard UX, accessibility.

## Setup

Use a public API such as `https://restcountries.com/v3.1/name/{query}` or a local array of 200+ items with a fake `fetchSuggestions(query)` that resolves after a random 100-800 ms delay.

## Requirements

1. As the user types, show up to 8 suggestions below the input.
2. Debounce requests (about 300 ms). No request for an empty query.
3. Show loading, empty ("No results"), and error states.
4. Highlight the matching part of each suggestion.
5. Keyboard: Arrow Up/Down moves the highlight, Enter selects, Escape closes.
6. Clicking a suggestion fills the input and closes the list.
7. Clicking outside closes the list.

## The trap: race conditions

If the user types "ca" then "cat", the response for "ca" may arrive **after** "cat". The UI must show results for the latest query only. Use `AbortController` or a request id check.

## Stretch goals

- ARIA combobox pattern (`role="combobox"`, `aria-activedescendant`, `aria-expanded`).
- Cache previous queries.
- Write a test proving a stale response is ignored.

## Interviewers look for

- Stale responses never overwrite newer ones.
- Debounce implemented correctly (cleanup on unmount).
- Keyboard handling that doesn't break when the list is empty.
