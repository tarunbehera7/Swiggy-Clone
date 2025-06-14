// import { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   const value = {
//     cartItems,
//     addToCart,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// export const useCart = () => useContext(CartContext);







import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart from localStorage on first load
    useEffect(() => {
        const storedCart = localStorage.getItem("cartItems");
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    //   const addToCart = (item) => {
    //     setCartItems([...cartItems, item]);
    //   };
    /////
    //   const removeFromCart = (item) => {
    //     const updatedCart = cartItems.filter((i) => i.id !== item.id);
    //     setCartItems(updatedCart);
    //   };
    /////
    const addToCart = (item) => {
        setCartItems((prevCart) => {
            const existingItem = prevCart.find((i) => i.id === item.id);

            if (existingItem) {
                return prevCart.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (item) => {
        setCartItems((prevCart) => {
            return prevCart.map((i) => {
                if (i.id === item.id) {
                    return {
                        ...i,
                        quantity: i.quantity > 0 ? i.quantity - 1 : 0,
                    };
                }
                return i;
            });
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
