export const CreatingAccount = (props) => {
  return (
    <div className="creating-account">
      <h1>ZAKŁADANIE KONTA</h1>
      <div className="creating-account-elements">
        <div className="creating-account-element-1">
          <label className="element-title">
            Chcę założyć konto razem z zamówieniem
          </label>
          <div>
            <input
              id="addAccount"
              type="checkbox"
              onChange={props.updateSingleCheck}
              name="createAccount"
              checked={props.formData.createAccount}
            />
            <label for="addAccount" className="element-content">
              zakładam konto
            </label>
          </div>
        </div>
        <div className="password-elements">
          <div>
            <label className="element-title">Moje hasło</label>
            <div>
              <input
                type="password"
                onChange={props.updateFormData}
                name="password"
                value={props.formData.password}
              />
            </div>
          </div>
          <div>
            <label className="element-title">Powtórz hasło</label>
            <div>
              <input
                type="password"
                onChange={props.updateFormData}
                name="passwordRepeat"
                value={props.formData.passwordRepeat}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
