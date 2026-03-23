import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ← Add imports
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // ← Add import

function Header({ searchTerm, onSearchChange }) {
  const { getTotalItems, toggleCart } = useCart(); // ← Use context
  
  // ... rest of component uses getTotalItems() and toggleCart
}

function Header({ cartItemCount, onCartClick, searchTerm, onSearchChange }) {
  const navigate = useNavigate(); // ← Hook to navigate programmatically
  
  // Get unique categories from products
  const categories = ['Electronics', 'Accessories', 'Home', 'Sports'];
  
  return (
    <header className="header">
      <div className="header-container">
        {/* Top row: Logo and Cart */}
        <div className="header-top">
          <Link to="/" className="header-logo">
            <h1 className="header-title">🛒 QuickCart</h1>
          </Link>
          
          <button className="cart-icon-btn" onClick={onCartClick}>
            🛒
            {cartItemCount > 0 && (
              <span className="cart-badge">{cartItemCount}</span>
            )}
          </button>
        </div>
        
        {/* Navigation Menu */}
        {/* TODO: Add navigation with Links */}
        {/* <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          {categories.map(cat => (
            <Link 
              key={cat} 
              to={`/category/${cat}`} 
              className="nav-link"
            >
              {cat}
            </Link>
          ))}
          <Link to="/cart" className="nav-link">Cart</Link>
        </nav> */}
        
        {/* Search Bar */}
        {/* TODO: Add search input */}
        {/* <div className="search-container">
          <input 
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div> */}
      </div>
    </header>
  );
}

export default Header;