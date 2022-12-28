import { useState, useContext } from 'react';
import formContext from './form';

const initialState = {
  name: { touched: false, isInvalid: false, error: null, value: '' },
  email: { touched: false, isInvalid: false, error: null, value: '' },
  contact: { touched: false, isInvalid: false, error: null, value: '' },
};

const FormProvider = props => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingType, setBillingType] = useState('monthly');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValue, setFormValue] = useState(initialState);
  const [formIsValid, setFormIsValid] = useState(false);

  const selectPlan = plan => {
    setSelectedPlan(plan);
  };

  const selectBillingType = type => {
    setBillingType(type);
  };

  const setAddOn = addon => {
    const addonsEntered = [...selectedAddons];
    const i = addonsEntered.findIndex(add => add.name === addon.name);

    if (i > -1) {
      addonsEntered.splice(i, 1);
      setSelectedAddons(addonsEntered);
    } else {
      setSelectedAddons(prev => [...prev, addon]);
    }
  };

  const onChangeHandler = e => {
    setFormValue(prev => {
      return {
        ...prev,
        [e.target.id]: {
          touched: true,
          isInvalid: false,
          error: null,
          value: e.target.value,
        },
      };
    });
  };

  const onBlurHandler = e => {
    setFormValue(prev => {
      return {
        ...prev,
        [e.target.id]: {
          touched: true,
          isInvalid: e.target.value === '' ? true : false,
          error: null,
          value: e.target.value,
        },
      };
    });
  };

  const validate = () => {
    if (formValue.name.value === '') {
      setFormValue(prev => {
        return {
          ...prev,
          name: {
            touched: true,
            isInvalid: true,
            error: null,
            value: '',
          },
        };
      });
    }
    if (formValue.email.value === '') {
      setFormValue(prev => {
        return {
          ...prev,
          email: {
            touched: true,
            isInvalid: true,
            error: null,
            value: '',
          },
        };
      });
    }
    if (formValue.contact.value === '') {
      setFormValue(prev => {
        return {
          ...prev,
          contact: {
            touched: true,
            isInvalid: true,
            error: null,
            value: '',
          },
        };
      });
    }

    const formValid =
      !formValue.name.isInvalid &&
      !formValue.email.isInvalid &&
      !formValue.contact.isInvalid;
    setFormIsValid(formValid);
  };

  return (
    <formContext.Provider
      value={{
        selectedPlan,
        billingType,
        selectPlan,
        selectBillingType,
        selectedAddons,
        setAddOn,
        formSubmitted,
        setFormSubmitted,
        onChangeHandler,
        onBlurHandler,
        formValue,
        formIsValid,
        validate,
      }}
    >
      {props.children}
    </formContext.Provider>
  );
};

export const useForm = () => {
  return useContext(formContext);
};

export default FormProvider;
