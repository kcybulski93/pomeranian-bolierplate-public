export const ErrorView = ({ error, refresh }) => {
  return (
    <div>
      <div className="announcement-content">
        <p>Przepraszamy. Nie udało się pobrać listy zadań.</p>
        <br />
        {error}
      </div>
      <div className="refresh-button-wrapper">
        <button onClick={refresh} className="refresh-button">
          ODŚWIEŻ WIDOK
        </button>
      </div>
    </div>
  );
};
