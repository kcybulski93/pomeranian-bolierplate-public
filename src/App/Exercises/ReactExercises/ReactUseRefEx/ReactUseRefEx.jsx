import { useRef } from 'react';

export const ReactUseRefEx = () => {
  const textRef = useRef();
  const inputRef = useRef();
  const btnRef = useRef();

  function onColorChange(color) {
    textRef.current.style.color = color;
  }

  function onClearChange() {
    inputRef.current.value = '';
  }

  function onBlock() {
    btnRef.current.disabled = true;
  }

  return (
    <div>
      <div>
        <button onClick={() => onColorChange('red')}>Czerwony</button>
        <button onClick={() => onColorChange('blue')}>Niebieski</button>
        <p ref={textRef}>Text</p>
      </div>
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={onClearChange}>Czyszczenie</button>
      </div>
      <div>
        <button ref={btnRef} onClick={onBlock}>
          One way ticket
        </button>
      </div>
    </div>
  );
};
