// src/components/Movie.js
import React, { useState } from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import './Movie.css'; // Import the CSS file

function Movie({ movie }) {
  // State to manage movie reviews
  const [reviews, setReviews] = useState(movie.reviews);

  // Function to add a new review
  const addReview = (newReview) => {
    // Add the date and time to the new review
    newReview.dateTime = new Date().toLocaleString();

     // Update the reviews state with the new review
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="movie-container">
      <div className="movie">
        {/* Display movie details */}
        <img
          src={process.env.PUBLIC_URL + '/' + movie.poster}
          alt={movie.title}
          style={{ width: '200px', height: '275px', borderRadius: '10px' }}
        />
        <h2>{movie.title}</h2>
        <p>{movie.synopsis}</p>

        {/* Display movie rating */}
        <div className="rating">
          <p>Rated: {movie.rating}</p>

          {/* Display the review form for adding new reviews */}
          <div className="review-form-container">
            <ReviewForm movieId={movie.id} onReviewSubmit={addReview} />
          </div>
        </div>

        {/* Display the list of reviews */}
        <div className="review-list-container">
          <ReviewList reviews={reviews} />
        </div>
      </div>
    </div>
  );
}

export default Movie;
