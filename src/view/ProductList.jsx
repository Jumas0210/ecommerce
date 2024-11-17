import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import "../components/items.css";
import { Card } from "../components/Card";
import { useCart } from "../hooks/useCart";
import { Item } from "../components/Item";
import { useNavigate } from "react-router-dom";
import { Filters } from "../components/Filters";

export function ProductList() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [nextUrl, setNextUrl] = useState("");


  const navigate = useNavigate();

  const { addToCart } = useCart();

  useEffect(() => {
    console.log("useEffect de getData");
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async (url = "http://localhost:5000/items?p=0") => {
    const response = await fetch(url);
    console.log(response);
    const shoes = await response.json();
    console.log(shoes);

    const { next, data } = shoes;
    setFilteredItems(data);

    return { next, data };

    // fetch(url)
    //   .then((response) => response.json())
    //   .then((shoes) => {
    //     console.log(shoes);
    //     const { next, data } = shoes;
    //     setFilteredItems(data);
    //     console.log(next);
    //     return { next, data };
    //   });
  };

  const getItems = async () => {
    const { next, data } = await getData();
    console.log(next);
    setData(data);
    setNextUrl(next);
    console.log(nextUrl);
  };

  const getNewItems = async () => {
    const { next, data } = await getData(nextUrl);
    setData((prev) => [...prev, ...data]);
    setNextUrl(next);
  };

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

  const cleanFilters = () => {
    setBrand("");
    setCategory("");
  };

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
            <Filters
              onCategoryChange={setCategory}
              onBrandChange={setBrand}
              cleanFilters={cleanFilters}
            />
            <ul>
              {filteredItems.map((item) => (
                <Card item={item} setSelectedItem={setSelectedItem} />
              ))}
            </ul>

            <button className="top-bar-button" onClick={getNewItems}> Mas </button>

        </section>
        <Item selectedItem={selectedItem} addToCart={addToCart} />
      </section>
    </main>
  );
}
