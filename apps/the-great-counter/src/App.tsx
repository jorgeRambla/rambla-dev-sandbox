import { Footer, Hero, Layout, type NavLink } from '@rambla/shared';
import { useEffect, useState } from 'react';
import { randomPlayerColor } from './colors';
import { AddPlayerForm } from './components/AddPlayerForm';
import { PlayerCard } from './components/PlayerCard';
import { loadPlayers, savePlayers } from './storage';
import type { Player } from './types';

const nav: NavLink[] = [{ label: 'Sandbox', href: 'https://sandbox.rambla.dev' }];

export function App() {
  const [players, setPlayers] = useState<Player[]>(() => loadPlayers());

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
  }

  function updateCount(id: string, delta: number) {
    setPlayers((prev) => prev.map((p) => (p.id === id ? { ...p, count: p.count + delta } : p)));
  }

  function removePlayer(id: string) {
    setPlayers((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <Layout title="The Great Counter" nav={nav}>
      <Hero title="The Great Counter" subtitle="Add players. Track their counters. Compete." />

      <AddPlayerForm onAdd={addPlayer} />

      {players.length === 0 ? (
        <p className="tgc-empty">No players yet — add one above to get started.</p>
      ) : (
        <div className="tgc-grid">
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onIncrement={(id) => updateCount(id, 1)}
              onDecrement={(id) => updateCount(id, -1)}
              onRemove={removePlayer}
            />
          ))}
        </div>
      )}

      <Footer />
    </Layout>
  );
}
