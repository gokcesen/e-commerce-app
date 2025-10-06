import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import QuantityCounter from "./QuantityCounter";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  if (cart.length === 0) {
    return <p className="text-black">Your cart is empty</p>;
  }

  return (
    <>
      <h2 className="text-xl text-black border-b font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-black">Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="flex items-center mb-5 border-b pb-3">
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-20 h-20 object-cover rounded mr-4"
            />
            <div className="flex flex-col flex-grow justify-between h-full">
              <p className="font-semibold text-gray-800">{item.title}</p>
              <div className="mt-1 flex justify-center">
                <QuantityCounter
                  quantity={item.quantity}
                  onIncrement={() =>
                    updateQuantity(item.id, item.quantity + 1)
                  }
                  onDecrement={() =>
                    item.quantity > 1
                      ? updateQuantity(item.id, item.quantity - 1)
                      : removeFromCart(item.id)
                  }
                />
              </div>
              <p className="text-green-600 font-semibold">
                ${item.price * item.quantity}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 px-3 py-1 bg-gray-500 text-white rounded hover:bg-red-600"
            >
              <FaTrash className="mr-0.5" />
            </button>
          </div>
        ))
      )}
    
    </> 
  );
};

export default Cart;
