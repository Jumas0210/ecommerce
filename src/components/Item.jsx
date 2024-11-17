export function Item( {selectedItem, addToCart} ){
    return(
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
    )
}