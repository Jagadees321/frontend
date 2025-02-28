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
import ContactUs from './components/ContactUs';
import ManageUsers from './components/ManageUsers';
import ManageProducts from './components/ManageProducts';
import Allorders from './components/Allorders';
import MyOrders from './components/Myorders';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data
    setIsLoggedIn(false); // Update state
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/main" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/main" element={isLoggedIn ? <MainPage /> : <Navigate to="/" />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Dashboard ContentComponent={EcommerceLanding} handleLogout={handleLogout} />} />
        <Route path="/about" element={<Dashboard ContentComponent={About} handleLogout={handleLogout} />} />
        <Route path="/products" element={<Dashboard ContentComponent={ProductList} handleLogout={handleLogout} />} />
        <Route path="/contactus" element={<Dashboard ContentComponent={ContactUs} handleLogout={handleLogout} />} />
        <Route path="/manageusers" element={<Dashboard ContentComponent={ManageUsers} handleLogout={handleLogout} />} />
        <Route path="/manageproducts" element={<Dashboard ContentComponent={ManageProducts} handleLogout={handleLogout} />} />
        <Route path="/manageorders" element={<Dashboard ContentComponent={Allorders} handleLogout={handleLogout} />} />
        <Route path="/orders" element={<Dashboard ContentComponent={MyOrders} handleLogout={handleLogout} />} />
      </Routes>
    </Router>
  );
};

export default App;