import { useState } from "react";
import PurchaseForm from "../components/PurchaseForm";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/userUser";

export function PurchasePage() {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [address, setAddress] = useState("");
  const [typeSend, setTypeSend] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { addToUser } = useUser();

  const handlePurchase = () => {
    if (!name || !budget) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (name.length > 20) {
      setError("El nombre del producto no debe superar los 20 caracteres.");
      return;
    }

    if (!/^\d+$/.test(budget)) {
      setError("El precio debe contener solo números.");
      return;
    }

    const processedName = name.toString();
    const processedBudget = Number(budget);

    console.log("Datos del Usuario:");
    console.log("Nombre del Producto:", processedName);
    console.log("Presupuesto (en pesos):", processedBudget);

    const user = {
      name: processedName,
      budget: processedBudget,
      address: address,
      type: typeSend,
    };

    addToUser(user);

    navigate("/items");
  };

  const handleClear = () => {
    setName("");
    setBudget("");
    setError("");
  };

  return (
    <>
      <Header
        handleLeft={handleClear}
        handleRight={handlePurchase}
        nameleft={"Limpiar"}
        nameRight={"Continuar"}
      />
      <PurchaseForm
        name={name}
        setName={setName}
        budget={budget}
        setBudget={setBudget}
        address={address}
        setAddress={setAddress}
        typeSend={typeSend}
        setTypeSend={setTypeSend}
        error={error}
      />
    </>
  );
}
