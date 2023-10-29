export const Consent = (props) => {
  return (
    <div className="approval">
      <h1>ZGODY I NEWSLETTER</h1>
      <div className="approval-elements">
        <div className="approval-element">
          <label className="element-title">
            Realizując zamówienie, akceptujesz regulamin naszego sklepu
          </label>
          <div>
            <input
              id="acceptStatute"
              type="checkbox"
              onChange={props.updateSingleCheck}
              name="consents"
              checked={props.formData.consents}
            />
            <label for="acceptStatute" className="element-content">
              akceptuję regulamin
            </label>
          </div>
        </div>
        <div className="approval-element">
          <label className="element-title">
            Dołącz do naszego newslettera z promocjami dla naszych klientów
          </label>
          <div>
            <input
              id="newsletter"
              type="checkbox"
              onChange={props.updateSingleCheck}
              name="newsletter"
              checked={props.formData.newsletter}
            />
            <label for="newsletter" className="element-content">
              zapisuję się na listę mailingową
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
