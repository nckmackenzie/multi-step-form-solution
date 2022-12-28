import { createContext } from 'react';

export const paginateContext = createContext({
  pageNo: 1,
  goNext: () => {},
  goPrevious: () => {},
});
