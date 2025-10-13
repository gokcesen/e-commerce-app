const CreditCardForm = () => {
    return (
        <>
        <div className="w-full max-w-[800px] px-8 p-6 bg-white rounded shadow space-y-4 mx-auto">
        <h2 className="text-lg font-semibold text-gray-700">Credit Card Info</h2>
        
        <input
          type="text"
          placeholder="Card Number"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
  
        <input
          type="text"
          placeholder="Cardholder Name"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
  
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="MM/YY"
            className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="CVV"
            className="w-20 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Place Order
        </button>
      </div>
      </>
    );
  };
  
  export default CreditCardForm;
  