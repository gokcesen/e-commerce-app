import './App.css';
import { CartProvider } from './context/CartProvider';
import { ProductProvider } from './context/ProductProvider';
import AppRouter from './router/AppRouter';

function App() {

  return (
    <>
      <CartProvider>
        <ProductProvider>
          <AppRouter />
        </ProductProvider>
      </CartProvider>
    </>
  )
}

export default App;
