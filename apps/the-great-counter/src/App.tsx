import { useEffect, useState } from 'react';
import { randomPlayerColor } from './colors';
import { AddPlayerForm } from './components/AddPlayerForm';
import { PlayerCard } from './components/PlayerCard';
import { ScoreSheet } from './components/ScoreSheet';
import { t } from './i18n';
import { loadPlayers, savePlayers } from './storage';
import type { Player } from './types';

function CounterLogo() {
  return (
    <svg className="tgc-logo" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="currentColor" />
      <path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function App() {
  const [players, setPlayers] = useState<Player[]>(() => loadPlayers());
  const [activeId, setActiveId] = useState<string | null>(null);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    savePlayers(players);
  }, [players]);

  function addPlayer(name: string) {
    const player: Player = {
      id: crypto.randomUUID(),
      name,
      count: 0,
      color: randomPlayerColor(),
    };
    setPlayers((prev) => [...prev, player]);
    setAdding(false);
  }

  function updateCount(id: string, delta: number) {
    setPlayers((prev) => prev.map((p) => (p.id === id ? { ...p, count: p.count + delta } : p)));
  }

  function removePlayer(id: string) {
    setPlayers((prev) => prev.filter((p) => p.id !== id));
    setActiveId((current) => (current === id ? null : current));
  }

  function resetScores() {
    if (players.length === 0) return;
    if (!window.confirm(t.resetConfirm)) return;
    setPlayers((prev) => prev.map((p) => ({ ...p, count: 0 })));
  }

  const activePlayer = players.find((p) => p.id === activeId) ?? null;

  return (
    <div className="tgc-app">
      <header className="tgc-header">
        <CounterLogo />
        <div className="tgc-header-text">
          <h1>{t.appTitle}</h1>
          <p>{t.appSubtitle}</p>
        </div>
        {players.length > 0 && (
          <button type="button" className="tgc-reset" onClick={resetScores}>
            {t.reset}
          </button>
        )}
      </header>

      <main className="tgc-main">
        {players.length === 0 ? (
          <p className="tgc-empty">{t.empty}</p>
        ) : (
          <div className="tgc-grid">
            {players.map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                onOpen={setActiveId}
                onRemove={removePlayer}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="tgc-footer">© {new Date().getFullYear()} rambla.dev</footer>

      <button
        type="button"
        className="tgc-fab"
        onClick={() => setAdding(true)}
        aria-label={t.addPlayer}
      >
        +
      </button>

      {adding && <AddPlayerForm onAdd={addPlayer} onClose={() => setAdding(false)} />}

      {activePlayer && (
        <ScoreSheet
          player={activePlayer}
          onApply={(delta) => updateCount(activePlayer.id, delta)}
          onClose={() => setActiveId(null)}
        />
      )}
    </div>
  );
}
