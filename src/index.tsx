import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './assets/stylesheets/font.module.scss'
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
