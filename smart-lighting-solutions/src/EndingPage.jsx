import React from 'react';
import './EndingPage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <nav className="navbar">
        <div className="nav-right">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Products</li>
            <li className="nav-item">Software Services</li>
          </ul>
          <button className="login-button">Login</button>
        </div>
      </nav>
      <hr className="divider my-6" />
      <div className="footer-links mt-4">
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="/terms-and-conditions" className="footer-link">Terms and Conditions</a>
          <span className="separator">|</span>
          <a href="/cookie-policy" className="footer-link">Cookie Policy</a>
        </div>
    </div>
  );
};

export default HomePage;
