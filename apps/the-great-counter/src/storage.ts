import type { Player } from './types';

const STORAGE_KEY = 'the-great-counter:players';

export function loadPlayers(): Player[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Player[]) : [];
  } catch {
    return [];
  }
}

export function savePlayers(players: Player[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(players));
  } catch {
    // Ignore write errors (e.g. private browsing storage quota).
  }
}
