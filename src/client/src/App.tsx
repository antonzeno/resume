import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ProductDetail from './components/ProductDetail/ProductDetail';


function App() {
  return (
    <>
      <div className="app">
        <div className="content">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:product" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<NoMatch />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
