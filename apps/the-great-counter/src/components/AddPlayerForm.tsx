import { type FormEvent, useState } from 'react';

type AddPlayerFormProps = {
  onAdd: (name: string) => void;
};

export function AddPlayerForm({ onAdd }: AddPlayerFormProps) {
  const [name, setName] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setName('');
  }

  return (
    <form className="tgc-add-form" onSubmit={handleSubmit}>
      <label htmlFor="player-name" className="sr-only">
        Player name
      </label>
      <input
        id="player-name"
        className="tgc-input"
        type="text"
        placeholder="Player name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit" className="tgc-btn tgc-btn-primary">
        Add player
      </button>
    </form>
  );
}
