// components/MainPage.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ProductList from './ProductList';
import Footer from './Footer';
import './MainPage.css';
import Dashboard from './Dashboard';
import EcommerceLanding from './EcommerceLanding';

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products] = useState([
    { id: 1, name: 'Product 1', category: 'electronics', price: 99.99 },
    { id: 2, name: 'Product 2', category: 'clothing', price: 49.99 },
    // Add more products
  ]);

  return (
    <div className="main-container">
     
      <div className="content-wrapper">
       <Dashboard ContentComponent={EcommerceLanding}/>
        
      </div>
     
    </div>
  );
};

export default MainPage;