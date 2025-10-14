import Header from "../components/Header";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import LoginForm from "../components/forms/LoginForm";
import Footer from "../components/Footer";

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
            <LoginForm />
            <Footer />
        </>
    );
}

export default LoginPage;
