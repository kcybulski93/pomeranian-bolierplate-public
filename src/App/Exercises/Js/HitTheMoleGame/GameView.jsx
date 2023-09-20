import mole from './mole.svg';

const initialArray = [{ id: 1, isMolePresent: false }];

export function GameView({ setStartGame }) {
  const handleClick = () => {
    setStartGame(false);
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
            <p>16</p>
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
        {/* {initialArray.map((element) => {
            return (
              <div onClick={() => handleClick2(element)}>
                {element.isMolePresent && <img src={mole} alt="Mole" />}
              </div>
            );
          })} */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="margin-bottom" />
    </div>
  );
}
