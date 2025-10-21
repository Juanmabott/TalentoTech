import React from "react";
import "./Cart.css";
import { useCartContext } from "../context/useCartContext";

export const Cart = () => {
  const { cart, clearCart } = useCartContext();

  if (!cart.length) {
    return (
      <section className="cart">
        <h2>Tu carrito está vacío</h2>
      </section>
    );
  }

  const total = cart.reduce((s, item) => s + item.price * item.quantity, 0);

  return (
    <section className="cart">
      <h2>Carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-left">
              <strong>{item.title}</strong>
              <div className="cart-item-qty">Cantidad: {item.quantity}</div>
            </div>
            <div className="cart-item-right">${(item.price * item.quantity).toFixed(2)}</div>
          </li>
        ))}
      </ul>
      <div className="cart-footer">
        <button onClick={clearCart}>Vaciar carrito</button>

        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
    </section>
  );
};
