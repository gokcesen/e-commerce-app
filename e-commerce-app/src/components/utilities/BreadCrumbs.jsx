import { Link, useLocation } from "react-router-dom";

function Breadcrumbs({ product }) {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryFromURL = searchParams.get("category");

    const category = categoryFromURL || product?.category;

  return (
    <nav className="text-sm text-gray-600 mb-4 font-sans text-left px-0 ml-0">
      <Link to="/" className="hover:underline text-black">HomePage</Link>
      {category && (
        <>
          {" > "}
          <Link 
            to={`/products?category=${category}`} 
            className="hover:underline capitalize text-black"
          >
            {category}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Breadcrumbs;
