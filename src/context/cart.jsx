import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const itemInCart = cart.findIndex((product) => product._id === item._id);

    console.log(itemInCart);

    if (itemInCart >= 0) {
      const newCart = structuredClone(cart);
      newCart[itemInCart].quantity += 1;
      return setCart(newCart);
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...item,
        quantity: 1,
      },
    ]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
