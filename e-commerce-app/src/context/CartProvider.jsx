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


    return(
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );


}