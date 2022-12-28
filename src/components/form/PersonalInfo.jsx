import { useState } from 'react';
import Section from '../ui/Section';
import FormControl from '../ui/FormControl';
import { useForm } from '../../context/FormContext';

// const initialState = {
//   name: { touched: false, isInvalid: false, error: null, value: '' },
//   email: { touched: false, isInvalid: false, error: null, value: '' },
//   contact: { touched: false, isInvalid: false, error: null, value: '' },
// };

const PersonalInfo = () => {
  const { formValue, onChangeHandler, onBlurHandler } = useForm();
  const changeHandler = e => {
    onChangeHandler(e);
  };
  const blurHandler = e => {
    onBlurHandler(e);
  };
  // const [formValue, setFormValue] = useState(initialState);
  // const onChangeHandler = e => {
  //   setFormValue(prev => {
  //     return {
  //       ...prev,
  //       [e.target.id]: {
  //         touched: true,
  //         isInvalid: false,
  //         error: null,
  //         value: e.target.value,
  //       },
  //     };
  //   });
  // };
  return (
    <Section
      title="Personal Info"
      description="Please provide your name,email address and phone number"
      className=""
    >
      <FormControl
        marginBottom
        label="Name"
        id="name"
        name="name"
        placeholder="eg Jane Doe"
        onChange={changeHandler}
        value={formValue.name.value}
        isInvalid={formValue.name.isInvalid}
        onBlur={blurHandler}
      />
      <FormControl
        marginBottom
        label="Email"
        type="email"
        id="email"
        name="email"
        placeholder="eg test@example.com"
        onChange={changeHandler}
        value={formValue.email.value}
        isInvalid={formValue.email.isInvalid}
        onBlur={blurHandler}
      />
      <FormControl
        label="Phone No"
        type="text"
        id="contact"
        name="contact"
        placeholder="eg 0724466628"
        onChange={changeHandler}
        value={formValue.contact.value}
        isInvalid={formValue.contact.isInvalid}
        onBlur={blurHandler}
      />
    </Section>
  );
};

export default PersonalInfo;
