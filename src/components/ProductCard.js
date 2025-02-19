import React, { useState, useEffect } from "react";
import "./ProductList.css"; // Import the corresponding CSS file for styling

const ProductList = ({ selectedCategory, onProductClick }) => {
  // State to store products and loading status
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the API when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Show loading indicator before fetching data
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); // Store fetched products in state
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Hide loading indicator after fetching completes
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="product-list-container">
      {/* Section Title */}
      <h2 className="product-list-title">Our Products</h2>

      {/* Show Loading Indicator */}
      {loading ? (
        <p className="loading-message">Loading products...</p>
      ) : filteredProducts.length > 0 ? (
        <div className="products-grid">
          {/* Display Product Cards */}
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => onProductClick(product)} // Open product details on click
            >
              <img src={product.image} alt={product.title} className="product-image" />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      ) : (
        // Show message if no products are available
        <p className="no-products-message">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;




