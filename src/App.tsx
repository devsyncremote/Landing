import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/Home/Home';
import Invite from './pages/Invite/Invite';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from './components/NotFound/NotFound';
import { Terms } from './pages/Terms/Terms';

const queryClient = new QueryClient();

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invite/:id" element={<Invite />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/terms/:type"  element={<Terms/>} />
        </Routes>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
