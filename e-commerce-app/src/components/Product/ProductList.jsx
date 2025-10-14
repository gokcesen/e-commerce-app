import ProductCard from "./ProductCard";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Spinner from "../utilities/Spinner";
import { ProductContext } from "../../context/ProductContext";


function ProductList({ searchProduct="", selectedCategory="", isCartOpen }) {
    const search = searchProduct?.toLowerCase() || "";
    const { loading, products } = useContext(ProductContext); 
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const categoryFromQuery = params.get("category")?.toLowerCase();

    const handleClick = (product) => {
        navigate( `/product/${product.id}`, {state: { product }});     
    };

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(search);

       const effectiveCategory = categoryFromQuery || selectedCategory;
       const matchesCategory = effectiveCategory
           ? product.category.toLowerCase() === effectiveCategory
           : true;

        return matchesSearch && matchesCategory;
    });

   

    return(
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div
                    className={`
                        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                        ${isCartOpen ? "lg:grid-cols-3 max-w-4xl" : "lg:grid-cols-4 max-w-7xl"}
                         mt-6 gap-x-40 gap-y-8 w-full place-items-center transition-all duration-300
                    `}
                    >
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
