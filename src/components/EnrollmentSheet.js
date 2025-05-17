import React from 'react';
import './EnrollmentSheet.css';

const EnrollmentSheet = ({ program, onClose }) => {
  return (
    <div className="enrollment-sheet-overlay">
      <div className="enrollment-sheet">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="enrollment-header">
          <div className="program-badge">{program.duration}</div>
          <h2>{program.title}</h2>
          <p className="program-level">{program.level}</p>
        </div>

        <div className="enrollment-content">
          <div className="price-section">
            <div className="price-label">Program Price</div>
            <div className="price-amount">{program.price}</div>
          </div>

          <div className="features-section">
            <h3>What's Included:</h3>
            <ul>
              {program.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="program-description">
            <h3>Program Description</h3>
            <p>{program.description}</p>
          </div>

          <div className="contact-info">
            <h3>Program Manager</h3>
            <p>K. Shyam Sunder</p>
            <p>Email: shyamsunder3476@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentSheet; 