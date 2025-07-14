import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>🍳 CuisineBot</h3>
          <p>Discover amazing recipes from around the world. Your culinary journey starts here.</p>
          <div className="social-links">
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">📷</a>
            <a href="#" className="social-link">🐦</a>
            <a href="#" className="social-link">📺</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#recipes">Recipes</a></li>
            <li><a href="#favorites">Favorites</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><a href="#italian">Italian</a></li>
            <li><a href="#french">French</a></li>
            <li><a href="#asian">Asian</a></li>
            <li><a href="#mediterranean">Mediterranean</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 CuisineBot. All rights reserved. Made with ❤️ for food lovers.</p>
      </div>
    </footer>
  );
};

export default Footer; 