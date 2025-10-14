import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import { CartProvider } from './context/CartProvider';
import { ProductProvider } from './context/ProductProvider';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import ProductsPage from './pages/ProductsPage';
import PaymentPage from './pages/PaymentPage';
import SignupPage from './pages/SignupPage';



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
              <Route path="/checkout/payment" element={<PaymentPage />} />
              <Route path="/signup" element={<SignupPage />}/>
          </Routes>
        </Router>
      </ProductProvider>
    </CartProvider>
     
    </>
  )
}

export default App;
