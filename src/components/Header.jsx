import React from "react";

const Header = ({ onOpenWatchlist }) => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Pelis</h1>
      <button
        onClick={onOpenWatchlist}
        className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        ver peliculas para mas tarde
      </button>
    </header>
  );
};

export default Header;
