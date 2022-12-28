const Switch = ({ billingType, selectBillingType }) => {
  const switchBillingHandler = () => {
    const billingTypeReverse = billingType === 'monthly' ? 'yearly' : 'monthly';
    selectBillingType(billingTypeReverse);
  };

  return (
    <div
      className="bg-marine-blue rounded-full w-14 p-1 flex cursor-pointer"
      onClick={switchBillingHandler}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full transition-all ${
          billingType === 'monthly' ? 'mr-auto' : 'ml-auto'
        }`}
      ></div>
    </div>
  );
};

export default Switch;
