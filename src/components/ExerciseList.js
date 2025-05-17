import React, { useState } from 'react';
import './ExerciseList.css';
import pushUpImage from '../images/pushup.avif';
import squatsImage from '../images/sqats.jpeg';
import DeadliftImage from '../images/Deadlift.jpeg';
import lungesImage from '../images/lunges.jpeg';
import plankImage from '../images/plank.jpeg';
import pullUpsImage from '../images/pull-ups.jpeg';
import bicycleCrunchesImage from '../images/Bicycle Crunches.jpeg';
import dumbbellRowsImage from '../images/Dumbbell Rows.jpeg';
import jumpingJacksImage from '../images/Jumping Jacks.jpeg';
import burpeesImage from '../images/Burpees.jpeg';
import russianTwistsImage from '../images/Russian Twists.jpeg';
import mountainClimbersImage from '../images/Mountain Climbers.jpeg';
import benchPressImage from '../images/Bench Press.jpeg';
import latPulldownsImage from '../images/Lat Pulldowns.jpeg';
import kettlebellSwingsImage from '../images/Kettlebell Swings.jpeg';
import boxJumpsImage from '../images/Box Jumps.jpeg';
import facePullsImage from '../images/Face Pulls.jpeg';
import bulgarianSplitSquatsImage from '../images/Bulgarian Split Squats.jpeg';
import medicineBallSlamsImage from '../images/Medicine Ball Slams.jpeg';
import dipsImage from '../images/Dips.jpeg';
import FitnessRoutine from './FitnessRoutine';

const ExerciseList = ({ filterFunction }) => {
  const exercises = [
    {
      id: 1,
      name: 'Push-ups',
      muscle: 'Chest, Shoulders, Triceps',
      category: 'Strength',
      difficulty: 'Beginner',
      equipment: 'No Equipment',
      description: 'A compound exercise that targets your chest, shoulders, and triceps while engaging your core.',
      image: pushUpImage,
      instructions: '1. Start in a plank position with your hands shoulder-width apart\n2. Lower your body until your chest nearly touches the floor\n3. Push yourself back up to the starting position\n4. Keep your body in a straight line throughout the movement',
      benefits: 'Increases upper body strength, improves core stability, and can be done anywhere without equipment.',
      variations: 'Knee push-ups, decline push-ups, diamond push-ups, wide push-ups'
    },
    {
      id: 2,
      name: 'Squats',
      muscle: 'Legs, Glutes',
      category: 'Strength',
      difficulty: 'Beginner',
      equipment: 'No Equipment',
      description: 'A fundamental lower body exercise that builds strength in your legs and glutes.',
      image: squatsImage,
      instructions: '1. Stand with feet slightly wider than shoulder-width apart\n2. Bend your knees and hips to lower your body as if sitting in a chair\n3. Keep your chest up and back straight\n4. Lower until thighs are parallel to the ground (or as low as comfortable)\n5. Push through your heels to return to standing',
      benefits: 'Strengthens lower body, improves mobility, builds functional strength for everyday movements.',
      variations: 'Bodyweight squats, goblet squats, front squats, back squats'
    },
    {
      id: 3,
      name: 'Deadlifts',
      muscle: 'Back, Legs, Core',
      category: 'Strength',
      difficulty: 'Intermediate',
      equipment: 'Barbell',
      description: 'A powerful compound exercise that strengthens your posterior chain and improves posture.',
      image: DeadliftImage,
      instructions: '1. Stand with feet hip-width apart, barbell over mid-foot\n2. Bend at hips and knees to grip the bar with hands shoulder-width apart\n3. Keep back flat, chest up, and core tight\n4. Push through heels and stand up, keeping the bar close to your body\n5. Return the weight to the ground with controlled movement',
      benefits: 'Develops total body strength, improves posture, and increases power for athletic performance.',
      variations: 'Conventional deadlift, sumo deadlift, Romanian deadlift, trap bar deadlift'
    },
    {
      id: 4,
      name: 'Lunges',
      muscle: 'Legs, Glutes',
      category: 'Strength',
      difficulty: 'Beginner',
      equipment: 'No Equipment',
      description: 'A unilateral exercise that builds balance, stability, and leg strength.',
      image: lungesImage,
      instructions: '1. Stand tall with feet hip-width apart\n2. Step forward with one leg and lower your body until both knees form 90-degree angles\n3. Front knee should be over ankle, not extending past toes\n4. Push through front heel to return to starting position\n5. Repeat on the other side',
      benefits: 'Improves balance, corrects muscle imbalances, and increases functional lower body strength.',
      variations: 'Forward lunges, reverse lunges, walking lunges, lateral lunges'
    },
    {
      id: 5,
      name: 'Plank',
      muscle: 'Core, Shoulders',
      category: 'Strength',
      difficulty: 'Beginner',
      equipment: 'No Equipment',
      description: 'An isometric exercise that strengthens your core, shoulders, and improves posture.',
      image: plankImage,
      instructions: '1. Start in a forearm plank position with elbows under shoulders\n2. Keep body in a straight line from head to heels\n3. Engage core and glutes\n4. Look slightly forward to maintain neutral neck\n5. Hold the position for the desired time',
      benefits: 'Strengthens core, improves posture, and enhances stability throughout the entire body.',
      variations: 'Forearm plank, high plank, side plank, plank with shoulder taps'
    },
    {
      id: 6,
      name: 'Pull-ups',
      muscle: 'Back, Arms',
      category: 'Strength',
      difficulty: 'Intermediate',
      equipment: 'No Equipment',
      description: 'A challenging bodyweight exercise that builds upper body strength and grip strength.',
      image: pullUpsImage,
      instructions: '1. Hang from a pull-up bar with hands slightly wider than shoulder-width apart\n2. Engage your core and pull your shoulder blades down and back\n3. Pull your body up until your chin clears the bar\n4. Lower yourself with control to the starting position',
      benefits: 'Builds upper body and grip strength, improves posture, and develops functional pulling strength.',
      variations: 'Chin-ups, neutral grip pull-ups, assisted pull-ups, negative pull-ups'
    },
    {
      id: 7,
      name: 'Bicycle Crunches',
      muscle: 'Core',
      category: 'Strength',
      difficulty: 'Beginner',
      equipment: 'No Equipment',
      description: 'An effective abdominal exercise that targets your entire core with a twisting motion.',
      image: bicycleCrunchesImage,
      instructions: '1. Lie on your back with hands behind your head and knees bent\n2. Lift shoulders off the ground and bring right elbow to left knee while extending right leg\n3. Switch sides, bringing left elbow to right knee while extending left leg\n4. Continue alternating sides in a pedaling motion',
      benefits: 'Engages multiple core muscles, strengthens obliques, and improves rotational core strength.',
      variations: 'Slow bicycle crunches, elevated bicycle crunches, weighted bicycle crunches'
    },
    {
      id: 8,
      name: 'Dumbbell Rows',
      muscle: 'Back, Arms',
      category: 'Strength',
      difficulty: 'Beginner',
      equipment: 'Dumbbells',
      description: 'A unilateral back exercise that helps build thickness and strength in your mid-back.',
      image: dumbbellRowsImage,
      instructions: '1. Place right hand and knee on a bench, keeping back flat\n2. Hold dumbbell in left hand with arm extended\n3. Pull dumbbell up to ribcage, keeping elbow close to body\n4. Lower with control and repeat\n5. Switch sides after completing reps',
      benefits: 'Builds back thickness, addresses muscle imbalances, and improves posture.',
      variations: 'One-arm dumbbell row, bent-over row, cable row, inverted row'
    },
    {
      id: 9,
      name: 'Jumping Jacks',
      muscle: 'Full Body',
      category: 'Cardio',
      difficulty: 'Beginner',
      equipment: 'No Equipment',
      description: 'A classic cardio exercise that elevates your heart rate and works your entire body.',
      image: jumpingJacksImage,
      instructions: '1. Stand with feet together and arms at sides\n2. Jump while spreading legs shoulder-width apart and raising arms overhead\n3. Return to starting position with another jump\n4. Repeat at a steady pace',
      benefits: 'Elevates heart rate, improves cardiovascular health, and warms up the entire body.',
      variations: 'Star jumps, cross-jack, low-impact jumping jacks, plyo jacks'
    },
    {
      id: 10,
      name: 'Burpees',
      muscle: 'Full Body',
      category: 'Cardio',
      difficulty: 'Intermediate',
      equipment: 'No Equipment',
      description: 'A high-intensity exercise that combines a squat, push-up, and jump for full-body conditioning.',
      image: burpeesImage,
      instructions: '1. Start in a standing position\n2. Drop into a squat position and place hands on the ground\n3. Kick feet back into a plank position\n4. Perform a push-up\n5. Return feet to squat position\n6. Jump up explosively with arms overhead',
      benefits: 'Provides full-body strength and cardio in one exercise, improves endurance and explosiveness.',
      variations: 'Half burpee, burpee with no push-up, single-leg burpee, burpee box jump'
    },
    {
      id: 11,
      name: 'Russian Twists',
      muscle: 'Core',
      category: 'Strength',
      difficulty: 'Beginner',
      equipment: 'No Equipment',
      description: 'A rotational exercise targeting your obliques and improving core stability.',
      image: russianTwistsImage,
      instructions: '1. Sit on the floor with knees bent and feet elevated slightly\n2. Lean back slightly to engage core, keeping back straight\n3. Clasp hands together or hold a weight at chest level\n4. Rotate torso to touch hands or weight to the floor on each side\n5. Keep legs still throughout the movement',
      benefits: 'Strengthens obliques, improves rotational power, and enhances core stability.',
      variations: 'Weighted Russian twists, feet-down Russian twists, medicine ball Russian twists'
    },
    {
      id: 12,
      name: 'Mountain Climbers',
      muscle: 'Core, Shoulders',
      category: 'Cardio',
      difficulty: 'Beginner',
      equipment: 'No Equipment',
      description: 'A dynamic exercise that works your core while providing cardiovascular benefits.',
      image: mountainClimbersImage,
      instructions: '1. Start in a high plank position with hands under shoulders\n2. Bring right knee toward chest\n3. Quickly switch legs, bringing left knee forward while extending right leg back\n4. Continue alternating legs at a fast pace',
      benefits: 'Combines cardio and core training, improves coordination, and builds shoulder stability.',
      variations: 'Slow mountain climbers, cross-body mountain climbers, sliding mountain climbers'
    },
    {
      id: 13,
      name: 'Bench Press',
      muscle: 'Chest, Shoulders, Triceps',
      category: 'Strength',
      difficulty: 'Intermediate',
      equipment: 'Barbell, Bench',
      description: 'A fundamental upper body exercise that builds chest strength and muscle mass.',
      image: benchPressImage,
      instructions: '1. Lie on a flat bench with feet firmly on the ground\n2. Grip the barbell slightly wider than shoulder-width\n3. Lower the bar to your chest with control\n4. Press the bar back up to starting position\n5. Keep your back flat on the bench throughout',
      benefits: 'Builds upper body strength, develops chest muscles, improves pushing power.',
      variations: 'Dumbbell bench press, incline bench press, decline bench press, close-grip bench press'
    },
    {
      id: 14,
      name: 'Lat Pulldowns',
      muscle: 'Back, Biceps',
      category: 'Strength',
      difficulty: 'Beginner',
      equipment: 'Cable Machine',
      description: 'An excellent exercise for developing back width and strength.',
      image: latPulldownsImage,
      instructions: '1. Sit at a lat pulldown machine with thighs secured\n2. Grip the bar wider than shoulder width\n3. Pull the bar down to your upper chest\n4. Slowly return to starting position with control\n5. Keep your chest up and core engaged',
      benefits: 'Builds back width, improves posture, strengthens pulling muscles.',
      variations: 'Wide grip, close grip, reverse grip, V-bar pulldowns'
    },
    {
      id: 15,
      name: 'Kettlebell Swings',
      muscle: 'Full Body, Glutes, Hamstrings',
      category: 'Cardio',
      difficulty: 'Intermediate',
      equipment: 'Kettlebell',
      description: 'A dynamic exercise that combines strength and cardio while targeting posterior chain.',
      image: kettlebellSwingsImage,
      instructions: '1. Stand with feet shoulder-width apart, kettlebell between feet\n2. Hinge at hips to grasp kettlebell with both hands\n3. Swing kettlebell back between legs\n4. Thrust hips forward to swing kettlebell to shoulder height\n5. Control the descent and repeat',
      benefits: 'Improves explosive power, builds conditioning, strengthens posterior chain.',
      variations: 'One-handed swings, American swings, double kettlebell swings'
    },
    {
      id: 16,
      name: 'Box Jumps',
      muscle: 'Legs, Glutes',
      category: 'Plyometric',
      difficulty: 'Intermediate',
      equipment: 'Plyo Box',
      description: 'A plyometric exercise that builds explosive power in the lower body.',
      image: boxJumpsImage,
      instructions: '1. Stand facing a sturdy box at appropriate height\n2. Bend into quarter squat position\n3. Jump explosively onto box, landing softly\n4. Stand fully upright on box\n5. Step back down and repeat',
      benefits: 'Develops explosive power, improves athletic performance, builds leg strength.',
      variations: 'Step-ups, lateral box jumps, box jump overs, depth jumps'
    },
    {
      id: 17,
      name: 'Face Pulls',
      muscle: 'Shoulders, Upper Back',
      category: 'Strength',
      difficulty: 'Beginner',
      equipment: 'Cable Machine, Resistance Band',
      description: 'An exercise that targets the rear deltoids and improves shoulder health.',
      image: facePullsImage,
      instructions: '1. Set cable machine to head height\n2. Grip rope attachment with both hands\n3. Pull rope towards face, separating hands\n4. Squeeze shoulder blades together\n5. Return to start position with control',
      benefits: 'Improves shoulder health, builds rear deltoids, enhances posture.',
      variations: 'Band face pulls, seated face pulls, high-to-low face pulls'
    },
    {
      id: 18,
      name: 'Bulgarian Split Squats',
      muscle: 'Legs, Glutes',
      category: 'Strength',
      difficulty: 'Intermediate',
      equipment: 'Bench',
      description: 'A unilateral leg exercise that builds strength and balance.',
      image: bulgarianSplitSquatsImage,
      instructions: '1. Stand a few feet in front of a bench\n2. Place one foot behind you on the bench\n3. Lower your back knee toward the ground\n4. Keep front knee aligned with toes\n5. Push through front heel to return to start',
      benefits: 'Improves leg strength, corrects imbalances, enhances stability.',
      variations: 'Bodyweight, dumbbell, barbell, jumping split squats'
    },
    {
      id: 19,
      name: 'Medicine Ball Slams',
      muscle: 'Full Body, Core',
      category: 'Cardio',
      difficulty: 'Beginner',
      equipment: 'Medicine Ball',
      description: 'A high-intensity exercise that builds power and burns calories.',
      image: medicineBallSlamsImage,
      instructions: '1. Stand with feet shoulder-width apart\n2. Lift medicine ball overhead\n3. Forcefully slam ball into ground\n4. Catch ball on bounce or pick it up\n5. Immediately begin next rep',
      benefits: 'Builds explosive power, burns calories, improves core strength.',
      variations: 'Rotational slams, alternating slams, slam to burpee'
    },
    {
      id: 20,
      name: 'Dips',
      muscle: 'Chest, Triceps, Shoulders',
      category: 'Strength',
      difficulty: 'Intermediate',
      equipment: 'Dip Bars',
      description: 'A compound pushing exercise that builds upper body strength.',
      image: dipsImage,
      instructions: '1. Mount dip bars with straight arms\n2. Lower body by bending elbows\n3. Keep chest slightly forward for chest focus\n4. Push back up to starting position\n5. Keep core tight throughout movement',
      benefits: 'Builds upper body strength, develops chest and triceps, improves pressing power.',
      variations: 'Bench dips, weighted dips, straight bar dips, Korean dips'
    }
  ];

  const [selectedFilters, setSelectedFilters] = useState({
    muscle: '',
    difficulty: '',
    equipment: '',
    category: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [routine, setRoutine] = useState([]);

  // Get unique values for filter options
  const filterOptions = {
    muscle: [...new Set(exercises.flatMap(ex => ex.muscle.split(', ')))],
    difficulty: [...new Set(exercises.map(ex => ex.difficulty))],
    category: [...new Set(exercises.map(ex => ex.category))],
    equipment: [...new Set(exercises.map(ex => ex.equipment))]
  };

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  // Get the base filtered exercises
  const getFilteredExercises = () => {
    let filtered = exercises;

    // Apply workout type filter if provided
    if (filterFunction) {
      filtered = filterFunction(filtered);
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(exercise =>
        exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exercise.muscle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exercise.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply other filters
    if (selectedFilters.muscle) {
      filtered = filtered.filter(exercise =>
        exercise.muscle.toLowerCase().includes(selectedFilters.muscle.toLowerCase())
      );
    }
    if (selectedFilters.difficulty) {
      filtered = filtered.filter(exercise =>
        exercise.difficulty === selectedFilters.difficulty
      );
    }
    if (selectedFilters.equipment) {
      filtered = filtered.filter(exercise =>
        exercise.equipment === selectedFilters.equipment
      );
    }
    if (selectedFilters.category) {
      filtered = filtered.filter(exercise =>
        exercise.category === selectedFilters.category
      );
    }

    return filtered;
  };

  // Handle view details click
  const handleViewDetails = (exercise) => {
    setSelectedExercise(exercise);
  };

  // Close exercise details modal
  const closeDetails = () => {
    setSelectedExercise(null);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedFilters({
      muscle: '',
      difficulty: '',
      equipment: '',
      category: ''
    });
    setSearchQuery('');
  };

  // Add exercise to routine
  const addToRoutine = (exercise) => {
    if (!routine.find(item => item.id === exercise.id)) {
      setRoutine([...routine, { ...exercise, duration: 60 }]);
    }
  };

  // Remove exercise from routine
  const removeFromRoutine = (exerciseId) => {
    setRoutine(routine.filter(item => item.id !== exerciseId));
  };

  // Update exercise duration in routine
  const updateExerciseDuration = (exerciseId, newDuration) => {
    setRoutine(routine.map(item => 
      item.id === exerciseId ? { ...item, duration: newDuration } : item
    ));
  };

  return (
    <div className="exercises-container">
      <div className="exercises-header">
        <h2 className="exercises-title">Explore <span className="highlight">Exercises</span></h2>
        <p className="exercises-subtitle">
          Discover effective workouts for every fitness level and target muscle group
        </p>
      </div>

      {/* Fitness Routine Section */}
      <FitnessRoutine 
        routineExercises={routine}
        onRemoveExercise={removeFromRoutine}
        onUpdateDuration={updateExerciseDuration}
      />

      {/* Filter Section */}
      <div className="exercise-filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search exercises by name, muscle group, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="filter-group">
          <label>Muscle Group</label>
          <select 
            value={selectedFilters.muscle}
            onChange={(e) => handleFilterChange('muscle', e.target.value)}
          >
            <option value="">All Muscles</option>
            {filterOptions.muscle.map(muscle => (
              <option key={muscle} value={muscle}>{muscle}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Difficulty</label>
          <select 
            value={selectedFilters.difficulty}
            onChange={(e) => handleFilterChange('difficulty', e.target.value)}
          >
            <option value="">All Levels</option>
            {filterOptions.difficulty.map(difficulty => (
              <option key={difficulty} value={difficulty}>{difficulty}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Category</label>
          <select 
            value={selectedFilters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
          >
            <option value="">All Categories</option>
            {filterOptions.category.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Equipment</label>
          <select 
            value={selectedFilters.equipment}
            onChange={(e) => handleFilterChange('equipment', e.target.value)}
          >
            <option value="">All Equipment</option>
            {filterOptions.equipment.map(equipment => (
              <option key={equipment} value={equipment}>{equipment}</option>
            ))}
          </select>
        </div>

        <button className="clear-filters-btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>

      {/* Results Count */}
      <div className="results-count">
        Showing {getFilteredExercises().length} {getFilteredExercises().length === 1 ? 'exercise' : 'exercises'}
      </div>

      {/* Exercise Grid */}
      <div className="exercise-grid">
        {getFilteredExercises().length > 0 ? (
          getFilteredExercises().map(exercise => (
            <div className="exercise-card" key={exercise.id}>
              <div className="exercise-image-container">
                <img src={exercise.image} alt={exercise.name} className="exercise-image" />
                <div className="exercise-difficulty">{exercise.difficulty}</div>
              </div>
              <div className="exercise-content">
                <h3 className="exercise-name">{exercise.name}</h3>
                <div className="exercise-muscle">{exercise.muscle}</div>
                <p className="exercise-description">{exercise.description}</p>
                <div className="exercise-buttons">
                  <button 
                    className="view-exercise-btn"
                    onClick={() => handleViewDetails(exercise)}
                  >
                    View Details
                  </button>
                  <button 
                    className={`add-to-routine-btn ${routine.find(item => item.id === exercise.id) ? 'added' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToRoutine(exercise);
                    }}
                    disabled={routine.find(item => item.id === exercise.id)}
                  >
                    {routine.find(item => item.id === exercise.id) ? 'Added to Routine' : 'Add to Routine'}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No exercises found matching your filters.</p>
            <button onClick={clearFilters}>Clear All Filters</button>
          </div>
        )}
      </div>

      {/* Exercise Details Modal */}
      {selectedExercise && (
        <div className="exercise-modal-overlay" onClick={closeDetails}>
          <div className="exercise-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeDetails}>×</button>
            
            <div className="modal-content">
              <div className="modal-image-container">
                <img 
                  src={selectedExercise.image} 
                  alt={selectedExercise.name} 
                  className="modal-image" 
                />
              </div>
              
              <div className="modal-details">
                <h2>{selectedExercise.name}</h2>
                <div className="detail-badges">
                  <span className="detail-badge">{selectedExercise.difficulty}</span>
                  <span className="detail-badge category-badge">{selectedExercise.category}</span>
                  <span className="detail-badge muscle-badge">{selectedExercise.muscle}</span>
                  <span className="detail-badge equipment-badge">{selectedExercise.equipment}</span>
                </div>
                
                <div className="detail-section">
                  <h3>Description</h3>
                  <p>{selectedExercise.description}</p>
                </div>
                
                <div className="detail-section">
                  <h3>Instructions</h3>
                  <p className="instructions">{selectedExercise.instructions}</p>
                </div>
                
                <div className="detail-section">
                  <h3>Benefits</h3>
                  <p>{selectedExercise.benefits}</p>
                </div>
                
                <div className="detail-section">
                  <h3>Variations</h3>
                  <p>{selectedExercise.variations}</p>
                </div>

                <button 
                  className={`add-to-routine-btn modal-add-btn ${routine.find(item => item.id === selectedExercise.id) ? 'added' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    addToRoutine(selectedExercise);
                  }}
                  disabled={routine.find(item => item.id === selectedExercise.id)}
                >
                  {routine.find(item => item.id === selectedExercise.id) ? 'Added to Routine' : 'Add to Routine'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseList; 