import { useState, useContext } from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import CartPanel from "./cart/CartPanel";
import { useNavigate } from "react-router-dom";

function Header({ cartCount = 0, onSearch, onCategorySelect }){
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const navLinks = [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Products", to: "/products" },
        { label: "Cart", to: "/cart" }
      ];
   
    const handleChange = (event) =>
    {
        const value = event.target.value.toLowerCase();
        setSearch(value);
        if (onSearch) onSearch(value)
    }

    const toggleCart = () => setIsCartOpen(prev => !prev);

    function handleFilterChange(event) {
        const value = event.target.value;
        setSelectedCategory(value);
        if (onCategorySelect) onCategorySelect(value);

    }

    return(
    <>
        <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white py-2 gap-x-60">
            <div className=" mx-8 flex items-center justify-between">
                <div className="flex items-center justify-start space-x-24">
                    <div className="flex items-center gap-x-4">
                        <img
                            src="https://www.iconpacks.net/icons/2/free-online-store-icon-2019-thumb.png"
                            className="h-12 object-contain p-0 m-0"
                        />
                        <h1 onClick={() => navigate("/")} className="text-2xl font-bold font-sans">Quick Store</h1>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <ul className="flex space-x-4 font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-300 hover:text-gray-900 font-sans">

                            {navLinks.map(link => (
                                <li
                                key={link.to}
                                className="cursor-pointer hover:underline"
                                onClick={() => navigate(link.to)}
                                >
                                {link.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div className="flex items-center gap-x-12 ">
                    <select 
                        className="bg-gray-200 border border-gray-300 text-gray-700 text-sm font-sans rounded-md shadow-sm 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                        px-8 py-2 transition duration-200 ease-in-out"
                        value={selectedCategory} 
                        onChange={handleFilterChange}
                    >
                        <option value="">All Categories</option>
                        <option value="beauty">Beauty</option>
                        <option value="fragrances">Fragrances</option>
                        <option value="furniture">Furniture</option>
                        <option value="groceries">Groceries</option>
                    </select>
                    <input
                        type="text"
                        value={search}
                        onChange={handleChange}
                        placeholder="Search..."
                        className="ml-2 px-1 py-1 rounded-md text-black bg-gray-200 focus:outline-none"
                    />
                    <button onClick={toggleCart} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-sans">
                    <FaShoppingCart size={20} className="mr-2 font-sans" />
                        Cart ({cartCount})
                    </button>
                </div>
            </div>
        </nav>
        
        {isCartOpen && <CartPanel cartItems={cart} onClose={() => setIsCartOpen(false)}/>}

        <div className="h-20"></div>

    </>
    );
}

export default Header;
