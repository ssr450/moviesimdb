import Image from 'next/image';

export default async function MoviePage({ params }) {
  const movieId = params.id;

  // Fetch movie data with error handling
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  if (!res.ok) {
    // Show error message if fetch failed
    return (
      <div className="max-w-6xl mx-auto p-4 text-center text-red-600">
        Failed to load movie data: {res.status} {res.statusText}
      </div>
    );
  }

  const movie = await res.json();

  // Choose image path or fallback to null
  const imagePath = movie.backdrop_path || movie.poster_path;

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        {imagePath ? (
          <Image
            src={`https://image.tmdb.org/t/p/original/${imagePath}`}
            alt={movie.title || movie.name || 'Movie Image'}
            width={500}
            height={300}
            className="rounded-lg"
            style={{ maxWidth: '100%', height: '100%' }}
          />
        ) : (
          <div className="w-[500px] h-[300px] bg-gray-300 flex items-center justify-center rounded-lg text-gray-600">
            No Image Available
          </div>
        )}

        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name || 'No Title'}
          </h2>
          <p className="text-lg mb-3">{movie.overview || 'No overview available.'}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date || 'N/A'}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count ?? 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
}
