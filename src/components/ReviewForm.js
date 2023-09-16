// src/components/ReviewForm.js
import React, { useState } from 'react';
import Stars from './Stars';

function ReviewForm({ movieId, onReviewSubmit }) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0); // Initialize rating as 0 (no stars selected)

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a review object with text and rating
    const review = {
      text,
      rating,
    };
    onReviewSubmit(review);
    // Reset the form after submission
    setText('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="star-rating">
        <Stars rating={rating} onRatingChange={handleRatingChange} />
      </div>
      <textarea
        rows="3"
        placeholder="Star it Write it Sign it Submit it"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;
