function ProductCard({ title, image, description, price, onAddToCart }) {
    return(
        <>
            <div className="card border-1 box-shadow-5 bg-white shadow-md rounded-lg overflow-hidden w-72">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="card-title text-xl font-semibold text-gray-800 mb-2">
                        {title}
                    </h2>
                    <p className="card-text text-gray-600 text-sm mb-4">
                    {description}
                    </p>
                   <span className="text-lg font-bold text-green-600 block mb-3">
                        ${price}
                    </span>
                    <button onClick={onAddToCart} className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition duration-200">
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
  );
};

export default ProductCard;


