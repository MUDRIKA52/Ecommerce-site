import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // Import cart context for managing cart actions
import "../styles/ProductModal.css"; // Import CSS for modal styling

const ProductModal = ({ product, closeModal }) => {
  // State to track selected quantity
  const [quantity, setQuantity] = useState(1);
  // Access addToCart function from global cart context
  const { addToCart } = useCart();

  // If no product is selected, don't render the modal
  if (!product) return null;

  // Increase product quantity
  const handleIncrease = () => setQuantity((prev) => prev + 1);

  // Decrease product quantity (ensuring it doesn't go below 1)
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  // Handle Add to Cart functionality
  const handleAddToCart = () => {
    addToCart(product, quantity); // Add selected product and quantity to cart

    // Close the modal after adding to cart with a small delay for smooth UI
    setTimeout(() => {
      closeModal();
    }, 300);
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button to exit modal */}
        <span className="close-btn" onClick={closeModal}>&times;</span>
        
        <div className="modal-body">
          {/* Product Image */}
          <img src={product.image} alt={product.title} className="product-image" />

          {/* Product Details */}
          <div className="product-details">
            <h2 className="product-title">{product.title}</h2>
            
            {/* Product Rating & Stock Availability */}
            <p className="product-rating">
              ⭐ {product.rating?.rate || 0} ({product.rating?.count || 0} reviews) |{" "}
              <span className={product?.inStock ? "in-stock" : "out-of-stock"}>
                {product?.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </p>

            {/* Product Price */}
            <h3 className="product-price">₹{product.price.toFixed(2)}</h3>

            {/* Product Description */}
            <p className="product-description">{product.description}</p>
            
            {/* Quantity Selector */}
            <div className="quantity-container">
              <button className="quantity-btn" onClick={handleDecrease}>-</button>
              <span className="quantity-value">{quantity}</span>
              <button className="quantity-btn" onClick={handleIncrease}>+</button>
            </div>

            {/* Add to Cart Button */}
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;






