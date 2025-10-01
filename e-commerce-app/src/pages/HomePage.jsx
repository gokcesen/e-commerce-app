import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { useState } from "react";


function HomePage() {
    const [cartCount, setCartCount] = useState(0);
    const [searchProduct, setSearchProduct] = useState("")

     const handleAddToCart = () => {
        setCartCount(prev => prev + 1);
    };
    
    return (
        <>
            <Header cartCount={cartCount}  onSearch={setSearchProduct} />
            <ProductList searchProduct={searchProduct} onAddToCart={handleAddToCart} />
        </>
    )
}

export default HomePage