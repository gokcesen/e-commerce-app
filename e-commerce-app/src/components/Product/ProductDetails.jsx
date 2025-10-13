import QuantityCounter from "../utilities/QuantityCounter";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import AccordionPanel from "../utilities/DisclosureItem";
import DisclosureItem from "../utilities/DisclosureItem";


const ProductDetails = ({ product }) => {
    const { cart, addToCart, removeFromCart, updateQuantity } = useContext(CartContext);

    const cartItem = cart.find(item => item.id === product.id);
    console.log(cartItem)
    if (!product) return <p className="text-red-500">Product not found.</p>;

    return(
        <>
            <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 border border-gray-400 rounded shadow gap-10">
                <div className="bg-gray-200">
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-auto rounded mb-6"
                    />
                </div>
                <div className="flex flex-col justify-start mt-12">
                    <div>
                        <h1 className="text-3xl text-gray-800 text-left font-bold border-b border-gray-400 mb-4 pb-4 font-sans">{product.title}</h1>
                        <p className="text-left text-gray-700 leading-relaxed text-base mb-4 pb-6 font-sans">
                        {product.description}
                        </p>
                        <div className="flex items-center justify-start gap-x-64">
                            <p className="text-2xl font-semibold text-orange-600 font-sans">
                                ${product.price}
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
                        <div className="max-w-md mx-auto mt-10 rounded-sm overflow-hidden">
                            <DisclosureItem title="Product Details">
                                <p>Brand: {product.brand}</p>
                            </DisclosureItem>
                            <DisclosureItem title="Size" isLast={true}>
                                <p>Size: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth}</p>
                                <p>Weight: {product.weight} g</p>
                            </DisclosureItem>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
