import React from 'react';
import Results from '../components/Results'; // Corrected path

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams?.genre || 'fetchTrending';

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { cache: 'no-store' }
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();
  const results = data.results;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-6">
        Home - {genre === 'fetchTopRated' ? 'Top Rated' : 'Trending'}
      </h1>
      <Results results={results} />
    </main>
  );
}
