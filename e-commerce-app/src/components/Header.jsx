import { useState, useContext } from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import CartPanel from "./cart/CartPanel";
import { useNavigate } from "react-router-dom";

function Header({ cartCount = 0, onSearch, onCategorySelect }){
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const { cart, isCartOpen, toggleCart, setIsCartOpen } = useContext(CartContext);
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


    function handleFilterChange(event) {
        const value = event.target.value;
        setSelectedCategory(value);
        if (onCategorySelect) onCategorySelect(value);

    }

    return(
    <>
        <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white py-2 z-50">
            <div className="mx-8 flex flex-col gap-2 ml-12">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-32">
                        <img
                            src="https://www.iconpacks.net/icons/2/free-online-store-icon-2019-thumb.png"
                            className="h-12 object-contain p-0 m-0"
                        />
                        <ul className="flex space-x-4 text-gray-200 font-semibold font-sans">
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
                    <div className="flex items-center gap-x-6">
                        <button
                            onClick={() => navigate("/login")}
                            className="text-sm border border-white rounded-xl px-3 py-1 bg-slate-900 hover:bg-sky-700"
                        >
                            Login
                        </button>

                        <button
                            onClick={() => navigate("/signup")}
                            className="text-sm border border-white rounded-xl px-3 py-1 bg-slate-900 hover:bg-sky-700 transition"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between ml-4">
                <div className="flex items-center gap-x-8">
                    <div> 
                        <h1 onClick={() => navigate("/")} className="text-2xl font-bold font-sans">Quick Store</h1>
                    </div>
                    <div>
                        <select 
                            className="bg-gray-200 border border-gray-300 text-gray-700 text-sm font-sans rounded-md shadow-sm 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                            px-4 py-1 transition duration-200 ease-in-out"
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
                    </div>
                </div>
                <button 
                    onClick={toggleCart} 
                    className="text-sm bg-blue-700 hover:bg-blue-800 rounded-xl transition inline-flex items-center me-8 font-sans">
                <FaShoppingCart size={20} className="mr-2 font-sans" />
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
