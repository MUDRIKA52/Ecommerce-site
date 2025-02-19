import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useCart } from "../context/CartContext"; // Import cart context
import CartSidebar from "./CartSidebar"; // Import cart sidebar component
import "../styles/Navbar.css"; // Import CSS for styling

const Navbar = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]); // Store fetched categories
  const [searchTerm, setSearchTerm] = useState(""); // Store user search input
  const [isCartOpen, setIsCartOpen] = useState(false); // Toggle cart sidebar visibility
  const [error, setError] = useState(""); // Handle errors in category search
  const { cart } = useCart(); // Access cart data from context

  // Fetch product categories from the API when the component mounts
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        // Convert category names to lowercase for consistent searching
        setCategories(response.data.map((cat) => cat.toLowerCase()));
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories.");
      });
  }, []);

  // Handle changes in search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setError(""); // Clear error when user starts typing
  };

  // Handle category search when user presses Enter or clicks search button
  const handleCategorySearch = () => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    const matchedCategory = categories.find((cat) => cat.includes(lowerCaseSearch));

    if (matchedCategory) {
      onCategorySelect(matchedCategory); // Update selected category for product list
      setError(""); // Clear any previous error message
    } else {
      setError(`Category not found! Try one of these: ${categories.join(", ")}`);
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Harmoni</div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>Home Page</li>
          <li>Categories</li>
          <li>Contact Us</li>
          <li>More Options ▼</li>
        </ul>

        {/* Search Bar and Cart/User Icons */}
        <div className="nav-right">
          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search category..."
              value={searchTerm}
              onChange={handleSearch}
              onKeyPress={(e) => e.key === "Enter" && handleCategorySearch()} // Trigger search on Enter key
            />
            <button onClick={handleCategorySearch}><FaSearch /></button>
          </div>

          {/* Display error message if category is not found */}
          {error && <p className="error-message">{error}</p>}

          {/* Cart Button (Opens Sidebar) */}
          <div className="cart-container" onClick={() => setIsCartOpen(true)}>
            <FaShoppingCart className="cart-icon" />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </div>

          {/* User Icon (No functionality yet, placeholder for future expansion) */}
          <FaUser className="user-icon" />
        </div>
      </nav>

      {/* Cart Sidebar: Opens when cart icon is clicked */}
      {isCartOpen && <CartSidebar closeSidebar={() => setIsCartOpen(false)} />}
    </>
  );
};

export default Navbar;

