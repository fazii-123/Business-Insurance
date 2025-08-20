import React from 'react';
import './Modal.css';

const Modal = ({ agent, onClose }) => {
  if (!agent) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-left-panel">
          <div className="recommended-tag">
            <span>&#9733;</span> RECOMMENDED LOCAL<br />AGENCY
          </div>
          <div className="modal-profile-img-container">
            <img src={agent.image} alt={agent.name} className="modal-profile-img" />
          </div>
        </div>
        <div className="modal-right-panel">
          <h2 className="modal-name">{agent.name} <span className="modal-title-tag">{agent.title}</span></h2>
          <p className="modal-description">{agent.description}</p>
          <div className="modal-rating">
            {"⭐".repeat(Math.floor(agent.rating))}
            {agent.rating}
            <span className="modal-reviews"> ({agent.reviews}) Leave a review</span>
          </div>
          <p className="modal-location">{agent.location}</p>
          <p className="modal-website">{agent.website}</p>
          <div className="modal-services">
            {agent.services.split(", ").map((service, index) => (
              <span key={index} className="modal-service-tag">{service}</span>
            ))}
          </div>
        </div>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default Modal;
