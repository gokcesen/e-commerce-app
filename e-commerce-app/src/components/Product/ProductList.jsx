import ProductCard from "./ProductCard";
import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Spinner from "../utilities/Spinner";
import { ProductContext } from "../../context/ProductContext";

const ProductList = ({ searchProduct = "", selectedCategory = "", isCartOpen }) => {
  const search = searchProduct?.toLowerCase() || "";
  const { loading, products } = useContext(ProductContext);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryFromQuery = params.get("category")?.toLowerCase();
  const [sortOption, setSortOption] = useState("default");

  const handleClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search);

    const effectiveCategory = categoryFromQuery || selectedCategory;
    const matchesCategory = effectiveCategory
      ? product.category.toLowerCase() === effectiveCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.title.localeCompare(b.title);
      case "name-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div
          className={`
            w-full ${isCartOpen ? "max-w-4xl" : "max-w-7xl"}
            mx-auto px-4
          `}
        >
          <div className="flex justify-end mb-4">
            <label className="mr-2 font-medium text-gray-700">Sort by:</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 text-sm"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A-Z</option>
              <option value="name-desc">Name: Z-A</option>
            </select>
          </div>

          <div
            className={`
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
              ${isCartOpen ? "lg:grid-cols-3" : "lg:grid-cols-4"}
              mt-6 gap-x-40 gap-y-8 w-full place-items-center transition-all duration-300
            `}
          >
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleClick(product)}
                />
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-500">
                Product not found...
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ProductList;
