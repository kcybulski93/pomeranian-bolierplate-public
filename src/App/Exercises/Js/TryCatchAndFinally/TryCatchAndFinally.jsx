import { useEffect } from 'react';

export const TryCatchAndFinally = () => {
  function dumb() {
    const randomNumber = Math.round(Math.random());

    if (randomNumber) {
      console.log('Wszystko działa');
    } else {
      throw new Error('Niestety nie działa');
    }
  }

  useEffect(() => {
    try {
      dumb();
    } catch (error) {
      console.log(error);
    } finally {
      console.log('wszystko się już zakończyło');
    }
  }, []);

  return <span>Hello Try Catch</span>;
};
