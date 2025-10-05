import { useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }){
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart((prev) => {
            const exist = prev.find(i => i.id === item.id);
            if (exist) {
            return prev.map(i =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            );
            } else {
            return [...prev, { ...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter(i => i.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            removeFromCart(id);
        } else {
            setCart((prev) =>
                prev.map(i =>
                    i.id === id ? { ...i, quantity } : i
                )
            );
        }
    };


    return(
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );


}