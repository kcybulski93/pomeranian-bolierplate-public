import mole from './mole.svg';
import { useState } from 'react';

const initialArray = [
  { id: 1, isMolePresent: false, isClicked: false },
  { id: 2, isMolePresent: true, isClicked: false },
  { id: 3, isMolePresent: false, isClicked: false },
  { id: 4, isMolePresent: false, isClicked: false },
  { id: 5, isMolePresent: false, isClicked: false },
  { id: 6, isMolePresent: false, isClicked: false },
  { id: 7, isMolePresent: false, isClicked: false },
  { id: 8, isMolePresent: false, isClicked: false },
  { id: 9, isMolePresent: false, isClicked: false },
  { id: 10, isMolePresent: false, isClicked: false },
];

export function GameView({ setStartGame, setScore, score }) {
  const [arrayWithMole, setArrayWithMole] = useState(initialArray);
  const [time, setTime] = useState(0);

  const handleClick = () => {
    setStartGame(false);
    // if(true) {
    //   setInterval(() => {
    //     setTime(time+1);
    //   }, 1000)
  };

  const handleClickForMoles = (item) => {
    setArrayWithMole(
      arrayWithMole.map((element) => {
        return { ...element, isClicked: item.id === element.id };
      })
    );
    if (item.isMolePresent) {
      setScore(score + 1);
    } else if (score > 0) setScore(score - 1);
  };

  return (
    <div>
      <div className="game-statistics">
        <div className="timer">
          <p>CZAS DO KOŃCA</p>
          <div className="time">
            <p>1:35</p>
          </div>
        </div>
        <div className="score">
          <p>WYNIK</p>
          <div className="actual-score">
            <p>{score}</p>
          </div>
        </div>
        <div className="control-button">
          <p>PRZYCISKI STERUJĄCE</p>
          <button className="stop-button" onClick={handleClick}>
            STOP
          </button>
        </div>
      </div>
      <div className="game-board">
        {arrayWithMole.map((element) => {
          let className;

          if (element.isClicked) {
            if (element.isMolePresent) {
              className = 'correct-square';
            } else {
              className = 'wrong-square';
            }
          } else className = 'square';

          return (
            <div
              onClick={() => handleClickForMoles(element)}
              className={className}
            >
              {element.isMolePresent && <img src={mole} alt="Mole" />}
            </div>
          );
        })}
      </div>
      <div className="margin-bottom" />
    </div>
  );
}
