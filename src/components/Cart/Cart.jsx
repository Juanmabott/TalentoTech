import React from "react";
import "./Cart.css";
import { useCartContext } from "../context/CartContext/useCartContext";

export const Cart = () => {
  const { cart, clearCart, deleteItem, checkout,total , getTotalItems} = useCartContext();

  if (!cart.length) {
    return (
      <section className="cart">
        <h2>Tu carrito está vacío</h2>
      </section>
    );
  }

  return (
    <section className="cart">
      <h2>Carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-left">
              <strong>{item.title}</strong>
              <div className="cart-item-qty">Cantidad: {item.quantity}</div>
              <div className="btn btn-minus" onClick={() => deleteItem(item.id)}>- </div>
            </div>
            <div className="cart-item-right">${(item.price * item.quantity).toFixed(2)}</div>
          </li>
        ))}
      </ul>
      <div className="cart-footer">
        <button onClick={clearCart}>Vaciar carrito</button>
        <button className="btn btn-primary" onClick={checkout}>Comprar</button>
        <strong>Cantidad: {getTotalItems()}</strong>
        <strong>Total: ${total().toFixed(2)}</strong>
      </div>
    </section>
  );
};
