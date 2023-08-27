import { useState } from 'react';

export const SeeOrNot = () => {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {isVisible ? 'Ukryj tekst' : 'Pokaz tekst'}
      </button>
      {isVisible && <span>SeeOrNot</span>}
    </div>
  );
};
