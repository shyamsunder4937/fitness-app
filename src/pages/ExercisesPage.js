import React, { useState, useEffect } from 'react';
import './ExercisesPage.css';
import ExerciseList from '../components/ExerciseList';
import WorkoutTypeSelector from '../components/WorkoutTypeSelector';

const ExercisesPage = () => {
  const [selectedWorkoutType, setSelectedWorkoutType] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showWorkoutSelector, setShowWorkoutSelector] = useState(false);

  const bannerSlides = [
    {
      title: "Welcome to Core Fitness 24/7",
      subtitle: "Your Journey to a Healthier Life Starts Here",
      image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f",
      color: "#1976D2",
      isWelcome: true
    },
    {
      title: "Transform Your Body",
      subtitle: "Expert-guided workouts for every fitness level",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
      color: "#4CAF50"
    },
    {
      title: "Build Strength",
      subtitle: "Professional training programs designed for results",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
      color: "#FF5722"
    },
    {
      title: "Achieve Your Goals",
      subtitle: "Personalized workouts to reach your fitness targets",
      image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff",
      color: "#2196F3"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  const handleWorkoutTypeSelect = (workoutType) => {
    setSelectedWorkoutType(workoutType);
  };

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };

  const getFilteredExercises = (exercises) => {
    if (!selectedWorkoutType) return exercises;

    const filterMap = {
      'cardio': (exercise) => exercise.category === 'Cardio',
      'chest-triceps': (exercise) => 
        exercise.muscle.toLowerCase().includes('chest') || 
        exercise.muscle.toLowerCase().includes('triceps'),
      'back-biceps': (exercise) => 
        exercise.muscle.toLowerCase().includes('back') || 
        exercise.muscle.toLowerCase().includes('biceps'),
      'shoulders': (exercise) => 
        exercise.muscle.toLowerCase().includes('shoulders'),
      'legs': (exercise) => 
        exercise.muscle.toLowerCase().includes('legs') || 
        exercise.muscle.toLowerCase().includes('glutes'),
      'core': (exercise) => 
        exercise.muscle.toLowerCase().includes('core') ||
        exercise.muscle.toLowerCase().includes('abs'),
      'full-body': (exercise) => 
        exercise.muscle.toLowerCase().includes('full body') ||
        exercise.category === 'Compound'
    };

    return exercises.filter(filterMap[selectedWorkoutType.id] || (() => true));
  };

  return (
    <div className="exercises-page">
      <div className="interactive-banner">
        <div className="banner-slider" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {bannerSlides.map((slide, index) => (
            <div 
              key={index} 
              className={`banner-slide ${slide.isWelcome ? 'welcome-slide' : ''}`}
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${slide.image})` 
              }}
            >
              <div className="slide-content">
                {slide.isWelcome ? (
                  <>
                    <div className="welcome-text">
                      <h1 className="welcome-title">
                        {slide.title.split(' ').map((word, i) => (
                          <span key={i} className="welcome-word" style={{ animationDelay: `${i * 0.2}s` }}>
                            {word}{' '}
                          </span>
                        ))}
                      </h1>
                      <p className="welcome-subtitle" style={{ animationDelay: '1.5s' }}>
                        {slide.subtitle}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
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
                  </>
                )}
                <button 
                  className="start-button animated-text" 
                  style={{ 
                    animationDelay: slide.isWelcome ? '2s' : '0.7s',
                    backgroundColor: slide.color 
                  }}
                  onClick={() => {
                    setShowWorkoutSelector(true);
                    document.querySelector('.exercises-content')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {slide.isWelcome ? "Begin Your Fitness Journey" : "Start Your Journey"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="banner-dots">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              className={`dot ${activeSlide === index ? 'active' : ''}`}
              onClick={() => handleSlideClick(index)}
              style={{ backgroundColor: activeSlide === index ? bannerSlides[index].color : undefined }}
            />
          ))}
        </div>
      </div>

      <div className="exercises-content">
        {showWorkoutSelector ? (
          <>
            <WorkoutTypeSelector 
              onSelect={handleWorkoutTypeSelect} 
              selectedType={selectedWorkoutType}
            />
            {selectedWorkoutType && <ExerciseList filterFunction={getFilteredExercises} />}
          </>
        ) : (
          <div className="start-prompt">
            <h2>Click "Start Your Journey" to begin your fitness journey!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExercisesPage; 