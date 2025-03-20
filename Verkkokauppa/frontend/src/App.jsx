import { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

function App() {


  return (
    <Router>
      
      <Routes>
        <Route path="/" element={
          <Header/>
          
          } />
        <Route path="/shoppingcart" element={
          <ShoppingCart />
          
          } />
      </Routes>
    </Router>
  )
}

export default App
