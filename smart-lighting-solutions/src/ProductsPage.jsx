import React from 'react';
import './ProductsPage.css';
import light from './street-lights.png';
import option from './products-page.png';

function ProductsSection() {
  return (
    <section className="products-section">
      <h2>Products</h2>
      <h3>Cutting-edge hardware, offerings helping cities optimize resources and achieve smart development goals</h3>
      <div className="products-menu">
        <button>Centralized Control & Monitoring System</button>
        <button>NEMA-Mounted VOLC 1160</button>
        <button>Retrofit Street Light Controller VOLC 2160</button>
        <button>Retrofit Street Light Controller VOLC 2180</button>
        <button className="last-button">Retrofit Street Light Controller VOLC 4180</button>
      </div>
      <div className="product-highlight">
        <img src= {light} alt="Centralized Control & Monitoring System" />
        <div className="product-info">
          <h4>Centralized Control & Monitoring System</h4>
          <p>Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights.</p>
          <div className="know-more-container">
          <span className="know-more-text">Know More</span>
          </div> 
        </div>
        <img src={option} alt="Bottom Image" className="bottom-image" />
      </div>
    </section>
  );
}

export default ProductsSection;
