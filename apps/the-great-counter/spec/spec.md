# The Great Counter — Spec

A multi-player counter app. Add players, each gets their own independent
counter and a randomly assigned color.

## Requirements

1. **Responsive** — the layout must adapt to all viewports, from small
   mobile screens to large desktops.
2. **Add players**
   1. Players have a name (free text, required, non-empty).
   2. Each player has their own counter, starting at `0`.
   3. Each added player is assigned its own random color, used to visually
      distinguish their card/counter.

## Additional decisions

- Each counter supports both increment (`+1`) and decrement (`-1`).
- Players can be removed individually.
- Players and their counts persist across page reloads via `localStorage`.

## Non-goals (v1)

- No shared/global counter.
- No counter min/max bounds (can go negative).
- No player name uniqueness enforcement.
- No multi-device sync (localStorage is per-browser).
