import { useState } from "react";

export function Tarjet() {
  const [creditCard, setCreditCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  const [showCVV, setShowCVV] = useState(false);

  const handleCreditCardChange = (e) => {
    setCreditCard({ ...creditCard, [e.target.name]: e.target.value });
  };

  const clearCreditCardFields = () => {
    setCreditCard({ number: "", expiry: "", cvv: "", name: "" });
  };

  return (
    <>
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
          </div>
        </div>
      </div>
    </>
  );
}
