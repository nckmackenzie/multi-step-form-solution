import { useForm } from '../context/FormContext';

const Plan = ({ name, monthly, yearly, icon }) => {
  const { billingType, selectPlan, selectedPlan } = useForm();
  const value = billingType === 'monthly' ? monthly : yearly;
  const planSelectHandler = () => {
    selectPlan({ name, value });
  };
  return (
    <div
      className={`plan-card ${
        selectedPlan?.name === name
          ? 'border border-solid border-marine-blue ring-offset-2 ring-2'
          : 'border border-solid border-light-gray'
      }`}
      onClick={planSelectHandler}
    >
      <img src={icon} alt="arcarde plan" className="w-8 h-8" />
      <div>
        <p className="text-marine-blue font-medium text-sm">{name}</p>
        <span className="text-primary-gray text-sm">{value}</span>
      </div>
    </div>
  );
};

export default Plan;
