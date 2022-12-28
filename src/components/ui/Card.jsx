import FormProvider from '../../context/FormContext';
import Form from '../form/Form';
import Pagination from '../Pagination';

const Card = () => {
  return (
    <div className="max-w-5xl w-11/12 absolute left-0 right-0 top-[20%] md:relative md:w-full mx-auto bg-white rounded-xl shadow-md h-[60vh] p-4 flex gap-4">
      <div className="hidden md:inline-flex bg-desktop bg-no-repeat bg-cover h-full w-4/12 rounded-xl">
        <Pagination />
      </div>
      <div className="flex-grow">
        <FormProvider>
          <Form />
        </FormProvider>
      </div>
    </div>
  );
};

export default Card;
