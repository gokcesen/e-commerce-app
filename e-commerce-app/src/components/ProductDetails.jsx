import QuantityCounter from "./QuantityCounter";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const ProductDetails = ({ product }) => {
    const { cart, addToCart, removeFromCart, updateQuantity } = useContext(CartContext);

    const cartItem = cart.find(item => item.id === product.id);
    console.log(cartItem)
    if (!product) return <p className="text-red-500">Product not found.</p>;

    return(
        <>
            <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-auto rounded mb-6"
                    />
                </div>
                <div className="flex flex-col justify-start mt-12">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
                        <p className="text-2xl font-semibold text-blue-600 mb-4">
                        ${product.price}
                        </p>
                        <p className="text-gray-700 leading-relaxed text-base mb-4">
                        {product.description}
                        </p>
                        <QuantityCounter
                            quantity={cartItem ? cartItem.quantity : 1}
                            onIncrement={() =>
                                cartItem
                                ? updateQuantity(cartItem.id, cartItem.quantity + 1)
                                : addToCart(product)
                            }
                            onDecrement={() =>
                                cartItem && cartItem.quantity > 1
                                ? updateQuantity(cartItem.id, cartItem.quantity - 1)
                                : removeFromCart(cartItem?.id)
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );

}

export default ProductDetails;
