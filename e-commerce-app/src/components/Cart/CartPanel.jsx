import Cart from "./Cart";
import { useNavigate } from "react-router-dom";


const CartPanel = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 bg-white shadow-lg p-6 overflow-y-auto">
      <Cart />
      <button
        onClick={onClose}
        className="mt-4 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
      >
        Close
      </button>
      <button
        onClick={() => navigate("/cart")}
        className="mt-2 bg-gray-600 text-white px-3 py-2 rounded hover:bg-green-700 transition"
      >
        Go to Cart
      </button>
    </div>
  );
};

export default CartPanel;
