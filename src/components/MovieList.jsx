import React, { useEffect, useState } from "react";
import movies from "../db/movies.json";
import MovieCard from "./MovieCard";

const MovieList = ({ setWatchlist, watchlist }) => {
  useEffect(() => {
    const savedWatchList = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(savedWatchList);
  }, []);

  const handleAddToWatchlist = (movie) => {
    const updatedList = [...watchlist, movie];
    setWatchlist(updatedList);
    localStorage.setItem("watchlist", JSON.stringify(updatedList));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onAdd={handleAddToWatchlist} />
      ))}
    </div>
  );
};

export default MovieList;
