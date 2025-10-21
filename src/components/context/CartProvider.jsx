import React, { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const exists = (id) => {
        return cart.some(item => item.id === id);
    };

    const deleteItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }
    const clearCart = () => {
        setCart([]);
    }

    const addItem = (item, quantity) => {
        if (exists(item.id)) {
            const index = cart.findIndex(product => product.id === item.id);
            const newCart = [...cart];
            newCart[index] = { ...newCart[index], quantity: newCart[index].quantity + quantity };
            setCart(newCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };
    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    const values = {
        cart,
        setCart,
        addItem,
        clearCart,
        getTotalItems,
        deleteItem
    };

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};