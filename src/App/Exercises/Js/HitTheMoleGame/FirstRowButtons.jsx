export function FirstRowButtons({
  firstRowChosenButton,
  setFirstRowChosenButton,
}) {
  const handleClick = (event) => {
    setFirstRowChosenButton(event.target.id);
  };

  return (
    <div className="buttons">
      <button
        className={firstRowChosenButton == 1 ? 'chosen-button' : 'small-button'}
        id={1}
        onClick={handleClick}
      >
        1 minuta
      </button>
      <button
        className={firstRowChosenButton == 2 ? 'chosen-button' : 'small-button'}
        id={2}
        onClick={handleClick}
      >
        2 minuty
      </button>
      <button
        className={firstRowChosenButton == 3 ? 'chosen-button' : 'small-button'}
        id={3}
        onClick={handleClick}
      >
        3 minuty
      </button>
    </div>
  );
}
