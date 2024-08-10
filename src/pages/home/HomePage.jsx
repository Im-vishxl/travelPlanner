import React, { useState } from 'react';
import './homepage.css';

function HomePage() {
  const [startPoint, setStartPoint] = useState('');
  const [destination, setDestination] = useState('');

  const handleStartChange = (e) => {
    setStartPoint(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., search for routes
    console.log(`Start: ${startPoint}, Destination: ${destination}`);
  };

  return (
    <div className="homepage">
      <h1>Route Finder</h1>
      <form onSubmit={handleSubmit}>
        <div className="search-box">
          <label>Startingg Point:</label>
          <input
            type="text"
            value={startPoint}
            onChange={handleStartChange}
            placeholder="Enter starting point"
          />
        </div>
        <div className="search-box">
          <label>Destination:</label>
          <input
            type="text"
            value={destination}
            onChange={handleDestinationChange}
            placeholder="Enter destination"
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default HomePage;
