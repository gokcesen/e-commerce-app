import { useState } from "react";



function Header({ cartCount }){
    const [search, setSearch] = useState('');

    const handleChange = (e) =>
    {
        setSearch(e.target.value);
    }
      
    return(
    <>
      <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white px-8 py-5 rounded-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold">E-commerce App</h1>
            <input
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="Search..."
                className="ml-4 px-3 py-1 rounded-md text-gray-900 focus:outline-none"
            />
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                </svg>
                Cart ({cartCount})
            </button>
            {/*
            {open && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <div className="p-4 max-h-60 overflow-y-auto">
                    {cartItems.length === 0 ? (
                        <p className="text-sm text-gray-500">Your cart is empty.</p>
                    ) : (
                        cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm mb-2">
                            <span>{item.name}</span>
                            <span className="text-gray-500">x{item.quantity}</span>
                        </div>
                        ))
                    )}
                    </div>
                </div>
            )}
            */}
        </div>
      </nav>
      <div className="h-20"></div>

        </>
    );
}

export default Header;