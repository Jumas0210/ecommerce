export function Filters({ onCategoryChange, onBrandChange, cleanFilters }) {
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
          <button className="top-bar-button" onClick={cleanFilters}>
            Limpiar
          </button>
        </section>
      </div>
    );
  }