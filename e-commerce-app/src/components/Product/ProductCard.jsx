import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import QuantityCounter from "../utilities/QuantityCounter";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function ProductCard({ product, onClick }) {
    const { cart, addToCart, updateQuantity } = useContext(CartContext);
    const [isFavorite, setIsFavorite] = useState(false);


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

    const handleFavorite = (e) => {
        e.stopPropagation()
        setIsFavorite(!isFavorite);
    };
    return(
        <>
            <div onClick={onClick} className="relative card box-shadow-2 bg-cream shadow-sm rounded-lg overflow-hidden w-80 flex flex-col">
                <div className="absolute top-2 right-2 z-10" onClick={handleFavorite}>
                    {isFavorite ? (
                    <FaHeart className="text-gray-700 text-2xl" />
                    ) : (
                    <FaRegHeart className="text-gray-400 text-2xl hover:text-gray-700 transition-colors duration-200" />
                    )}
                </div>
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-72 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                    <h2 className="card-title text-left text-sm font-sans font-bold text-gray-800 mb-2">
                        {product.title}
                    </h2>
                    <p className="card-text text-gray-600 text-xs font-sans text-left mb-4 flex-grow">
                        {product.description.length > 100 
                         ? product.description.slice(0, 100) + '...' 
                         : product.description}
                    </p>
                   <span className="text-lg text-left font-bold text-gray-600 block mb-3 font-sans">
                        ${product.price}
                    </span>
                    <div className="w-full flex justify-center mt-auto">
                      {count === 0 ? (
                        <button
                            onClick={handleAddToCart}
                            className="bg-sky-500 hover:bg-sky-700 text-white w-sm py-2 rounded-xl transition duration-200 font-sans"
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
