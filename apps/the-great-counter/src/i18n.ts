export type Lang = 'en' | 'es';

/** Detects the UI language from the user's OS/browser preferences. */
export function detectLang(): Lang {
  const candidates = navigator.languages ?? [navigator.language];
  for (const raw of candidates) {
    if (raw?.toLowerCase().startsWith('es')) return 'es';
    if (raw?.toLowerCase().startsWith('en')) return 'en';
  }
  return 'en';
}

type Messages = {
  appTitle: string;
  appSubtitle: string;
  appDescription: string;
  empty: string;
  addPlayer: string;
  newPlayer: string;
  playerName: string;
  cancel: string;
  add: string;
  close: string;
  done: string;
  reset: string;
  resetConfirm: string;
  customHint: string;
  custom: string;
  customValue: string;
  enterCustom: string;
  addCustom: string;
  subtractCustom: string;
  remove: (name: string) => string;
  adjustScore: (name: string) => string;
  adjustScoreCurrent: (name: string, count: number) => string;
};

const en: Messages = {
  appTitle: 'The Great Counter',
  appSubtitle: 'Add players. Track their scores.',
  appDescription: 'The Great Counter — a multi-player counter app.',
  empty: 'No players yet — tap the + button to add one.',
  addPlayer: 'Add player',
  newPlayer: 'New player',
  playerName: 'Player name',
  cancel: 'Cancel',
  add: 'Add',
  close: 'Close',
  done: 'Done',
  reset: 'Reset',
  resetConfirm: 'Reset all scores to 0?',
  customHint: 'Use − / + with a custom value below.',
  custom: 'Custom',
  customValue: 'Custom value',
  enterCustom: 'Enter a custom value',
  addCustom: 'Add custom value',
  subtractCustom: 'Subtract custom value',
  remove: (name) => `Remove ${name}`,
  adjustScore: (name) => `Adjust ${name}'s score`,
  adjustScoreCurrent: (name, count) => `Adjust ${name}'s score, currently ${count}`,
};

const es: Messages = {
  appTitle: 'El gran contador',
  appSubtitle: 'Añade jugadores. Lleva la cuenta de sus puntos.',
  appDescription: 'The Great Counter — una app de contadores para varios jugadores.',
  empty: 'Aún no hay jugadores — pulsa el botón + para añadir uno.',
  addPlayer: 'Añadir jugador',
  newPlayer: 'Nuevo jugador',
  playerName: 'Nombre del jugador',
  cancel: 'Cancelar',
  add: 'Añadir',
  close: 'Cerrar',
  done: 'Hecho',
  reset: 'Reiniciar',
  resetConfirm: '¿Reiniciar todas las puntuaciones a 0?',
  customHint: 'Usa − / + con un valor personalizado abajo.',
  custom: 'Personalizado',
  customValue: 'Valor personalizado',
  enterCustom: 'Introduce un valor personalizado',
  addCustom: 'Sumar valor personalizado',
  subtractCustom: 'Restar valor personalizado',
  remove: (name) => `Eliminar a ${name}`,
  adjustScore: (name) => `Ajustar la puntuación de ${name}`,
  adjustScoreCurrent: (name, count) => `Ajustar la puntuación de ${name}, actualmente ${count}`,
};

export const lang: Lang = detectLang();
export const t: Messages = lang === 'es' ? es : en;
