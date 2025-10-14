import Header from "../components/Header";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function LoginPage() {
    const { cart } = useContext(CartContext); 

   
    return (
        <>
            <Header  
                cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
                cartItems={cart}
                onSearch=""
                onCategorySelect=""
            />

        </>
    );
}

export default LoginPage;
