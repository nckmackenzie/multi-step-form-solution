import MobileHeader from './components/MobileHeader';
import Card from './components/ui/Card';
import { usePaginage } from './context/PaginateProvider';
import useMediaQuery from './hooks/use-media-query';

function App() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const { pageNo } = usePaginage();

  return (
    <div className="App font-ubuntu w-full h-screen bg-mangolia-gray">
      {!isDesktop && <MobileHeader />}
      <Card />
    </div>
  );
}

export default App;
