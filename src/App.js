import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={headerStyle}>
        <img src="https://via.placeholder.com/100" alt="Logo" />
      </header>
      <main style={mainStyle}>
        <div style={cardContainerStyle}>
          {products.map((product) => (
        <div key={product.id} style={cardStyle}>
          <img src={product.image} alt={product.name} style={imageStyle} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
</main>

      <footer style={footerStyle}>
        <p>Footer - Derechos reservados</p>
      </footer>
    </div>
  );
}


const headerStyle = {
  backgroundColor: '#f8f8f8',
  padding: '20px',
  textAlign: 'center',
};

const footerStyle = {
  backgroundColor: '#f8f8f8',
  padding: '10px',
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  bottom: 0,
};

const products = [
  {
    id: 1,
    name: 'Zapato Deportivo',
    price: '$50',
    description: 'Zapato deportivo cómodo y elegante.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Zapato Casual',
    price: '$40',
    description: 'Perfecto para ocasiones casuales.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Zapato Formal',
    price: '$70',
    description: 'Ideal para eventos formales.',
    image: 'https://via.placeholder.com/150'
  },
];

const mainStyle = {
  padding: '20px',
};

const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center',
  width: '200px',
  margin: '10px',
  boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
};



export default App;
