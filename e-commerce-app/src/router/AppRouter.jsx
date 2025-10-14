import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, CartPage, ProductPage,
    ProductsPage, PaymentPage, SignupPage, 
    LoginPage, AboutPage
  } from '../pages';

const AppRouter = () => {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout/payment" element={<PaymentPage />} />
                    <Route path="/signup" element={<SignupPage />}/>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/about" element={<AboutPage />}/>
                </Routes>
            </Router>
        </>
    );
}

export default AppRouter;
