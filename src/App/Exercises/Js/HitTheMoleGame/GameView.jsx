import { Timer } from './Timer';
import mole from './img/mole.svg';
import { useEffect, useState } from 'react';

export function GameView({
  setStartGame,
  setScore,
  score,
  startGame,
  setFirstRowChosenButton,
  firstRowChosenButton,
  setSecondRowChosenButton,
  secondRowChosenButton,
  setThirdRowChosenButton,
  thirdRowChosenButton,
  setFirstStart,
  setEndTime,
  rowsNumber,
  columnsNumber,
}) {
  const initialArray = [];

  for (let i = 1; i < rowsNumber * columnsNumber + 1; i++) {
    initialArray.push({ id: i, isMolePresent: false, isClicked: false });
  }

  function squareDraw() {
    for (let i = 0; i < thirdRowChosenButton; i++) {
      let squareDraw =
        Math.floor(Math.random() * rowsNumber * columnsNumber) + 1;
      setArrayWithMole(
        arrayWithMole.map((element) => {
          if (element.id == squareDraw) {
            return { ...element, emptySquare: true };
          }
        })
      );
    }
    return initialArray;
  }
  console.log(initialArray);

  const [arrayWithMole, setArrayWithMole] = useState(squareDraw());
  const [time, setTime] = useState(Time());
  const [arrayWithPresentMole, setarrayWithPresentMole] = useState(0);

  const handleClick = () => {
    setStartGame(false);
    setFirstStart(false);
    setEndTime(firstRowChosenButton);
    setFirstRowChosenButton(null);
    setSecondRowChosenButton(null);
    setThirdRowChosenButton(null);
  };

  const handleClickForMoles = (item) => {
    setArrayWithMole(
      arrayWithMole.map((element) => {
        return {
          ...element,
          isClicked: element.isClicked || item.id === element.id,
        };
      })
    );
    if (item.isMolePresent && !item.isClicked) {
      setScore(score + 1);
    } else if (score > 0 && !item.isMolePresent) setScore(score - 1);
  };

  if (time <= 0) {
    setStartGame(false);
    setFirstStart(false);
    setEndTime(firstRowChosenButton);
    setFirstRowChosenButton(null);
    setSecondRowChosenButton(null);
    setThirdRowChosenButton(null);
  }

  function moleDraw() {
    let moleNumber = secondRowChosenButton;
    let arrayWithDrawMole = [];
    let draw;
    for (let i = 0; i < moleNumber; i++) {
      draw = Math.floor(Math.random() * rowsNumber * columnsNumber) + 1;
      let isPresent = false;
      arrayWithMole.map((element) => {
        if (element.id === draw && element.emptySquare) {
          draw = Math.floor(Math.random() * rowsNumber * columnsNumber) + 1;
        }
      });
      for (let j = 0; j < arrayWithDrawMole.length; j++)
        if (arrayWithDrawMole[j] == draw) {
          isPresent = true;
        }
      if (isPresent) {
        i--;
      } else {
        arrayWithDrawMole[i] = draw;
      }
    }
    return arrayWithDrawMole;
  }

  function Time() {
    if (firstRowChosenButton == 1) return 60;
    if (firstRowChosenButton == 2) return 120;
    if (firstRowChosenButton == 3) return 180;
  }

  useEffect(() => {
    let timerInterval;
    let moleInterval;

    if (startGame) {
      timerInterval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);

      moleInterval = setInterval(() => {
        setArrayWithMole(
          arrayWithMole.map((element) => {
            return { ...element, isClicked: false, isSelected: false };
          })
        );
        setarrayWithPresentMole(moleDraw());
      }, 2000);
    } else {
      clearInterval(timerInterval);
      clearInterval(moleInterval);
    }
    return () => {
      clearInterval(timerInterval);
      clearInterval(moleInterval);
    };
  }, [startGame]);

  let classForColumns;
  if (columnsNumber == 3) {
    classForColumns = 'game-board-3-columns';
  }
  if (columnsNumber == 4) {
    classForColumns = 'game-board-4-columns';
  }
  if (columnsNumber == 5) {
    classForColumns = 'game-board-5-columns';
  }
  if (columnsNumber == 6) {
    classForColumns = 'game-board-6-columns';
  }
  if (columnsNumber == 7) {
    classForColumns = 'game-board-7-columns';
  }
  if (columnsNumber == 8) {
    classForColumns = 'game-board-8-columns';
  }

  let classForRows;
  if (rowsNumber == 2) {
    classForRows = 'game-board-2-rows';
  }
  if (rowsNumber == 3) {
    classForRows = 'game-board-3-rows';
  }
  if (rowsNumber == 4) {
    classForRows = 'game-board-4-rows';
  }
  if (rowsNumber == 5) {
    classForRows = 'game-board-5-rows';
  }
  if (rowsNumber == 6) {
    classForRows = 'game-board-6-rows';
  }

  return (
    <div>
      <div className="game-statistics">
        <div className="timer">
          <p>CZAS DO KOŃCA</p>
          <div className="time">
            <p>{<Timer time={time} />}</p>
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
      <div
        className={'game-board' + ' ' + classForColumns + ' ' + classForRows}
      >
        {arrayWithMole.map((element) => {
          for (let i = 0; i < arrayWithPresentMole.length; i++) {
            if (arrayWithPresentMole[i] == element.id) {
              element.isMolePresent = true;
            }
          }

          let className;

          if (element.isClicked) {
            if (element.isMolePresent) {
              className = 'correct-square';
            } else {
              className = 'wrong-square';
            }
          } else className = 'square';
          if (element.emptySquare) {
            className = 'empty-square';
          }

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
