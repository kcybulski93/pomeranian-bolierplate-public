import { FirstRowButtons } from './FirstRowButtons';
import { SecondRowButtons } from './SecondRowButtons';

export function MenuView({ setStartGame }) {
  const handleClick = () => {
    setStartGame(true);
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
        <div className="control-button-button">
          <button className="small-button" onClick={handleClick}>
            START
          </button>
        </div>
      </div>
    </div>
  );
}
