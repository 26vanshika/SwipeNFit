import React from 'react';
import Header from "./Header";
// import { createBrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cards from './Cards';
import './App.css';


function App() {
  return (
    <div className="App">

      <Header />
      <Cards />
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

