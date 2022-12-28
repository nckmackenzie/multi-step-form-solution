import icon from '../../assets/icon-thank-you.svg';

const FinalPage = () => {
  return (
    <div className="self-center flex flex-col items-center ">
      <img
        src={icon}
        alt="thank you"
        className="w-12 h-12 md:w-16 md:h-16 mb-6"
      />
      <div className="text-marine-blue text-xl md:text-3xl mb-4">Thank you</div>
      <p className="text-base text-primary-gray w-full md:w-3/4">
        {' '}
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default FinalPage;
