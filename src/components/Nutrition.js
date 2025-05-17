import React, { useState, useRef } from 'react';
import './Nutrition.css';

const Nutrition = () => {
  const [activeTab, setActiveTab] = useState('mealPlans');
  const contentRef = useRef(null);
  const tipsRef = useRef(null);
  const [calories, setCalories] = useState({
    weight: '',
    height: '',
    age: '',
    gender: 'male',
    activity: 'moderate',
    result: null
  });

  const mealPlans = [
    {
      title: "Weight Loss Plan",
      description: "Balanced nutrition plan designed for healthy weight loss",
      meals: [
        { time: "Breakfast", items: ["Oatmeal with berries", "Greek yogurt", "Almonds"] },
        { time: "Snack", items: ["Apple", "Protein shake"] },
        { time: "Lunch", items: ["Grilled chicken salad", "Quinoa", "Olive oil dressing"] },
        { time: "Snack", items: ["Carrot sticks", "Hummus"] },
        { time: "Dinner", items: ["Baked salmon", "Roasted vegetables", "Brown rice"] }
      ],
      calories: "1500-1800",
      protein: "120g",
      carbs: "150g",
      fats: "50g"
    },
    {
      title: "Muscle Gain Plan",
      description: "High-protein plan for muscle growth and recovery",
      meals: [
        { time: "Breakfast", items: ["Eggs with spinach", "Whole grain toast", "Protein smoothie"] },
        { time: "Snack", items: ["Banana", "Peanut butter", "Protein bar"] },
        { time: "Lunch", items: ["Turkey wrap", "Sweet potato", "Greek yogurt"] },
        { time: "Snack", items: ["Mixed nuts", "Cottage cheese"] },
        { time: "Dinner", items: ["Lean beef steak", "Quinoa", "Steamed broccoli"] }
      ],
      calories: "2500-3000",
      protein: "180g",
      carbs: "280g",
      fats: "70g"
    }
  ];

  const nutritionTips = [
    {
      title: "Portion Control",
      description: "Learn to control portions using hand measurements",
      tips: [
        "Protein: Palm-sized portion",
        "Carbs: Cupped hand portion",
        "Vegetables: Two fists portion",
        "Fats: Thumb-sized portion"
      ]
    },
    {
      title: "Meal Timing",
      description: "Optimize your meal timing for better results",
      tips: [
        "Eat within 1 hour of waking up",
        "Space meals 3-4 hours apart",
        "Post-workout nutrition within 30 minutes",
        "Avoid heavy meals before bed"
      ]
    },
    {
      title: "Hydration",
      description: "Stay properly hydrated throughout the day",
      tips: [
        "Drink 8-10 glasses of water daily",
        "Monitor urine color (pale yellow is ideal)",
        "Increase intake during exercise",
        "Include electrolyte-rich beverages"
      ]
    }
  ];

  const calculateCalories = () => {
    const { weight, height, age, gender, activity } = calories;
    
    // Basic BMR calculation using Mifflin-St Jeor Equation
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;

    // Activity multiplier
    const multipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };

    const totalCalories = Math.round(bmr * multipliers[activity]);
    setCalories(prev => ({ ...prev, result: totalCalories }));
  };

  const handleStartJourney = () => {
    setActiveTab('calculator');
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleLearnMore = () => {
    setActiveTab('tips');
    setTimeout(() => {
      if (tipsRef.current) {
        tipsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="page-container">
      <div className="nutrition-bg-image"></div>
      <div className="nutrition-container">
        <div className="nutrition-banner">
          <div className="banner-bg">
            <div className="bg-gradient"></div>
            <div className="bg-pattern"></div>
            <div className="banner-image"></div>
            <div className="banner-overlay"></div>
          </div>
          
          <div className="banner-content">
            <div className="banner-badge">
              <span className="badge-icon">☀️</span>
              <span>PERSONALIZED NUTRITION PLANS</span>
            </div>
            
            <h1 className="banner-title">
              <span className="text-gradient">Nourish</span> <span className="text-dark">Your Body,</span><br />
              <span className="text-gradient">Transform</span> <span className="text-dark">Your Life</span>
            </h1>
            
            <p className="banner-subtitle">
              Discover the perfect balance of nutrition with<br />
              personalized meal plans<br />
              and expert guidance tailored to your unique goals
            </p>
            
            <div className="banner-features">
              {[
                {
                  icon: (
                    <svg className="icon-3d" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  ),
                  title: "Expert Guidance",
                  description: "Professional nutrition"
                },
                {
                  icon: (
                    <svg className="icon-3d" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 20V10" />
                      <path d="M18 20V4" />
                      <path d="M6 20v-4" />
                    </svg>
                  ),
                  title: "Progress Tracking",
                  description: "Monitor your transformation"
                },
                {
                  icon: (
                    <svg className="icon-3d" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  ),
                  title: "Personalized Plans",
                  description: "Tailored to your lifestyle"
                }
              ].map((feature, index) => (
                <div key={index} className="feature" style={{ '--feature-index': index }}>
                  <div className="feature-icon" style={{ '--feature-index': index }}>
                    {feature.icon}
                  </div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="banner-cta-group">
              <button className="banner-cta primary" onClick={handleStartJourney}>
                Start Your Journey
              </button>
              <button className="banner-cta secondary" onClick={handleLearnMore}>
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="nutrition-header">
          <h1>Nutrition Planning</h1>
          <p>Customize your nutrition journey with expert guidance and personalized plans</p>
        </div>

        <div className="nutrition-tabs">
          <button 
            className={`tab-button ${activeTab === 'mealPlans' ? 'active' : ''}`}
            onClick={() => setActiveTab('mealPlans')}
          >
            Meal Plans
          </button>
          <button 
            className={`tab-button ${activeTab === 'calculator' ? 'active' : ''}`}
            onClick={() => setActiveTab('calculator')}
          >
            Calorie Calculator
          </button>
          <button 
            className={`tab-button ${activeTab === 'tips' ? 'active' : ''}`}
            onClick={() => setActiveTab('tips')}
          >
            Nutrition Tips
          </button>
        </div>

        <div className="nutrition-content" ref={contentRef}>
          {activeTab === 'mealPlans' && (
            <div className="meal-plans">
              {mealPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className="meal-plan-card"
                  style={{ '--card-index': index }}
                >
                  <h2>{plan.title}</h2>
                  <p className="plan-description">{plan.description}</p>
                  
                  <div className="macros">
                    {[
                      { label: 'Calories', value: plan.calories },
                      { label: 'Protein', value: plan.protein },
                      { label: 'Carbs', value: plan.carbs },
                      { label: 'Fats', value: plan.fats }
                    ].map((macro, macroIndex) => (
                      <div key={macroIndex} className="macro" style={{ '--macro-index': macroIndex }}>
                        <span className="macro-value">{macro.value}</span>
                        <span className="macro-label">{macro.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="meals">
                    {plan.meals.map((meal, mealIndex) => (
                      <div key={mealIndex} className="meal" style={{ '--meal-index': mealIndex }}>
                        <h3>{meal.time}</h3>
                        <ul>
                          {meal.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'calculator' && (
            <div className="calculator-section">
              <div className="calculator-card">
                <h2>Daily Calorie Calculator</h2>
                <div className="calculator-form">
                  {[
                    { label: 'Weight (kg)', value: calories.weight, type: 'weight' },
                    { label: 'Height (cm)', value: calories.height, type: 'height' },
                    { label: 'Age', value: calories.age, type: 'age' }
                  ].map((input, index) => (
                    <div key={index} className="form-group" style={{ '--input-index': index }}>
                      <label>{input.label}</label>
                      <input
                        type="number"
                        value={input.value}
                        onChange={(e) => setCalories(prev => ({ ...prev, [input.type]: e.target.value }))}
                        placeholder={`Enter ${input.type}`}
                      />
                    </div>
                  ))}

                  <div className="form-group" style={{ '--input-index': 3 }}>
                    <label>Gender</label>
                    <select
                      value={calories.gender}
                      onChange={(e) => setCalories(prev => ({ ...prev, gender: e.target.value }))}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ '--input-index': 4 }}>
                    <label>Activity Level</label>
                    <select
                      value={calories.activity}
                      onChange={(e) => setCalories(prev => ({ ...prev, activity: e.target.value }))}
                    >
                      <option value="sedentary">Sedentary (little or no exercise)</option>
                      <option value="light">Light (exercise 1-3 times/week)</option>
                      <option value="moderate">Moderate (exercise 3-5 times/week)</option>
                      <option value="active">Active (exercise 6-7 times/week)</option>
                      <option value="veryActive">Very Active (hard exercise daily)</option>
                    </select>
                  </div>

                  <button className="calculate-button" onClick={calculateCalories}>
                    Calculate Calories
                  </button>

                  {calories.result && (
                    <div className="result">
                      <h3>Your Daily Calorie Needs:</h3>
                      <div className="calorie-result">{calories.result} calories</div>
                      <p className="result-note">
                        This is your estimated maintenance calories. Adjust by ±500 calories for weight loss/gain goals.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="tips-section" ref={tipsRef}>
              {nutritionTips.map((section, index) => (
                <div 
                  key={index} 
                  className="tip-card"
                  style={{ '--card-index': index }}
                >
                  <h2>{section.title}</h2>
                  <p className="tip-description">{section.description}</p>
                  <ul className="tips-list">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} style={{ '--tip-index': tipIndex }}>{tip}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nutrition; 