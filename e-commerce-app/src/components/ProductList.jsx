import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ProductList({ searchProduct }) {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products")
            setProducts(response.data.products)

        } catch(error) {
            console.error(error)
        }
        }
        fetchProducts()
    }, [])

    const handleClick = (product) => {
        navigate({
            pathname: `/product/${product.id}`,
            state: { product },
        });     
    };



    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchProduct.toLowerCase())
    );
    console.log(filteredProducts)

    return(
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {products.length > 0 ? (
                products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => handleClick(product)}
                />
                ))
            ) : (
                <p className="col-span-3 text-center text-gray-500">Loading...</p>
            )}
            </div>
        </>
    )
}

export default ProductList