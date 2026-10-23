# F3: Infinite Scroll Image Gallery (60 min)

**Tests:** layout (CSS grid), performance, IntersectionObserver, loading states, responsiveness.

## Setup

Use `https://picsum.photos/v2/list?page={n}&limit=20` (public, no key). Image URL pattern: `https://picsum.photos/id/{id}/400/300`.

## Requirements

1. Responsive grid: 1 column on mobile, 2 on tablet, 4 on desktop (CSS only, no JS for layout).
2. Load page 1 on mount. Load the next page automatically when the user nears the bottom (use `IntersectionObserver`, not a scroll listener).
3. Show skeleton placeholders while loading, and reserve image space to avoid layout shift.
4. Lazy-load images (`loading="lazy"`).
5. Handle errors with a "Retry" button. A failed page must not break the pages already loaded.
6. Stop requesting when the API returns an empty page.
7. Click an image to open a modal with the larger image and author; Escape or backdrop click closes it.

## Edge cases

- Fast scrolling must not fire duplicate requests for the same page.
- Broken image URLs should show a fallback.
- Focus returns to the clicked image when the modal closes.

## Stretch goals

- Virtualize the list once it passes 500 items.
- Favorite images (persist in `localStorage`).
- Lighthouse score above 90 for performance and accessibility.

## Interviewers look for

- No duplicate fetches (an in-flight guard).
- Cleanup of observers.
- Layout that doesn't jump as images load.
