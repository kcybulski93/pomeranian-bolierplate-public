import { MenuView } from './MenuView';
import { GameView } from './GameView';
import './styles.css';
import { useState } from 'react';

export function HitTheMoleGame() {
  const [startGame, setStartGame] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="game">
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      {!startGame ? (
        <MenuView setStartGame={setStartGame} />
      ) : (
        <GameView
          setStartGame={setStartGame}
          score={score}
          setScore={setScore}
        />
      )}
    </div>
  );
}
