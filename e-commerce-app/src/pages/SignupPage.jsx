import Header from "../components/Header";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import SignUpForm from "../components/forms/SignUpForm";
import Footer from "../components/Footer";

function SignupPage() {
    const { cart } = useContext(CartContext); 

   
    return (
        <>
            <Header  
                cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
                cartItems={cart}
                onSearch=""
                onCategorySelect=""
            />
            <SignUpForm />
            <Footer />
        </>
    );
}

export default SignupPage;
