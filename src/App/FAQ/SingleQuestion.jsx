import './styles.css';
import { useState } from 'react';

export const SingleQuestion = ({ question, answer }) => {
  const [visable, setVisable] = useState(false);

  function handleClick() {
    setVisable(!visable);
  }

  return (
    <div>
      <div className="wrapper">
        <h1 className="title" onClick={handleClick}>
          {question}
        </h1>
        <div className="line" />
        {visable && <p className="content">{answer}</p>}
      </div>
    </div>
  );
};
