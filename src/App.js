import './App.css';
import Products from './components/Products';
import Footer from './components/Footer';
import Header from './components/Header';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Products />
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
