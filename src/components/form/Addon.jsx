import { useForm } from '../../context/FormContext';
const Addon = ({ name, monthly, yearly, description }) => {
  const { billingType, setAddOn, selectedAddons } = useForm();
  const value = billingType === 'monthly' ? monthly : yearly;
  const entered = selectedAddons.filter(add => add.name === name).length > 0;

  const checkedHandler = e => {
    setAddOn({ name: e.target.id, value: value });
  };
  return (
    <div
      className={`addon-card ${
        entered
          ? 'border border-solid border-marine-blue'
          : 'border border-solid border-light-gray'
      }`}
    >
      <input
        type="checkbox"
        name={name}
        id={name}
        className="accent-purplish-blue"
        onChange={checkedHandler}
        checked={entered}
      />
      <div className="flex flex-col">
        <p className="font-medium text-marine-blue">{name}</p>
        <span className="text-primary-gray text-sm">{description}</span>
      </div>
      <div className="text-purplish-blue ml-auto">{value}</div>
    </div>
  );
};

export default Addon;
