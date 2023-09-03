import { SingleQuestion } from './SingleQuestion';
import './styles.css';

export const FAQ = () => {
  return (
    <div>
      <SingleQuestion question="Tekst 1" answer="Answer 1" />
      <SingleQuestion question="Tekst 2" answer="Answer 2" />
      <SingleQuestion question="Tekst 3" answer="Answer 3" />
    </div>
  );
};
