import { useState, useEffect } from "react";
import axios from "axios";
import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const cached = localStorage.getItem("products");

            if (cached) {
                setProducts(JSON.parse(cached));
                setLoading(false);
            } else {
                try {
                    const response = await axios.get("https://dummyjson.com/products");

                    const fetchedProducts = response.data.products;
                    setProducts(fetchedProducts);

                    localStorage.setItem("products", JSON.stringify(fetchedProducts));
                } catch (error) {
                    console.error("Failed to fetch products:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, loading }}>
            {children}
        </ProductContext.Provider>
    );
};

