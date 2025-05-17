import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedPrograms from '../components/FeaturedPrograms';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedPrograms />
    </div>
  );
};

export default HomePage; 