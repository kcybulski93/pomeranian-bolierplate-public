export const Forms = () => {
  function handleSubmit(event) {
    //preventDefault blokuje zdarzenie naturalne, czyli w tym przypadku wysyłanie formularza
    event.preventDefault();
    console.log('hello submit');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* nadanie tekstowy powoduje, ze po kliknieciu w tekst przechodze do inputa */}
        <label for="tekstowy">Input tekstowy</label>
        <input id="tekstowy" type="text" />
      </div>
      <div>
        <select>
          <option>1</option>
          <option>2</option>
        </select>
      </div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <input type="checkbox" />
      </div>
      <div>
        <input name="test" type="radio" />
        <input name="test" type="radio" />
        <input name="test" type="radio" />
      </div>
      <div>
        <input type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
