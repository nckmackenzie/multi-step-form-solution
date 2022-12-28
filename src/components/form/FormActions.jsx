import { useForm } from '../../context/FormContext';
import { usePaginage } from '../../context/PaginateProvider';
import Button from '../ui/Button';

const FormActions = () => {
  const { pageNo, goNext, goPrevious } = usePaginage();
  const { setFormSubmitted, selectedPlan, validate, formIsValid } = useForm();
  const onSubmitHandler = () => {
    setFormSubmitted(true);
  };
  const nextHandler = () => {
    if (pageNo === 1) {
      validate();
      if (!formIsValid) return;
    }
    if (pageNo === 2 && !selectedPlan) {
      alert('Select plan');
      return;
    }
    goNext();
  };
  const prevHandler = () => {
    goPrevious();
  };
  return (
    <div className="flex items-center">
      {pageNo > 1 && <Button onClick={prevHandler}>Go Back</Button>}
      {pageNo === 4 ? (
        <Button
          className="ml-auto"
          variant="secondary"
          onClick={onSubmitHandler}
        >
          Confirm
        </Button>
      ) : (
        <Button variant="primary" className="ml-auto" onClick={nextHandler}>
          Next Step
        </Button>
      )}
    </div>
  );
};

export default FormActions;
