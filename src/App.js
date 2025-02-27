// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import MainPage from './components/MainPage';
import "bootstrap-icons/font/bootstrap-icons.css";
import EcommerceLanding from './components/EcommerceLanding';
import About from './components/About';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          isLoggedIn ? 
          <Navigate to="/main" /> : 
          <Login setIsLoggedIn={setIsLoggedIn} />
        }/>
        <Route path="/main" element={
          isLoggedIn ? 
          <MainPage /> : 
          <Navigate to="/" />
        }/>
        <Route path="/home" element={<Dashboard ContentComponent={EcommerceLanding} />} />
        <Route path="/about" element={<Dashboard ContentComponent={About} />} />
        <Route path="/products" element={<Dashboard ContentComponent={ProductList} />} />
      </Routes>
    </Router>
  );
};

export default App;