import { usePaginage } from '../context/PaginateProvider';
const Paginate = ({ no, title, description }) => {
  const { pageNo } = usePaginage();
  return (
    <div className="flex gap-4 items-center">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          pageNo === no
            ? 'bg-light-blue text-marine-blue'
            : 'border border-solid border-white text-white'
        }`}
      >
        {no}
      </div>
      <div className="hidden md:flex flex-col">
        <span className="inline-flex text-light-gray text-xs uppercase">
          {title}
        </span>
        <p className="text-mangolia-gray font-medium text-sm uppercase">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Paginate;
