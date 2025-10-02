import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";



function Header({ cartCount = 0, onSearch, cartItems }){
    const [search, setSearch] = useState('');
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleChange = (event) =>
    {
        const value = event.target.value;
        setSearch(value);
        if (onSearch) onSearch(value)
    }

    const toggleCart = () => setIsCartOpen(prev => !prev);

      
    return(
    <>
        <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white px-8 py-5 rounded-md z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold">Quick Store</h1>
                <input
                    type="text"
                    value={search}
                    onChange={handleChange}
                    placeholder="Search..."
                    className="ml-4 px-3 py-1 rounded-md text-gray-900 focus:outline-none"
                />
                <button onClick={toggleCart} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <FaShoppingCart size={20} className="mr-2" />
                    Cart ({cartCount})
                </button>
            </div>
        </nav>

        <div className={`fixed top-16 right-0 h-full w-80 bg-white shadow-lg p-6 transform transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
        <h2 className="text-xl text-black border-b font-bold mb-6">Your Cart</h2>
        {cartItems.length === 0 ? (
            <p className="text-black">Your cart is empty</p>
        ) : (
            cartItems.map(item => (
            <div key={item.id} className="flex items-center mb-5 border-b pb-3">
                <img src={item.images[0]} alt={item.title} className="w-20 h-20 object-cover rounded mr-4" />
                <div className="flex flex-col">
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p className="text-gray-600">Quantity: <span className="font-bold">{item.quantity}</span></p>
                <p className="text-green-600 font-semibold">${item.price * item.quantity}</p>
                </div>
            </div>
            ))
        )}
        <button onClick={toggleCart} className="mt-4 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition">
            Close
        </button>
        </div>

        
        <div className="h-20"></div>

    </>
    );
}

export default Header;





