import { AdditionalOptions } from './AdditionalOptions';
import { PaymentType } from './PaymentType';
import { ProductSelect } from './ProductSelect';

export const ProductOrder = (props) => {
  return (
    <div className="product-order">
      <h1>ZAMÓWIENIE PRODUKTU</h1>
      <div className="product-order-elements">
        <ProductSelect
          formData={props.formData}
          updateFormData={props.updateFormData}
        />
        <PaymentType
          formData={props.formData}
          updateFormData={props.updateFormData}
        />
        <AdditionalOptions
          formData={props.formData}
          updateCheckList={props.updateCheckList}
        />
      </div>
    </div>
  );
};
