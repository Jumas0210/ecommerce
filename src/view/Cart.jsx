import { Card } from "../components/Card";
import { useCart } from "../hooks/useCart";
import { Details } from "../components/Details";
import "../components/cart.css";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/userUser";
import { Tarjet } from "../components/Tarjet";
import "../components/tarjet.css";
import { useEffect, useState } from "react";

export function Cart() {
  const { cart, clearCart, addToCart, totalQuantity, total ,setTotal } = useCart(); 
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [showCVV, setShowCVV] = useState(false);
  const [error, setError] = useState("");
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(()=>{
    if(user.type === true){
      setTotal(total + 10000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const back = () => {
    clearCart();
    navigate("/items");
  };

  const handleSubmit = () => {
    if (!number || !expiry || !cvv || !name) {
      setError("Todos los campos son obligatorios.");
      alert(error)
      return;
    }

    const cleanNumber = number.replace(/\s/g, '');
    if (cleanNumber.length !== 16) {
      setError("El número de tarjeta debe tener exactamente 16 dígitos.");
      alert(error)
      return;
    }

    const cleanExpiry = expiry.replace('/', '');
    if (cleanExpiry.length !== 4) {
      setError("La fecha de expiración debe tener exactamente 4 dígitos (MMAA).");
      alert(error)
      return;
    }

    if (cvv.length !== 3) {
      setError("El CVV debe tener exactamente 3 dígitos.");
      alert(error)
      return;
    }

    console.log(error)

    console.log("Datos de la tarjeta:", { number, expiry, cvv, name });
    setError(""); // Limpiar el error si todo está correcto
    
    next();

  };

  const clearCreditCardFields = () => {
    setNumber("");
    setExpiry("");
    setCvv("");
    setName("");
    setError("");
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
        handleRight={handleSubmit}
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
            <Tarjet
             number={number}
             setNumber={setNumber}
             expiry={expiry}
             setExpiry={setExpiry}
             cvv={cvv}
             setCvv={setCvv}
             name={name}
             setName={setName}
             showCVV={showCVV}
             setShowCVV={setShowCVV}
             clearCreditCardFields={clearCreditCardFields}
            />
          </div>
        </div>
      </div>
    </>
  );
}
