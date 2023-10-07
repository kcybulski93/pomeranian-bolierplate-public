import { useState } from 'react';
//jeśli chce zmieniać session sotareg to zamiast localStorage wpisuje sessionStorage
//przykładowe dostanie sie do wartości cookies
//document.cookie.split('; ').filter(x=>x.startsWith('test'))[0].split('=')[1]
export const JsStorages = () => {
  const [test, setTest] = useState(localStorage.getItem('test'));

  function setLs() {
    localStorage.setItem('test', 1);
    setTest(1);
  }

  function resetLs() {
    localStorage.removeItem('test');
    setTest(null);
  }

  return (
    <div>
      <button onClick={setLs}>Ustaw LS</button>
      <button onClick={resetLs}>Resetuj LS</button>
      <p>{test}</p>
    </div>
  );
};
