import { createContext } from 'react';

const formContext = createContext({
  selectedPlan: null,
  billingType: 'monthly',
  selectPlan: plan => {},
  selectBillingType: type => {},
  selectedAddons: [],
  setAddOn: addon => {},
  formValue: '',
  onChangeHandler: e => {},
  onBlurHandler: e => {},
  formIsValid: false,
  validate: () => {},
});

export default formContext;
