import Header from "../components/Header";
import Cart from "../components/Cart";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
    const [searchProduct, setSearchProduct] = useState("")
    const { cart } = useContext(CartContext); 

    return(
        <>
            <Header  
                cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
                cartItems={cart}
                onSearch={setSearchProduct}
            />
            <div className="p-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-black mb-8">Your Shopping Cart</h1>
                <Cart />
            </div>
        </>
    );
}

export default CartPage;