import { useState } from 'react';

export const PromisesExercise2 = () => {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  function loadUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'John Doe' });
      }, 2000);
    });
  }

  function loadUserDetails(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          reject(new Error('Nie udało się pobrać danych'));
        } else {
          resolve({ id: userId, age: 30, country: 'Poland' });
        }
      }, 2000);
    });
  }

  function loadAllUserData() {
    setData(null);
    setErrorMessage(null);
    loadUser().then((user) => {
      loadUserDetails(user.id)
        .then((details) => {
          setData(details);
        })
        .catch((err) => {
          setErrorMessage(err.message);
        });
    });
  }

  return (
    <div>
      <button onClick={loadAllUserData}>Pobierz dane</button>
      {data && (
        <div>
          <p>Id: {data.id}</p>
          <p>Age: {data.age}</p>
          <p>Country: {data.country}</p>
        </div>
      )}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};
