import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import { CartProvider } from "./context/CartContext"; 
import { ToastContainer } from "react-toastify"; // Import Toast Notifications
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

function App() {
  // State to manage selected category for filtering products
  const [selectedCategory, setSelectedCategory] = useState(null);

  // State to track selected product for modal display
  const [selectedProduct, setSelectedProduct] = useState(null);

  /**
   * Handles the product selection to open the modal
   * @param {Object} product - Selected product details
   */
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    //  Provide Cart Context to the entire application
    <CartProvider>
      <div>
        {/*  Toast Notifications for Add to Cart & Buy Now actions */}
        <ToastContainer position="top-right" autoClose={2000} />

        {/*  Navbar with Category Search & Cart Sidebar */}
        <Navbar onCategorySelect={setSelectedCategory} />

        {/* Hero Section - Welcome Message */}
        <HeroSection />

        {/*  Product List - Displays filtered products */}
        <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
          <ProductList 
            selectedCategory={selectedCategory} 
            onProductClick={handleProductClick} 
          />
        </div>

        {/*  Product Modal - Displays selected product details */}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            closeModal={() => setSelectedProduct(null)}
          />
        )}

        {/*  Footer Section */}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;

