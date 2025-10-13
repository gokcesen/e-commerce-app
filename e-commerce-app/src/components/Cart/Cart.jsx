import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import QuantityCounter from "../utilities/QuantityCounter";
import { useNavigate } from "react-router-dom";

const Cart = () => {
const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
const navigate = useNavigate();

const handleClick = (product) => {
    navigate( `/product/${product.id}`, {state: { product }});     
};


  return (
    <>
      <h2 className="text-2xl text-black border-b border-black font-bold mb-16">Your Cart</h2>
      {cart.length === 0 ? (
        <>
          <p className="text-black">Your cart is empty</p>
          <img
            src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
            className="w-12 h-12 mx-auto my-4 block"
            alt="Empty cart"
          />
        </>
      ) : (
        cart.map(item => (
          <div key={item.id} 
          className="flex items-center mb-5 border-b border-gray-400 pb-3"
          onClick={() => handleClick(item)} >
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
                  onIncrement={(e) => {
                    e.stopPropagation();
                    updateQuantity(item.id, item.quantity + 1)
                  }}
                  onDecrement={(e) => {
                    e.stopPropagation();
                    if (item.quantity > 1) {
                      updateQuantity(item.id, item.quantity - 1);
                    } else {
                      removeFromCart(item.id);
                    }
                  }}
                />
              </div>
              <p className="text-green-600 font-semibold">
                ${item.price * item.quantity}
              </p>
            </div>
            <button
              onClick={(e) =>{ 
                e.stopPropagation();
                removeFromCart(item.id)}}
              className="ml-4 px-3 py-1 bg-gray-500 text-white rounded hover:bg-red-600"
            >
              <FaTrash className="mr-0.5" />
            </button>
        </div>
        ))
      )}
      <button 
        className="bg-sky-500 hover:bg-sky-700 ..."
        onClick={() => navigate('/cart/payment')}>
        Proceed to payment</button>
    
    </> 
  );
};

export default Cart;
