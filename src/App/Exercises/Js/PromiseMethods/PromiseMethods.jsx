export const PromiseMethods = () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('pierwszy');
    }, 100);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('drugi');
    }, 300);
  });

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('trzeci');
    }, 500);
  });

  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log('Promises.all', values);
  });

  Promise.allSettled([promise1, promise2, promise3]).then((results) => {
    console.log('Promises.allSettled', results);
  });
  //wywoła się pierwszy zwraca pierwszy poprawnie wywołany propis
  Promise.any([promise1, promise2, promise3]).then((value) => {
    console.log('Promises.any', value);
  });
  //zwraca pierwszy propis, ktory sie zakonczyl pozytywny czy negatywny
  Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log('Promises.race', value);
  });

  return <div>Hello Promise Methods</div>;
};
