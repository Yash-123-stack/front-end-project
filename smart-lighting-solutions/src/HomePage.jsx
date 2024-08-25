import React from 'react';
import './HomePage.css';

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
      <div className="content">
        <h1 className="homepage-heading">Smart Lighting Solutions</h1>
        <p className="homepage-tagline">
           Bringing a new perspective to street lights
        </p>
        <p className="homepage-tagline">
           And the cities of tomorrow.
        </p>
        <button className="login-button content-login-button">Login</button>
      </div>
    </div>
  );
};

export default HomePage;
