import React from 'react';
import { CartWishlistProvider } from './context/CartWishlistContext';
import { HomePage } from './pages/HomePage';
import './styles/global.css';
import './styles/responsive.css';

export function App() {
  return (
    <CartWishlistProvider>
      <HomePage />
    </CartWishlistProvider>
  );
}

export default App;
