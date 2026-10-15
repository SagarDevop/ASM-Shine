import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const CartWishlistContext = createContext();

export const CartWishlistProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(2); // Pre-seeded with 2 matching Stitch design badge
  const [wishlist, setWishlist] = useState(new Set());
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    api.getCart().then((data) => {
      if (data && typeof data.totalCount === 'number') {
        setCartCount(data.totalCount);
      }
    });
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2500);
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(productId)) {
        next.delete(productId);
        showToast('Removed from wishlist');
      } else {
        next.add(productId);
        showToast('Added to wishlist ❤️');
      }
      return next;
    });
  };

  const addToCart = async (productId, quantity = 1) => {
    setCartCount((prev) => prev + quantity);
    showToast('Added to cart 🛒');
    try {
      await api.addToCart(productId, quantity);
    } catch (e) {
      // ignore
    }
  };

  const addComboToCart = async (items = [], customToast = 'Combo bundle added to cart! 🎉') => {
    const totalQty = items.reduce((acc, curr) => acc + (curr.quantity || 1), 0);
    setCartCount((prev) => prev + totalQty);
    showToast(customToast);
    try {
      await api.addComboToCart(items);
    } catch (e) {
      // ignore
    }
  };

  return (
    <CartWishlistContext.Provider
      value={{
        cartCount,
        wishlist,
        toggleWishlist,
        addToCart,
        addComboToCart,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
};

export const useCartWishlist = () => useContext(CartWishlistContext);
