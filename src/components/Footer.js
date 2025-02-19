import React from "react"; 
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faHeadset, faUndo, faShippingFast } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      {/* Information Section Above Footer */}
      <div className="information-box">
        <div className="info-section">
          {/* Fast Delivery Section */}
          <div className="info-box">
            <FontAwesomeIcon icon={faShippingFast} className="info-icon" />
            <h3>FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
          </div>

          {/* Customer Support Section */}
          <div className="info-box">
            <FontAwesomeIcon icon={faHeadset} className="info-icon" />
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
          </div>

          {/* Money-Back Guarantee Section */}
          <div className="info-box">
            <FontAwesomeIcon icon={faUndo} className="info-icon" />
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We return money within 30 days</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-top">
          {/* Subscription Section */}
          <div className="footer-section subscribe">
            <h3>Exclusive</h3>
            <p>Subscribe</p>
            <span>Get 10% off your first order</span>
            <div className="subscribe-input">
              <input type="email" placeholder="Enter your email" />
              <button>
                <FontAwesomeIcon icon={faPaperPlane} /> {/* Changed to Paper Plane Icon */}
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="footer-section">
            <h3>Support</h3>
            <p>1234, Park Street, DL - 11111, India.</p>
            <p>Email: test@testmail.com</p>
            <p>Phone: +91-999-999-9999</p>
          </div>

          {/* Account Section */}
          <div className="footer-section">
            <h3>Account</h3>
            <ul>
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>© Copyright Harmoni 2025. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;