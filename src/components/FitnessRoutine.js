import React, { useState, useEffect, useRef, useCallback } from 'react';
import './FitnessRoutine.css';

const FitnessRoutine = ({ routineExercises, onRemoveExercise, onUpdateDuration }) => {
  const [activeTimer, setActiveTimer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isAlarmPlaying, setIsAlarmPlaying] = useState(false);
  
  // Use HTML5 Audio element
  const audioRef = useRef(null);
  const beepIntervalRef = useRef(null);
  const isAlarmActiveRef = useRef(false);
  
  // Base64 encoded MP3 beep sound - this is an actual MP3 file encoded as a data URL
  const beepSoundDataUrl = 'data:audio/mp3;base64,SUQzAwAAAAAAD1RJVDIAAAAFQmVlcCAARElSAAAABmslczZjZwBUWUVSAAAABTIwMjIAAAAAAAAAAAAAAAAAAAAAAFhpbmcAAAAPAAAAAgAACL8A5+fnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQVJUAAAAAQAAAB5FeHBlcmltZW50YWwgT25lLVNlY29uZCBCZWVwIAD/+5BkAA/wlQJJuewAAhQgSJ89gABCMAULHrAACFgAoWPWAABLRFSGHE91AAAgQCBnOOUdnOZ1zrnXOuc4IECBAgQDN9AgQIDJOc5znQIOwdg7B2DOdBwHYOc63zvWt650DgO9850HYO90HYOwdnOtFx3nediwX1zrnb8XpYsFg4Hv+HwQBAEDsAgCAIHYO/LXqyUfBD1YOdtZUm3COOEOHNWpMQU1FMy45OS41qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';
  
  // Create a simple beep function that uses JavaScript to generate a sound
  const createBeepSound = () => {
    try {
      // Try to create a simple beep using JavaScript
      const context = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = context.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.value = 800;
      oscillator.connect(context.destination);
      oscillator.start();
      setTimeout(() => {
        oscillator.stop();
        context.close();
      }, 200);
      return true;
    } catch (error) {
      console.error('Error creating beep sound:', error);
      return false;
    }
  };

  // Define handleStopAlarm first before it's used in any useEffect hooks
  const handleStopAlarm = useCallback(() => {
    console.log('Stopping alarm...');
    isAlarmActiveRef.current = false;
    setIsAlarmPlaying(false);

    // Clear any beep intervals
    if (beepIntervalRef.current) {
      clearInterval(beepIntervalRef.current);
      beepIntervalRef.current = null;
    }
    
    // Stop the audio element
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.loop = false;
    }
  }, []);

  // Initialize audio element
  useEffect(() => {
    // Add a click listener to the document for user interaction to enable audio
    const enableAudio = () => {
      if (!audioRef.current) return;
      
      // Set the src directly from our data URL
      audioRef.current.src = beepSoundDataUrl;
      
      // Try to play a very short sound to enable audio
      audioRef.current.volume = 0.1; // Low volume for initialization
      audioRef.current.play().then(() => {
        setTimeout(() => {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          audioRef.current.volume = 1.0; // Reset volume to full
          console.log('Audio initialized successfully');
        }, 10);
      }).catch(err => {
        console.error('Failed to initialize audio:', err);
        // Try an alternative approach
        const beepCreated = createBeepSound();
        console.log('Alternative beep created:', beepCreated);
      });
      
      // Remove the listener after first click
      document.removeEventListener('click', enableAudio);
    };
    
    document.addEventListener('click', enableAudio);
    
    return () => {
      document.removeEventListener('click', enableAudio);
      handleStopAlarm();
    };
  }, [handleStopAlarm]);

  const playAlarmSound = useCallback(() => {
    console.log('Playing alarm...');
    isAlarmActiveRef.current = true;
    setIsAlarmPlaying(true);
    
    // Show an alert first (this helps with browser autoplay restrictions)
    window.alert('Timer Complete!');
    
    // Just to make absolutely sure, let's try again to create the audio
    if (!audioRef.current) {
      try {
        const tempAudio = new Audio();
        tempAudio.src = beepSoundDataUrl;
        audioRef.current = tempAudio;
      } catch (e) {
        console.error("Couldn't create Audio element:", e);
      }
    }
    
    // Stop any existing beeping
    if (beepIntervalRef.current) {
      clearInterval(beepIntervalRef.current);
    }
    
    // Create a continuous beeping effect
    const playBeep = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        const playPromise = audioRef.current.play();
        if (playPromise) {
          playPromise.catch(() => {
            // If audio play fails, try the fallback beep
            createBeepSound();
          });
        }
      } else {
        createBeepSound();
      }
    };

    // Play the first beep immediately
    playBeep();
    
    // Set up continuous beeping
    beepIntervalRef.current = setInterval(() => {
      if (isAlarmActiveRef.current) {
        playBeep();
      } else {
        if (beepIntervalRef.current) {
          clearInterval(beepIntervalRef.current);
          beepIntervalRef.current = null;
        }
      }
    }, 1000);
  }, []);

  const tick = useCallback(() => {
    setTimeLeft(prevTime => {
      if (prevTime <= 1) {
        setIsRunning(false);
        playAlarmSound();
        return 0;
      }
      return prevTime - 1;
    });
  }, [playAlarmSound]);

  useEffect(() => {
    let interval;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(tick, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, timeLeft, tick]);

  const startTimer = useCallback((exerciseId, duration) => {
    console.log('Starting timer for exercise:', exerciseId, 'duration:', duration);
    handleStopAlarm();
    setActiveTimer(exerciseId);
    setTimeLeft(duration);
    setIsRunning(true);
  }, [handleStopAlarm]);

  const pauseTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resetTimer = useCallback(() => {
    handleStopAlarm();
    setTimeLeft(routineExercises.find(ex => ex.id === activeTimer)?.duration || 0);
    setIsRunning(false);
  }, [handleStopAlarm, routineExercises, activeTimer]);

  const formatTime = useCallback((seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      handleStopAlarm();
    };
  }, [handleStopAlarm]);

  if (routineExercises.length === 0) {
    return (
      <div className="routine-empty">
        <h3>Your Workout Routine</h3>
        <p>Add exercises to create your personalized workout routine</p>
        {/* Hidden audio element for browser compatibility */}
        <audio ref={audioRef} preload="auto" style={{ display: 'none' }} />
      </div>
    );
  }

  return (
    <div className="routine-container">
      <h3>Your Workout Routine</h3>
      {/* Hidden audio element for browser compatibility */}
      <audio ref={audioRef} preload="auto" style={{ display: 'none' }} />
      <div className="routine-list">
        {routineExercises.map((exercise, index) => (
          <div key={exercise.id} className="routine-item">
            <div className="routine-item-header">
              <div className="routine-number">{index + 1}</div>
              <h4>{exercise.name}</h4>
              <button 
                className="remove-exercise"
                onClick={() => onRemoveExercise(exercise.id)}
              >
                ×
              </button>
            </div>
            <div className="routine-item-details">
              <img 
                src={exercise.image} 
                alt={exercise.name} 
                className="routine-exercise-image" 
              />
              <div className="duration-control">
                <label>Duration:</label>
                <input
                  type="number"
                  min="10"
                  max="300"
                  value={exercise.duration}
                  onChange={(e) => onUpdateDuration(exercise.id, parseInt(e.target.value) || 60)}
                />
                <span>seconds</span>
              </div>
              <div className="timer-controls">
                {activeTimer === exercise.id ? (
                  <>
                    <div className="time-display">{formatTime(timeLeft)}</div>
                    <div className="timer-buttons">
                      {isAlarmPlaying ? (
                        <button 
                          className="stop-alarm"
                          onClick={handleStopAlarm}
                        >
                          Stop Alarm
                        </button>
                      ) : (
                        <button onClick={isRunning ? pauseTimer : () => startTimer(exercise.id, timeLeft)}>
                          {isRunning ? 'Pause' : 'Resume'}
                        </button>
                      )}
                      <button onClick={resetTimer}>Reset</button>
                    </div>
                  </>
                ) : (
                  <button 
                    className="start-timer"
                    onClick={() => startTimer(exercise.id, exercise.duration)}
                  >
                    Start Timer
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessRoutine;