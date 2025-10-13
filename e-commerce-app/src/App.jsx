import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import { CartProvider } from './context/CartProvider';
import { ProductProvider } from './context/ProductProvider';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import ProductsPage from './pages/ProductsPage';
import PaymentPage from './pages/PaymentPage';



function App() {

  return (
    <>
    <CartProvider>
      <ProductProvider>
        <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/cart/payment" element={<PaymentPage />} />
          </Routes>
        </Router>
      </ProductProvider>
    </CartProvider>
     
    </>
  )
}

export default App;
