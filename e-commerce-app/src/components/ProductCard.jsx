import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
    const { addToCart } = useContext(CartContext);
    return(
        <>
            <div className="card border-1 box-shadow-5 bg-white shadow-md rounded-lg overflow-hidden w-72">
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="card-title text-xl font-semibold text-gray-800 mb-2">
                        {product.title}
                    </h2>
                    <p className="card-text text-gray-600 text-sm mb-4">
                    {product.description}
                    </p>
                   <span className="text-lg font-bold text-green-600 block mb-3">
                        ${product.price}
                    </span>
                    <button onClick={() => addToCart(product)} className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition duration-200">
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
  );
};

export default ProductCard;


