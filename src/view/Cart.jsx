import { Card } from "../components/Card";
import { useCart } from "../hooks/useCart";
import { Details } from "../components/Details";
import "../components/cart.css";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/userUser";
import { Tarjet } from "../components/Tarjet";
import "../components/tarjet.css";

export function Cart() {
  const { cart, clearCart, addToCart, totalQuantity, total } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();

  const back = () => {
    clearCart();
    navigate("/items");
  };

  const next = () => {
    const itemInCart = cart.findIndex((product) => product);

    if (itemInCart >= 0) {
      console.log(user);

      if (total <= user.budget) {
        clearCart();
        alert("Compra confirmada");
      } else {
        alert("El presupuesto es menor al total");
      }
    } else {
      alert("No hay nada en el carrito");
    }
  };

  return (
    <>
      <Header
        handleLeft={back}
        handleRight={next}
        nameleft={"cancelar"}
        nameRight={"confirmar"}
      />

      <div className="cart-container">
        <div className="cart-content">
          <div className="cart-left">
            <section className="product-list">
              <h2>Tus productos</h2>
              <ul>
                {cart.map((item) => (
                  <Card key={item.id} item={item} setSelectedItem={addToCart} />
                ))}
              </ul>
            </section>

            <section className="cart-details">
              <Details totalQuantity={totalQuantity} total={total} />
            </section>

            <section className="cart-actions">
              <button onClick={clearCart}>Limpiar</button>
            </section>
          </div>

          <div className="cart-right">
            <Tarjet />
          </div>
        </div>
      </div>
    </>
  );
}
