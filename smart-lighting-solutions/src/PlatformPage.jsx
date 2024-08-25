import React from 'react';
import './PlatformPage.css';
import description from './description-image.png';

const PlatformBenefits = () => {
  return (
    <div className="platform-benefits-container">
      <h2 className="platform-benefits-title">The platform assists city managers on multiple fronts</h2>
      <div className="platform-benefits-grid">
        <div className="benefit-item benefit-item-1">
          <img src={description} alt="Benefit icon" className="benefit-icon" />
          <p>Saves on power consumption & related costs</p>
        </div>
        <div className="benefit-item benefit-item-2">
          <img src={description} alt="Benefit icon" className="benefit-icon" />
          <p>Lowers downtimes</p>
        </div>
        <div className="benefit-item benefit-item-3">
          <img src={description} alt="Benefit icon" className="benefit-icon" />
          <p>Detects power thefts.</p>
        </div>
        <div className="benefit-item benefit-item-4">
          <img src={description} alt="Benefit icon" className="benefit-icon" />
          <p>Ensures smart monitoring and control of the street light infrastructure.</p>
        </div>
        <div className="benefit-item benefit-item-5">
          <img src={description} alt="Benefit icon" className="benefit-icon" />
          <p>Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc.</p>
        </div>
        <div className="benefit-item benefit-item-6">
          <img src={description} alt="Benefit icon" className="benefit-icon" />
          <p>Ensures security in the neighborhood</p>
        </div>
      </div>
    </div>
  );
};

export default PlatformBenefits;
