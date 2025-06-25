import React from 'react';

export default function Card({ result }) {
  return (
    <div className="rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
      {/* Poster image */}
      <img
        src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
        alt={result.title || result.name}
        className="w-full h-auto object-cover"
      />
      {/* Title below the image */}
      <h2 className="mt-2 text-center text-lg font-semibold text-shadow-violet-900 dark:text-shadow-violet-400 truncate px-2">
        {result.title || result.name}
      </h2>
    </div>
  );
}
