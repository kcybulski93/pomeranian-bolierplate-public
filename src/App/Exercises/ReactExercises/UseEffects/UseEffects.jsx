import { useEffect } from 'react';

export const UseEffects = () => {
  const zaleznosc = null;
  //Wydarzy się za każdym razem gdy w komponencie wykona sie dowolna zmiana
  useEffect(() => {});
  //Wydarzy się raz przy rysowaniu komponentu
  useEffect(() => {}, []);
  //Wydarzy się jeśli zależność w [] sie zmieni
  useEffect(() => {}, [zaleznosc]);
  //Służy do czyszczenia stanu
  useEffect(() => {
    return () => {};
  });

  return <div>Hello UseEffects</div>;
};
