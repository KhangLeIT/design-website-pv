import React from 'react';
import './App.css';
import Header from './components/Header';
import EventClick from './components/EventClick';
import Image3DComponent from './components/ContentMain';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './components/Products';
import Home from './Home';
import Details from './Details';
import Contact from './Contact';
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Products />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />

        {/* <Route path="/addfood" element={<AddFoodData />} />
        <Route path="/orderdetails/:orderid" element={<ShowDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
