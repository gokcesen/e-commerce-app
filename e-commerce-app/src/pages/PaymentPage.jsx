import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import Header from "../components/Header";
import PaymentDetails from "../components/payment/PaymentDetails";

const PaymentPage = () => {
    const { cart } = useContext(CartContext); 
    const [searchProduct, setSearchProduct] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("");

    return(
        <>
            <Header  
                cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
                cartItems={cart}
                onSearch={setSearchProduct}
                onCategorySelect={setSelectedCategory}
            />
            <PaymentDetails />
        </>
    );

}

export default PaymentPage;