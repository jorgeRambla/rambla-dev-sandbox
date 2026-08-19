/** Returns a random, vivid HSL color string for a newly added player. */
export function randomPlayerColor(): string {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 65 + Math.floor(Math.random() * 20); // 65–85%
  const lightness = 50 + Math.floor(Math.random() * 10); // 50–60%
  return `hsl(${hue} ${saturation}% ${lightness}%)`;
}
