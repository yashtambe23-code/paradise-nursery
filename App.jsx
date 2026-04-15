import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing">
      <h1 style={{ color: 'white', fontSize: '4rem', textShadow: '2px 2px 8px green' }}>
        Paradise Nursery
      </h1>
      <p style={{ color: 'white', fontSize: '1.5rem', margin: '20px' }}>
        Bring life to your home with our beautiful plants
      </p>
      <button 
        style={{ 
          padding: '12px 32px', 
          fontSize: '1.2rem', 
          backgroundColor: '#2e7d32', 
          color: 'white', 
          border: 'none', 
          borderRadius: '30px',
          cursor: 'pointer'
        }}
        onClick={() => window.location.href = '/products'}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
