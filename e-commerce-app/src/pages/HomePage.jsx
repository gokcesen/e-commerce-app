import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { useState } from "react";


function HomePage() {
    const [searchProduct, setSearchProduct] = useState("")
    const [cartItems, setCartItems] = useState([])

    const handleAddToCart = (product) => {
        setCartItems(prevItems => {
            const foundIndex = prevItems.findIndex(item => item.id === product.id);
            if (foundIndex !== -1) {
            const updatedItems = [...prevItems];
            updatedItems[foundIndex] = {
                ...updatedItems[foundIndex],
                quantity: updatedItems[foundIndex].quantity + 1
            };
            return updatedItems;
            } else {
            return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };


    const totalCount = cartItems.reduce((total,item) => total +item.quantity, 0)
    
    return (
        <>
            <Header cartCount={totalCount}  onSearch={setSearchProduct} cartItems={cartItems}/>
            <ProductList searchProduct={searchProduct} onAddToCart={handleAddToCart} />
        </>
    )
}

export default HomePage