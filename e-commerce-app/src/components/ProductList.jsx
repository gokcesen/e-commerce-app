import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";


function ProductList({ searchProduct }) {
    const [products, setProducts] = useState([])

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