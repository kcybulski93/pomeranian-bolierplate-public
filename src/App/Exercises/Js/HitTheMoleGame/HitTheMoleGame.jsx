import { MenuView } from './MenuView';
import { GameView } from './GameView';
import './styles.css';
import { useState } from 'react';

export function HitTheMoleGame() {
  const [startGame, setStartGame] = useState(false);

  return (
    <div className="game">
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      {!startGame ? (
        <MenuView setStartGame={setStartGame} />
      ) : (
        <GameView setStartGame={setStartGame} />
      )}
    </div>
  );
}
