/** Vibrant card palette inspired by ScoreKeeper's colorful counters. */
const PALETTE = [
  '#2f9e44', // green
  '#1c7ed6', // blue
  '#ae3ec9', // purple
  '#e8590c', // orange
  '#e03131', // red
  '#0ca678', // teal
  '#d6336c', // pink
  '#4263eb', // indigo
  '#f08c00', // amber
  '#5f3dc4', // violet
] as const;

/** Returns a random vivid color from the palette for a newly added player. */
export function randomPlayerColor(): string {
  return PALETTE[Math.floor(Math.random() * PALETTE.length)];
}
