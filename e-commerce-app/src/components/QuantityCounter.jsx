const QuantityCounter = ({ quantity, onIncrement, onDecrement }) => {
    return(
        <div className="flex items-center gap-3">
            <button
                onClick={onDecrement}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg"
            >
                -
            </button>
            <span className="text-black font-medium text-md">{quantity}</span>
            <button
                onClick={onIncrement}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg"
            >
                +
            </button>
        </div>
    );
};

export default QuantityCounter;