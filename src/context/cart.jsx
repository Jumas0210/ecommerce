import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    const itemInCart = cart.findIndex((product) => product._id === item._id);

    const priceFormat = parseInt(item.price);

    if (itemInCart >= 0) {
      const newCart = structuredClone(cart);
      newCart[itemInCart].quantity += 1;
      setTotalQuantity(totalQuantity + 1);
      setTotal(total + priceFormat);
      return setCart(newCart);
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...item,
        quantity: 1,
      },
    ]);

    console.log(item);
    console.log(cart);

    setTotalQuantity(totalQuantity + 1);
    setTotal(total + priceFormat);
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setTotal(0);
  };


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        totalQuantity,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
