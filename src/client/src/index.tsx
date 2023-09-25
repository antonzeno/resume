import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { SnackbarProvider } from './contexts/SnackbarContext';
import { UserProvider } from './contexts/UserContext';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement || document.createElement('div'));
root.render(
  <BrowserRouter>
    <SnackbarProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </SnackbarProvider>
  </BrowserRouter>
);
