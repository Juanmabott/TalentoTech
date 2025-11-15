import React from "react";
import { useCartContext } from "../context/CartContext/useCartContext";

export const Cart = () => {
  const { cart, clearCart, deleteItem, checkout, total, getTotalItems } = useCartContext();

  if (!cart.length) {
    return (
      <section className="cart container mt-5 text-white">
        <div
          className="alert alert-secondary text-start"
          role="alert"
          style={{ backgroundColor: "#0b1b05a2", borderColor: "#333", color: "#f5f5f5" }}
        >
          <h2 className="mb-0">Tu carrito está vacío</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="cart container mt-2 text-white">
      <h2 className="mb-2">Carrito</h2>

      <ul className="list-group mb-2">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-start bg-transparent text-white"
            style={{ borderColor: "rgba(255,255,255,0.04)" }}
          >
            <div>
              <strong className="d-block">{item.title || item.name}</strong>
              <small className="item-qty text-start w-75" style={{ color: "#f5f5f5" }}>Cantidad: {item.quantity}</small>
            </div>

            <div className="d-flex align-items-center gap-2">
              <div className="fw-bold">${(item.price * item.quantity).toFixed(2)}</div>

              <button
                type="button"
                className="btn btn-sm btn-outline-light"
                onClick={() => deleteItem(item.id)}
                aria-label={`Eliminar ${item.title || item.name}`}
              >
                &minus;
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="row align-items-center text-white">
        <div className="col-md-6 d-flex gap-2">
          <button className="btn btn-secondary" onClick={clearCart}>Vaciar carrito</button>
          <button className="btn btn-warning" onClick={checkout}>Comprar</button>
        </div>
        <div className="col-md-6 text-end mt-3 mt-md-0">
          <div className="mb-1 text-start w-75">Cantidad Total: <strong>{getTotalItems()}</strong></div>
          <div>Total: <strong>${total().toFixed(2)}</strong></div>
        </div>
      </div>
    </section>
  );
};
