import React from "react";
import "../styles/HeroSection.css"; // Importing external CSS file for styling

const HeroSection = () => {
  return (
    <section>
      {/* Hero Section - Main Introduction */}
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            {/* Main Welcome Heading */}
            <h1>Welcome to <span className="highlight">My Store</span></h1>
            <h1>Your Shopping</h1>
            <h1>Destination</h1>

            {/* Brief Description */}
            <p className="center-text">
              Discover a wide range of products tailored just for you. 
              Shop with ease and find exactly what you need.
            </p>
          </div>
        </div>
      </div>

      {/* Discover Section - Encourages Users to Explore */}
      <div className="discover-section">
        <h2>Discover Your Next Favorite Item</h2>
        <p className="left-text">
          Browse our exclusive collection and find the perfect product tailored just for you.
        </p>

        {/* Action Buttons */}
        <div className="button-container">
          <button className="shop-btn">Shop</button>
          <button className="learn-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;





