import { useForm } from '../../context/FormContext';
import { formatCurrency } from '../../utils/utils';
import Section from '../ui/Section';

const Summary = () => {
  const { selectedPlan, billingType, selectedAddons } = useForm();

  const values = [];
  values.push(formatCurrency(selectedPlan.value));

  return (
    <Section
      title="Finishing up"
      description="Double-check everything looks OK before confirming"
    >
      <div className="w-full rounded-lg h-max">
        <div className="bg-mangolia-gray p-4">
          <div className="flex items-center justify-between text-marine-blue font-medium mb-1">
            <h5 className="">{`${selectedPlan?.name}/${billingType}`}</h5>
            <span className="">{selectedPlan?.value}</span>
          </div>
          <div className="text-primary-gray underline cursor-pointer text-sm mb-4">
            Change
          </div>
          <hr />
          {selectedAddons.length > 0 &&
            selectedAddons.map(addon => {
              values.push(formatCurrency(addon.value));
              return (
                <div
                  className="flex items-center justify-between my-4"
                  key={addon.name}
                >
                  <div className="text-sm text-primary-gray">{addon.name}</div>
                  <div className="text-sm text-marine-blue">{addon.value}</div>
                </div>
              );
            })}
        </div>
        <div className="p-4 flex items-center justify-between">
          <div className="text-primary-gray">{`Total(per) ${
            billingType === 'monthly' ? 'month' : 'year'
          }`}</div>
          <div className="text-lg text-purplish-blue font-bold">{`$${values.reduce(
            (acc, cur) => acc + cur,
            0
          )}/${billingType === 'monthly' ? 'mo' : 'yr'}`}</div>
        </div>
      </div>
    </Section>
  );
};

export default Summary;
