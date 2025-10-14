import Header from "../components/Header";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import About from "../components/About";

function HomePage() {
    const [searchProduct, setSearchProduct] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("");
    const { cart } = useContext(CartContext); 

   
    return (
        <>
            <Header  
                cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
                cartItems={cart}
                onSearch={setSearchProduct}
                onCategorySelect={setSelectedCategory}
            />

            <About />
            
        </>
    );
}

export default HomePage;