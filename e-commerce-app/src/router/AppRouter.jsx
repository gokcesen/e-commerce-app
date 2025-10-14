import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, CartPage, ProductPage,
    ProductsPage, PaymentPage, SignupPage
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
            </Routes>
            </Router>
        </>
    );
}

export default AppRouter;
