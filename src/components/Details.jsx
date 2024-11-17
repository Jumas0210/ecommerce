import { useUser } from "../hooks/userUser";

export function Details({totalQuantity, total}) {
  const { user,} = useUser();

  console.log(total)

  return (
    <>
      <div className="cart-summary">
        <h2>Resumen de Compra</h2>
        <p>Total de productos: {totalQuantity} </p>
        <p className="total">Total: {total} </p>
        <p>Nombre : {user.name}</p>
        <p>Dirección : {user.address}</p>
        <p>
          Entrega a domicilio : 
          {user?.type === true ? <small>Sí</small> : <small>No</small>}
        </p>
      </div>
    </>
  );
}
