import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaHeart, FaExchangeAlt, FaShoppingBag } from "react-icons/fa";
import './Navbar.css';

const Navbar = ({ setSelectedCategory }) => {
  const categories = ['all', 'electronics', 'clothing', 'books', 'home'];
  const user = JSON.parse(localStorage.getItem('user')); // Retrieve user from localStorage
  const role = user?.role || 'user'; // Default role is 'user' if not found
  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data from localStorage
  };
  return (
    <nav className="navbar1">
      {/* Top Header with Social Icons and User Options */}
      <div className='navh1'>
        <div className='headericons'>
          <div className='iconcon'>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-snapchat"></i>
            <i className="bi bi-whatsapp"></i>
          </div>
        </div>
        <div className='headerspace'></div>
        <div className='headeroptions'>
          <Dropdown title="Language" options={["English", "French"]} />
          <div className="divider"></div>
          <Dropdown title="Currency" options={["INR (₹)", "USD ($)"]} />
          <div className="divider"></div>
          {user ? (
        <Link to="/login" onClick={handleLogout} style={{ marginLeft: '10px' }}>Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
        </div>
      </div>

      {/* Main Navbar Section with Logo, Search Bar & Icons */}
      <div className='navh2'>
        <a className="logo" href="/">
          <span style={{ color: "black", fontSize: "1.5rem", fontWeight: "bold" }}>Royals</span>
          <span style={{ color: "red", fontSize: "1.5rem", fontWeight: "bold" }}>.</span>
        </a>

        <div className="headersearchbar d-flex">
          <input type="text" className="form-control" placeholder="Search products..." />
          <button className="btn btn-danger ms-2">SEARCH</button>
        </div>

        <div className="carticons d-flex gap-3">
          <IconWithBadge icon={<FaExchangeAlt size={22} />} count={0} />
          <IconWithBadge icon={<FaHeart size={22} />} count={0} />
          <IconWithBadge icon={<FaShoppingBag size={22} />} count={0} />
        </div>
      </div>

      {/* Navigation Links */}
      <div className='navh3'>
        <nav style={{}}>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/orders">My Orders</Link>
          <Link to="/contactus">Contact Us</Link>

          {role === 'admin' && (
            <>
              <Link to="/manageproducts">Manage Products</Link>
              <Link to="/manageusers">Manage Users</Link>
              <Link to="/manageorders">All Orders</Link>
            </>
          )}

        </nav>
      </div>
    </nav>
  );
};

// Dropdown Component
function Dropdown({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="dropbtn">{title} ▼</button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <a key={index} href="#">{option}</a>
          ))}
        </div>
      )}
    </div>
  );
}

// Icon with Badge Component
const IconWithBadge = ({ icon, count }) => (
  <div className="position-relative">
    {icon}
    <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-circle">
      {count}
    </span>
  </div>
);

export default Navbar;
