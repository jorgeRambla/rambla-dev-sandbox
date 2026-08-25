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

- Each player is shown as a colored card with a large score; tapping the card
  opens a **score sheet** (modal) to adjust the score.
- The score sheet provides **quick-add** buttons (`+5`, `+10`, `+20`, `+25`,
  `+50`) and a **custom value** (pencil) with `−` / `+` to subtract or add any
  amount.
- Players can be removed individually (× on the card).
- Players and their counts persist across page reloads via `localStorage`.
- **Standalone styling** — this app has its own visual identity (light,
  ScoreKeeper-inspired theme) and does not share chrome with or link to Sandbox.
- **i18n** — UI available in English and Spanish, auto-selected from the user's
  OS/browser language (`navigator.languages`), defaulting to English.
- Applying any score change (quick-add or custom `−`/`+`) closes the score sheet.

## Non-goals (v1)

- No shared/global counter.
- No counter min/max bounds (can go negative).
- No player name uniqueness enforcement.
- No multi-device sync (localStorage is per-browser).
