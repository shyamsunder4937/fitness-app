import React, { useState } from 'react';
import './WorkoutTypeSelector.css';

const WorkoutTypeSelector = ({ onSelect, selectedType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const workoutTypes = [
    { id: 'cardio', name: 'Cardio', icon: '🏃‍♂️' },
    { id: 'chest-triceps', name: 'Chest & Triceps', icon: '💪' },
    { id: 'back-biceps', name: 'Back & Biceps', icon: '🏋️‍♂️' },
    { id: 'shoulders', name: 'Shoulders', icon: '🏋️' },
    { id: 'legs', name: 'Legs', icon: '🦵' },
    { id: 'core', name: 'Core', icon: '🎯' },
    { id: 'full-body', name: 'Full Body', icon: '⚡' },
  ];

  const handleSelect = (type) => {
    setIsOpen(false);
    onSelect(type);
  };

  // Show modal on first render if no workout type is selected
  React.useEffect(() => {
    if (!selectedType) {
      setIsOpen(true);
    }
  }, [selectedType]);

  return (
    <>
      {!selectedType && (
        <div className="workout-type-prompt">
          <h2>Select a workout type to get started</h2>
          <button className="change-workout-btn" onClick={() => setIsOpen(true)}>
            Choose Workout
          </button>
        </div>
      )}
      
      {selectedType && (
        <button className="change-workout-btn" onClick={() => setIsOpen(true)}>
          Change Workout Type
        </button>
      )}

      {isOpen && (
        <div className="workout-selector-overlay">
          <div className="workout-selector-modal">
            <h2>{selectedType ? 'Change Workout Type' : 'Select Today\'s Workout'}</h2>
            <div className="workout-types-grid">
              {workoutTypes.map((type) => (
                <button
                  key={type.id}
                  className={`workout-type-button ${selectedType?.id === type.id ? 'selected' : ''}`}
                  onClick={() => handleSelect(type)}
                >
                  <span className="workout-type-icon">{type.icon}</span>
                  <span className="workout-type-name">{type.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkoutTypeSelector; 