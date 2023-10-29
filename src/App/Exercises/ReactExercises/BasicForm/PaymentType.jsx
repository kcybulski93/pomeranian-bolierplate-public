export const PaymentType = (props) => {
  return (
    <div className="product-order-element-2">
      <label className="element-title">Wybierz formę płatności*</label>
      <div>
        <input
          name="paymentType"
          value="blik"
          onChange={props.updateFormData}
          type="radio"
          id="blik"
          checked={props.formData.paymentType === 'blik'}
        />
        <label for="blik" className="element-content">
          blik
        </label>
      </div>
      <div>
        <input
          value="paypal"
          onChange={props.updateFormData}
          name="paymentType"
          type="radio"
          id="paypal"
          checked={props.formData.paymentType === 'paypal'}
        />
        <label for="paypal" className="element-content">
          paypal
        </label>
      </div>
      <div>
        <input
          value="traditional"
          onChange={props.updateFormData}
          name="paymentType"
          type="radio"
          id="traditional"
          checked={props.formData.paymentType === 'traditional'}
        />
        <label for="traditional" className="element-content">
          przelew tradycyjny
        </label>
      </div>
    </div>
  );
};
