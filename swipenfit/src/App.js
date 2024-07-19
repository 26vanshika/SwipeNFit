
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./Header";
// import { createBrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cards from './Cards';
import './App.css';


function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () =>
    {
      try {
        const response = await axios.get('/api/outfits');

        setProducts(response.data);

      } catch (error){
        console.error('Error fetching products', error);
      }

    };
    fetchProducts();
  }, []);

  return (
    <div className="App">

      <Header />
      <div className='card-list'>
        {products.map(product => (
          <Cards 
          key={products.p_id} product={product} />

        ))}
      
      

      </div>
      
      {/* <Router>
        <Routes>
           <Route path = "/cart">
              <h1>I am the cart page</h1>
           </Route>
            <Route path = "/">
              <h1>I am homepage</h1>
           </Route>
        </Routes>
      </Router> */}

      

    </div>
  );
}

export default App;


