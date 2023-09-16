// src/components/Stars.js
import React, { useState } from 'react';

function Stars({ rating, onRatingChange }) {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (starRating) => {
    onRatingChange(starRating);
  };

  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <img
          key={star}
          src={star <= (hoveredRating || rating) ? '/images/fullStar.png' : '/images/emptyStar.png'}
          alt={`Star ${star}`}
          style={{ width: '20px', height: '20px', cursor: 'pointer' }}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => handleStarClick(star)}
        />
      ))}
    </div>
  );
}

export default Stars;
