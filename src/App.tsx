import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/Home/Home';
import Invite from './pages/Invite/Invite';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invite/:id" element={<Invite />} />
        </Routes>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
