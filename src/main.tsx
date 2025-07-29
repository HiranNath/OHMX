// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import { CartProvider } from './context/CartContext'; // ADD THIS IMPORT

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* ADD THE CART PROVIDER HERE */}
      <CartProvider>
        <ScrollToTop />
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);