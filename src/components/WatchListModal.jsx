import React from "react";

const WatchlistModal = ({ watchlist, onClose, onRemove }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-lg p-6 w-full max-w-2xl max-h-[80vh] shadow-2xl border border-gray-700 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          &times;
        </button>

        <h2 className="text-white text-lg font-bold text-center mb-4">
          Tus pelis
        </h2>

        <div className="space-y-4">
          {watchlist.length === 0 ? (
            <p className="text-gray-400 text-center">
              No tienes peliculas en tu lista
            </p>
          ) : (
            watchlist.map((movie) => (
              <div
                key={movie.id}
                className="flex items-center bg-gray-800 rounded-lg shadow-md p-4 space-x-4 border border-gray-700"
              >
                <img
                  src={`src/img/${movie.img}.jpg`}
                  alt={movie.name}
                  className="w-20 h-28 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-white text-lg font-bold">{movie.name}</h3>
                </div>
                <button
                  onClick={() => onRemove(movie.id)}
                  className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white py-2 px-4 rounded-md font-semibold transition-colors duration-300"
                >
                  <i className="ph ph-trash"></i> Eliminar
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchlistModal;
