import Plan from '../Plan';
import Section from '../ui/Section';
import { plans } from '../../data/data';
import Switch from '../ui/Switch';
import { useForm } from '../../context/FormContext';

const PlanSelection = () => {
  const { selectBillingType, billingType } = useForm();
  return (
    <Section
      title="Select your plan"
      description="You have the option of monthly or yearly billing"
    >
      <div className="flex gap-4 flex-col md:flex-row mb-6 :md-mb-8">
        {plans &&
          plans.length > 0 &&
          plans.map(plan => <Plan key={plan.name} {...plan} />)}
      </div>
      <div className="w-full bg-mangolia-gray h-12 rounded-lg flex items-center justify-center gap-6 text-sm">
        <span
          className={
            billingType === 'monthly' ? 'text-marine-blue' : 'text-primary-gray'
          }
        >
          Monthly
        </span>
        <Switch
          billingType={billingType}
          selectBillingType={selectBillingType}
        />
        <span
          className={
            billingType === 'yearly' ? 'text-marine-blue' : 'text-primary-gray'
          }
        >
          Yearly
        </span>
      </div>
    </Section>
  );
};

export default PlanSelection;
