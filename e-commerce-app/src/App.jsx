import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import { CartProvider } from './context/CartProvider';


function App() {



  return (
    <>
    <CartProvider>
       <Router>
        <Routes>
         
            <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </CartProvider>
     
    </>
  )
}

export default App;
