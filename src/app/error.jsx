'use client'
import React, { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1>Something went wrong. Please try again later.</h1>
      <button className="hover:text-purple-500" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
