import React, { useState } from "react";
import "./CarritoDeCompras.css";

export function CarritoDeCompras() {
  const [products, setProducts] = useState([
    { id: 1, name: "Producto 1", price: 100, quantity: 2 },
    { id: 2, name: "Producto 2", price: 200, quantity: 1 },
    // Más productos...
  ]);

  const [creditCard, setCreditCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  const [showCVV, setShowCVV] = useState(false);
  const [message, setMessage] = useState("");
  const [isConfirmDisabled, setIsConfirmDisabled] = useState(false);

  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const deliveryCharge = total > 100000 ? 0 : 10000;
  const grandTotal = total + deliveryCharge;

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleCreditCardChange = (e) => {
    setCreditCard({ ...creditCard, [e.target.name]: e.target.value });
  };

  const clearCreditCardFields = () => {
    setCreditCard({ number: "", expiry: "", cvv: "", name: "" });
  };

  const confirmPurchase = () => {
    setIsConfirmDisabled(true);
    setTimeout(() => {
      setMessage(
        "Pago realizado con éxito. Serás redirigido a la página inicial."
      );
    }, 2000);
  };

  return (
    <div className="container">
      <h1>Carrito de Compras</h1>

      <div className="cart-container">
        <div className="cart-table">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>{product.quantity}</td>
                  <td>${(product.price * product.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="button delete"
                      onClick={() => removeProduct(product.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cart-summary">
          <h2>Resumen de Compra</h2>
          <p>
            Total de productos:{" "}
            {products.reduce((sum, product) => sum + product.quantity, 0)}
          </p>
          <p>Subtotal: ${total.toFixed(2)}</p>
          <p>Cargo por domicilio: ${deliveryCharge.toFixed(2)}</p>
          <p className="total">Total: ${grandTotal.toFixed(2)}</p>
        </div>
      </div>

      <div className="payment-section">
        <div className="credit-card-form">
          <h2>Información de Tarjeta de Crédito</h2>
          <div className="form-group">
            <label htmlFor="cardNumber">Número de tarjeta</label>
            <input
              id="cardNumber"
              name="number"
              value={creditCard.number}
              onChange={handleCreditCardChange}
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardExpiry">Fecha de expiración (MM/AA)</label>
            <input
              id="cardExpiry"
              name="expiry"
              value={creditCard.expiry}
              onChange={handleCreditCardChange}
              placeholder="MM/AA"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardCVV">Código de seguridad (CVV)</label>
            <div className="cvv-input">
              <input
                id="cardCVV"
                name="cvv"
                type={showCVV ? "text" : "password"}
                value={creditCard.cvv}
                onChange={handleCreditCardChange}
                placeholder="***"
              />
              <button
                className="toggle-cvv"
                onClick={() => setShowCVV(!showCVV)}
              >
                {showCVV ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="cardName">Nombre del titular</label>
            <input
              id="cardName"
              name="name"
              value={creditCard.name}
              onChange={handleCreditCardChange}
              placeholder="Nombre Apellido"
            />
          </div>
          <div className="form-actions">
            <button
              className="button secondary"
              onClick={clearCreditCardFields}
            >
              Limpiar campos
            </button>
            <button
              className="button primary"
              onClick={confirmPurchase}
              disabled={isConfirmDisabled}
            >
              Confirmar compra
            </button>
          </div>
        </div>
      </div>

      <div className="navigation-buttons">
        <button className="button secondary">Cancelar compra</button>
        <button className="button primary">Seguir comprando</button>
      </div>

      {message && <div className="message success">{message}</div>}
    </div>
  );
}
