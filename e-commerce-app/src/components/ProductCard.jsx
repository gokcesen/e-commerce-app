import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import QuantityCounter from "./QuantityCounter";

function ProductCard({ product, onClick }) {
    const { cart, addToCart, updateQuantity } = useContext(CartContext);

    const cartItem = cart.find(item => item.id === product.id);
    const count = cartItem ? cartItem.quantity : 0;
    

    const increment = (e) => {
        e.stopPropagation();
        updateQuantity(product.id, count + 1);
    };

    const decrement = (e) => {
        e.stopPropagation();
        updateQuantity(product.id, count - 1);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation(); 
        addToCart(product);
      };

    return(
        <>
            <div onClick={onClick} className="card border-1 box-shadow-5 bg-white shadow-md rounded-lg overflow-hidden w-72">
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
                    <div className="w-full flex justify-center">
                      {count === 0 ? (
                        <button
                            onClick={handleAddToCart}
                            className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition duration-200"
                        >
                            Add to Cart
                        </button>
                        ) : (
                        <QuantityCounter
                            quantity={count}
                            onIncrement={increment}
                            onDecrement={decrement}
                        />
                        )}
                    </div>
                </div>    
            </div>
        </>
  );
};

export default ProductCard;
