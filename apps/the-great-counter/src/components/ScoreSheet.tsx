import { type FormEvent, useEffect, useRef, useState } from 'react';
import { QUICK_STEPS } from '../constants';
import { t } from '../i18n';
import type { Player } from '../types';

type ScoreSheetProps = {
  player: Player;
  onApply: (delta: number) => void;
  onClose: () => void;
};

function PencilIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 20h4l10-10-4-4L4 16v4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="m13.5 6.5 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ScoreSheet({ player, onApply, onClose }: ScoreSheetProps) {
  const [custom, setCustom] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const customValue = Number.parseInt(custom, 10);
  const hasCustom = Number.isFinite(customValue) && customValue !== 0;

  function apply(delta: number) {
    onApply(delta);
    onClose();
  }

  function applyCustom(sign: 1 | -1) {
    if (!hasCustom) return;
    apply(sign * Math.abs(customValue));
  }

  function handleCustomSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    applyCustom(1);
  }

  return (
    <div
      className="tgc-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={t.adjustScore(player.name)}
    >
      <button type="button" className="tgc-backdrop" aria-label={t.close} onClick={onClose} />
      <div className="tgc-sheet">
        <div className="tgc-sheet-pill">
          {player.name}: {player.count}
        </div>

        <div className="tgc-quick-grid">
          {QUICK_STEPS.map((step) => (
            <button key={step} type="button" className="tgc-quick-btn" onClick={() => apply(step)}>
              +{step}
            </button>
          ))}
          <button
            type="button"
            className="tgc-quick-btn"
            onClick={() => inputRef.current?.focus()}
            aria-label={t.enterCustom}
          >
            <PencilIcon />
          </button>
        </div>

        <p className="tgc-sheet-hint">{t.customHint}</p>

        <form className="tgc-custom-row" onSubmit={handleCustomSubmit}>
          <button
            type="button"
            className="tgc-round-btn"
            onClick={() => applyCustom(-1)}
            disabled={!hasCustom}
            aria-label={t.subtractCustom}
          >
            −
          </button>
          <label htmlFor="tgc-custom" className="sr-only">
            {t.customValue}
          </label>
          <input
            id="tgc-custom"
            ref={inputRef}
            className="tgc-custom-input"
            type="number"
            inputMode="numeric"
            placeholder={t.custom}
            value={custom}
            onChange={(event) => setCustom(event.target.value)}
          />
          <button
            type="button"
            className="tgc-round-btn is-primary"
            onClick={() => applyCustom(1)}
            disabled={!hasCustom}
            aria-label={t.addCustom}
          >
            +
          </button>
        </form>

        <button type="button" className="tgc-sheet-close" onClick={onClose}>
          {t.done}
        </button>
      </div>
    </div>
  );
}
