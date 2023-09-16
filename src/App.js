// src/App.js
import React from 'react';
import './App.css'; // Add your CSS styles here
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
      <h1>Movie Review App</h1>
      <MovieList />
    </div>
  );
}

export default App;
