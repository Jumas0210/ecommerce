import { useState, useEffect } from "react";
import "./App.css";
import { Items } from "./components/Items";
import { PurchasePage } from "./view/PurchasePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./view/Cart";
import { CartProvider } from "./context/cart";
import { UserProvider } from "./context/user";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items").then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<PurchasePage />} />
            <Route path="/items" element={<Items data={data} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
