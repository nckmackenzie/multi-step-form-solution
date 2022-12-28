import { useContext, useState } from 'react';
import { paginateContext } from './paginate';

const PaginateProvider = ({ children }) => {
  const [pageNo, setPageNo] = useState(1);

  const goNext = () => {
    setPageNo(prev => (prev < 4 ? prev + 1 : 4));
  };

  const goPrevious = () => {
    setPageNo(prev => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <paginateContext.Provider value={{ pageNo, setPageNo, goNext, goPrevious }}>
      {children}
    </paginateContext.Provider>
  );
};

export const usePaginage = () => {
  return useContext(paginateContext);
};

export default PaginateProvider;
