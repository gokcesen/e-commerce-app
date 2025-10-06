import { useState, useContext } from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import CartPanel from "./CartPanel";

function Header({ cartCount = 0, onSearch }){
    const [search, setSearch] = useState('');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cart } = useContext(CartContext);
   
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
        
        {isCartOpen && <CartPanel cartItems={cart} onClose={() => setIsCartOpen(false)}/>}

        <div className="h-20"></div>

    </>
    );
}

export default Header;
