import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from './ProductList';

function CategoryPage({ products, onAddToCart }) {
  // TODO: Get category from URL params
  // Hint: const { category } = useParams();
  
  // TODO: Filter products by category
  // const filteredProducts = products.filter(p => p.category === category);
  
  return (
    <div className="category-page">
      {/* TODO: Show category title */}
      {/* <h2>{category} Products</h2> */}
      
      {/* TODO: Render filtered products */}
      {/* TODO: Handle empty state */}
    </div>
  );
}
function CategoryPage({ products }) {
  const { category } = useParams();
  const { addToCart } = useCart();
  
  const filteredProducts = products.filter(p => 
    p.category.toLowerCase() === category.toLowerCase()
  );
  
  return (
    <div className="category-page">
      <h2 className="category-title">{category} Products</h2>
      
      {filteredProducts.length === 0 ? (
        <div className="empty-category">
          <p>😕 No products found in this category</p>
          <Link to="/" className="back-home-link">
            ← Back to all products
          </Link>
        </div>
      ) : (
        <ProductList 
          products={filteredProducts}
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
}

export default CategoryPage;