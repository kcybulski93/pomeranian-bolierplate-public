export function SecondLayout() {
  return (
    <div>
      <div className="game-statistics">
        <div className="timer">
          <p>CZAS DO KOŃCA</p>
          <div className="time"></div>
        </div>
        <div className="score">
          <p>WYNIK</p>
          <div className="actual-score"></div>
        </div>
        <div className="control-button">
          <p></p>
          <div className="stop-button"></div>
        </div>
      </div>
      <div className="game-board"></div>
    </div>
  );
}
