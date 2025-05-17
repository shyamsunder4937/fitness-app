import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <svg 
        className="logo-icon" 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.837 0-16-7.163-16-16S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z" 
          fill="#e03131"
        />
        <path 
          d="M28 14h-4v-2c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2h-4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h4v2c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2h4c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-6 12h-4v-4h-4v-4h4v-4h4v4h4v4h-4v4z" 
          fill="#e03131"
        />
      </svg>
      <span className="logo-text">Core Fitness 24/7</span>
    </div>
  );
};

export default Logo; 