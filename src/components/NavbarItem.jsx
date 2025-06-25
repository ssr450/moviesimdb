"use client";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';  
import React from 'react';

export default function NavbarItem({ title, param, className, hoverClass, isActive }) {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  return (
    <Link
      href={`/?genre=${param}`}
      className={`
        ${className}
        ${hoverClass}
        ${isActive ? 'underline underline-offset-4 font-bold text-white' : ''}
      `}
    >
      {title}
    </Link>
  );
}
