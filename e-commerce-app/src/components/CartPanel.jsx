import Cart from "./Cart";

const CartPanel = ({ onClose }) => {
  return (
    <div className="fixed top-16 right-0 h-full w-80 bg-white shadow-lg p-6">
      <Cart />
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
