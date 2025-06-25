import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-start justify-center h-screen">
      <img className="h-24 w-24 mt-40" src="spinner.svg" alt="Loading..." />
    </div>
  );
}
