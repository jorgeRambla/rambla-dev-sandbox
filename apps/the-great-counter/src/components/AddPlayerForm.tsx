import { type FormEvent, useEffect, useRef, useState } from 'react';
import { t } from '../i18n';

type AddPlayerFormProps = {
  onAdd: (name: string) => void;
  onClose: () => void;
};

export function AddPlayerForm({ onAdd, onClose }: AddPlayerFormProps) {
  const [name, setName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setName('');
  }

  return (
    <div className="tgc-overlay" role="dialog" aria-modal="true" aria-label={t.addPlayer}>
      <button type="button" className="tgc-backdrop" aria-label={t.close} onClick={onClose} />
      <div className="tgc-sheet">
        <form className="tgc-add-form" onSubmit={handleSubmit}>
          <h2 className="tgc-add-title">{t.newPlayer}</h2>
          <label htmlFor="player-name" className="sr-only">
            {t.playerName}
          </label>
          <input
            id="player-name"
            ref={inputRef}
            className="tgc-text-input"
            type="text"
            placeholder={t.playerName}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <div className="tgc-add-actions">
            <button type="button" className="tgc-btn" onClick={onClose}>
              {t.cancel}
            </button>
            <button type="submit" className="tgc-btn is-primary">
              {t.add}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
