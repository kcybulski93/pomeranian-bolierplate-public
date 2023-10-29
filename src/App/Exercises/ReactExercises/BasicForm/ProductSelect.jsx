export const ProductSelect = (props) => {
  return (
    <div className="product-order-element-1">
      <label className="element-title">Wybierz produkt*</label>
      <div>
        <select
          name="product"
          value={props.formData.product}
          onChange={props.updateFormData}
        >
          <option>kurs front-end</option>
          <option>kurs back-end</option>
          <option>umiejętności miękkie</option>
        </select>
      </div>
    </div>
  );
};
