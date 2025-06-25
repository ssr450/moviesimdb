'use client'
import React from 'react'
import { useEffect } from 'react';
export default function error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);    
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4'>
        <h1>Something went wrong.Please try again later.</h1>
        <button className='hover:text-purple-500' on onClick={()=> reset()}>Try Again</button>
    </div>
  )
}
