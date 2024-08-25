import React from 'react';
import './DescriptionPage.css';
import street_light from './street-light.png';
import cloud from './cloud-based Management system.png';
import users from './users-image.png';
import gateway from './gateway.png';
import evaluation from './evaluation-image.png';


function EcosystemSection() {
  return (
    <section className="ecosystem-section">
      <h2>Ecosystem</h2>
      <h3>How does a smart street light ecosystem work?</h3>
      <div className="ecosystem-grid">
        <div className="grid-item">
          <div className="image-wrapper">
          <img className="street-light-image" src= {street_light} alt="Street Light Controller" />
        </div>
          <p>Street Light Controller</p>
          <p>Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp.</p>
        </div>
        <div className="grid-item-gateway">
        <div className="image-wrapper">
          <img className ="gateway-image" src= {gateway} alt="Gateway" />
        </div>
        <div className = "gateway-title">
          <p>Gateway</p>
        </div>  
        <div className= "gateway-content">
          <p>Employed for interfacing between a Controller and the Lighting Management Software.</p>
        </div> 
        </div>
        <div className="grid-item-cloud">
        <div className="image-wrapper">
          <img className = "cloud-image" src= {cloud} alt="Cloud-based Management System" />
        </div>
        <div className="cloud-information-heading">
        <h1> Cloud-based Management System </h1>
        </div>
        <div className = "collect-information-data.">
        <p>Collects information from multiple gateways.</p>
        </div>
        </div>
        <div className="grid-item-users">
        <div className="image-wrapper">
          <img className ="users-image" src= {users} alt="Users" />
        </div>
        <div className = "users-heading">
        <p>Users</p>
        </div>
        <div className = "users-data">
        <p>Data from the cloud is used to monitor and control street lights by the System Managers.</p>
        </div>
        </div>
        <div className="grid-item-evaluation">
        <div className="image-wrapper">
          <img className ="evaluation-image" src= {evaluation} alt="Evaluation" />
        </div>
        <div className ="evaluation-heading">
          <p>Evaluation</p>
        </div>
         <div className = "evaluation-data">
         <p>Gathered insights are used to evaluate the performance of the lighting systems.</p>
         </div>
        </div>
      </div>
    </section>
  );
}

export default EcosystemSection;
