export const DataForOrder = (props) => {
  return (
    <div className="data-for-order">
      <h1>DANE DO REALIZACJI ZAMÓWIENIA</h1>
      <div className="data-for-order-elements">
        <div className="data-for-order-element-1">
          <label className="element-title">Imię i nazwisko*</label>
          <div>
            <input
              placeholder="wpisz swoje imię i nazwisko"
              type="text"
              name="nameAndSurname"
              onChange={props.updateFormData}
              value={props.formData.nameAndSurname}
            />
          </div>
        </div>
        <div className="data-for-order-element-1">
          <label className="element-title">Twój pseudonim*</label>
          <div>
            <input
              placeholder="wpisz swój pseudonim"
              type="text"
              name="nick"
              onChange={props.updateFormData}
              value={props.formData.nick}
            />
          </div>
        </div>
        <div className="data-for-order-element-1">
          <label className="element-title">Adres do wysyłki*</label>
          <div>
            <input
              placeholder="adres na który mamy wysłać zamówienie"
              type="text"
              name="adress"
              onChange={props.updateFormData}
              value={props.formData.adress}
            />
          </div>
        </div>
        <div className="data-for-order-element-1">
          <label className="element-title">Adres e-mail*</label>
          <div>
            <input
              placeholder="jan.kowalski@gmail.com"
              type="text"
              name="email"
              onChange={props.updateFormData}
              value={props.formData.email}
            />
          </div>
        </div>
        <div className="data-for-order-element-1">
          <label className="element-title">Numer kontaktowy*</label>
          <div>
            <input
              placeholder="+48 888 888 888"
              type="text"
              name="phone"
              onChange={props.updateFormData}
              value={props.formData.phone}
            />
          </div>
        </div>
        <div className="data-for-order-element-2">
          <label className="element-title">Dodatkowe uwagi do zamówienia</label>
          <div>
            <textarea
              placeholder="Jeśli masz jakieś uwagi, wpisze je tutaj"
              name="details"
              onChange={props.updateFormData}
              value={props.formData.details}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
