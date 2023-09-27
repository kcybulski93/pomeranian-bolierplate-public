export function SecondRowButtons({
  secondRowChosenButton,
  setSecondRowChosenButton,
}) {
  const handleClick = (event) => {
    setSecondRowChosenButton(event.target.id);
  };

  return (
    <div className="buttons">
      <button
        className={
          secondRowChosenButton == 1 ? 'chosen-button' : 'small-button'
        }
        id={1}
        onClick={handleClick}
      >
        1 kret
      </button>
      <button
        className={
          secondRowChosenButton == 2 ? 'chosen-button' : 'small-button'
        }
        id={2}
        onClick={handleClick}
      >
        2 krety
      </button>
      <button
        className={
          secondRowChosenButton == 3 ? 'chosen-button' : 'small-button'
        }
        id={3}
        onClick={handleClick}
      >
        3 krety
      </button>
    </div>
  );
}
