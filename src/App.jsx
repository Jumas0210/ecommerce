import { useState, useEffect } from 'react';
import './App.css';
import { Items } from './components/Items';



function App() {

  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch("http://localhost:5000/items")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (

    <Items items= {data}/>
    
  );
}

export default App;
