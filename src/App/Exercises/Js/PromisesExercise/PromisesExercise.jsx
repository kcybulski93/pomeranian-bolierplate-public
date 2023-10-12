import { useEffect, useState } from 'react';

export const PromisesExercise = () => {
  const [mysResult, setMyResult] = useState(null);
  const myPromise = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.round(Math.random());

        if (randomNumber) {
          resolve('Sukces!');
        } else {
          reject('Porażka');
        }
      }, 2000);
    });

  useEffect(() => {
    myPromise()
      .then((value) => {
        setMyResult(value);
      })
      .catch((err) => {
        setMyResult(err);
      })
      .finally(() => {
        console.log('koniec');
      });
  }, []);

  return <div>{mysResult}</div>;
};
