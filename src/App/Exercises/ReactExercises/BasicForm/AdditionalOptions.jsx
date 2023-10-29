export const AdditionalOptions = (props) => {
  return (
    <div className="product-order-element-2">
      <label className="element-title">Opcje dodatkowe do zamówienia</label>
      <div>
        <input
          id="setting"
          type="checkbox"
          onChange={props.updateCheckList}
          name="enviroment"
          checked={props.formData.additionalOptions.enviroment}
        />
        <label for="setting" className="element-content">
          ustawienie środowiska
        </label>
      </div>
      <div>
        <input
          id="intro"
          type="checkbox"
          onChange={props.updateCheckList}
          name="github"
          checked={props.formData.additionalOptions.github}
        />
        <label for="intro" className="element-content">
          intro do GitHub
        </label>
      </div>
      <div>
        <input
          id="additional"
          type="checkbox"
          onChange={props.updateCheckList}
          name="extraDocuments"
          checked={props.formData.additionalOptions.extraDocuments}
        />
        <label for="additional" className="element-content">
          materiały dodatkowe
        </label>
      </div>
    </div>
  );
};
