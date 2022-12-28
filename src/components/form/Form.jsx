import { useForm } from '../../context/FormContext';
import { usePaginage } from '../../context/PaginateProvider';
import Addons from './Addons';
import FinalPage from './FinalPage';
import FormActions from './FormActions';
import PersonalInfo from './PersonalInfo';
import PlanSelection from './PlanSelection';
import Summary from './Summary';

const Form = () => {
  const { formSubmitted } = useForm();
  const { pageNo } = usePaginage();
  return (
    <form className="flex flex-col h-full justify-between">
      <div className="flex justify-center mt-6 h-full">
        {pageNo === 1 && <PersonalInfo />}
        {pageNo === 2 && <PlanSelection />}
        {pageNo === 3 && <Addons />}
        {pageNo === 4 && !formSubmitted && <Summary />}
        {pageNo === 4 && formSubmitted && <FinalPage />}
      </div>
      {!formSubmitted && <FormActions />}
    </form>
  );
};

export default Form;
