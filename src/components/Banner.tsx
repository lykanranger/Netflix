import { useState, useEffect } from 'react';
import { Play, Info } from 'lucide-react';
import { Movie, imageUrl } from '../lib/tmdb';

type BannerProps = {
  movies: Movie[];
  onInfoClick: (movie: Movie) => void;
};

export default function Banner({ movies, onInfoClick }: BannerProps) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (movies.length > 0) {
      setMovie(movies[Math.floor(Math.random() * movies.length)]);
    }
  }, [movies]);

  if (!movie) return null;

  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <div className="relative h-[70vh] md:h-[85vh] w-full group">
      {/* Background Image & Gradients - Added pointer-events-none to prevent click hijacking */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url(${imageUrl.original(movie.backdrop_path || movie.poster_path)})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content Container - Added z-10 to ensure it sits above background */}
      <div className="relative z-10 h-full flex items-center px-4 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-2xl pt-16 md:pt-0">
          <h1 className="text-white text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            {movie.title || movie.name}
          </h1>

          <p className="text-white text-sm md:text-lg mb-6 leading-relaxed shadow-lg drop-shadow-md">
            {truncate(movie.overview, 150)}
          </p>

          <div className="flex gap-3">
            <button 
              onClick={() => onInfoClick(movie)}
              className="flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-white text-black font-semibold rounded hover:bg-opacity-80 transition-all active:scale-95 cursor-pointer"
            >
              <Play size={24} fill="currentColor" />
              <span className="text-sm md:text-lg">Play</span>
            </button>

            <button
              onClick={() => onInfoClick(movie)}
              className="flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-neutral-600/70 text-white font-semibold rounded hover:bg-neutral-600/50 transition-all active:scale-95 cursor-pointer"
            >
              <Info size={24} />
              <span className="text-sm md:text-lg">More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
