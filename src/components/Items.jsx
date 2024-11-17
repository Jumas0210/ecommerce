import { useState, useEffect } from "react";
import { Header } from "./Header";
import "./items.css";
import { Card } from "./Card";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";

// Componente de Filtros
function Filters({ onCategoryChange, onBrandChange, cleanFilters }) {
  return (
    <div className="filters">
      <select
        onChange={(e) => onCategoryChange(e.target.value)}
        className="filter-select"
      >
        <option value="">Todas las categorías</option>
        <option value="Runner">Runner</option>
        <option value="Basketball">Basketball</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Training">Training</option>
        <option value="Running">Running</option>
      </select>
      <select
        onChange={(e) => onBrandChange(e.target.value)}
        className="filter-select"
      >
        <option value="">Todas las marcas</option>
        <option value="Nike">Nike</option>
        <option value="Reebok">Reebok</option>
        <option value="Adidas">Adidas</option>
        <option value="Puma">Puma</option>
      </select>
      <section>
        <button onClick={cleanFilters} >Limpiar</button>
      </section>
    </div>
  );
}

// Componente principal
export function Items() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");

  const navigate = useNavigate();

  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:5000/items?p=0")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredItems(data);
      });
  }, []);

  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        (category === "" || item.category === category) &&
        (brand === "" || item.brand === brand)
    );
    setFilteredItems(filtered);
  }, [category, brand, data]);

  const handleBack = () => {
    navigate("/");
  };

  const handleNext = () => {
    navigate("/cart");
  };

  const cleanFilters = () =>{
    setBrand("");
    setCategory("");
  }

  return (
    <main className="view">
      <Header
        handleLeft={handleBack}
        handleRight={handleNext}
        nameleft={"Cancelar"}
        nameRight={"Continuar"}
      />
      <section className="product-view">
        <section className="product-list">
          <h2>Nuestros Zapatos</h2>
          <Filters onCategoryChange={setCategory} onBrandChange={setBrand} cleanFilters={cleanFilters} />
          <ul>
            {filteredItems.map((item) => (
              <Card item={item} setSelectedItem={setSelectedItem} />
            ))}
          </ul>
        </section>
        <section className="product-detail">
          {selectedItem ? (
            <div className="product-detail-content">
              <div className="product-image">
                <img src={selectedItem.image} alt={selectedItem.model} />
              </div>
              <div className="product-info">
                <h2>{selectedItem.brand}</h2>
                <h3>{selectedItem.model}</h3>
                <p className="price">${selectedItem.price}</p>
                <p className="description">{selectedItem.description}</p>
                <div className="product-meta">
                  <span>
                    <strong>Color:</strong> {selectedItem.color}
                  </span>
                  <span>
                    <strong>Categoría:</strong> {selectedItem.category}
                  </span>
                  <span>
                    <strong>Stock:</strong> {selectedItem.stock} unidades
                  </span>
                </div>
                <button
                  onClick={() => addToCart(selectedItem)}
                  className="add-to-cart"
                >
                  Añadir al Carrito
                </button>
              </div>
            </div>
          ) : (
            <div className="no-selection">
              <p>Selecciona un producto para ver los detalles</p>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
