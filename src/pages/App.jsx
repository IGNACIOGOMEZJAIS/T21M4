import { useState } from "react";
import MovieList from "../components/MovieList";
import Header from "../components/header";
import WatchlistModal from "../components/WatchListModal";
function App() {
  const [watchlist, setWatchlist] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onRemove = (id) => {
    setWatchlist((prev) => prev.filter((movie) => movie.id !== id));
    localStorage.setItem(
      "watchlist",
      JSON.stringify(watchlist.filter((movie) => movie.id !== id))
    )
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-white">
      <Header onOpenWatchlist={() => setIsModalOpen(true)} />

      <main className="flex-grow p-6">
        <MovieList watchlist={watchlist} setWatchlist={setWatchlist} />
      </main>

      {isModalOpen && (
        <WatchlistModal
          watchlist={watchlist}
          onClose={() => setIsModalOpen(false)}
          onRemove={onRemove}
        />
      )}
    </div>
  );
}

export default App;
