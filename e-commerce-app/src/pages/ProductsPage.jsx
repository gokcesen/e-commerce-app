import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";




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

            <ProductList searchProduct={searchProduct} selectedCategory={selectedCategory} />
        </>
    )
}

export default HomePage