import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MovieGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, SetGenre] = useState("All Genres");
  const [rating, SetRating] = useState("All");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
    // const m = ["a","b","c"] fake array to learn
    // setMovies(m);
  }, []);

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleGenreTerm = (e) => {
    SetGenre(e.target.value);
  };
  const handleRatingTerm = (e) => {
    SetRating(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filteredMovies = movies.filter(
    (movie) =>
      //movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      matchesGenre(movie, genre) && matchesSearchTerm(movie, searchTerm)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="search movie..."
        className="search-input"
        value={searchTerm}
        onChange={handleSearchTerm}
      />
      <div className="filter-bar">
        <div className="fiter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreTerm}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="fiter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingTerm}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}
