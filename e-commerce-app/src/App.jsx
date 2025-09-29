import { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header'; 
import ProductCard from './components/ProductCard';
import axios from 'axios'


function App() {

  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([])

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products")
        setProducts(response.data.products)

      } catch(error) {
        console.error(error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <>
      <Header cartCount={cartCount} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard 
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.thumbnail}
            onAddToCart={handleAddToCart}
            />
        ))}
      </div>
      
    </>
  )
}

export default App;
