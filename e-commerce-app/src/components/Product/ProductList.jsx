import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../utilities/Spinner";


function ProductList({ searchProduct="", selectedCategory="" }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const search = searchProduct?.toLowerCase() || "";
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products");
            setProducts(response.data.products)
            if (!response.ok) throw new Error("Failed to load products");
        } catch(error) {
            console.error(error);
        } finally {
            setLoading(false);
          }
        };
        fetchProducts()
    }, []);

    const handleClick = (product) => {
        navigate( `/product/${product.id}`, {state: { product }});     
    };

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(search);
        const matchesCategory = selectedCategory
          ? product.category.toLowerCase() === selectedCategory.toLocaleLowerCase()
          : true;
        return matchesSearch && matchesCategory;
      });
        console.log(filteredProducts)

    return(
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onClick={() => handleClick(product)}
                    />
                    ))
                ) : (
                    <p className="col-span-3 text-center text-gray-500">Product not found...</p>
                )}
                </div>
             )}
        </>
    )
}

export default ProductList;
