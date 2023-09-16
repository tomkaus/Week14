// src/MovieList.js
import React from 'react';
import Movie from './components/Movie';
import moviesData from './data';

function MovieList() {
  // Group movies into rows with three movies each
  const rows = [];
  for (let i = 0; i < moviesData.length; i += 3) {
    const rowMovies = moviesData.slice(i, i + 3);
    rows.push(rowMovies);
  }

  return (
    <div className="movie-list">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="movie-row">
          {row.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
