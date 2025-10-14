import { Link, useLocation } from "react-router-dom";

function Breadcrumbs({ product }) {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryFromURL = searchParams.get("category");

    const category = categoryFromURL || product?.category;


  return (
    <nav className="text-sm text-gray-600 mb-4 font-sans">
      <Link to="/" className="hover:underline">HomePage</Link>
      {category && (
        <>
          {" > "}
          <Link 
            to={`/products?category=${category}`} 
            className="hover:underline capitalize"
          >
            {category}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Breadcrumbs;
