
export function Tarjet(
  {
    number,
    setNumber,
    expiry,
    setExpiry,
    cvv,
    setCvv,
    name,
    setName,
    showCVV,
    setShowCVV,
    clearCreditCardFields
  }
) {
  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <div className="payment-section">
      <div className="credit-card-form">
        <h2>Información de Tarjeta de Crédito</h2>
        <div className="form-group">
          <label htmlFor="cardNumber">Número de tarjeta</label>
          <input
            id="cardNumber"
            name="number"
            value={number}
            onChange={(e) => handleChange(e, setNumber)}
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardExpiry">Fecha de expiración (MM/AA)</label>
          <input
            id="cardExpiry"
            name="expiry"
            value={expiry}
            onChange={(e) => handleChange(e, setExpiry)}
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
              value={cvv}
              onChange={(e) => handleChange(e, setCvv)}
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
            value={name}
            onChange={(e) => handleChange(e, setName)}
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
  );
}
