import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";
import { useParams } from 'react-router-dom';
import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";



const ProductPage = () => {
    const { id } = useParams();
    const { products } = useContext(ProductContext)
    const [searchProduct, setSearchProduct] = useState("")
    const { cart } = useContext(CartContext); 

    const product = products.find(p => p.id === Number(id));

    if (!product) return <p className="text-red-500">Product not found.</p>;

    return(
        <>
            <Header  
                cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
                cartItems={cart}
                onSearch={setSearchProduct}
            />
            <ProductDetails product={product}/>
        </>
    );
}

export default ProductPage;
