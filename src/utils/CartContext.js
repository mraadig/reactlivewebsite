// CartContext.js
import React, { createContext, useContext, useState } from 'react';

// Create Context
const CartContext = createContext();

// Custom Hook to use the Cart Context
export const useCart = () => {
  return useContext(CartContext);
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [notification, setNotification] = useState({ show: false, message: '' });

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });

    // Show notification
    setNotification({ show: true, message: `${item.name} added to cart` });
    setTimeout(() => setNotification({ show: false, message: '' }), 2000);
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalPrice = () => {
    return getSubtotal() + deliveryCharge;
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, handleQuantityChange, handleRemoveItem, getSubtotal, getTotalPrice, deliveryCharge, setDeliveryCharge, notification }}>
      {children}
    </CartContext.Provider>
  );
};
