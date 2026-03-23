import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartPage.css';

function CartPage({ cart, onUpdateQuantity, onRemoveItem }) {
  // TODO: Calculate total
  const calculateTotal = () => {
    // Similar to CartSidebar
  };
  
  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="empty-cart-page">
          {/* TODO: Show empty state */}
          {/* <p>Your cart is empty</p> */}
          {/* <Link to="/">Continue Shopping</Link> */}
        </div>
      ) : (
        <div className="cart-page-content">
          {/* TODO: Map through cart items */}
          {/* Similar structure to CartSidebar but full page layout */}
          
          {/* TODO: Show total */}
          {/* TODO: Add "Continue Shopping" and "Checkout" buttons */}
        </div>
      )}
    </div>
  );
}

export default CartPage;