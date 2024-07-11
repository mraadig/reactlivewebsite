// Cart.js
import React from 'react';
import { useCart } from '../utils/CartContext';

const Cart = () => {
  const { cartItems, handleQuantityChange, handleRemoveItem, getSubtotal, getTotalPrice, deliveryCharge } = useCart();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  />
                </td>
                <td>₹{item.price * item.quantity}</td>
                <td>
                  <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="total-price">
        <h4>Subtotal: ₹{getSubtotal()}</h4>
        <h4>Delivery Fee: ₹{deliveryCharge}</h4>
        <h4>Total Price: ₹{getTotalPrice()}</h4>
      </div>
    </div>
  );
};

export default Cart;
