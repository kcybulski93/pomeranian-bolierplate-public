import { useState } from 'react';

export function FirstRowButtons() {
  const [chosenButton, setChosenButton] = useState(null);

  const handleClick = (event) => {
    setChosenButton(event.target.id);
  };

  return (
    <div className="buttons">
      <button
        className={chosenButton == 1 ? 'chosen-button' : 'small-button'}
        id={1}
        onClick={handleClick}
      >
        1 minuta
      </button>
      <button
        className={chosenButton == 2 ? 'chosen-button' : 'small-button'}
        id={2}
        onClick={handleClick}
      >
        2 minuty
      </button>
      <button
        className={chosenButton == 3 ? 'chosen-button' : 'small-button'}
        id={3}
        onClick={handleClick}
      >
        3 minuty
      </button>
    </div>
  );
}