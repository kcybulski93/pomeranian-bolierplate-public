export function ThirdRowButtons({
  thirdRowChosenButton,
  setThirdRowChosenButton,
}) {
  const handleClick = (event) => {
    setThirdRowChosenButton(event.target.id);
  };

  return (
    <div className="buttons">
      <button
        className={thirdRowChosenButton == 1 ? 'chosen-button' : 'small-button'}
        id={1}
        onClick={handleClick}
      >
        1 kratka
      </button>
      <button
        className={thirdRowChosenButton == 2 ? 'chosen-button' : 'small-button'}
        id={2}
        onClick={handleClick}
      >
        2 kratki
      </button>
      <button
        className={thirdRowChosenButton == 3 ? 'chosen-button' : 'small-button'}
        id={3}
        onClick={handleClick}
      >
        3 kratki
      </button>
    </div>
  );
}
