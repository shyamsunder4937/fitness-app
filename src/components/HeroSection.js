import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-text">PREMIUM FITNESS CENTER</span>
        </div>
        <h1 className="hero-title animate-slide-up">
          <span className="hero-title-highlight">Professional</span>
          <br /> 
          Fitness Training
        </h1>
        <p className="hero-subtitle animate-slide-up">
          Experience world-class training with state-of-the-art equipment and certified professional trainers
        </p>
        <div className="hero-buttons animate-slide-up">
          <Link to="/exercises" className="explore-button">
            Start Training
          </Link>
          <Link to="/programs" className="learn-more-button">
            View Programs
          </Link>
        </div>
        <div className="hero-stats animate-fade-in">
          <div className="stat-item">
            <span className="stat-number">25+</span>
            <span className="stat-label">YEARS EXPERIENCE</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">150+</span>
            <span className="stat-label">CERTIFIED TRAINERS</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">SUCCESS STORIES</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">ELITE PROGRAMS</span>
          </div>
        </div>
      </div>
      
      <div className="hero-image-container animate-fade-in">
        <div className="image-shape"></div>
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
          alt="Professional Fitness Training"
          className="hero-image" 
        />
      </div>
    </section>
  );
};

export default HeroSection; 