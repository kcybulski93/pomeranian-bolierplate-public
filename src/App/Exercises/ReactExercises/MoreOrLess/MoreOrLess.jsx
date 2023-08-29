import { useState } from 'react';

export const MoreorLess = () => {
  const [luckyNumber, setLuckyNumber] = useState('');
  const [hasErrors, setHasErrors] = useState(false);
  const HIDDEN_NUMBER = 8;

  function handleChange(event) {
    setHasErrors(false);
    setLuckyNumber(event.target.value);

    if (isNaN(+event.target.value)) {
      setHasErrors(true);
    }
  }

  const isBigger = +luckyNumber > HIDDEN_NUMBER;

  return (
    <div>
      <p>Podaj liczbę i sprawdz czy jest wieksza od naszej</p>
      <input type="text" value={luckyNumber} onChange={handleChange} />
      {luckyNumber && hasErrors === false && (
        <p>Odpowiedz: {isBigger ? 'TAK' : 'NIE'} </p>
      )}
      {hasErrors && (
        <strong style={{ color: 'red' }}>
          Wpisana wartość nie jest liczbą
        </strong>
      )}
    </div>
  );
};
