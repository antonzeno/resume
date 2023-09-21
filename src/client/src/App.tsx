import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';


function App() {
  return (
    <>
      <Navigation />
      <div className='vh-100'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>

      </div>

      <Footer />
    </>
  );
}

export default App;
