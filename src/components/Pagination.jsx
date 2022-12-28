import Paginate from './Paginate';

const values = [
  { no: 1, title: 'Step 1', description: 'your info' },
  { no: 2, title: 'Step 2', description: 'select plan' },
  { no: 3, title: 'Step 3', description: 'add-ons' },
  { no: 4, title: 'Step 4', description: 'summary' },
];

const Pagination = () => {
  return (
    <div className="flex flex-row md:flex-col gap-6 md:m-12">
      {values.map(value => (
        <Paginate key={value.no} {...value} />
      ))}
    </div>
  );
};

export default Pagination;
