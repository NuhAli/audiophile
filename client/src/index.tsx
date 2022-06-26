import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const app = document.getElementById('root')

const root = ReactDOM.createRoot((app) as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);