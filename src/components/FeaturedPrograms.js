import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPrograms.css';

const programs = [
  {
    title: "Strength Training",
    description: "Build muscle and increase strength with our comprehensive program",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&h=800&q=80"
  },
  {
    title: "Cardio Fitness",
    description: "Improve your endurance and heart health with dynamic workouts",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&h=800&q=80"
  },
  {
    title: "Yoga & Flexibility",
    description: "Enhance flexibility and mental wellness through guided yoga sessions",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&h=800&q=80"
  }
];

const FeaturedPrograms = () => {
  return (
    <section className="featured-programs">
      <div className="programs-container">
        <h2>Featured Programs</h2>
        <p className="section-description">Choose from our selection of specialized fitness programs</p>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-image">
                <img 
                  src={program.image} 
                  alt={program.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="program-content">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <Link to="/programs" className="program-button">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms; 