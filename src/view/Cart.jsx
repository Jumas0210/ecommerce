import { Card } from "../components/Card";
import { useCart } from "../hooks/useCart";
import { Details } from "../components/Details";
import "../components/cart.css";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/userUser";

export function Cart() {
  const { cart, clearCart, addToCart } = useCart();

  const {user} =useUser();

  console.log(cart);

  const navigate = useNavigate();

  const back = () => {
    clearCart();

    navigate("/items");
  };

  const next = () => {

    const itemInCart = cart.findIndex((product) => product);

    console.log(itemInCart);

    if(itemInCart>= 0){

        console.log(user);

        if(user.total <= user.budget){
            clearCart();

            alert("Compra confirmada");
        }
        else{

            alert("El presupuesto es menor al total");

        }
        
    }
    else{
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

      <section className="product-list">
        <h2>Tus productos</h2>
        <ul>
          {cart.map((item) => (
            <Card item={item} setSelectedItem={addToCart} />
          ))}
        </ul>
      </section>
      {/* <section>
          <Tarjet/>
      </section>
    */}
      <section>
        <Details cart={cart} clearCart={clearCart} />
      </section>

      <section>
        <button onClick={clearCart}>limpiar</button>
      </section>
    </>
  );
}
