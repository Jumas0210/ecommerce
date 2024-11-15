import React from "react";
import "./PurchasePage.css";

function PurchaseForm({
  name,
  setName,
  budget,
  setBudget,
  error,
  address,
  setAddress,
  setTypeSend,
}) {
  return (
    <div className="container">
      <h2>Bienvenido</h2>
      {error && <p className="error">{error}</p>}
      <div className="form">
        <label>Nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value.toString())}
          maxLength={20}
          className="input"
        />
        <label>Presupuesto</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="input"
        />
        <label>Dirección</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="input"
        />
        <label>Tipo entrega</label>
        <select
          onChange={(e) => setTypeSend(e.target.value)}
          className="filter-select"
        >
          <option value=""></option>
          <option value={true}>Domicilio</option>
          <option value={false}>Recoger en tienda</option>
        </select>
      </div>
    </div>
  );
}

export default PurchaseForm;
