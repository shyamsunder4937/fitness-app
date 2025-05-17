import React, { useState, useEffect, useRef } from 'react';
import './ProgramsPage.css';
import EnrollmentSheet from '../components/EnrollmentSheet';

const programs = [
  {
    id: 1,
    title: "Strength Training Elite",
    description: "Transform your physique with our comprehensive strength training program. Expert guidance on compound movements, progressive overload, and muscle optimization techniques.",
    price: "$49.99/month",
    duration: "12 weeks",
    level: "Intermediate to Advanced",
    features: [
      "Personalized workout plans",
      "Nutrition guidance",
      "Progress tracking",
      "1-on-1 coaching sessions"
    ],
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
  },
  {
    id: 2,
    title: "Cardio Performance",
    description: "Master high-intensity cardio training with our advanced program. Features dynamic workouts, interval training, and cutting-edge cardio techniques for maximum fat burn and endurance.",
    price: "$39.99/month",
    duration: "8 weeks",
    level: "All Levels",
    features: [
      "Heart rate zone training",
      "Interval workouts",
      "Fat burning protocols",
      "Performance tracking"
    ],
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=1200&h=800&q=80"
  },
  {
    id: 3,
    title: "Yoga & Mindfulness",
    description: "Unite body and mind with our comprehensive yoga program. Focus on flexibility, strength, balance, and mental wellness through expert-guided sessions.",
    price: "$29.99/month",
    duration: "10 weeks",
    level: "Beginner to Advanced",
    features: [
      "Multiple yoga styles",
      "Meditation sessions",
      "Breathing techniques",
      "Flexibility assessment"
    ],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
  }
];

const bannerSlides = [
  {
    title: "Transform Your Body & Mind",
    subtitle: "Expert-guided programs for every fitness goal",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    color: "#ff3366"
  },
  {
    title: "Strength & Conditioning",
    subtitle: "Build strength, endurance and power with our elite programs",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    color: "#1976D2"
  },
  {
    title: "Mind & Body Balance",
    subtitle: "Holistic programs combining fitness and wellness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    color: "#4CAF50"
  }
];

const ProgramsPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showPrograms, setShowPrograms] = useState(false);
  const programsSectionRef = useRef(null);
  const [selectedProgram, setSelectedProgram] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPrograms = () => {
    setShowPrograms(true);
    setTimeout(() => {
      programsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  const handleCloseEnrollment = () => {
    setSelectedProgram(null);
  };

  return (
    <div className="programs-page">
      <div className="interactive-banner">
        <div 
          className="banner-slider"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {bannerSlides.map((slide, index) => (
            <div 
              key={index}
              className="banner-slide"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide.image})`,
              }}
            >
              <div className="slide-content">
                <div className="banner-badge">
                  <span className="badge-pulse"></span>
                  Elite Training Programs
                </div>
                <h1>
                  {slide.title.split(' ').map((word, i) => (
                    <span key={i} className="animated-text" style={{ animationDelay: `${i * 0.1}s` }}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="animated-text" style={{ animationDelay: '0.5s' }}>
                  {slide.subtitle}
                </p>
                <div className="banner-actions animated-text" style={{ animationDelay: '0.7s' }}>
                  <button className="action-button secondary" onClick={scrollToPrograms}>
                    <span className="button-text">Explore Programs</span>
                    <span className="button-icon">↓</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="banner-dots">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
              style={{ backgroundColor: index === activeSlide ? bannerSlides[index].color : 'transparent' }}
            />
          ))}
        </div>
      </div>

      {showPrograms && (
        <div className="programs-section" ref={programsSectionRef}>
          <div className="programs-header">
            <div className="header-content">
              <span className="premium-badge">ELITE TRAINING PROGRAMS</span>
              <h1>Transform Your Life</h1>
              <p>Choose from our professionally designed programs managed by K. Shyam Sunder (shyamsunder3476@gmail.com)</p>
            </div>
          </div>

          <div className="programs-grid-container">
            {programs.map((program, index) => (
              <div 
                key={program.id} 
                className="program-card"
                style={{ '--card-index': index }}
                onClick={() => handleProgramClick(program)}
              >
                <div className="program-image" style={{ backgroundImage: `url(${program.image})` }}>
                  <div className="program-duration">{program.duration}</div>
                </div>
                <div className="program-content">
                  <div className="program-level">{program.level}</div>
                  <h2>{program.title}</h2>
                  <p className="program-description">{program.description}</p>
                  <div className="program-features">
                    <h3>Program Features:</h3>
                    <ul>
                      {program.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="program-price">{program.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedProgram && (
        <EnrollmentSheet 
          program={selectedProgram} 
          onClose={handleCloseEnrollment}
        />
      )}
    </div>
  );
};

export default ProgramsPage; 