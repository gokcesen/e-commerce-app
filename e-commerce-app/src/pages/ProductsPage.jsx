import Header from "../components/Header"
import ProductList from "../components/Product/ProductList"
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Footer from "../components/Footer";




function ProductsPage() {
    const [searchProduct, setSearchProduct] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("");
    const { cart, isCartOpen } = useContext(CartContext); 

   
    return (
        <>
            <Header  
                cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
                cartItems={cart}
                onSearch={setSearchProduct}
                onCategorySelect={setSelectedCategory}
            />

            <main className="pb-20"> 
                <ProductList searchProduct={searchProduct} selectedCategory={selectedCategory} isCartOpen={isCartOpen} />
            </main>
            <Footer />
        </>
    )
}

export default ProductsPage;
