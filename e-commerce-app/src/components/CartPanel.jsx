import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import QuantityCounter from "./QuantityCounter";

const CartPanel = ({ cartItems, onClose }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="fixed top-16 right-0 h-full w-80 bg-white shadow-lg p-6">
      <h2 className="text-xl text-black border-b font-bold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-black">Your cart is empty</p>
      ) : (
        cartItems.map(item => (
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
      <button
        onClick={onClose}
        className="mt-4 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
      >
        Close
      </button>
    </div>
  );
};

export default CartPanel;
