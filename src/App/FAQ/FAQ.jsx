import { SingleQuestion } from './SingleQuestion';
import './styles.css';

export const FAQ = () => {
  return (
    <div>
      <SingleQuestion question="Pytanie numer 1" answer="Odpowiedź numer 1" />
      <SingleQuestion question="Pytanie numer 2" answer="Odpowiedź numer 2" />
      <SingleQuestion question="Pytanie numer 3" answer="Odpowiedź numer 3" />
    </div>
  );
};
