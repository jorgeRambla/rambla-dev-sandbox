import { t } from '../i18n';
import type { Player } from '../types';

type PlayerCardProps = {
  player: Player;
  onOpen: (id: string) => void;
  onRemove: (id: string) => void;
};

export function PlayerCard({ player, onOpen, onRemove }: PlayerCardProps) {
  return (
    <div className="tgc-card" style={{ background: player.color }}>
      <button
        type="button"
        className="tgc-card-open"
        onClick={() => onOpen(player.id)}
        aria-label={t.adjustScoreCurrent(player.name, player.count)}
      />
      <button
        type="button"
        className="tgc-card-remove"
        onClick={() => onRemove(player.id)}
        aria-label={t.remove(player.name)}
      >
        ×
      </button>
      <h3 className="tgc-card-name">{player.name}</h3>
      <span className="tgc-card-count">{player.count}</span>
    </div>
  );
}
