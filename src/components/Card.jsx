export function Card({ item, setSelectedItem }) {
  return (
    <>
      <li
        key={item._id}
        className="product-item"
        onClick={() => setSelectedItem(item)}
      >
        <div className="product-item-content">
          <img src={item.image} alt={item.model} />
          <div>
            <h3>{item.brand}</h3>
            <p>{item.model}</p>
            <p className="price">${item.price}</p>
          </div>
          <div>
            <small>Quantity {item.quantity}</small>
          </div>
        </div>
      </li>
    </>
  );
}
