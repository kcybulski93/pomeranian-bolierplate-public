import './styles.css';
import { useState } from 'react';

export const ReactOnClick = () => {
  const [value, setValue] = useState(2);

  function handleClick() {
    setValue(value * value);
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <h1>Cześć</h1>
      <button onClick={handleClick}>{value}</button>
      {<input type="text" value={value} onChange={handleChange} />}
    </div>
  );
};
