import "./App.css";
import { PurchasePage } from "./view/PurchasePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./view/Cart";
import { CartProvider } from "./context/cart";
import { UserProvider } from "./context/user";
import { ProductList } from "./view/ProductList";

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<PurchasePage />} />
            <Route path="/items" element={<ProductList/>} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
