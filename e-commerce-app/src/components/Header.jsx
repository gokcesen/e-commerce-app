import { useState } from "react";



function Header(){
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
        </div>
      </nav>
      <div className="h-20"></div>

        </>
    );
}

export default Header;