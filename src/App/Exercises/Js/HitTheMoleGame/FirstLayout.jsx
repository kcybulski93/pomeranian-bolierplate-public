import { FirstRowButtons } from './FirstRowButtons';
import { SecondRowButtons } from './SecondRowButtons';

import { useState } from 'react';

export function FirstLayout() {
  const [startGame, setStartGame] = useState(false);

  const handleClick = () => {
    setStartGame(true);
    console.log(startGame);
  };

  return (
    <div className="game-menu">
      <div className="game-time">
        <p>CZAS GRY</p>
        <FirstRowButtons />
      </div>
      <div className="moles-number">
        <p>LICZBA KRETÓW</p>
        <SecondRowButtons />
      </div>
      <div className="control-button">
        <p>PRZYCISKI STERUJĄCE</p>
        <div>
          <button className="small-button" onClick={handleClick} id={startGame}>
            START
          </button>
        </div>
      </div>
    </div>
  );
}
