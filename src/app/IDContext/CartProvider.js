'use client'
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);


    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (id) => {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
        setCartItems(updatedCartItems);
    };


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
