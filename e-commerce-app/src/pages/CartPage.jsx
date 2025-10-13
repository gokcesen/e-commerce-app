import Header from "../components/Header";
import Cart from "../components/cart/Cart";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
    const [searchProduct, setSearchProduct] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("");
    const { cart } = useContext(CartContext); 

    return(
        <>
            <Header  
                cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
                cartItems={cart}
                onSearch={setSearchProduct}
                onCategorySelect={setSelectedCategory}
            />
            <div className="p-8 max-w-4xl mx-auto">
                <Cart />
            </div>
        </>
    );
}

export default CartPage;