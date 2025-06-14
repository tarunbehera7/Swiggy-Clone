import React from "react";
import { useCart } from '../components/CartContext';
import "../../i.css";

const Order = () => {
  const { cartItems } = useCart();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + (item.price || item.defaultPrice) / 100,
    0
  );

  return (
    <div className="order-page">
      <h1>Order Summary</h1>
      {cartItems.length === 0 ? (
        <p>No items in your order.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> - ₹{(item.price || item.defaultPrice) / 100}
              </li>
            ))}
          </ul>
          <h3>Total: ₹{totalAmount.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Order;