import React from "react";

const MovieCard = ({ movie, onAdd }) => {
  return (
    <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden">
      <img
        src={`src/img/${movie.img}.jpg`}
        alt={movie.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-white text-lg text-center font-bold mb-2">
          {movie.name}
        </h2>
        <button
          onClick={() => onAdd(movie)}
          className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white py-3 px-5 rounded-xl w-full font-bold shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          <i className="ph ph-plus"></i> Agregar película
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
