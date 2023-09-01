import './style.css';
import logoPomeranian from './pomeranian-icon.png';
import zdjecie from './zdjecie.jpg';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export function ImageFiles() {
  return (
    <div>
      <img src={logoPomeranian} alt="Pomeranian logo" />
      <img src={zdjecie} alt="Zdjecie" />
      <RoundImage src={zdjecie} size={400} />
      <RoundImage src={logoPomeranian} size={400} />
    </div>
  );
}
