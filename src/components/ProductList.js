import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext"; // Import cart context for managing cart actions
import ProductModal from "./ProductModal"; // Import ProductModal for displaying product details
import "../styles/ProductList.css"; // Import styles for product listing

const ProductList = ({ selectedCategory }) => {
  // State to store products
  const [products, setProducts] = useState([]);
  // State to track selected product for modal display
  const [selectedProduct, setSelectedProduct] = useState(null);
  // Access the addToCart function from the global cart context
  const { addToCart } = useCart();

  // Fetch product data from API based on selected category
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = selectedCategory
          ? `https://fakestoreapi.com/products/category/${selectedCategory}`
          : "https://fakestoreapi.com/products";

        const response = await fetch(url);
        const data = await response.json();

        // Add extra properties such as "NEW" label and formatted ratings
        const updatedProducts = data.map((product) => ({
          ...product,
          isNew: Math.random() < 0.3, // Mark 30% of products as "NEW"
          rating: product.rating?.rate || 0, // Ensure rating exists
          reviewCount: product.rating?.count || 0, // Ensure review count exists
        }));

        setProducts(updatedProducts); // Store updated products in state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory]); // Re-fetch products when category changes

  // Function to handle adding items to cart
  const handleAddToCart = (event, product) => {
    event.stopPropagation(); // Prevent modal from opening when clicking "Add to Cart"
    addToCart(product); // Add the product to cart via context
  };

  return (
    <div className="product-list">
      {/* If no products are available, show a message */}
      {products.length === 0 ? (
        <p className="no-products">No products found in this category.</p>
      ) : (
        // Display product cards
        products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => setSelectedProduct(product)} // Open modal when clicking on product
          >
            {/* Show "NEW" badge for new products */}
            {product.isNew && <span className="new-badge">NEW</span>}

            <img src={product.image} alt={product.title} className="product-image" />

            <h3 className="product-name">{product.title}</h3>
            <p className="product-price">₹{product.price.toFixed(2)}</p>

            <div className="ratings">
              <span className="stars">{"⭐".repeat(Math.round(product.rating))}</span>
              <span className="review-count">({product.reviewCount} reviews)</span>
            </div>

            {/* Add to Cart Button */}
            <button className="add-to-cart-btn" onClick={(e) => handleAddToCart(e, product)}>
              Add to Cart
            </button>
          </div>
        ))
      )}

      {/* Show Product Modal when a product is selected */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} closeModal={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

export default ProductList;


