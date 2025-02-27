import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3>Categories</h3>
            <div className="sidebar-category">Electronics</div>
            <div className="sidebar-category">Clothing</div>
            <div className="sidebar-category">Books</div>
            <div className="sidebar-category">Home & Garden</div>
        </div>
    );
};

export default Sidebar;