export function Items({items}){
    return(
        <main className="items">
            <ul>
                {items.map(item=>(
                    <li key={item._id}>
                        <img src={item.image} alt={item.model} />
                        <div>
                            <h3> {item.brand} </h3>
                            <strong> {item.model} </strong>
                        </div>
                        <div>
                            <strong> $ {item.price} </strong>
                            <button> Carrito </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}