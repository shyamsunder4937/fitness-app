import React, { useState } from 'react';
import './EnrollmentModal.css';

const EnrollmentModal = ({ program, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    startDate: '',
    preferredTime: '',
    paymentPlan: 'monthly'
  });
  const [errors, setErrors] = useState({});

  const validateStep = (currentStep) => {
    const newErrors = {};
    
    if (currentStep === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    }
    
    if (currentStep === 2) {
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (!formData.startDate) newErrors.startDate = 'Start date is required';
      if (!formData.preferredTime) newErrors.preferredTime = 'Preferred time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(step)) {
      // Handle form submission
      console.log('Form submitted:', formData);
      // Show success step
      setStep(4);
    }
  };

  const renderProgressBar = () => (
    <div className="form-progress">
      {[1, 2, 3].map((stepNumber) => (
        <div
          key={stepNumber}
          className={`progress-step ${step >= stepNumber ? 'active' : ''} ${step > stepNumber ? 'completed' : ''}`}
        >
          {step > stepNumber ? '✓' : stepNumber}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="form-step">
      <h2>Personal Information</h2>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={`form-input ${errors.firstName ? 'error' : ''}`}
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name"
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={`form-input ${errors.lastName ? 'error' : ''}`}
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter your last name"
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          className={`form-input ${errors.email ? 'error' : ''}`}
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email address"
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="form-step">
      <h2>Schedule Preferences</h2>
      <div className="form-group">
        <label className="form-label" htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className={`form-input ${errors.phone ? 'error' : ''}`}
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          className={`form-input ${errors.startDate ? 'error' : ''}`}
          value={formData.startDate}
          onChange={handleInputChange}
        />
        {errors.startDate && <span className="error-message">{errors.startDate}</span>}
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="preferredTime">Preferred Time</label>
        <select
          id="preferredTime"
          name="preferredTime"
          className={`form-select ${errors.preferredTime ? 'error' : ''}`}
          value={formData.preferredTime}
          onChange={handleInputChange}
        >
          <option value="">Select preferred time</option>
          <option value="morning">Morning (6AM - 12PM)</option>
          <option value="afternoon">Afternoon (12PM - 5PM)</option>
          <option value="evening">Evening (5PM - 10PM)</option>
        </select>
        {errors.preferredTime && <span className="error-message">{errors.preferredTime}</span>}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="form-step">
      <h2>Payment Plan</h2>
      <div className="payment-options">
        <div
          className={`payment-option ${formData.paymentPlan === 'monthly' ? 'selected' : ''}`}
          onClick={() => handleInputChange({ target: { name: 'paymentPlan', value: 'monthly' } })}
        >
          <h3>Monthly Plan</h3>
          <p className="price">$49.99/month</p>
          <ul className="benefits-list">
            <li>Full access to gym facilities</li>
            <li>2 personal training sessions</li>
            <li>Access to group classes</li>
            <li>Cancel anytime</li>
          </ul>
        </div>
        <div
          className={`payment-option ${formData.paymentPlan === 'annual' ? 'selected' : ''}`}
          onClick={() => handleInputChange({ target: { name: 'paymentPlan', value: 'annual' } })}
        >
          <h3>Annual Plan</h3>
          <p className="price">$39.99/month</p>
          <p className="savings">Save 20%</p>
          <ul className="benefits-list">
            <li>All Monthly Plan benefits</li>
            <li>4 personal training sessions</li>
            <li>Free fitness assessment</li>
            <li>Premium app features</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="success-message">
      <div className="success-icon">✓</div>
      <h2 className="success-title">Enrollment Successful!</h2>
      <p className="success-text">
        Thank you for enrolling in {program || 'our fitness program'}. We've sent a confirmation email to {formData.email} with your program details.
      </p>
      <button className="submit-button" onClick={onClose}>
        Close
      </button>
    </div>
  );

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>×</button>
        
        {step < 4 && (
          <>
            <div className="modal-header">
              <h2 className="modal-title">Enroll in {program}</h2>
              <p className="modal-subtitle">Complete your enrollment in 3 easy steps</p>
            </div>
            
            <div className="modal-content">
              {renderProgressBar()}
              
              <form onSubmit={handleSubmit}>
                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}
                
                <div className="form-navigation">
                  {step > 1 && (
                    <button type="button" className="back-button" onClick={handleBack}>
                      Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button type="button" className="submit-button" onClick={handleNext}>
                      Next
                    </button>
                  ) : (
                    <button type="submit" className="submit-button">
                      Complete Enrollment
                    </button>
                  )}
                </div>
              </form>
            </div>
          </>
        )}
        
        {step === 4 && renderSuccess()}
      </div>
    </div>
  );
};

export default EnrollmentModal; 