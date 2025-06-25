'use client';

import React from 'react';
import NavbarItem from './NavbarItem';
import { useSearchParams } from 'next/navigation';

export default function Navbar() {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  return (
    <nav className="flex justify-center space-x-8 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white p-5 shadow-lg rounded-md">
      <NavbarItem
        title="Trending"
        param="fetchTrending"
        className="px-4 py-2 rounded-md cursor-pointer transition-colors"
        hoverClass="hover:text-purple-300"
        isActive={genre === 'fetchTrending'}
      />
      <NavbarItem
        title="Top Rated"
        param="fetchTopRated"
        className="px-4 py-2 rounded-md cursor-pointer transition-colors"
        hoverClass="hover:text-purple-300"
        isActive={genre === 'fetchTopRated'}
      />
    </nav>
  );
}
