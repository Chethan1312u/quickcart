import ProductList from './ProductList';
import { useCart } from '../context/CartContext';

function HomePage({ products, searchTerm }) {
  const { addToCart } = useCart(); // ← Get from context
  
  // Filter products
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="home-page">
      {searchTerm && (
        <p className="search-results">
          Found {filteredProducts.length} products
        </p>
      )}
      
      <ProductList 
        products={filteredProducts}
        onAddToCart={addToCart}
      />
      
      {filteredProducts.length === 0 && (
        <p className="no-results">No products found</p>
      )}
    </div>
  );
}

function HomePage({ products, onAddToCart, searchTerm }) {
  // TODO: Filter products based on searchTerm
  // Hint: const filtered = products.filter(p => 
  //   p.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  
  return (
    <div className="home-page">
      {/* TODO: Show filtered count if searching */}
      {/* TODO: Render ProductList with filtered products */}
      {/* TODO: Show "No products found" if filtered.length === 0 */}
    </div>
  );
}

export default HomePage;