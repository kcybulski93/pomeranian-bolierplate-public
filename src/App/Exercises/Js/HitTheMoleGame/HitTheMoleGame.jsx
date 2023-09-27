import { MenuView } from './MenuView';
import { GameView } from './GameView';
import './styles.css';
import { useState } from 'react';

export function HitTheMoleGame() {
  const [startGame, setStartGame] = useState(false);
  const [score, setScore] = useState(0);
  const [firstRowChosenButton, setFirstRowChosenButton] = useState(null);
  const [secondRowChosenButton, setSecondRowChosenButton] = useState(null);
  const [thirdRowChosenButton, setThirdRowChosenButton] = useState(null);
  const [firstStart, setFirstStart] = useState(true);
  const [endTime, setEndTime] = useState(true);
  const [rowsNumber, setRowsNumber] = useState(2);
  const [columnsNumber, setColumnsNumber] = useState(5);

  return (
    <div className="game">
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      {!firstStart && !startGame && (
        <p className="congratulations">
          Gratulację! Twój wynik to {score} złapane krety w czasie {endTime}{' '}
          {endTime == 1 ? 'minuty' : 'minut'}!
        </p>
      )}
      {!startGame ? (
        <MenuView
          setStartGame={setStartGame}
          firstRowChosenButton={firstRowChosenButton}
          setFirstRowChosenButton={setFirstRowChosenButton}
          secondRowChosenButton={secondRowChosenButton}
          setSecondRowChosenButton={setSecondRowChosenButton}
          thirdRowChosenButton={thirdRowChosenButton}
          setThirdRowChosenButton={setThirdRowChosenButton}
          setScore={setScore}
          setRowsNumber={setRowsNumber}
          rowsNumber={rowsNumber}
          setColumnsNumber={setColumnsNumber}
          columnsNumber={columnsNumber}
        />
      ) : (
        <GameView
          setStartGame={setStartGame}
          startGame={startGame}
          score={score}
          setScore={setScore}
          setFirstRowChosenButton={setFirstRowChosenButton}
          firstRowChosenButton={firstRowChosenButton}
          setSecondRowChosenButton={setSecondRowChosenButton}
          secondRowChosenButton={secondRowChosenButton}
          setThirdRowChosenButton={setThirdRowChosenButton}
          thirdRowChosenButton={thirdRowChosenButton}
          setFirstStart={setFirstStart}
          setEndTime={setEndTime}
          rowsNumber={rowsNumber}
          columnsNumber={columnsNumber}
        />
      )}
    </div>
  );
}
