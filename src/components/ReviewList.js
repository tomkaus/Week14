import React from 'react';
import Stars from './Stars'; // Import your Stars component
import './ReviewList.css';

function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <div key={review.id} className="review">
          <p>{review.text}</p>
          <div className="rating">
            <Stars rating={review.rating} />
          </div>
          <div className="review-metadata">
            <p>Rating: {review.rating} stars</p>
            <p>Submitted on: {review.dateTime}</p> {/* Display date and time */}
          </div>
          {index < reviews.length - 1 && <hr className="review-separator" />}
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
