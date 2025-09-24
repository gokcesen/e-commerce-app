import './App.css'
import Header from './components/Header';
import Product from './components/Product';

function App() {

  return (
    <>
      <Header />
      <div className="flex flex-col gap-10">
          <Product
            title="Air Max 90"
            description="Comfortable running shoes."
            price="129.99"
            image="https://limitedresell.com/12840-full_default/air-max-plus-schwarz-chrome.jpg"
          />
           <Product
            title="Air Max 90"
            description="Comfortable running shoes."
            price="129.99"
            image="https://limitedresell.com/12840-full_default/air-max-plus-schwarz-chrome.jpg"
          />
           <Product
            title="Air Max 90"
            description="Comfortable running shoes."
            price="129.99"
            image="https://limitedresell.com/12840-full_default/air-max-plus-schwarz-chrome.jpg"
          />
      </div>
      
    </>
  )
}

export default App;
