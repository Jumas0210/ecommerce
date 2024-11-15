import { useState } from "react";
import { useUser } from "../hooks/userUser";

export function Details(cart) {
  const { user, addToUser } = useUser();

  console.log(user);

  const [product] = useState(cart);

  const quantitySum = () => {
    let total = 0;

    product.cart.forEach((item) => {
      total += item.quantity;
    });

    return total;
  };

  const totalSum = () => {
    let total = 0;

    product.cart.forEach((item) => {
      let subtotal = item.price * item.quantity;

      total += subtotal;
    });

    console.log(user);

    if(!user.total){
        let updateUser = {
            name: user.name,
            budget: user.budget,
            address: user.address,
            type: user.type,
            total : total,
        }
    
        addToUser(updateUser);
    }



    return total;
  };

  const quantity = quantitySum();

  const total = totalSum();

  console.log(user.type)

  return (
    <>
      <div className="cart-summary">
        <h2>Resumen de Compra</h2>
        <p>Total de productos:{quantity}</p>
        <p className="total">Total: {user.total}</p>
        <p>Nombre : {user.name}</p>
        <p>direccion : {user.address}</p>
        <p>
          entrega a domicilio :{" "}
          {user?.type === true ? <small>sí</small> : <small>no</small>}
        </p>
      </div>
    </>
  );
}
