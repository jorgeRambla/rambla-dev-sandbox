import type { Player } from '../types';

type PlayerCardProps = {
  player: Player;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onRemove: (id: string) => void;
};

export function PlayerCard({ player, onIncrement, onDecrement, onRemove }: PlayerCardProps) {
  return (
    <div className="tgc-card" style={{ background: player.color }}>
      <div className="tgc-card-scrim">
        <div className="tgc-card-header">
          <h3 className="tgc-name">{player.name}</h3>
          <button
            type="button"
            className="tgc-remove"
            onClick={() => onRemove(player.id)}
            aria-label={`Remove ${player.name}`}
          >
            ×
          </button>
        </div>

        <p className="tgc-count">{player.count}</p>

        <div className="tgc-controls">
          <button
            type="button"
            className="tgc-btn"
            onClick={() => onDecrement(player.id)}
            aria-label={`Decrease ${player.name}'s counter`}
          >
            −1
          </button>
          <button
            type="button"
            className="tgc-btn"
            onClick={() => onIncrement(player.id)}
            aria-label={`Increase ${player.name}'s counter`}
          >
            +1
          </button>
        </div>
      </div>
    </div>
  );
}
