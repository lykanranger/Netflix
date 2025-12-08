import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie, imageUrl } from '../lib/tmdb';

type MovieRowProps = {
  title: string;
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
};

export default function MovieRow({ title, movies, onMovieClick }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-4 md:px-12 mb-8 group/row">
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-2 ml-1">{title}</h2>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-20 w-12 bg-black/50 text-white opacity-0 group-hover/row:opacity-100 hover:bg-black/70 transition-all duration-300 flex items-center justify-center h-full rounded-r-md"
        >
          <ChevronLeft size={40} />
        </button>

        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth py-6 px-1 items-center"
        >
          {movies.map((movie) => (
            <button
              key={`${movie.id}-${movie.title || movie.name}`}
              onClick={() => onMovieClick(movie)}
              className="group/card flex-shrink-0 w-40 md:w-48 aspect-[2/3] relative transition-transform duration-300 hover:scale-110 hover:z-10 focus:outline-none"
            >
              <img
                src={imageUrl.w500(movie.poster_path)}
                alt={movie.title || movie.name}
                className="w-full h-full object-cover rounded-md shadow-lg group-hover/card:shadow-black/50"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-20 w-12 bg-black/50 text-white opacity-0 group-hover/row:opacity-100 hover:bg-black/70 transition-all duration-300 flex items-center justify-center h-full rounded-l-md"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}