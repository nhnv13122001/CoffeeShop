import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { DataBaseProvider } from './context/DatabaseProvider';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <DataBaseProvider>
        <App />
      </DataBaseProvider>
    </AuthProvider>
  </BrowserRouter>
);

