import { FirstLayout } from './FirstLayout';
import { SecondLayout } from './SecondLayout';
import './styles.css';

export function HitTheMoleGame() {
  return (
    <div className="game">
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      <FirstLayout />
      <SecondLayout />
    </div>
  );
}
