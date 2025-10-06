import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import { CartProvider } from './context/CartProvider';
import CartPage from './pages/CartPage';


function App() {



  return (
    <>
    <CartProvider>
       <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
     
    </>
  )
}

export default App;
