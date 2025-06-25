'use client';

import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-shadow-violet-900 dark:text-shadow-violet-400 animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 tracking-wide">
        About Movie-Hub
      </h1>

      <p className="text-lg leading-relaxed mb-4">
        Welcome to <span className="font-semibold text-indigo-500 ">Movie-Hub</span> — your ultimate
        destination for everything movies! Whether you're a casual viewer or a die-hard film buff,
        Movie-Hub offers a comprehensive and up-to-date database of films from around the globe.
        From timeless classics to the latest blockbusters, indie hits to international gems, we bring
        you detailed information on cast, crew, release dates, trailers, user ratings, and much more
        — all in one place.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        At <span className="font-semibold text-purple-600">Movie-Hub</span>, our goal is to help you
        discover, explore, and engage with the world of cinema. Create your personal watchlist, leave
        reviews, rate your favorite films, and connect with a community of movie lovers who share your
        passion. Our smart recommendation system also suggests films based on your viewing habits,
        making it easier to find your next favorite movie.
      </p>

      <p className="text-lg leading-relaxed">
        We continuously update our platform with the latest movie data and work closely with film
        studios, distributors, and film festivals to ensure our listings are accurate and rich in
        content. Whether you're researching a role an actor played, looking for critic reviews, or just
        trying to find the perfect movie for tonight, <span className="font-semibold text-purple-700">Movie-Hub</span> is here to guide your cinematic journey.
      </p>
    </div>
  );
}
