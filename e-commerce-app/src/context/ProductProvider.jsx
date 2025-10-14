import { useState, useEffect } from "react";
import axios from "axios";
import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


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

    return (
        <ProductContext.Provider value={{ products, loading }}>
            {children}
        </ProductContext.Provider>
    );
};
