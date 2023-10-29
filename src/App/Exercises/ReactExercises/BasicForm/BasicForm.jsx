import { useState } from 'react';
import './styles.css';
import { ProductOrder } from './ProductOrder';
import { DataForOrder } from './DataForOrder';
import { CreatingAccount } from './CreatingAccount';
import { Consent } from './Consent';

export const BasicForm = () => {
  const [formData, setFormData] = useState({
    product: 'kurs front-end',
    paymentType: '',
    additionalOptions: {
      github: false,
      enviroment: false,
      extraDocuments: false,
    },
    nameAndSurname: '',
    nick: '',
    adress: '',
    email: '',
    phone: '',
    details: '',
    createAccount: false,
    password: '',
    passwordRepeat: '',
    consents: false,
    newsletter: false,
  });

  function updateFormData(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function updateCheckList(event) {
    setFormData({
      ...formData,
      additionalOptions: {
        ...formData.additionalOptions,
        [event.target.name]: event.target.checked,
      },
    });
  }

  function updateSingleCheck(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
  }

  function handleSubmit() {
    console.log(formData);
    setFormData({
      product: 'kurs front-end',
      paymentType: '',
      additionalOptions: {
        github: false,
        enviroment: false,
        extraDocuments: false,
      },
      nameAndSurname: '',
      nick: '',
      adress: '',
      email: '',
      phone: '',
      details: '',
      createAccount: false,
      password: '',
      passwordRepeat: '',
      consents: false,
      newsletter: false,
    });
  }

  return (
    <div className="form-wrapper">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <div className="form">
          <ProductOrder
            formData={formData}
            updateFormData={updateFormData}
            updateCheckList={updateCheckList}
          />
          <DataForOrder formData={formData} updateFormData={updateFormData} />
          <CreatingAccount
            formData={formData}
            updateFormData={updateFormData}
            updateSingleCheck={updateSingleCheck}
          />
          <Consent formData={formData} updateSingleCheck={updateSingleCheck} />
        </div>
        <button className="order-button" type="submit">
          SKŁADAM ZAMÓWIENIE
        </button>
      </form>
    </div>
  );
};
