import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';

export const FirebaseLogin = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerView, setRegisterView] = useState(false);
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeView = () => {
    setRegisterView(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, 'logowanie');

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setIsLogged(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError({ errorCode, errorMessage });
      });
  };

  return (
    <div>
      <h3>{isLogged ? 'Wyloguj' : 'Zaloguj'}</h3>
      {!isLogged &&
        (registerView ? (
          <div>rejestracja...</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password">Hasło</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">Zaloguj</button>
            <button onClick={handleChangeView}>Stwórz konto</button>
            {error && <div>error.errorMessage</div>}
          </form>
        ))}
      {isLogged && (
        <div>Brawo, zalogowany użytkowniku o adresie email: {user.email}</div>
      )}
    </div>
  );
};
