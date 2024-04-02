import { QueryClient, QueryClientProvider } from 'react-query';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/Home/Home';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}


export default App;